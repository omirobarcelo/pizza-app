<script>
  import CreatorSteps from '../components/CreatorSteps.svelte';
  import SidebarPizza from '../components/SidebarPizza.svelte';
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
      <SidebarPizza />
    </div>
    <div class="main-area" style="background-color: yellow;" />
  </div>
</div>
