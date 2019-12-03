<script>
  import { onMount } from "svelte";

  export let type;
  export let name;
  export let placeholder = undefined;
  export let label = undefined;
  export let helperText = undefined;

  let input;
  let invalid = true;
  onMount(() => (invalid = !input.validity.valid));
</script>

<div class="clr-form-control">
  {#if label}
    <label for={name} class="clr-control-label">{label}</label>
  {/if}
  <div class="clr-control-container" class:clr-error={invalid}>
    <div class="clr-input-wrapper">
      <input
        bind:this={input}
        {type}
        {name}
        {placeholder}
        class="clr-input"
        on:input={() => (invalid = !input.validity.valid)} />
      <clr-icon class="clr-validate-icon" shape="exclamation-circle" />
    </div>
    {#if helperText}
      <span class="clr-subtext">{helperText}</span>
    {/if}
  </div>
</div>
