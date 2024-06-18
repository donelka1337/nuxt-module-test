<template>
  <client-only>
    <el-dialog
      :model-value="modelValue"
      v-bind="$attrs"
      :fullscreen="isMobile"
      @update:model-value="(e) => $emit('update:modelValue', e)"
    >
      <template #header>
        <slot name="header" />
      </template>
      <slot />

      <template v-if="hasSlot('footer')" #footer>
        <slot name="footer" />
      </template>
    </el-dialog>
  </client-only>
</template>

<script lang="ts" setup>

defineProps({
  modelValue: { type: Boolean, default: false },
});
defineEmits(['update:modelValue']);

const { isMobile } = useDevice();

const slots = useSlots();
const hasSlot = (name: string) => {
  return !!slots[name];
};

</script>

<style lang="scss">
.modal {
  .el-dialog.el-dialog.is-fullscreen {
    border-radius: 0 !important;

    .el-dialog__footer {
      .modal__button {
        margin-left: 0 !important;

        &:first-of-type {
          margin-bottom: 10px;
        }
      }
    }
  }
}
.el-dialog {
  border-radius: 6px !important;

  &__header {
    padding: 32px 32px 24px !important;
    margin-right: 0 !important;
  }

  &__body {
    padding: 0 32px 32px 32px !important;
  }

  &__footer {
    text-align: start !important;
    padding: 20px 32px !important;
    border-top: 1px solid $border-standard;
  }

  &__title {
    font-size: 20px !important;
    font-weight: 500 !important;
    color: $text-primary !important;
  }

  &__headerbtn {
    width: 32px;
    height: 32px;
    top: 8px;
    right: 8px;

    .el-dialog__close {
      color: $text-primary;
    }
  }

  .modal-form-items {

    .el-form-item:last-of-type {
      margin-bottom: 0 !important;
    }
  }
}

@media (max-width: 640px) {
  .el-dialog {
    &__header {
      padding: 24px 16px !important;
    }

    &__body {
      padding: 0 16px 20px 16px !important;
    }

    &__footer {
      border-top: none;
      padding: 0 16px 16px !important;
    }
  }
}
</style>
