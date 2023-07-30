<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex flex-wrap justify-center gap-5">
    <div class="bg-green-100 rounded-xl shadow w-340 h-199">
      <div class="flex justify-between p-4">
        <div class="relative inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          <p class="text-black-100">Collections</p>
        </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-green-100 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">NGN</span>
          </label>
      </div>
      <p class="text-5xl text-black-700 font-bold text-center mt-4 -tracking-extra"><span>&#8358;</span>32,000,000</p>
      <div class="flex justify-between p-4">
        <div>Collected fir 25,000 Items</div>
        <div class="bg-green-400 rounded-md w-20 h-7">
          <p class="text-white text-center">4.06%</p>
        </div>
      </div>
    </div>
    <div class="bg-blue-100 rounded-xl shadow w-340 h-199">
      <div class="flex justify-between p-4">
        <div class="relative inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          <p class="text-black-100">Organizations</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      </div>
      <p class="text-5xl text-black-700 font-bold text-left mt-4 -tracking-extra pl-4">200,000</p>
      <div class="flex justify-between p-4">
        <div>
          <p>110,000</p>
          <p>Administrator</p>
        </div>
        <div>
          <p>90,000</p>
          <p>Departments</p>
        </div>
      </div>
    </div>
    <div class="bg-indigo-200 rounded-xl shadow w-340 h-199">
      <div class="flex justify-between p-4">
        <div class="relative inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          <p class="text-black-100">Organizations</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      </div>
      <p class="text-5xl text-black-700 font-bold text-left mt-4 -tracking-extra pl-4">32,000</p>
      <div class="flex justify-between p-4">
        <div>
          <p>25,000 items recieved collection in <br>the last 30 days</p>
        </div>
      </div>
    </div>

  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
</style>
