<script lang="ts">
  import type { RouteModel } from '@/models/Route.model';

  export let route: RouteModel;
  export let selected: boolean;
</script>

<a class="popup-navigation-nav" href={route.path} data-selected={selected}>{route.title}</a>

<style lang="scss">
  .popup-navigation-nav {
    font-weight: 600;
    padding: 0.6rem 0.8rem;
    border-radius: 0.4rem;
    text-align: start;
    border: 1px solid transparent;
    color: var(--primary-color-darker);

    &[data-selected='true'] {
      border: 1px solid var(--primary-color-light);
      background-color: var(--primary-color-lighter);
      color: var(--primary-color-darker);
      cursor: default;
    }
  }
</style>
