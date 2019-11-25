<script>
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import Contact from "../pages/Contact.svelte";
  import PageNotFound from "../pages/PageNotFound.svelte";
  import PizzaCreator from "../pages/PizzaCreator.svelte";

  const dispatch = createEventDispatcher();

  const routes = [
    { route: "", page: PizzaCreator },
    { route: "#creator", page: PizzaCreator },
    { route: "#contact", page: Contact }
  ];
  let selectedRoute = routes[0];

  onMount(() => dispatch("activePage", { page: PizzaCreator }));

  const pageSelector = () => {
    selectedRoute = routes.find(route => route.route === window.location.hash);
    dispatch("activePage", {
      page: selectedRoute ? selectedRoute.page : PageNotFound
    });
  };
  window.addEventListener("hashchange", pageSelector);

  onDestroy(() => window.removeEventListener("hashchange", pageSelector));
</script>

<header class="header header-6">
  <div class="branding">
    <a href="./#creator" class="nav-link">
      <img
        src="favicon.png"
        alt="Pizza App icon"
        width="36"
        height="36"
        style="margin-left: 4px;" />
      <span class="title">Shoguneko's Pizza</span>
    </a>
  </div>
  <div class="header-nav">
    <a
      href="./#creator"
      class="nav-link nav-text"
      class:active={selectedRoute && (selectedRoute.route === '' || selectedRoute.route === '#creator')}>
      Pizza Creator
    </a>
    <a
      href="./#contact"
      class="nav-link nav-text"
      class:active={selectedRoute && selectedRoute.route === '#contact'}>
      Contact
    </a>
  </div>
</header>
