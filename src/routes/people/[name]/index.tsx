import { component$ } from "@builder.io/qwik";
import type { StaticGenerateHandler} from "@builder.io/qwik-city";
import { routeLoader$} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import type { People} from '../../../../public/data/people';
import { PDFS, PHDS, STAFFS } from '../../../../public/data/people';
import type { Article} from "../../../../public/data/publication";
import { PUBLICATIONS } from "../../../../public/data/publication";
import { PublicationCard } from "../../publication";

export const usePeopleLoader = routeLoader$(async({ params }):Promise<People> => {
    const name = params.name as string;
    const people: People[] = [...PDFS, ...PHDS, ...STAFFS];
    return people.find((student) => student.name === name.replace(/_/g, " ")) as People;
});

export const usePublicationLoader = routeLoader$(async({ params }):Promise<Article[]> => {
    const name = params.name as string;
    const pubWithAuthor: Article[] = PUBLICATIONS.flatMap(pub =>
        pub.articles.filter(article =>
            article.authors.some(author => author.includes(name.replace(/_/g, " ")))
        )
    );
    return pubWithAuthor as Article[];
});

export default component$(() => {
   
    const people:People = usePeopleLoader().value ;
    const articles:Article[] = usePublicationLoader().value;
    return (
        <div class="max-w-[100vw] light-mode dark:dark-mode spacing border-light dark:border-dark see-through dark:see-through space-y-2">
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
                            <img class="object-cover object-top border-light dark:border-dark bg-opacity-100 h-72 min-w-72 max-w-full" src={people.imgSrc} />
                        : null
                }
                <div class="flex flex-col card  text-justify spacing border-light dark:border-dark light-mode dark:darker-dark">
                    <h2 class="mt-2  font-bold text-grey-200 text-3xl ">{people.title ? people.title : null}{people.name}</h2>
                    <p >{people.position}</p>
                    {
                        people.fellowships ?
                            <p >{people.fellowships}</p>
                            : null
                    }
                    {
                        people.credentials ?
                            people.credentials.map((obj, index) => (
                                <p key={index}>{obj}</p>
                            ))
                            : null
                    }
                </div>
            </div>

            {
                people.summary ?
                    <div class="flex flex-col text-justify spacing border-light dark:border-dark   see-through dark:see-through">
                        <h2 class="text-center mt-2 p-3 items-center text-xl font-bold ">Research Summary</h2>
                        <div class="light-mode dark:darker-dark border-light dark:border-dark spacing">
                        {
                            people.summary.map((obj, index) => (
                                <p key={index}>{obj}</p>
                            ))
                        }
                        </div>
                    </div>
                    : null
            }
            {
                articles.length > 0 ?
                    <div class="flex flex-col text-justify spacing border-light dark:border-dark see-through dark:see-through space-y-2">
                        <h2 class="text-center items-center text-xl font-bold spacing">Publications</h2>
                        <PublicationCard articles={articles} />
                    </div>
                    : null
            }

        </div >
    )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
    const peoples: People[] = [...PDFS, ...PHDS, ...STAFFS];
    const params = peoples.map((people) => {
      return { name: `${people.name.replace(/\s/g, "_")}` };
    });
    console.log(params);
    return { params };
  };



  