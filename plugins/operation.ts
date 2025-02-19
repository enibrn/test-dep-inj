import { defineNuxtPlugin } from '#app';
import { useAddOperation } from '~/operations/useAddOperation';
import { useMulOperation } from '~/operations/useMulOperation';
import type { IUseOperation } from '~/operations/IUseOperation';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  let operation: IUseOperation;

  if (config.public.operation === 'useAddOperation') {
    operation = useAddOperation();
  } else {
    operation = useMulOperation();
  }

  nuxtApp.provide('operation', operation);
});