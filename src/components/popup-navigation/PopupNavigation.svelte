<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import type { ThemeModel } from '@/models/Theme.model';
  import PopupNavigationTheme from './PopupNavigation-Theme.svelte';
  import PopupNavigationNav from './PopupNavigation-Nav.svelte';
  import {
    ABOUT_ROUTE,
    ART_ROUTE,
    HOME_ROUTE,
    PROJECT_ROUTE,
    type RouteModel,
  } from '@/models/Route.model.js';

  export let show: boolean;
  export let themeKey: string;
  export let clickTheme: (theme: ThemeModel) => void;

  const navs: RouteModel[] = (() => {
    const routes = [HOME_ROUTE];

    if (!ABOUT_ROUTE.isDisabled) routes.push(ABOUT_ROUTE);
    if (!PROJECT_ROUTE.isDisabled) routes.push(PROJECT_ROUTE);
    if (!ART_ROUTE.isDisabled) routes.push(ART_ROUTE);

    return routes;
  })();

  let pathname = '';

  async function resetPathname() {
    const paths = window.location.pathname.split('/').filter((str) => str.length > 0);
    pathname = `/${paths[0] ?? ''}`;
  }

  onMount(() => {
    resetPathname();
  });
  afterNavigate(() => {
    resetPathname();
  });
</script>

<div class="popup-navigation" data-show={show}>
  <div class="popup-navigation-navs">
    {#each navs as nav}
      <PopupNavigationNav route={nav} selected={pathname === nav.path} />
    {/each}
  </div>
  <PopupNavigationTheme {themeKey} {clickTheme} />
</div>

<style lang="scss">
  .popup-navigation {
    --margin: 1rem;

    position: fixed;
    top: calc(var(--actionbar-height) + calc(var(--margin) * 0.5));
    left: var(--margin);

    width: 12rem;
    max-width: calc(100% - var(--margin) - var(--margin));
    padding: 0.6rem;
    gap: 1rem;

    border-radius: 0.5rem;
    box-shadow: 0.1rem 0.2rem 1rem rgba(0, 0, 0, 0.5);
    border: 1px solid var(--text-color-a5);

    background-color: var(--background-color);

    display: flex;
    flex-direction: column;

    transition: 200ms ease;
    transition-property: transform, opacity;

    .popup-navigation-navs {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: stretch;
      flex-grow: 1;
      gap: 0.1rem;
      transition: all 400ms ease;
      z-index: 1;

      @media (min-width: 700px) {
        display: none;
      }
    }

    &[data-show='false'] {
      transform: translateX(-35%) translateY(calc(-50% - calc(var(--actionbar-height) / 2)))
        scale(0.1);

      opacity: 0;
    }
    &[data-show='true'] {
      opacity: 1;
    }
  }
</style>
