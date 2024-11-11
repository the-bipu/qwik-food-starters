import { component$, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { venues } from '../../db.json';

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

      <div class="grid grid-cols-3 gap-4 mt-10">
        {venues.map((venue) => (
          <div key={venue.id} class="bg-white rounded-lg">
            <div class="aspect-[4/3] bg-cover bg-center rounded-lg" style={`background-image:url('${venue.image}')`}></div>
            <div class="p-6">
              <h3>{venue.name}</h3>
              <p class="text-gray-400">{venue.address}</p>
              <Link class="text-sky-500" href={`/venue/${venue.id - 1}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
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
