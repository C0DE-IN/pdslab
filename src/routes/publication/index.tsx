import { component$ } from '@builder.io/qwik';
import {routeLoader$ } from '@builder.io/qwik-city';
import { GlowButton } from '~/components/button/glow-button';
import type { Article, Pub} from '../../../public/data/publication';
import { PUBLICATIONS } from '../../../public/data/publication';

export const usePublication = routeLoader$(async (): Promise<Pub[]> => {

    return PUBLICATIONS;
});

export default component$(() => {
    const signal = usePublication();
    return (
        <div class="max-w-[100vw] light-mode dark:dark-mode border-light dark:border-dark see-through dark:see-through spacing gap-y-2">
            {
                signal.value.map((obj, index) => (
                    <div key={index} class="space-y-2">
                        <h3 class="text-center text-xl text-red-900 dark:text-red-500 font-bold spacing">{obj.year}</h3>
                        <PublicationCard articles={obj.articles} />
                    </div>
                ))
            }
        </div>
    )
})

export const PublicationCard = component$((props: { articles: Article[] }) => {
    return <div >
        {
            props.articles.map((article, index) => (
                <div key={index} class="light-mode dark:darker-dark border-light dark:border-dark spacing mb-2">
                    {article.highlight ? <GlowButton name={'Highlight'} link={article.highlight} /> : null}
                    <h2 class="text-justify text-xl font-bold ">{article.title}</h2>
                    <h3 class="text-justify text-md">{article.authors.join(', ')}</h3>
                    <span class="flex flex-row space-x-5 justify-between">
                        <p class="text-justify italic text-blue-900 dark:text-blue-400 font-bold">
                            <a href={article.link} target='_blank'>{article.journal}, {article.issue}</a>
                        </p>
                        <svg class="h-6 w-24 right-0 cursor-pointer text-blue-900 dark:text-blue-400" onClick$={() => { window.open(article.pubmed); }}>
                            <use xlink:href={`/icons/pubmed_logo.svg#pubmed`} href={`/icons/pubmed_logo.svg#pubmed`}></use>
                        </svg>
                    </span>
                </div>
            ))
        }

    </div>
});