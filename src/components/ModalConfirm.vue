<template>
  <UiModal
    :model-value="show"
    :title="title"
    modal-class="modal"
    width="440"
    class="confirm"
    @close="close"
    @update:model-value="(e) => $emit('update:modelValue', e)"
  >
    <div v-if="description" class="confirm__description" v-html="description" />
    <div class="confirm__buttons">
      <UiButton type="primary" @click="agree">{{ agreeButtonLabel }}</UiButton>
      <UiButton @click="cancel">{{ cancelButtonLabel }}</UiButton>
    </div>
  </UiModal>
</template>

<script setup lang="ts">

const show = ref(false);
const title = ref('Вы уверены?');
const description = ref('');
const localResolve = ref<any>(null);
const agreeButtonLabel = ref('ОК');
const cancelButtonLabel = ref('Отменить');
defineEmits(['update:modelValue']);

const close = () => {
  show.value = false;
};

const open = (params: { title: string, description?: string, agreeButtonLabel?: string, cancelButtonLabel?: string }) => {
  title.value = params.title;
  description.value = params.description || '';
  if (params.agreeButtonLabel) agreeButtonLabel.value = params.agreeButtonLabel;
  if (params.cancelButtonLabel) cancelButtonLabel.value = params.cancelButtonLabel;
  show.value = true;

  return new Promise((resolve) => {
    localResolve.value = resolve;
  });
};

const agree = () => {
  localResolve.value(true);
  close();
};

const cancel = () => {
  localResolve.value(false);
  close();
};

defineExpose({
  open,
  close,
});

</script>

<style scoped lang="scss">

.confirm {

  &__description {
    margin-bottom: 24px;

    :deep(.text-accent) {
      color: $text-primary;
      font-weight: 500;
    }
  }
}

</style>
