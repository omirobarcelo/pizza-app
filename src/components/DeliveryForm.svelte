<script>
  import ClrInput from "./ClrInput.svelte";
  import ClrTextarea from "./ClrTextarea.svelte";
  import ClrAlerts from "./ClrAlerts.svelte";
  import { buildForm } from "../pages/svelte-html5-validators.js";

  let windowInnerWidth;

  const { form, applyValidators } = buildForm({
    name: ["required", "pattern:^[A-Z][a-zA-Z\\s]*$"],
    street: ["required"],
    pc: ["required"],
    city: ["required"],
    tel: ["tel"],
    email: ["email"],
    observations: []
  });

  let alerts = [];

  function submitForm() {
    console.log($form);
    alerts = [...alerts, "Order received!"];
    this.reset();
    form.clear();
  }
</script>

<svelte:window bind:innerWidth={windowInnerWidth} />

<h3>Delivery Details</h3>
<form
  class="clr-form"
  class:clr-form-horizontal={windowInnerWidth > 576}
  use:applyValidators
  on:submit|preventDefault={submitForm}>
  <ClrInput type="text" name="name" placeholder="Your name" label="Name" helperText="Write your full name, please" />
  <label class="clr-control-label">Address</label>
  <ClrInput type="text" name="street" placeholder="Street (name, num., door)" label="Street" hostStyle="margin: 0;" />
  <ClrInput type="number" name="pc" placeholder="Postal Code" label="Postal code" hostStyle="margin: 0;" />
  <ClrInput type="text" name="city" placeholder="City" label="City" hostStyle="margin: 0;" />
  <ClrInput type="text" name="tel" placeholder="Your telephone" label="Tel. number" helperText="Write your e-mail or telephone so we can contact you" />
  <ClrInput type="text" name="email" placeholder="Your e-mail" label="E-mail" helperText="Write your e-mail or telephone so we can contact you" />
  <ClrTextarea
    name="observations"
    placeholder="Write any observations you may have"
    label="Observations" />
  <button class="btn">Confirm order</button>
</form>

{#if alerts.length > 0}
  <ClrAlerts type="success" bind:alerts />
{/if}
