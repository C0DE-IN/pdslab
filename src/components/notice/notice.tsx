import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Notice = component$(() => {

    return <div class="h-150 w-full rounded-lg see-through dark:see-through light-mode dark:dark-mode border-light dark:border-dark spacing ">
        <h2 class="text-center spacing items-center text-xl font-bold">Notification</h2>
        <div class="spacing  light-mode dark:darker-dark  border-light dark:border-dark ">
            <div class={`animate-pulse card relative bg-clr2 rounded-lg text-white after:absolute after:-inset-[.75rem] after:blur-[.75rem] after:-z-10 after:rounded-lg after:bg-gradient-conic after:animate-move-around flex flex-row align-middle`}>
                <span class="h-16">
                    <svg  height="70">
                        <use href='/logos/cell-press.svg#cell-press'></use>
                    </svg>
                </span>
                <span class="inline-block align-baseline"><Link class="inline-block align-baseline" href="https://www.cell.com/trends/plant-science/fulltext/S1360-1385(23)00193-0">SPOTLIGHT | Trends in Plant Science | The two faces of DJ-1D proteins.</Link></span>
                
            </div>
        </div>
    </div>
});

