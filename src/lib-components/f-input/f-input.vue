<script lang="ts">
import { defineComponent } from "vue";
import { QInput, QIcon } from "quasar";
import { useI18n } from "vue-i18n/index";

export default defineComponent({
    props: {
        modelValue: {
			required: true
		},
		errors: {
			required: true,
			type: Array,
			default: () => []
		},
		label: {
			type: String,
			required: true
		},
		mask: String,
		unmaskedValue: Boolean,
		prefix: String,
		suffix: String,
		hint: String,
		hideHint: Boolean,
		counter: Boolean,
		debounce: [String, Number],
		iconName: String,
		maxlength: Number,
		disable: Boolean,
		readonly: Boolean
    },
	components: {
		QInput,
		QIcon
	},
    setup(_props, {emit}) {
		const { t } = useI18n({ useScope: 'global' });

		const updateModelValue = (value: string): void => {
			emit('update:modelValue', value);
		}

		const clear = (): void => {
			emit('clear');
		}

		const focus = (): void => {
			emit('focus');
		}
		
		const blur = (): void => {
			emit('blur');
		}

		return {
			updateModelValue,
			clear,
			focus,
			blur,
			t
		}
	}
});
</script>
<template src="./f-input.html"></template>
<style lang="scss" scoped src="./f-input.scss"></style>
