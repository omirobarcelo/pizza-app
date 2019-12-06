<script>
  import { getExtras } from "../services/pizza.service.js";
  import { pizza, quantity } from "../stores/pizza.js";

  const extras$ = getExtras();
</script>

<style type="text/scss">
  .container {
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    overflow: auto;
  }

  .extra-area {
    display: flex;
    padding: 20px 14px;
    font-size: medium;
    font-weight: bold;
  }

  .extra-quantity {
    display: inline-block;
    width: 24px;
    font-size: large;
    vertical-align: middle;
    text-align: center;
  }
</style>

<div class="container">
  {#await extras$}
    <span class="spinner spinner-inline">Loading...</span>
    <span>Loading...</span>
  {:then extras}
    {#each extras as extra (extra.id)}
      <div class="extra-area">
        <span>{extra.name}</span>
        <div style="margin-left: auto;">
          <clr-icon
            shape="minus-circle"
            title="Remove extra"
            size="24"
            class="is-solid"
            role="button"
            on:click={() => pizza.removeExtra(extra)} />
          <span class="extra-quantity">{quantity($pizza, extra.id)}</span>
          <clr-icon
            shape="plus-circle"
            title="Add extra"
            size="24"
            class="is-solid"
            role="button"
            on:click={() => pizza.addExtra(extra)} />
        </div>
      </div>
    {/each}
  {:catch error}
    <span style="color: red">Error loading the extras</span>
  {/await}
</div>
