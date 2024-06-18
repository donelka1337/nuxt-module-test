<template>
  <a href="#" class="object-code-link" @click.prevent="$emit('click')">
    {{ code }}
  </a>
</template>

<script lang="ts" setup>
defineProps({
  code: { type: [String, Number], default: '' },
});
defineEmits(['click']);
</script>

<style scoped lang="scss">
.object-code-link {
  color: $link-secondary;
  text-decoration: none;
}
</style>
