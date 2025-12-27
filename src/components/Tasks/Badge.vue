<script setup lang="ts">
defineProps<{
  status: 'In Progress' | 'Completed' | 'Pending'
}>()

const statusClasses = {
  'In Progress': 'bg-emerald-600',
  Completed: 'bg-green-500',
  Pending: 'bg-amber-500',
}
</script>

<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-xs text-xs font-semibold text-white min-w-23"
    :class="statusClasses[status]"
  >
    {{ status }}
  </span>
</template>
