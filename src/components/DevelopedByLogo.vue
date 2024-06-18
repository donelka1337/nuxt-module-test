<template>
  <span class="developed-logo">Разработано в&ensp;
    <a :href="$constants.DEVELOPED_URL" target="_blank" class="logo-link">
      <UiSvgIcon
        name="logo-cubit"
        width="68px"
        height="20px"
      />
    </a>
  </span>
</template>

<style scoped lang="scss">
.logo-link,
.developed-logo {
  display: inline-flex;
  align-items: center;
}
</style>
