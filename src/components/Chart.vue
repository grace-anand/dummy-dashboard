<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler,
} from 'chart.js'
import { chartData } from '@/constants'
import Card from './Card.vue'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Filler)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        stepSize: 25,
      },
    },
  },
}
</script>

<template>
  <Card>
    <h3 class="m-0 mb-4 font-semibold text-slate-900">Sales Overview</h3>
    <div class="h-70 max-md:h-60">
      <Line :data="chartData" :options="options" />
    </div>
  </Card>
</template>
