import { component$ } from '@builder.io/qwik';
import { useAboutData } from '~/routes';

export default component$(() => {
    const aboutData = useAboutData().value;
    return (
        <div class="light-mode border-light dark:dark-mode dark:border-dark see-through dark:see-through spacing">
            <h2 class="text-center text-xl font-bold spacing">{aboutData.heading}</h2>
            <div class="whitespace-normal light-mode dark:darker-dark border-light dark:border-dark spacing">
                {
                    aboutData.content.map((para, index) => (
                        <p class="text-justify" key={index}>{para}</p>
                    ))}
                <p class="text-right">-{aboutData.author}.</p>
            </div>
        </div>
    )
});