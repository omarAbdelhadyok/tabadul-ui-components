<template>
	<form @submit.prevent="onSubmit">

        <f-input
            :label="t('labels.firstName')"
            v-model.trim="v$.form.firstName.$model"
            :errors="v$.form.firstName.$errors"
            :counter="true"
            :maxlength="20"
        ></f-input>

		<button :disabled="v$.form.$invalid">Login</button>

        <hr />

        <select v-model="locale">
            <option value="ar">Ar</option>
            <option value="en">En</option>
        </select>
    </form>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
import useVuelidate from "@vuelidate/core";
import { useI18n } from "vue-i18n/index";

export default {
	name: "LayoutDefault",
	components: {},
	setup() {
		const { t, locale } = useI18n({ useScope: "global" });

		const state = reactive({
			form: {
				firstName: "",
			},
		});

		const rules = {
			form: {
				firstName: {
					required: {
						$validator: function isRequired(value: string) {
							if (value == null || value.trim().length === 0)
								return false;
							return true;
						},
						$message: "errors.required",
					},
				},
			},
		};

		const v$ = useVuelidate(rules, state);

		return {
			...toRefs(state),
			v$,
			t,
			locale,
		};
	},
};
</script>
