<script setup lang="ts">
import Sidebar from './sidebar.vue'
import Header from './Header.vue'
</script>

<template>
  <main class="flex w-full min-h-screen bg-slate-100">
    <Sidebar />
    <div class="flex-1">
      <Header />
      <div class="p-3 lg:p-6">
        <slot />
      </div>
    </div>
  </main>
</template>
