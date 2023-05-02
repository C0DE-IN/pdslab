import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { RESEARCHES } from "../../../public/data/research";

export const useLoader = routeLoader$(async () => {
    return RESEARCHES;
});

export default component$(() => {
    const topics = useLoader().value;
    return (
        <div class="max-w-[100vw]">
            {
                topics.map((topic, index) => (
                    <div key={index}>
                        <div class={`min-h-screen bg-contain bg-fixed bg-no-repeat bg-white bg-center`}
                            style={{ backgroundImage: `url(${topic.imgSrc})` }}
                        ></div>
                        <div class="light-mode dark:dark-mode see-through dark:see-through p-5">
                            <div class="light-mode dark:darker-dark spacing border-light dark:border-dark">
                                <h2 class="font-black text-3xl spacing text-center">{topic.heading}</h2>
                                {
                                    topic.text.map((subobj, index) => (
                                        < span class="text-justify" key={index} >
                                            {subobj.title ? <b>{subobj.title}</b> : null}
                                            <p>{subobj.content}</p>
                                            {subobj.list ?
                                                <span class="spacing">
                                                    <b class="spacing">{subobj.list.heading}</b>
                                                    <ul class="spacing">
                                                        {subobj.list.items.map((item, index2) => (
                                                            <li key={index2}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </span>
                                                : null}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
});