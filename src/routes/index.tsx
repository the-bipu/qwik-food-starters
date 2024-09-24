import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const user = useSignal("You (yes, i'm talking to you)");

  return (
    <>
      <h1>Hi, {user.value} 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <button class='bg-black text-white p-2 rounded' onClick$={() => user.value = 'Don"t afraid. It"s just some dark magic... 😆'}>Click to change the name...</button>
    </>
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
