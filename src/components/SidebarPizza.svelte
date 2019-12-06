<script>
  import { getPizzaTypes } from "../services/pizza.service.js";
  import { pizza } from "../stores/pizza.js";

  const pizzaTypes = getPizzaTypes().then(types => {
    if (!$pizza.type) {
      pizza.selectPizza(types[0]);
    }
    return types;
  });
</script>

<style type="text/scss">
  .container {
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    overflow: auto;
  }

  .btn-pizza {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    text-align: start;
    text-indent: 14px;
    font-size: medium;
    font-weight: bold;

    &:hover {
      background-color: gray;
      color: white;
    }
  }
</style>

<div class="container">
  {#await pizzaTypes}
    <span class="spinner spinner-inline">Loading...</span>
    <span>Loading...</span>
  {:then types}
    {#each types as type}
      <div
        class="btn-pizza"
        role="button"
        on:click={() => pizza.selectPizza(type)}>
        {type.name}
      </div>
    {/each}
  {:catch error}
    <span style="color: red">Error loading the pizzas</span>
  {/await}
</div>
