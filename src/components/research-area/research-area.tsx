import { component$ } from '@builder.io/qwik';
import { useResearchAreaData } from '~/routes';

export default component$(() => {
    const researchArea = useResearchAreaData().value;
    return (
        <div class="relative light-mode dark:dark-mode  border-light dark:border-dark see-through dark:see-through">
            <h2 class="text-center text-xl font-bold spacing">Research Area</h2>
            <ul class="relative flex w-full overflow-x-hidden snap-x snap-mandatory scroll-smooth gap-x-3  overflow-x-auto">
                {
                    researchArea.map((obj, index) => (
                        <li class="hover:snap-center flex flex-col flex-[0_0_30%] max-sm:flex-[0_0_70%] max-md:flex-[0_0_45%] light-mode dark:darker-dark border-light dark:border-dark" key={index}>
                            <img class="h-48 w-full object-cover text-justify border-light dark:border-dark" src={obj.imgSrc}></img>
                            <div class="p-3">
                                <h2 class="spacing font-bold text-justify">{obj.heading}</h2>
                                <p class="text-justify">{obj.text}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
});
