<script setup lang="ts">
import Highlight from './Highlight.vue'

const data = [
  {
    label: 'Total Sales',
    value: '$24,500',
    percentChange: 12,
    borderColor: '#22C55E',
  },
  {
    label: 'New Users',
    value: '1,230',
    percentChange: 8,
    borderColor: '#3B82F6',
  },
  {
    label: 'Tickets',
    value: '78',
    customText: 'Open',
    borderColor: '#F59E0B',
  },
  {
    label: 'Bounce Rate',
    value: '42.1%',
    percentChange: -3,
    borderColor: '#EF4444',
  },
]
</script>

<template>
  <div class="flex gap-2 flex-wrap h-fit">
    <Highlight v-for="item in data" v-bind="item" />
  </div>
</template>
