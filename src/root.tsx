import type { Signal} from '@builder.io/qwik';
import { useVisibleTask$} from '@builder.io/qwik';
import { component$, useContextProvider, createContextId, useSignal } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import './global.css';
import { useStyles$ } from '@builder.io/qwik';
import type { FileInfo } from './components/carousel/carousel';

export interface AlbumAndTree {
  album:string[];
  tree:FileInfo[];
}

export type Theme = { dark: boolean };

export const ThemeContext = createContextId<Signal<Theme>>('theme-context');

export default component$(() => {
  const themeStore = useSignal<Theme>({ dark: false });
  useContextProvider(ThemeContext, themeStore);
 
  useVisibleTask$(({ track }) => {
    track(() => themeStore.value);
    const html = document.querySelector("html")!;
    if (themeStore.value.dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark')
    }
  })
  useStyles$ (`
  html {
    scroll-behavior: smooth;
  }
  `)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="bg-[url('/images/bg.jpg')] flex flex-col min-h-screen max-w-[100vw] bg-repeat-y bg-fixed bg-cover bg-center items-center gap-4">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
