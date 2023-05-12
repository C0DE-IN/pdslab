import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { MESSAGES, type mess } from "../../../public/data/notification";
export const useNotice = routeLoader$(async (): Promise<mess[]> => {
    return MESSAGES;
});

export default component$(() => {
    const notice = useNotice().value;
    return (
        <div class="max-w-[100vw] flex flex-col gap-y-2 spacing light-mode dark:dark-mode border-light dark:border-dark see-through dark:see-through">
            <div class="flex flex-col  border-light dark:border-dark spacing light-mode dark:darker-dark">
                <h2 class=" spacing  text-2xl font-semibold text-cyan-800 dark:text-cyan-100">{notice[0].title}</h2>
                <div class="spacing">
                    <div class="dark:light-mode dark-mode">
                        <h2 class=" text-lg font-semibold text-cyan-100 dark:text-cyan-800 spacing text-center">{notice[0].content.heading}</h2>
                    </div>

                    {
                        notice[0].content.topics.map((topic, index) => (
                            <div key={index}>
                                <h2 class=" text-lg font-semibold text-cyan-800 dark:text-cyan-100 spacing">{topic.sub_heading}</h2>
                                <span >{topic.content.map((text, index) => (
                                    <p key={index} class=" text-justify">{text}</p>)
                                )}</span>
                            </div>
                        ))
                    }
                    <h3 class="spacing text-md text-blue-600">{notice[0].content.contact}</h3>
                    <h3 class=" text-lg font-semibold text-cyan-800 dark:text-cyan-100 spacing">{notice[0].content.focus}</h3>
                    <h3 class=" text-md  ">{notice[0].content.focus_detail}</h3>


                </div>
                <div class="dark:light-mode dark-mode">
                    <h3 class=" text-lg font-semibold text-cyan-100 dark:text-cyan-800 spacing">{notice[0].vacancy}</h3>
                </div>
                <h2 class="text-center text-lg font-semibold text-cyan-800 dark:text-cyan-100 spacing">Publications:</h2>
                
                <ul class="list-decimal indent-5 spacing">
                    {
                        notice[0].publications.map((item, index) => (
                            <li key={index} class=" text-justify">{item}</li>
                        ))
                    }
                </ul>
                

            </div>
        </div>

    )
})