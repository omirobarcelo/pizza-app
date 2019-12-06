import { derived, writable } from "svelte/store";

function initPizza() {
  const { subscribe, update } = writable({ type: undefined, extras: [] });

  return {
    subscribe,
    selectPizza: type => update(pizza => ({ ...pizza, type, extras: [] })),
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
      }),
    removeExtra: extra =>
      update(pizza => {
        const extraIdx = pizza.extras.findIndex(ex => ex.id === extra.id);
        if (extraIdx >= 0) {
          if (pizza.extras[extraIdx].quantity > 1) {
            pizza.extras[extraIdx].quantity -= 1;
          } else {
            pizza.extras.splice(extraIdx, 1);
          }
        }
        return {
          ...pizza,
          extras: [...pizza.extras]
        };
      })
  };
}

export const quantity = (pizza, extraId) => {
  const extra = pizza.extras.find(ex => ex.id === extraId);
  return extra ? extra.quantity : 0;
};

export const pizza = initPizza();

export const price = derived(
  pizza,
  $pizza =>
    ($pizza.type ? $pizza.type.price : 0) +
    $pizza.extras.reduce((acc, extra) => acc + extra.price * extra.quantity, 0)
);
