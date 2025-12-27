<script setup lang="ts">
import { events } from '@/constants'
import Card from './Card.vue'
</script>

<template>
  <Card>
    <div class="flex items-center justify-between mb-2">
      <h3 class="m-0 text-[16px] font-semibold text-slate-900">Upcoming Events</h3>
      <button class="bg-transparent border-none text-state-400 cursor-pointer p-1">
        <font-awesome-icon icon="fa-ellipsis-h" />
      </button>
    </div>
    <ul class="-mx-4">
      <li
        v-for="event in events"
        :key="event.id"
        class="flex items-center gap-2.5 py-2.5 border-b border-gray-200 text-sm last:border-b-0 last:pb-0 first:border-t"
      >
        <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-blue-600 text-sm ml-3" />
        <div class="flex items-center gap-1 flex-wrap">
          <span class="font-semibold text-slate-900">{{ event.title }}</span>
          <span class="text-slate-500">- {{ event.date }}</span>
        </div>
      </li>
    </ul>
  </Card>
</template>
