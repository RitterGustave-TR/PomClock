<template>
	<div class="container" :class="{ timerCountDownBg: isCountingDown }">
		<span>Ritters Pomodoro</span>
		<TimerBoard :minutes="minutes" :seconds="seconds" />
		<div class="controls">
			<Button label="Start" @click="startTimer" class="p-button-sm" />
			<Button label="Stop" @click="stopTimer" class="p-button-sm" />
			<Button label="Reset" @click="resetTimer" class="p-button-sm" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "primevue/button";
import TimerBoard from "@/components/TimerBoard/TimerBoard.vue";

declare interface AppComponentData {
	minutes: number;
	seconds: number;
	intervalId: undefined | number;
	isCountingDown: boolean;
}

export default defineComponent({
	data(): AppComponentData {
		return {
			minutes: 25,
			seconds: 0,
			intervalId: undefined,
			isCountingDown: false,
		};
	},
	methods: {
		startTimer() {
			if (!this.intervalId) {
				this.isCountingDown = true;

				this.intervalId = window.setInterval(() => {
					if (this.seconds > 0) {
						this.seconds--;
					} else if (this.minutes > 0) {
						this.minutes--;
						this.seconds = 59;
					} else {
						this.stopTimer();
						this.resetTimer();
						// Add code here to notify the user that the timer is done
					}
				}, 1000);
			}
		},
		stopTimer() {
			clearInterval(this.intervalId);
			this.intervalId = undefined;
			this.isCountingDown = false;
		},
		resetTimer() {
			this.minutes = 25;
			this.seconds = 0;
		},
	},
	components: {
		Button,
		TimerBoard,
	},
	beforeUnmount() {
		// chrome.storage.local.set({'test': this.seconds})
	},
	unmounted() {
		clearInterval(this.intervalId);
	},
	mounted() {
		// chrome.storage.local.get('test').then(result => {
		// 	console.log(result);
		// 	let stored = ;
		// 	console.log(stored++);
		// 	chrome.storage.local.set({'test': stored});
		// });
	},
});
</script>

<style>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: auto;
	padding: 20px;

	max-width: 300px;
	/* height: 100px; */
}

.timerCountDownBg {
	background-color: rgba(126, 0, 0, 0.353);
}

.controls {
	display: flex;
	gap: 15px;
}
</style>
