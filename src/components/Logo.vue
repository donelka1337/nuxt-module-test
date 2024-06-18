<template>
  <div class="logo">
    <UiSvgIcon
      class="logo__image"
      name="logo"
    />
    <span class="logo__text">Мобильные осмотры</span>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;

  &__image {
    margin-right: 16px;
    font-size: 40px;
  }

  &__text {
    color: inherit;
    font-size: 20px;
    font-weight: 500;
  }
}

@media (max-width: 640px) {
  .logo {
    &__image {
      margin-right: 16px;
      font-size: 32px;
    }

    &__text {
      font-size: 14px;
    }
  }
}
</style>
