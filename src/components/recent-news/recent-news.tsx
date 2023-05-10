import { component$, useVisibleTask$, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useRecentNews } from '~/routes';

export default component$(() => {

  const news = useRecentNews().value;

  const state = useStore({
    currentIndex: 0,
    currentNewsIndex: 0,
    currentColumnIndex: 0,
    currentHeadlineIndex: 0,
    currentPlaceDateIndex: 0,
    isWaiting: false,
    animating: "column"
  });

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      if (state.currentIndex < news[state.currentNewsIndex].column.length) {
        state.currentIndex++;
        state.animating = "column";
      } else {
        if (state.currentHeadlineIndex < news[state.currentNewsIndex].headline.length) {
          state.currentHeadlineIndex++;
          state.animating = "headline";
        } else {
          if (state.currentPlaceDateIndex < news[state.currentNewsIndex].place_date.length) {
            state.currentPlaceDateIndex++;
            state.animating = "reference";
          } else {
            if (!state.isWaiting) {
              state.isWaiting = true;
              setTimeout(() => {
                if (state.currentNewsIndex === news.length - 1) {
                  state.currentNewsIndex = 0;
                } else {
                  state.currentNewsIndex++;
                }
                state.currentIndex = 0;
                state.currentHeadlineIndex = 0;
                state.currentPlaceDateIndex = 0;
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
      <h2 class="text-center spacing items-center text-xl font-bold ">Media reports</h2>
      <div class="spacing light-mode dark:darker-dark  border-light dark:border-dark">
        {news[state.currentNewsIndex].logo ?
          <span class="flex flex-row justify-around h-12">
            <svg class="cursor-pointer text-blue-900 dark:text-blue-400" onClick$={() => { window.open(news[state.currentNewsIndex].link); }}>
              <use xlink:href={news[state.currentNewsIndex].logo + '#the_hindu_logo'} href={news[state.currentNewsIndex].logo + '#the_hindu_logo'}></use>
            </svg>
          </span>
          : null}
        <div class="min-h-[120px] space-y-2">
          <h2 class="text-justify  text-sm">{news[state.currentNewsIndex].column.slice(0, state.currentIndex)}</h2>
          <p class="text-base text-xl font-bold">{news[state.currentNewsIndex].headline.slice(0, state.currentHeadlineIndex)}</p>
          <Link href={news[state.currentNewsIndex].link} target='_blank'>
            <p class="text-justify  text-sm">{news[state.currentNewsIndex].place_date.slice(0, state.currentPlaceDateIndex)}</p>
          </Link>
        </div>

      </div>
    </div>
  )
}); 
