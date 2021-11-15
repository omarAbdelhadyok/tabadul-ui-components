// declare module '*.vue' {
//   import { DefineComponent } from 'vue';

//   const Component: DefineComponent<{}, {}, any>;
//   export default Component;
// }

declare module "*v.vue" {
  import Vue from "*.vue";
  export default Vue;
}

declare module "vue-i18n/index";

declare module "quasar";