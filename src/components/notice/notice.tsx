import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Notice = component$(() => {

    return <div class="h-150 w-full rounded-lg see-through dark:see-through light-mode dark:dark-mode border-light dark:border-dark spacing ">
        <h2 class="text-center spacing items-center text-xl font-bold">Notification</h2>
        <div class="spacing  light-mode dark:darker-dark  border-light dark:border-dark ">
            <div class={`card relative bg-clr2 rounded-lg text-white after:absolute after:-inset-[.75rem] after:blur-[.75rem] after:-z-10 after:rounded-lg after:bg-gradient-conic after:animate-move-around`}>
                <Link href="https://www.cell.com/trends/plant-science/fulltext/S1360-1385(23)00193-0">SPOTLIGHT | Trends in Plant Science</Link>
            </div>
        </div>
    </div>
});

