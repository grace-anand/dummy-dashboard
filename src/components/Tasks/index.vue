<script setup lang="ts">
import { ref, computed } from 'vue'
import Badge from './Badge.vue'
import Card from '../Card.vue'
import { tasks } from '@/constants'

const searchQuery = ref('')
const currentPage = ref(1)
const ITEMS_PER_PAGE = 4

const filteredTasks = computed(() => {
  if (!searchQuery.value) return tasks
  return tasks.filter((task) => task.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE
  return filteredTasks.value.slice(start, start + ITEMS_PER_PAGE)
})

const totalPages = computed(() => Math.ceil(filteredTasks.value.length / ITEMS_PER_PAGE))

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<template>
  <Card class="py-0">
    <div class="-mx-4">
      <div
        class="flex items-center gap-4 px-5 py-4 border-b border-gray-200 max-md:flex-wrap justify-between"
      >
        <button
          class="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white border-none rounded-sm text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-blue-700"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
          Add Task
        </button>
        <div class="relative flex-1 max-w-sm max-md:max-w-none max-md:order-2 max-md:w-full">
          <font-awesome-icon
            :icon="['fas', 'search']"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-state-400 text-sm"
          />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="w-full py-2 pl-10 pr-3 border border-gray-200 rounded-lg text-sm outline-none transition-colors duration-200 focus:border-blue-600 placeholder:text-state-400"
          />
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="text-left px-5 py-3 bg-gray-100 text-[13px] font-semibold text-slate-500 border-b border-gray-200"
              >
                Task Name
              </th>
              <th
                class="text-left px-5 py-3 bg-gray-100 text-[13px] font-semibold text-slate-500 border-b border-gray-200"
              >
                Status
              </th>
              <th
                class="text-left px-5 py-3 bg-gray-100 text-[13px] font-semibold text-slate-500 border-b border-gray-200 max-md:hidden"
              >
                Assigned To
              </th>
              <th
                class="text-left px-5 py-3 bg-gray-100 text-[13px] font-semibold text-slate-500 border-b border-gray-200"
              >
                Due Date
              </th>
              <th
                class="w-13 text-center px-5 py-3 bg-gray-100 text-[13px] font-semibold text-slate-500 border-b border-gray-200 max-md:hidden"
              >
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in paginatedTasks" :key="task.id">
              <td class="px-5 py-1.5 text-sm text-blue-600 font-medium border-b border-gray-200">
                {{ task.name }}
              </td>
              <td class="px-5 py-1.5 text-sm border-b border-gray-200">
                <Badge :status="task.status" />
              </td>
              <td class="px-5 py-1.5 text-sm text-slate-500 border-b border-gray-200 max-md:hidden">
                {{ task.assignedTo }}
              </td>
              <td class="px-5 py-1.5 text-sm text-slate-500 border-b border-gray-200">
                {{ task.dueDate }}
              </td>
              <td class="w-13 text-center px-5 py-1.5 border-b border-gray-200 max-md:hidden">
                <button
                  class="bg-transparent border-none text-state-400 cursor-pointer p-2 rounded transition-colors duration-200 hover:bg-gray-100 hover:text-slate-500"
                >
                  <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-if="totalPages > 1"
        class="flex items-center justify-end gap-2 px-5 py-4 border-t border-gray-200"
      >
        <button
          class="flex items-center justify-center w-8 h-8 border border-gray-200 bg-white rounded-md text-[13px] font-medium text-slate-500 cursor-pointer transition-all duration-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          class="flex items-center justify-center w-8 h-8 border border-gray-200 bg-white rounded-md text-[13px] font-medium text-slate-500 cursor-pointer transition-all duration-200 hover:bg-gray-100"
          :class="{ 'bg-blue-600! border-blue-600 text-white': page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
        <button
          class="flex items-center justify-center w-8 h-8 border border-gray-200 bg-white rounded-md text-[13px] font-medium text-slate-500 cursor-pointer transition-all duration-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div>
    </div>
  </Card>
</template>
