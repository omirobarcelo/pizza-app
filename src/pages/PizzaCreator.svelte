<script>
  import CreatorSteps from "../components/CreatorSteps.svelte";
  import SidebarPizza from "../components/SidebarPizza.svelte";
  import SidebarExtras from "../components/SidebarExtras.svelte";
  import PizzaDetails from "../components/PizzaDetails.svelte";
  import { step } from "../stores/step.js";

  const sidebarComponents = {
    1: SidebarPizza,
    2: SidebarExtras,
    3: PizzaDetails
  };
</script>

<style type="text/scss">
  $header-height: 96px;

  .header-area {
    width: 100%;
    height: $header-height;
  }

  .creator-container {
    display: flex;
    height: calc(100% - #{$header-height});
  }

  .sidebar {
    flex: 0 276px;
  }

  .main-area {
    flex: 1;
    border-top: 1px solid #e0e0e0;
  }

  @media (max-width: 736px) {
    .creator-container {
      flex-direction: column;
    }

    .sidebar {
      flex: 1;
      order: 1;
    }
  }
</style>

<div class="content-area" style="padding: 0;">
  <div class="header-area">
    <CreatorSteps />
  </div>
  <div class="creator-container">
    <div class="sidebar">
      <svelte:component this={sidebarComponents[$step]} sidebar={true} />
    </div>
    <div class="main-area">
      <PizzaDetails />
    </div>
  </div>
</div>
