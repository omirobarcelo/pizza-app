export async function getPizzaTypes() {
  return fetch(
    "https://my-json-server.typicode.com/omirobarcelo/pizza-app/pizzas"
  ).then(response => response.json());
}
