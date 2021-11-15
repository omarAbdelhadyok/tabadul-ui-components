import { createApp } from 'vue';
import App from './App.vue';
import {FInput} from 'tabadul-ui-components';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import { createI18n } from 'vue-i18n/index';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        ar: {},
        en: {
            labels: {
                "firstName": "First name"
            },
            errors: {
                required: "required"
            }
        }
    }

});

const app = createApp(App).use(Quasar, quasarUserOptions);
app.use(i18n);
app.component('f-input', FInput);
app.mount('#app');
