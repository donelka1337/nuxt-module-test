<template>
  <el-date-picker
    :model-value="modelValue"
    v-bind="$attrs"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :format="format"
    :shortcuts="isShowShortcuts ? shortcuts : []"
    :first-day-of-week="1"
    :picker-options="{ firstDayOfWeek: 1 }"
    @update:model-value="(e) => $emit('update:modelValue', e)"
  />
</template>

<script lang="ts" setup>

defineProps({
  modelValue: { type: [Date, Number, String, Array] as PropType<Date | number | string | [any, any]>, default: '' },
  rangeSeparator: { type: String, default: 'по' },
  startPlaceholder: { type: String, default: 'Дата начала' },
  endPlaceholder: { type: String, default: 'Дата окончания' },
  format: { type: String, default: 'DD.MM.YYYY' },
  isShowShortcuts: { type: Boolean, default: false },
});
defineEmits(['update:modelValue']);

const MILLISECONDS_IN_DAY = 3600 * 1000 * 24;
const shortcuts = [
  {
    text: 'За сегодня',
    value: () => {
      const today = new Date();
      return [today, today];
    },
  },
  {
    text: 'За неделю',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - MILLISECONDS_IN_DAY * 7);
      return [start, end];
    },
  },
  {
    text: 'За 30 дней',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - MILLISECONDS_IN_DAY * 30);
      return [start, end];
    },
  },
  {
    text: 'За полгода',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - MILLISECONDS_IN_DAY * 180);
      return [start, end];
    },
  },
  {
    text: 'За год',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - MILLISECONDS_IN_DAY * 365);
      return [start, end];
    },
  },
];

</script>
