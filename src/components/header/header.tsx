import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <div class='p-3 bg-white'>
                <div class='container max-w-5xl mx-auto flex justify-between items-center'>
                    <div class='text-xl font-bold my-2'>🍔 QWIK Food Application</div>
                    <ul class='text=gray-400 font-bold flex gap-8'>
                        <li><Link href={`/`}>Home</Link></li>
                        <li><Link href={`/about-us`}>About Us</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
});