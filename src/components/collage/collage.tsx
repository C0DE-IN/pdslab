import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { CarouselStore, FileInfo } from "../carousel/carousel";

export const Collage = component$((props: { carouselState: CarouselStore }) => {
  
  const thumbnails = props.carouselState.collageArray.map(item => item.files[0]).filter(Boolean);

  useVisibleTask$(() => {
    function extractFilesArray(tree: Array<FileInfo>, givenPath: string): string[] {
      let result: string[] = [];
      for (const item of tree) {
        if (item.path === givenPath) {
          result = item.files;
          break;
        }
      }
      return result;
    }

    const flexWrap = document.getElementById("flexWrap")!;

    let counter = 0;
    let row = 0;
    thumbnails.forEach(async (imgSrc) => {

      const img = document.createElement("img");
      img.alt = "gallery";
      img.src = imgSrc;
      img.classList.add("block", "object-cover", "object-center", "rounded-xl", "w-full", "h-full");

      const col = document.createElement("div");
      if (row % 2 === 0) {
        col.classList.add("w-1/3", "p-2");
      } else {
        col.classList.add("w-1/2", "p-2");
      }
      col.appendChild(img);

      col.style.position = 'relative';

      const overlay = document.createElement("div");
      overlay.classList.add("absolute", "p-2",  "top-0", "left-0", "w-full", "h-full", "see-through", "dark:see-through", "hidden", "rounded-xl");
      col.appendChild(overlay);
      col.addEventListener("click", async () => {props.carouselState.carouselUrls = result, window.scrollTo({top: (document.querySelector("header")!.offsetHeight), left: 0, behavior: 'smooth'});});

      const button = document.createElement("button");
      button.classList.add("absolute", "bottom-0", "right-0", "m-3", "p-3", "drop-shadow-xl" ,"rounded-xl", "overlay-gradient-top", "dark:overlay-gradient-dark-top", "hidden", "border-light", "font-bold", "dark:border-dark");
      button.innerHTML = "View Album";
      const displayPath = imgSrc.replace(/(\/[^/]+\.jpg)/g, "");

      const result = extractFilesArray(props.carouselState.collageArray, 'public' + displayPath);

      button.addEventListener("click", async () => {props.carouselState.carouselUrls = result, window.scrollTo({top: (document.querySelector("header")!.offsetHeight), left: 0, behavior: 'smooth'});});
      overlay.appendChild(button);

      const text = document.createElement("div");
      text.classList.add("absolute", "top-0", "left-0", "w-full", "p-3", "overlay-gradient-bottom", "dark:overlay-gradient-dark-bottom", "hidden", "hover:block",  "rounded-t-xl","font-bold");
      const imgPath = imgSrc;

      const newPath = imgPath.replace(/(\/images\/gallery\/)|(\/[^/]+\.jpg)/g, "").replace(/\//g, ">").split(">").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" > ").replace(/_/g, " ");

      text.innerHTML = newPath;
      overlay.appendChild(text);

      flexWrap.appendChild(col);

      col.addEventListener("mouseenter", () => {
        overlay.classList.remove("hidden");
        text.classList.remove("hidden");
        button.classList.remove("hidden");
      });

      col.addEventListener("mouseleave", () => {
        overlay.classList.add("hidden");
        text.classList.add("hidden");
        button.classList.add("hidden");
      });

      counter++;
      if (counter === 3 && (row % 2 === 0)) {
        counter = 0;
        row++;
      }
      if (counter === 2 && (row % 2 !== 0)) {
        counter = 0;
        row++;
      }
    });
  })

  return (
    <section id="flexWrap" class="light-mode dark:dark-mode border-light dark:border-dark see-through dark:see-through flex flex-wrap spacing gap-y-1"></section>
  )
})