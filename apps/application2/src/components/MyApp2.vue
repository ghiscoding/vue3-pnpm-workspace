<script setup lang="ts">
import { MyBtn } from '@monotest/components';
import { useMouse } from '@monotest/composables';
import { ref } from 'vue';

const btnLabel = ref('Button, count is: 0');
const btnCount = ref(0);
const msg = ref('Application 2');
const counter = ref(2);
const { x, y } = useMouse();

function onButtonClick() {
  btnLabel.value = `Button, count is: ${++btnCount.value}`;
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div style="margin-bottom: 10px">
      <label>Regular button</label>
      <button type="button" @on-click="counter++">counter is: {{ counter }}</button>
    </div>
    <div class="component-container">
      <label>Reusable Component <code>my-btn</code></label>
      <my-btn :label="btnLabel" type="primary" @click="onButtonClick" />
    </div>

    <br />

    <label>Reusable Composables <code>useMouse()</code></label>
    <p>Mouse position is at: {{ x }}, {{ y }}</p>
  </div>
</template>

<style scoped lang="scss">
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
</style>
