/**
 * @returns {Promise<{ id: string; name: string; description: string; ingredients: string[]; price: number }[]>}
 */
export async function getPizzaTypes() {
  return fetch(
    "https://my-json-server.typicode.com/omirobarcelo/pizza-app/pizzas"
  ).then(response => response.json());
}

/**
 * @returns {Promise<{ id: string; name: string; price: number }[]>}
 */
export async function getExtras() {
  return fetch(
    "https://my-json-server.typicode.com/omirobarcelo/pizza-app/extras"
  ).then(response => response.json());
}
