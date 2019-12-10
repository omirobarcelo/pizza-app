<script>
  import ClrInput from "../components/ClrInput.svelte";
  import ClrTextarea from "../components/ClrTextarea.svelte";
  import ClrAlerts from "../components/ClrAlerts.svelte";
  import { buildForm } from "svelte-html5-validators";

  let windowInnerWidth;

  const { form, applyValidators } = buildForm({
    name: ["required", "pattern:^[A-Z][a-zA-Z\\s]*$"],
    email: ["required", "email"],
    text: ["required"]
  });

  let alerts = [];

  function submitForm() {
    console.log($form);
    alerts = [...alerts, "E-mail sent successfully!"];
    this.reset();
    form.clear();
  }
</script>

<svelte:window bind:innerWidth={windowInnerWidth} />

<div class="content-area">
  <div class="clr-row">
    <div class="clr-col-12 clr-col-sm-7 clr-offset-sm-2">
      <h2>Contact Us</h2>
      <p>
        Got a question or recommendation? We'd love to hear from you! Send us a
        message and we'll respond as soon as possible.
      </p>
      <form
        class="clr-form"
        class:clr-form-horizontal={windowInnerWidth > 576}
        use:applyValidators
        on:submit|preventDefault={submitForm}>
        <ClrInput
          type="text"
          name="name"
          placeholder="Your name"
          label="Name" />
        <ClrInput
          type="text"
          name="email"
          placeholder="Your e-mail"
          label="E-mail" />
        <ClrTextarea
          name="text"
          placeholder="Write your message here"
          label="Message" />
        <button class="btn">Send message</button>
      </form>
    </div>
  </div>

  {#if alerts.length > 0}
    <div class="clr-row">
      <div class="clr-col-12 clr-col-sm-7 clr-offset-sm-2">
        <ClrAlerts type="success" bind:alerts />
      </div>
    </div>
  {/if}

</div>
