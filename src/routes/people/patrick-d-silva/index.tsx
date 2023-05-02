import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { Pi} from '../../../../public/data/people';
import { PI } from '../../../../public/data/people';
import type { Article, Pub} from "../../../../public/data/publication";
import { PUBLICATIONS } from "../../../../public/data/publication";
import { PublicationCard } from "../../publication";

export const usePeopleLoader = routeLoader$(async(): Promise<Pi> => {
    return PI  as Pi;
});
export const useRecentPublication = routeLoader$(async (): Promise<Article[]> => {
    const data = PUBLICATIONS;
    const articles = data.reduce((acc: Article[], pub: Pub) => [...acc, ...pub.articles], []).slice(0, 5);
    return articles as Article[];
});

export default component$(() => {
    const people = usePeopleLoader().value;
    const articles = useRecentPublication().value;
    return (
        <div class="max-w-[100vw] light-mode dark:dark-mode spacing border-light dark:border-dark see-through dark:see-through gap-y-3">
            <button class="spacing absolute right-8 top-8 cursor-pointer rounded-lg z-10">
                <Link href="/people" >
                    <svg class="w-[32px] h-[32px] text-black dark:text-white" >
                        <use xlink:href={`/icons/tab_close.svg#close`} href={`/icons/tab_close.svg#close`}></use>
                    </svg>
                </Link>
            </button>
            <div class="flex flex-row max-sm:flex-col w-full rounded-2xl gap-x-3 max-sm:gap-y-2 my-3">
                {
                    people.imgSrc ?
                        <div class="border-light dark:border-dark bg-opacity-100 min-h-80  min-w-96 max-w-[420px]">
                            <img class=" h-full w-full object-cover object-top content-start rounded-xl" src={people.imgSrc} />
                        </div>
                        : null
                }
                <div class="flex flex-col card light-mode dark:darker-dark border-light dark:border-dark spacing text-justify">
                    <h2 class="mt-2  font-bold text-grey-200 text-3xl ">{people.title ? people.title : null}{people.name}</h2>
                    <p >{people.position}</p>

                    {
                        people.credentials ?
                            people.credentials.map((obj, index) => (
                                <p key={index}>{obj}</p>
                            ))
                            : null
                    }
                </div>
            </div>

            <div class="flex flex-col rounded-md gap-y-3 text-justify see-through dark:see-through">
                {
                    people.summary ?
                        <div class="flex flex-col spacing border-light dark:border-dark see-through dark:see-through">
                            <h2 class="text-center text-xl font-bold spacing">Research Summary</h2>
                            <div class="light-mode dark:darker-dark border-light dark:border-dark spacing">
                            {
                                people.summary.map((obj, index) => (
                                    <div key={index}>
                                        {obj.title ? <p key={index}>{obj.title}</p> : null}
                                        {obj.text ?
                                            obj.text.map((item, index) => (
                                                <p key={index} class="spacing">{item}</p>
                                            )) : null
                                        }
                                        {obj.imgSrc ? <img src={obj.imgSrc} class="w-full border-light dark:border-dark" /> : null}
                                        {obj.list ?
                                            <div class="dark-mode dark:light-mode spacing my-3 rounded-lg">
                                                <h3 class="font-extrabold">{obj.list.title}</h3>
                                                <ul class="list-disc p-3">
                                                    {obj.list.array ?
                                                        obj.list.array.map((item, index) => (
                                                            <li key={index} >{item}</li>
                                                        )) : null
                                                    }
                                                </ul>
                                            </div>
                                            : null}
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                        : null
                }
                <div class="flex flex-col spacing border-light dark:border-dark spacing">
                    <h2 class="text-center text-xl font-bold spacing">Awards</h2>
                    {
                        people.awards ?
                        <div class="spacing border-light dark:border-dark light-mode dark:darker-dark">
                            <table class="table-auto  card justify-between">
                                <thead class="justify-between" >
                                    <tr class=" justify-between text-left">
                                        <th>Name</th>
                                        <th >Organization</th>
                                        <th>Year</th>
                                    </tr>
                                </thead>
                                <tbody class=" justify-between">
                                    {
                                        people.awards.map((obj, index) => (
                                            <tr key={index} class="justify-between">
                                                <td>{obj.name}</td>
                                                <td>{obj.from}</td>
                                                <td>{obj.year}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            </div>
                            : null
                    }
                </div>
                {
                    articles.length > 0 ?
                        <div class="flex flex-col spacing border-light dark:border-dark space-y-2">
                            <h2 class="text-center text-xl font-bold spacing">Recent Publications</h2>
                            <PublicationCard articles={articles} />
                        </div>
                        : null
                }
            </div>

        </div >
    )
})