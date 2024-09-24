import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { venues } from '../../../../db.json';

export default component$(() => {
    const loc = useLocation();
    const id: number = parseInt(loc.params.id, 10);
    const venue = venues[id];

    return (
        <>
            {venue ? (
                <div key={venue.id} class="bg-white rounded-lg">
                    <div class="aspect-[4/3] bg-cover bg-center rounded-lg" style={`background-image:url('${venue.image}')`}></div>
                    <div class="p-6">
                        <h3>{venue.name}</h3>
                        <p class="text-gray-400">{venue.address}</p>
                        <p class="text-gray-400">{venue.description}</p>
                    </div>
                </div>
            ) : (
                <p>Venue not found.</p>
            )}
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
