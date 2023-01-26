<template>
	<div class="timer">{{ formatMinutes }} : {{ formatSeconds }}</div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
	props: {
		minutes: {
			required: true,
			type: Number,
		},
		seconds: {
			required: true,
			type: Number,
		},
	},
	computed: {
		formatSeconds() {
			return this.$props.seconds.toString().padStart(2, "0") ?? "00";
		},
		formatMinutes() {
			return this.$props.minutes.toString().padStart(2, "0") ?? "00";
		},
	},
});
</script>

<style>
.timer {
	font-size: 36px;
	text-align: center;
}
</style>
