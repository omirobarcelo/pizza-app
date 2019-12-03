<script>
  import { onMount } from "svelte";

  export let name;
  export let placeholder = undefined;
  export let label = undefined;
  export let helperText = undefined;

  let textarea;
  let invalid = true;
  onMount(() => (invalid = !textarea.validity.valid));
</script>

<div class="clr-form-control">
  {#if label}
    <label for={name} class="clr-control-label">{label}</label>
  {/if}
  <div class="clr-control-container" class:clr-error={invalid}>
    <div class="clr-textarea-wrapper">
      <textarea
        bind:this={textarea}
        {name}
        {placeholder}
        class="clr-textarea"
        on:input={() => (invalid = !textarea.validity.valid)} />
      <clr-icon class="clr-validate-icon" shape="exclamation-circle" />
    </div>
    {#if helperText}
      <span class="clr-subtext">{helperText}</span>
    {/if}
  </div>
</div>
