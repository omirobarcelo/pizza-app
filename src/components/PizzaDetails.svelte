<script>
  import { pizza, price } from "../stores/pizza.js";

  export let sidebar = false;
</script>

<style>
  .sidebar {
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    overflow: auto;
    padding: 20px 14px;
  }

  .pizza-type {
    display: flex;
    font-size: medium;
  }

  .extra-item {
    display: flex;
    margin-left: 12px;
  }

  .total-price {
    display: flex;
    font-size: large;
    font-weight: bold;
  }
</style>

<div class:sidebar>
  {#if $pizza.type}
    <div class="pizza-type">
      <span style="font-weight: bold;">{$pizza.type.name}</span>
      <span style="margin-left: auto;">{$pizza.type.price}€</span>
    </div>
    <div>
      <i>{$pizza.type.description}</i>
    </div>
    <hr />
    <div><b>Ingredients:</b> {$pizza.type.ingredients.join(', ')}</div>
    <div>
      <b>Extras:</b>
      {#each $pizza.extras as extra}
        <div class="extra-item">
          <span>{extra.name}</span>
          <span style="margin-left: auto;">{extra.quantity} x {extra.price}€</span>
        </div>
      {/each}
    </div>
    <hr />
    <div class="total-price">
      <span>Total</span>
      <span style="margin-left: auto;">{$price}€</span>
    </div>
  {/if}
</div>
