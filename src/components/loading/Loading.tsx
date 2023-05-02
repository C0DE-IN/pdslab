import { component$ } from "@builder.io/qwik";

export const Loading = component$(() => {
  return <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 72 72">
  </svg>
</button>
});