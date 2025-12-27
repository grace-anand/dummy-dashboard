<template>
  <aside
    class="bg-slate-900 h-screen w-56 flex flex-col justify-between max-lg:hidden sticky top-0"
  >
    <div>
      <h1 class="text-xl font-semibold mx-auto py-5 w-fit text-white">
        <font-awesome-icon :icon="['fas', 'house']" class="mr-3" />
        Dashboard
      </h1>
      <hr class="text-gray-400" />
      <ul class="pt-5 w-54">
        <RouterLink :to="route.path" v-for="route in routes" :key="route.path">
          <li
            class="text-white cursor-pointer rounded-r-md"
            :class="{
              'bg-blue-700': route.path === useRoute().fullPath,
              'px-5 py-3 hover:bg-blue-700/30': true,
            }"
          >
            <font-awesome-icon :icon="['fas', route.icon]" class="mr-3" />
            {{ route.name }}
          </li>
        </RouterLink>
      </ul>
      <hr class="text-gray-400 mx-3" />
    </div>
    <div class="text-white mx-auto pb-5 w-full">
      <button class="border-t border-gray-400 py-4 block text-left px-5 w-52" @click="logout">
        <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="mr-3" />
        Logout
      </button>
      <hr class="text-gray-400 mx-3" />
      <RouterLink class="py-4 block w-full text-left px-5" to="/help">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="mr-3" />
        Help
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>
import { routes } from '@/constants'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRoute } from 'vue-router'

const logout = () => {
  window.alert('Logging out...')
}
</script>
