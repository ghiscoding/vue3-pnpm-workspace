<script setup lang="ts">
import { MyBtn } from '@monotest/components';
import { useMouse } from '@monotest/composables';
import { ref } from 'vue';

const btn1Label = ref('I dare you to click me!');
const btn1Disabled = ref(false);
const btn2Label = ref('Button, count is: 0');
const btn2Count = ref(0);
const msg = ref('Hello World');
const counter = ref(2);
const { x, y } = useMouse();

function onButton1Clicked() {
  btn1Disabled.value = true;
  btn1Label.value = 'Button clicked... Game Over!';
}
function onButton2Clicked() {
  btn2Label.value = `Button, count is: ${++btn2Count.value}`;
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <br />

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>

    <br />

    <p></p>
    <div style="margin-bottom: 10px">
      <label>Regular button</label>
      <button type="button" @click="counter++">counter is: {{ counter }}</button>
    </div>
    <div class="component-container">
      <label>Reusable Component <code>my-btn</code></label>
      <my-btn :label="btn1Label" type="danger" :disabled="btn1Disabled" @on-click="onButton1Clicked" />
      <my-btn :label="btn2Label" type="info" @on-click="onButton2Clicked" />
    </div>

    <br />

    <label>Reusable Composables <code>useMouse()</code></label>
    <p>Mouse position is at: {{ x }}, {{ y }}</p>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .hello {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  a {
    color: #42b983;
  }

  .component-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
}
</style>
