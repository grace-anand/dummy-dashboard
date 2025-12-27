<script setup lang="ts">
import { messages } from '@/constants'
import Card from './Card.vue'
</script>

<template>
  <Card>
    <div class="flex items-center justify-between mb-2">
      <h3 class="m-0 font-semibold text-slate-900">Recent Messages</h3>
      <button class="bg-transparent border-none text-state-400 cursor-pointer p-1">
        <font-awesome-icon icon="fa-ellipsis-h" />
      </button>
    </div>
    <ul class="-mx-4">
      <li
        v-for="message in messages"
        :key="message.id"
        class="py-2.5 border-b border-gray-200 text-sm last:border-b-0 last:pb-0 first:border-t pl-3"
      >
        <span class="font-semibold text-slate-900 mr-1">{{ message.sender }}:</span>
        <span class="text-slate-500">"{{ message.preview }}"</span>
      </li>
    </ul>
  </Card>
</template>
