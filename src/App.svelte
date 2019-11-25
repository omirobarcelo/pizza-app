<script>
  import Header from "./components/Header.svelte";

  let activePage;
</script>

<div class="main-container">
  <Header on:activePage={evt => (activePage = evt.detail.page)} />
  <div class="content-container">
    {#if activePage}
      <svelte:component this={activePage} />
    {/if}
  </div>
</div>
