<script lang="ts"></script>

<div class="app-page">
  <slot></slot>
</div>

<style lang="scss">
  .app-page {
    --app-page-min-height: calc(100dvh - var(--actionbar-height) - 5px);

    width: 100%;
    min-height: var(--app-page-min-height);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
</style>
