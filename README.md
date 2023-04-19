   # Vue Simple Browser Detect

It is a simple vue browser detect platform. Available for vue2 and vue3 both

## installation
### Vue2
```sh
npm i vue-simple-browser-detect --tag=v2
```
### Vue3
```sh
npm i vue-simple-browser-detect --tag=v3
```
## Usage

```vue
#Vue 2 
// import and use in your main.js file

import Vue from 'vue'
import App from './App.vue'
import VueBrowserDetect from 'vue-simple-browser-detect'

Vue.use(VueBrowserDetect);

new Vue({
  render: h => h(App),
}).$mount('#app')

```

```vue
// use on vue components 

<template>
  <div id="app">
    Your browser is {{ $detectBrowser }}
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
    }
  },
  mounted(){
    console.log("Browser", this.$detectBrowser)
  }
}
</script>

```

```vue
#Vue 3 
// import and use in your main.js file

import { createApp } from 'vue';
import App from './App.vue';
import VueBrowserDetect from 'vue-simple-browser-detect'

const app = createApp(App);

// Install the plugin globally
app.use(VueBrowserDetect);

app.mount('#app');
```

```vue
// use on vue components (composition api)

<template>
  <div>
    Your browser is {{ detectBrowser() }}
  </div>
</template>

<script>
import { ref, getCurrentInstance  } from 'vue'

export default {
  setup() {
    const app = getCurrentInstance();
    const detectBrowser = app.appContext.config.globalProperties.$detectBrowser;

    console.log("Browser", detectBrowser())

    return {
      detectBrowser
    };
  },
};
</script>

```
## License

[MIT](https://choosealicense.com/licenses/mit/)   