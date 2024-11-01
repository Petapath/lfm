import { reactive } from 'vue'

// control panel status for the 
// element configuration descriptors
//
export const panelStatus = reactive({
		active: '',
		setActive(a) {
		  console.log("setActive: " + a)
			this.active === a ? this.active = '' : this.active=a
		},
		checkActive(a) {
		  console.log("checkActive: " + a)
		  return this.active === a
		}
})
