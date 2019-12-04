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

  @media (max-width: 576px) {
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
  <div class="header-area" style="background-color: blue;" />
  <div class="creator-container">
    <div class="sidebar" style="background-color: red;" />
    <div class="main-area" style="background-color: yellow;" />
  </div>
</div>
