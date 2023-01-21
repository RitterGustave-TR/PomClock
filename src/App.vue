<template>
	<div class="container">
		<div class="timer">{{ minutes }}:{{ seconds }}</div>
		<span>Ritters Pom Clock</span>
		<div class="controls">
			<button @click="startTimer">Start</button>
			<button @click="stopTimer">Stop</button>
			<button @click="resetTimer">Reset</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

declare interface AppComponentData {
	minutes: number;
	seconds: number;
	intervalId: undefined | number;
}

export default defineComponent({
	data(): AppComponentData {
		return {
			minutes: 25,
			seconds: 0,
			intervalId: undefined,
		};
	},
	methods: {
		startTimer() {
			if (!this.intervalId) {
				this.intervalId = setInterval(() => {
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
				}, 1000) as unknown as number;
			}
		},
		stopTimer() {
			clearInterval(this.intervalId);
			this.intervalId = undefined;
		},
		resetTimer() {
			this.minutes = 25;
			this.seconds = 0;
		},
	},
});
</script>

<style>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 300px;
	height: 100px;
}

.timer {
	font-size: 36px;
	text-align: center;
}

.controls {
	text-align: center;
}

button {
	padding: 8px 16px;
	margin: 8px;
	font-size: 16px;
	border-radius: 4px;
}
</style>
