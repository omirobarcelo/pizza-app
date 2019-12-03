<script>
  export let type = "info";
  export let alerts = [];

  $: shape =
    type === "success"
      ? "check-circle"
      : type === "info"
      ? "info-circle"
      : type === "warning"
      ? "exclamation-triangle"
      : "exclamation-circle";
</script>

<div class="alert alert-{type}" role="alert">
  <div class="alert-items">
    {#each alerts as alert}
      <div class="alert-item static">
        <div class="alert-icon-wrapper">
          <clr-icon class="alert-icon" {shape} />
        </div>
        <span class="alert-text">{alert}</span>
      </div>
    {/each}
  </div>
  <button
    type="button"
    class="close"
    aria-label="Close"
    on:click={() => (alerts = [])}>
    <clr-icon aria-hidden="true" shape="close" />
  </button>
</div>
