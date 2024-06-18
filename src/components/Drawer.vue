<template>
  <el-drawer
    :model-value="modelValue"
    direction="rtl"
    v-bind="$attrs"
    class="drawer"
    :size="isMobile ? '100%' : size"
    @update:model-value="(e) => $emit('update:modelValue', e)"
  >
    <template #header>
      <slot name="header">
        <span class="drawer__title">{{ title }}</span>
      </slot>
    </template>
    <template #default>
      <slot name="default" />
    </template>
    <template #footer>
      <div class="drawer__footer">
        <slot name="footer" />
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>

defineProps({
  modelValue: { type: Boolean, default: false },
  size: { type: [Number, String], default: '30%' },
  title: { type: String, default: '' },
});
defineEmits(['update:modelValue']);

const { isMobile } = useDevice();

</script>

<style lang="scss">
.drawer {
  .el-drawer__header {
    padding-top: 24px;
    padding-bottom: 4px;
    margin-bottom: 0;

    .el-drawer__close-btn {
      color: $icon-primary;
      font-size: 16px;
      padding: 4px;
    }
  }

  .el-drawer__footer {
    padding: 16px 24px;
    border-top: 1px solid $border-standard;
  }

  &__title {
    color: $text-primary;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
  }

  &__footer {
    text-align: left;
    padding-left: 12px;
  }
}

</style>
