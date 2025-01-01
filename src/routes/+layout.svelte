<script lang="ts">
  import { onMount } from 'svelte';
  import OgImage from '@/assets/og-image.png';
  import Actionbar from '@/components/actionbar/Actionbar.svelte';
  import '../app.css';
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import Background from '@/components/background/Background.svelte';
  import PopupNavigation from '@/components/popup-navigation/PopupNavigation.svelte';
  import { DARK_THEME, getTheme, onThemeChange, toggleTheme } from '@/models/Theme.model';
  import { wait } from '@chanzor/utils';

  let { children } = $props();

  let isMounted = $state(false);

  let showActionbar = $state(false);
  let showContent = $state(false);
  let startAnimate = $state(false);

  let scrollTop = $state(0);
  let showingPopupNavigation = $state(false);

  let themeKey = $state('dark');

  $effect(() => {
    if (!isMounted) return;
    if (showingPopupNavigation) {
      setTimeout(() => {
        window.addEventListener('click', onClickOutsidePopupNavigation);
      }, 100);
    } else {
      window.removeEventListener('click', onClickOutsidePopupNavigation);
    }
  });

  function onScroll() {
    scrollTop = window.scrollY;
  }
  function clickTheme() {
    themeKey = toggleTheme().key;
    onThemeChange();
  }
  function onClickOutsidePopupNavigation(event: MouseEvent) {
    if (!showingPopupNavigation) return;
    setTimeout(() => {
      const element = document.querySelector('.popup-navigation');

      if (element && event.target instanceof Node) {
        if (element.contains(event.target)) return;
      }

      showingPopupNavigation = false;
    }, 100);
  }

  onMount(async () => {
    isMounted = true;

    themeKey = getTheme().key;
    onThemeChange();

    window.addEventListener('scroll', onScroll);
    onScroll();

    await wait(0);
    showActionbar = true;
    showContent = true;

    await wait(50);
    startAnimate = true;

    if (!isMounted) return;
    if (showingPopupNavigation) {
      setTimeout(() => {
        window.addEventListener('click', onClickOutsidePopupNavigation);
      }, 100);
    } else {
      window.removeEventListener('click', onClickOutsidePopupNavigation);
    }
  });
  afterNavigate(async () => {
    await new Promise((r) => setTimeout(r, 400));
    showContent = true;
  });
  beforeNavigate(() => {
    showContent = false;
    showingPopupNavigation = false;
  });
</script>

<svelte:head>
  <meta name="twitter:title" content="Rory Xavier" />
  <meta name="twitter:image" content={OgImage} />
  <meta
    name="twitter:description"
    content="Hey there! My name's Rory and I'm a Blue Wolf currently hanging out in Singapore."
  />

  <meta name="title" property="og:title" content="Rory Xavier" />
  <meta name="type" property="og:type" content="website" />
  <meta name="image" property="og:image" content={OgImage} />
  <meta name="url" property="og:url" content="https://rorywolf.net" />
  <meta
    name="description"
    property="og:description"
    content="Hey there! My name's Rory and I'm a Blue Wolf currently hanging out in Singapore."
  />
</svelte:head>

<div class="app" data-theme={themeKey}>
  <Background darkMode={themeKey === DARK_THEME.key} />

  <Actionbar
    show={showActionbar}
    showShadow={scrollTop > 0}
    toggleMenu={() => (showingPopupNavigation = !showingPopupNavigation)}
  />

  <div class="app-body" data-show={showContent} data-start-animate={startAnimate}>
    {@render children()}
  </div>

  <PopupNavigation show={showingPopupNavigation} {themeKey} {clickTheme} />
</div>

<style lang="scss">
  .app {
    --actionbar-height: 4.5rem;

    min-height: 100dvh;

    .app-body {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      transition: all 0.4s ease;

      &[data-show='false'] {
        opacity: 0;
        transform: scale(0.9) translateY(4rem);
      }
      &[data-show='true'] {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
      &[data-start-animate='true'] {
        transform: translateY(0.2rem);
      }
    }

    --text-color: var(--text-color-a100);

    &[data-theme='light'] {
      --primary-color-extra-light: #eff2f7;
      --primary-color-lighter: #d1ddee;
      --primary-color-light: #dbeafe;
      --primary-color: #1e3a8a;
      --primary-color-dark: #122b6e;
      --primary-color-darker: #0d2053;

      --text-color-a5: hsla(0, 0%, 0%, 0.05);
      --text-color-a30: hsla(0, 0%, 0%, 0.3);
      --text-color-a50: hsla(0, 0%, 0%, 0.5);
      --text-color-a70: hsla(0, 0%, 0%, 0.7);
      --text-color-a90: hsla(0, 0%, 0%, 0.9);
      --text-color-a100: hsl(0, 0%, 0%);

      --background-color-a5: hsla(0, 0%, 100%, 0.05);
      --background-color-a50: hsla(0, 0%, 100%, 0.5);
      --background-color-a60: hsla(0, 0%, 100%, 0.6);
      --background-color-a70: hsla(0, 0%, 100%, 0.7);
      --background-color-a90: hsla(0, 0%, 100%, 0.9);
      --background-color-a100: hsla(0, 0%, 100%, 1);

      --background-color: hsl(240, 26%, 96%);
    }
    &[data-theme='dark'] {
      --primary-color-lighter: #303a47;
      --primary-color-light: #242f3d;
      --primary-color: #6a8be6;

      --primary-color-extra-light: #06172c;
      --primary-color-lighter: #112d50;
      --primary-color-light: #081b33;
      --primary-color: #3676c9;
      --primary-color-dark: #689fe7;
      --primary-color-darker: #a3c7f5;

      --text-color-a5: hsla(0, 0%, 100%, 0.05);
      --text-color-a30: hsla(0, 0%, 100%, 0.3);
      --text-color-a50: hsla(0, 0%, 100%, 0.5);
      --text-color-a70: hsla(0, 0%, 100%, 0.7);
      --text-color-a90: hsla(0, 0%, 100%, 0.9);
      --text-color-a100: hsl(0, 0%, 100%);

      --background-color-a5: hsla(0, 0%, 0%, 0.05);
      --background-color-a20: hsla(0, 0%, 0%, 0.2);
      --background-color-a50: hsla(0, 0%, 0%, 0.5);
      --background-color-a60: hsla(0, 0%, 0%, 0.6);
      --background-color-a70: hsla(0, 0%, 0%, 0.7);
      --background-color-a90: hsla(0, 0%, 0%, 0.9);
      --background-color-a100: hsla(0, 0%, 0%, 1);

      --background-color: hsl(240, 3%, 6%);
    }
  }
</style>
