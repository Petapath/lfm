import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

// this is the Option Stores way
/*
export const useCounterStore = defineStore('counter', {
	state: () => ({ count: 0 }),
	getters: {
			doubleCount: (state) => state.count * 2,
	},
	actions: {
  	increment() {
    	this.count++
  	},
  	set(nc) {
    	this.count=nc;
  	},
	},
})
*/

// this is the Setup Stores way
//
export const useCounterStore = defineStore('counter', () => {
  const count = ref(useLocalStorage('mh',0))
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function set(v) {
	count.value=v;
  }

  return { count, doubleCount, increment, set }
})
