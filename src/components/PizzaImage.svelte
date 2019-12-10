<script>
  import { pizza } from "../stores/pizza.js";
</script>

<style type="text/scss">
  img {
    margin: 10px 0;
    max-width: 100%;
  }

  .extra {
    position: absolute;
    left: 0;
  }
</style>

<div style="position: relative;">
  {#if $pizza.type}
    <img
      alt={$pizza.name}
      src={`https://raw.githubusercontent.com/omirobarcelo/pizza-app/master/assets/pizzas/${$pizza.type.id}.png`} />
  {/if}
  {#each $pizza.extras as extra}
    <img
      class="extra"
      alt={extra.name}
      src={`https://raw.githubusercontent.com/omirobarcelo/pizza-app/master/assets/extras/${extra.id}_${extra.quantity > 3 ? 3 : extra.quantity}.png`} />
  {/each}
</div>
