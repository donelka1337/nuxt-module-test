<template>
  <el-button
    v-bind="$attrs"
    class="button"
    :class="[`button_size_${size}`, { 'button-icon': isButtonIcon }]"
  >
    <slot />
  </el-button>
</template>
<script lang="ts" setup>

type ISize = 'small' | 'large' | 'default';

defineProps({
  size: {
    type: String as PropType<ISize>,
    default: 'default',
  },
  isButtonIcon: { type: Boolean, default: false },
});

</script>
<style lang="scss" scoped>
.button {
  font-size: 14px;
  font-weight: 400;

  &_size_small {
    height: 32px;
  }

  &_size_default {
    height: 36px;
  }

  &_size_large {
    height: 40px;
  }
}

.button.button-icon {
  border: none;
  background-color: transparent;
  padding: 0;
  height: fit-content;
}

</style>

<style lang="scss">
.el-button {
  outline: none !important;

  & > span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &.is-disabled,
  &.is-disabled:hover {
    background-color: #EBEDF0;
    border-color: #EBEDF0;
    color: #637173;
  }

  &--primary {
    background-color: #EB4C34;
    &:hover {
      background-color: #C72F18;
      border-color: #C72F18;
    }

    &:active,
    &:focus {
      background-color: #EB4C34;
      border-color: #EB4C34;
    }
  }

  &:not(.el-button--primary):not(.is-disabled) {
    border-color: #BECCD4;
    color: #272A2E;

    &:hover {
      background-color: #fff;
      border-color: #637375;
    }

    &:active, &:focus {
      background-color: #fff;
    }
  }
}

.button svg {
  width: 16px;
  height: 16px;
}
</style>
