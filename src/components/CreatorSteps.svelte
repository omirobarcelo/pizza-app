<script>
  import { step } from "../stores/step.js";

  const stepTitle = {
    1: "Choose your pizza",
    2: "Choose your extras",
    3: "Tell us where to deliver"
  };
</script>

<style type="text/scss">
  .steps-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step-title {
    width: 250px;
    margin: 0;
  }

  @media (max-width: 736px) {
    .viewport-lg {
      display: none;
    }
  }

  @media (min-width: 737px) {
    .viewport-sm {
      display: none;
    }
  }
</style>

<div class="steps-container">
  <button
    type="button"
    class="btn btn-icon"
    title="Previous Step"
    aria-label="previous"
    on:click={() => step.prevStep()}>
    <clr-icon shape="arrow" dir="left" />
  </button>

  <!-- Steps, for big screens -->
  <ul class="clr-timeline clr-timeline-horizontal viewport-lg">
    <li class="clr-timeline-step">
      <clr-icon shape={$step === 1 ? 'dot-circle' : 'success-standard'} />
      <div class="clr-timeline-step-body">
        <span class="clr-timeline-step-title">{stepTitle[1]}</span>
      </div>
    </li>
    <li class="clr-timeline-step">
      <clr-icon
        shape={$step === 2 ? 'dot-circle' : $step < 2 ? 'circle' : 'success-standard'} />
      <div class="clr-timeline-step-body">
        <span class="clr-timeline-step-title">{stepTitle[2]}</span>
      </div>
    </li>
    <li class="clr-timeline-step">
      <clr-icon shape={$step === 3 ? 'dot-circle' : 'circle'} />
      <div class="clr-timeline-step-body">
        <span class="clr-timeline-step-title">{stepTitle[3]}</span>
      </div>
    </li>
  </ul>
  <!-- Current step title, for small screens -->
  <h3 class="step-title viewport-sm">{stepTitle[$step]}</h3>

  <button
    type="button"
    class="btn btn-icon"
    title="Next Step"
    aria-label="next"
    on:click={() => step.nextStep()}>
    <clr-icon shape="arrow" dir="right" />
  </button>
</div>
