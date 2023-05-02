import { component$, Slot} from '@builder.io/qwik';
import Header from '~/components/header/header';

export default component$(() => {

  return (
    <>
      <main class="flex-1 flex flex-col max-w-5xl relative">
        <Header />
        <Slot />
      </main>
      <footer class={`spacing see-through overlay-gradient-top dark:overlay-gradient-dark-top text-center w-full`} >
        <a id="footer" href="http://pdslab.biochem.iisc.ernet.in" target="_blank" class="text-center" >
          Copyright © Mitochondrial Biology Lab
        </a>
      </footer>
    </>
  );
});
