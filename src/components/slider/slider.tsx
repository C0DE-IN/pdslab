import { component$, useStore, $, useVisibleTask$ } from "@builder.io/qwik";
import type { CarouselStore } from "../carousel/carousel";

export const Slider = component$((props: { carouselState: CarouselStore }) => {
    const state = useStore({
      prev: $(() => { }),
      next: $(() => { }),
      currentImage: 0,
      isPaused: false
    })
  
    useVisibleTask$(() => {
      let interval: any;
  
      const next = () => {
        state.next();
        interval = setTimeout(next, 5000);
      }
  
      state.next = $(() => {
        state.currentImage = (state.currentImage - 1 < 0 ? props.carouselState.carouselUrls.length - 1 : state.currentImage - 1);
      });
  
      state.prev = $(() => {
        state.currentImage = (state.currentImage + 1 >= props.carouselState.carouselUrls.length ? 0 : state.currentImage + 1);
      });
  
      interval = setTimeout(next, 5000);
  
      const carousel = document.querySelector(".carousel")!;
      
      carousel.addEventListener("mouseenter", () => {
        clearTimeout(interval);
        state.isPaused = true;
      });
      carousel.addEventListener("mouseleave", () => {
        if (!state.isPaused) return;
        interval = setTimeout(next, 5000);
        state.isPaused = false;
      });
      return () => {
        clearTimeout(interval);
        carousel.removeEventListener("mouseenter", () => {
          clearTimeout(interval);
          state.isPaused = true;
        });
        carousel.removeEventListener("mouseleave", () => {
          if (!state.isPaused) return;
          interval = setTimeout(next, 5000);
          state.isPaused = false;
        });
      }
  
    });
  
    return (
        <div id="carousel" class="carousel h-[70vh] w-full hover:cursor-grab overflow-hidden light-mode dark:dark-mode border-light dark:border-dark see-through dark:see-through">
          <div class="carousel-inner w-full h-full flex justify-center">
            <img  class={`animate-[slide_5s_ease-in-out] max-sm:object-cover`} src={props.carouselState.carouselUrls[state.currentImage]} />
            <button onClick$={state.prev} class="carousel-button carousel-button-prev absolute left-0 top-1/2 -translate-y-2/4 cursor-pointer z-10 w-50 h-50 border-light dark:border-dark see-through">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" stroke-width="2" stroke="currentColor" class="pt-2.5 pl-1.5 w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button onClick$={state.next} class="carousel-button carousel-button-next absolute right-0 top-1/2 -translate-y-2/4 cursor-pointer z-10 w-50 h-50  border-light dark:border-dark see-through">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" stroke-width="2" stroke="currentColor" class="pt-2.5 pl-2.5 w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
    );
  });