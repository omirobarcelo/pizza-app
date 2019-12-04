import { derived, writable } from "svelte/store";

function initPizza() {
  const { subscribe, update } = writable({ type: undefined, extras: [] });

  return {
    subscribe,
    selectPizza: type => update(pizza => ({ ...pizza, type })),
    addExtra: extra =>
      update(pizza => {
        const addedExtra = pizza.extras.find(ex => ex.id === extra.id);
        if (addedExtra) {
          addedExtra.quantity += 1;
        }
        return {
          ...pizza,
          extras: addedExtra
            ? [...pizza.extras]
            : [...pizza.extras, { ...extra, quantity: 1 }]
        };
      })
  };
}

export const pizza = initPizza();

export const price = derived(
  pizza,
  $pizza =>
    ($pizza.type ? $pizza.type.price : 0) +
    $pizza.extras.reduce((acc, extra) => acc + extra.price * extra.quantity, 0)
);
