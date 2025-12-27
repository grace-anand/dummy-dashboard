<script setup lang="ts">
import Card from '../Card.vue'

defineProps<{
  label: string
  value: string
  percentChange?: number
  borderColor: string
  customText?: string
}>()
</script>

<template>
  <Card
    class="h-fit lg:max-w-56 relative overflow-hidden p-0! flex-1 basis-[48%] md:basis-auto mt-0!"
  >
    <div class="p-5 max-lg:p-3">
      <h3 class="m-0 mb-2 text-sm font-semibold text-slate-500">{{ label }}</h3>
      <div class="flex gap-2" :class="{ 'justify-between': !!customText }">
        <span class="text-xl lg:text-3xl font-bold text-slate-900 min-w-24">{{ value }}</span>
        <span class="text-sm font-medium flex items-center gap-1" :style="{ color: borderColor }">
          <font-awesome-icon
            :icon="[
              'fas',
              customText ? 'info-circle' : percentChange > 0 ? 'caret-up' : 'caret-down',
            ]"
          />

          <template v-if="customText">{{ customText }}</template>
          <template v-else> {{ percentChange }}% </template>
        </span>
      </div>
    </div>
    <div class="absolute bottom-0 w-full h-1.5" :style="{ backgroundColor: borderColor }"></div>
  </Card>
</template>
