import { component$, useContext, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import About from '~/components/about/about';
import Carousel from '~/components/carousel/carousel';
import RecentPublication from '~/components/recent-publication/recent-publication';
import ResearchArea from '~/components/research-area/research-area';
import type { Area} from '../../public/data/research-area';
import { RESEARCHAREAS } from '../../public/data/research-area';
import type { Article, Pub} from '../../public/data/publication';
import { PUBLICATIONS } from '../../public/data/publication';
import type { AboutInterface } from '../../public/data/about';
import { ABOUTDATA } from '../../public/data/about';
import { ThemeContext } from '~/root';
import { ModelsCollage } from '~/components/models-collage/models-collage';

export const useAboutData = routeLoader$(async (): Promise<AboutInterface> => {
  return ABOUTDATA;
});

export const useResearchAreaData = routeLoader$(async (): Promise<Area[]> => {
  return RESEARCHAREAS;
});

export const useRecentPublication = routeLoader$(async (): Promise<Article[]> => {
  const data = PUBLICATIONS;
  const articles = data.reduce((acc: Article[], pub: Pub) => [...acc, ...pub.articles], []).slice(0, 5);
  return articles;
});

export default component$(() => {
  const theme = useContext(ThemeContext);

  useVisibleTask$(({track})=>{
    track(() => theme.value.dark);
  
  })
  
  return (
    <div class="flex flex-col gap-y-2 max-w-[100vw]">
      <Carousel dirPath={'public/images/album'} collage={false} />
      <RecentPublication />
      <About />
      <ResearchArea />
      <ModelsCollage dirPath={'public/images/models'}/>
      <div id="twitter">
      {theme.value.dark ? <a class="twitter-timeline"  data-height="620" data-theme="dark" href="https://twitter.com/pdslab_iisc?ref_src=twsrc%5Etfw">Tweets by pdslab_iisc</a>:<a class="twitter-timeline"  data-height="620" href="https://twitter.com/pdslab_iisc?ref_src=twsrc%5Etfw">Tweets by pdslab_iisc</a>}
      <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Mitochondrial Biology Lab',
  meta: [
    {
      name: 'description',
      content: 'Mitochondrial Biology Lab, Dept of Biochemistry, Indian Institute of Science, Bangalore.',
    },
  ],
};
