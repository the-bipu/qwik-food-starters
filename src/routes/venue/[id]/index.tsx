import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";

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

const venues = [
    {
        "id": 1,
        "name": "Luigi's Pizza",
        "address": "123 Main St, New York",
        "image": "/images/photo-1580240224305-cfa9d5cdca5e.jpeg",
        "description": "Luigi's Pizza is a family owned restaurant that has been serving New York style pizza for over 20 years."
    },
    {
        "id": 2,
        "name": "Burger Town",
        "address": "987 Food St, New Yersey",
        "image": "/images/photo-1511421616335-5a9846f1afcb.jpeg",
        "description": "Here at Burger Town we serve the best burgers in town."
    },
    {
        "id": 3,
        "name": "Amy's Ice Cream",
        "address": "234 Dessert St, New Yersey",
        "image": "/images/photo-1652101898564-034889096be4.jpeg",
        "description": "Amy's Ice Cream is a nice place to get some ice cream."
    },
    {
        "id": 4,
        "name": "Geno's Steaks",
        "address": "764 Medium St, New York",
        "image": "/images/photo-1541251711960-c085155ceea0.jpeg",
        "description": "Looking for a good Philly Cheesesteak? Come to Geno's Steaks."
    },
    {
        "id": 5,
        "name": "Funky Noodle",
        "address": "111 Asian St, Detroit",
        "image": "/images/photo-1678049277571-b7d383d54901.jpeg",
        "description": "Funky Noodle is a great place to get some Asian food."
    },
    {
        "id": 6,
        "name": "Los Tacos No. 1",
        "address": "121 Mexican St, Detroit",
        "image": "/images/photo-1613514785940-daed07799d9b.jpeg",
        "description": "Los Tacos No. 1 is a great place to get some tacos. They have the best tacos in town."
    }
];