import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useLoaderData = routeLoader$(() => {
  return { name: "malmsteen" };
});

export default component$(() => {
  const loaderData = useLoaderData();
  const localStore = useStore({ x: 1 });
  return (
    <div>
      <pre>localStore: {JSON.stringify(localStore, null, 2)}</pre>
      <pre>loaderData: {JSON.stringify(loaderData.value, null, 2)}</pre>
      <button
        onClick$={() => {
          // console.log(JSON.stringify(loaderData.value)); <== Uncommenting this line solve the problem, but why?
          localStore.x = 2;
        }}
      >
        {localStore.x}
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
