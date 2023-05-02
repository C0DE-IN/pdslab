import { component$, useVisibleTask$, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useRecentPublication } from '~/routes';
import { GlowButton } from '../button/glow-button';

export interface Publication {
  heading: string;
  authors: string;
  reference: string;
}

export default component$(() => {

  const articles = useRecentPublication().value;

  const state = useStore({
    currentIndex: 0,
    currentPubIndex: 0,
    currentAuthorIndex: 0,
    currentReferenceIndex: 0,
    isWaiting: false,
    animating: "heading"
  });

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      if (state.currentIndex < articles[state.currentPubIndex].title.length) {
        state.currentIndex++;
        state.animating = "heading";
      } else {
        if (state.currentAuthorIndex < articles[state.currentPubIndex].authors.join(', ').length) {
          state.currentAuthorIndex++;
          state.animating = "authors";
        } else {
          if (state.currentReferenceIndex < articles[state.currentPubIndex].journal.length) {
            state.currentReferenceIndex++;
            state.animating = "reference";
          } else {
            if (!state.isWaiting) {
              state.isWaiting = true;
              setTimeout(() => {
                if (state.currentPubIndex === articles.length - 1) {
                  state.currentPubIndex = 0;
                } else {
                  state.currentPubIndex++;
                }
                state.currentIndex = 0;
                state.currentAuthorIndex = 0;
                state.currentReferenceIndex = 0;
                state.isWaiting = false;
              }, 3000);
            }
          }
        }
      }
    }, 50);
    return () => clearInterval(interval);
  });

  return (

    <div class="h-150 w-full rounded-lg see-through dark:see-through light-mode dark:dark-mode border-light dark:border-dark spacing">
      <h2 class="text-center spacing items-center text-xl font-bold ">Recent Publication</h2>
      <div class="spacing light-mode dark:darker-dark  border-light dark:border-dark">
        
          <span class="flex flex-row-reverse justify-between w-full">
            <svg class="h-6 w-24 right-0 cursor-pointer text-blue-900 dark:text-blue-400" onClick$={() => { window.open(articles[state.currentPubIndex].pubmed); }}>
              <use xlink:href={`/icons/pubmed_logo.svg#pubmed`} href={`/icons/pubmed_logo.svg#pubmed`}></use>
            </svg>
            {articles[state.currentPubIndex].highlight ? <GlowButton name={'Highlights'} link={articles[state.currentPubIndex].highlight} /> : null}
          </span>
          <div class="min-h-[120px] space-y-2">
            <h2 class="text-justify  text-lg md:text-xl font-bold">{articles[state.currentPubIndex].title.slice(0, state.currentIndex)}</h2>
            <p class="text-base">{articles[state.currentPubIndex].authors.join(', ').slice(0, state.currentAuthorIndex)}</p>
            <Link href={articles[state.currentPubIndex].link} target='_blank'>
              <p class="italic text-blue-900 dark:text-blue-400 font-bold text-lg">{articles[state.currentPubIndex].journal.slice(0, state.currentReferenceIndex)}</p>
            </Link>
          </div>
        
      </div>
    </div>
  )
}); 
