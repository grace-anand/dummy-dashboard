<script setup>
import Highlights from '@/components/Highlights/index.vue'
import Chart from '@/components/Chart.vue'
import Tasks from '@/components/Tasks/index.vue'
import Messages from '@/components/Messages.vue'
import Events from '@/components/Events.vue'
</script>

<template>
  <Highlights />
  <Chart />
  <div class="flex max-lg:flex-col">
    <div class="lg:w-3/4 lg:pr-2">
      <Tasks />
    </div>
    <div class="lg:w-1/4 lg:pl-2">
      <Messages />
      <Events />
    </div>
  </div>
</template>
