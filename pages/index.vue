<template>
  <UForm class="flex gap-4">
    <UCard>
      <template #header>
        <h1>Operation</h1>
      </template>

      <UInput
        v-model.number="a"
        type="number"
        placeholder="Enter first number"
      />

      <UInput
        v-model.number="b"
        type="number"
        placeholder="Enter second number"
      />

      <UButton @click="calculate">Calculate</UButton>

      <p>Result: {{ result }}</p>
    </UCard>
  </UForm>
</template>

<script setup>
import { ref, inject } from 'vue';
const a = ref(0);
const b = ref(0);
const result = ref(0);
const { $operation } = useNuxtApp();

// console.log('Operation injected in index:', $operation);
// console.log('Result in index:', $operation.perform(2, 3));

const calculate = () => {
  result.value = $operation.perform(a.value, b.value);
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

