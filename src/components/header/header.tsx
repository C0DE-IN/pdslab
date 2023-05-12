import { component$, useVisibleTask$, useContext, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { ThemeContext } from '~/root';

export default component$(() => {
  const theme = useContext(ThemeContext);

  const state = useStore({
    dropdown: false,
    menutop: '0px',
    menubottom: '0px',
    navtop:0
  });

  useVisibleTask$(({ track }) => {
    track(() => state.dropdown);
    const left = `max-sm:left-1/2`;
    const right = 'max-sm:right-0';
    state.navtop = document.querySelector("header")!.offsetHeight - document.querySelector("nav")!.offsetHeight - 16;
    state.menutop = document.querySelector("nav")!.offsetHeight + 12 + 'px';
    const menu = document.querySelector(".menu-list")!;
    if (state.dropdown === true) {
      menu.classList.add('max-sm:animate-[in_0.25s_ease-in]', left, right);
      menu.classList.remove('max-sm:hidden', 'max-sm:animate-[out_0.25s_ease-out]');
    } else {
      menu.classList.remove('max-sm:animate-[in_0.25s_ease-in]', left, right);
      menu.classList.add('max-sm:hidden');
    }
  })

  return (
    <header id="flex flex-col darker-light dark:darker-dark z-10 rounded-xl  max-w-[100vw]">
      <div class="rounded-xl mb-2 p-2 darker-light dark:darker-dark" >
        <div class="flex flex-row  rounded-xl items-center justify-center">
          <span class="max-sm:hidden">
            <img src="/logos/iisc_protein.png" class="h-24 w-24" alt="MBL logo" />
          </span>
          <div class="space-y-3 text-center spacing flex flex-col flex-wrap">
            <h1 class="mt-2 text-2xl font-bold  max-[340px]:text-xl">Mitochondrial Biology Lab</h1>
            <h4 class="mt-2 text-lg font-bold max-[340px]:text-md">Dept of Biochemistry, Indian Institute of Science, Bangalore.</h4>
          </div>
          <span class="max-sm:order-first">
            <svg class="h-24 w-24" >
              <use xlink:href={`/logos/iisc-logo.svg#iisc_logo`} href={`/logos/iisc-logo.svg#iisc_logo`}></use>
            </svg>
          </span>
        </div>

        <nav class="flex flex-row sticky justify-center rounded-xl gap-x-3 max-sm:justify-between z-50">
          <button onClick$={() => { if (state.dropdown) { state.dropdown = false } else { state.dropdown = true } 
          window.scrollTo({ top: state.navtop, behavior: 'smooth' });
         }}
            class="sm:hidden border-pink max-sm:py-1 max-sm:px-1">
            <svg class="w-[32px] h-[32px]" >
              {!state.dropdown ?
                <use xlink:href={`/icons/menu.svg#menu`} href={`/icons/menu.svg#menu`}></use>
                : null}
              {state.dropdown ?
                <use xlink:href={`/icons/menu_open.svg#menu_open`} href={`/icons/menu_open.svg#menu_open`}></use>
                : null}
            </svg>
          </button>

          <ul style={{ top: `${state.menutop}` }}
            class="menu-list z-50 flex flex-row max-sm:flex-col max-sm:fixed max-sm:h-full max-sm:hidden max-sm:rounded-none max-sm:darker-light max-sm:dark:darker-dark max-sm:ring-transparent
            border-pink hover:ring-transparent my-1 max-sm:overflow-y-auto">
            {[
              ['Home', '/', '/icons/home.svg', 'home'],
              ['Research', '/research', '/icons/research.svg', 'research'],
              ['People', '/people', '/icons/people.svg', 'people'],
              ['Publication', '/publication', '/icons/publication.svg', 'publication'],
              ['Resource', 'http://pdslab.biochem.iisc.ernet.in/hspir/', '/icons/resource.svg', 'resource'],
              ['Funds', '/funds', '/icons/rupee.svg', 'funds'],
              ['Gallery', '/gallery', '/icons/gallery.svg', 'gallery'],
              ['Contact', '/contact', '/icons/contact.svg', 'contact']
            ].map(([title, url, src, id]) => (
              <li  key={id} onClick$={() => { state.dropdown = false }}>
                <Link href={url} >
                  <button class="flex flex-row items-center hover:dark:light-mode hover:dark-mode border-transparent hover:border-pink spacing" >
                    <span class="sm:max-lg:hidden ">
                      <svg class="pr-1 w-[32px] h-[32px]" >
                        <use xlink:href={`${src}#${id}`} href={`${src}#${id}`}></use>
                      </svg>
                    </span>
                    <span>{title}</span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
          <button onClick$={() => {
            if (theme.value.dark) { theme.value = { dark: false }; } else { theme.value = { dark: true }; }
          }}
            class="dark-mode dark:light-mode border-pink my-1 px-3 max-sm:py-1 max-sm:px-1 " >

            <svg class="w-[32px] h-[32px]">
              {theme.value.dark ?
                <use xlink:href={`/icons/sun.svg#sun`} href={`/icons/sun.svg#sun`}></use>
                : null}
              {!theme.value.dark ?
                <use xlink:href={`/icons/moon.svg#moon`} href={`/icons/moon.svg#moon`}></use>
                : null}
            </svg>
          </button>
        </nav>
      </div>
    </header >
  );
});
