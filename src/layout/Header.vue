<script setup lang="ts">
const emit = defineEmits<{
  toggleSidebar: []
}>()
</script>

<template>
  <header
    class="flex items-center justify-between px-4 py-3 bg-slate-900 lg:bg-transparent lg:border-b lg:border-slate-300"
  >
    <div class="flex items-center gap-2.5 text-slate-100 lg:invisible">
      <button
        class="bg-transparent border-none text-slate-100 text-lg cursor-pointer p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
        @click="emit('toggleSidebar')"
        aria-label="Toggle menu"
      >
        <font-awesome-icon :icon="['fas', 'house']" />
      </button>
      <span class="text-[20px] font-bold">Dashboard</span>
    </div>
    <div class="flex items-center gap-4 max-lg:flex-row-reverse">
      <font-awesome-icon
        :icon="['fas', 'search']"
        class="text-slate-400 cursor-pointer max-lg:hidden!"
      />
      <font-awesome-icon
        :icon="['fas', 'bell']"
        class="text-white lg:text-slate-400 cursor-pointer"
      />

      <div class="flex items-center gap-1 lg:pr-20">
        <img
          class="object-cover w-9 h-9 rounded-full overflow-hidden border-2 border-white/20"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
          alt="User avatar"
        />
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="text-white lg:text-slate-400 cursor-pointer size-3!"
        />
      </div>
    </div>
  </header>
</template>
