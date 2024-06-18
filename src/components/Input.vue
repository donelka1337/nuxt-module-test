<template>
  <el-input-number
    v-if="type === 'number' && showControls"
    controls-position="right"
    v-bind="$attrs"
    class="input"
    @beforeinput="validateInput"
  />
  <el-input
    v-else
    :type="type"
    v-bind="$attrs"
    class="input"
    @beforeinput="validateInput"
  />
</template>

<script lang="ts" setup>

const props = defineProps({
  type: { type: String, default: 'text' },
  showControls: { type: Boolean, default: false },
  regex: { type: RegExp || null, default: null },
});

const validateInput = (event: InputEvent) => {
  if (props.regex && event.data && !props.regex.test(event.data)) return event.preventDefault();
};

</script>

<style lang="scss" scoped>

.input {
  min-height: 36px;
}

:deep(.el-textarea__inner) {
  min-height: 36px !important;
}

  :deep(.el-input.is-disabled .el-input__inner) {
    color: $text-inactive;
  }

  :deep(.el-textarea.is-disabled .el-textarea__inner) {
    color: $text-inactive;
  }
</style>
