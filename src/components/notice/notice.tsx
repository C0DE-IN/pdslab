import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export const Notice = component$(() => {

    useStylesScoped$(`
    .card {
        background:var(--clr-2);
        position:relative;
    }
    .card::before,
    .card::after {
        position:absolute;
        inset:-.75rem;
        z-index: -1;
        background:conic-gradient(from var(--gradient-angle),var(--clr-3), var(--clr-4), var(--clr-5),var(--clr-4),var(--clr-3));
        border-radius:inherit;
        animation: rotation 5s linear infinite;
    }
    .card::after {
        filter:blur(.75rem);
    }
    `)
    return <div class="h-150 w-full rounded-lg see-through dark:see-through light-mode dark:dark-mode border-light dark:border-dark spacing ">
        <h2 class="text-center spacing items-center text-xl font-bold">Notification</h2>
        <div class="spacing  light-mode dark:darker-dark  border-light dark:border-dark ">
            <div class="card text-white after:absolute rounded-lg">
              <Link href="phd-vacancies">PhD position availabe</Link> 
            </div>
        </div>
    </div>
});