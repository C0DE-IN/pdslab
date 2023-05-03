import { component$, useStore, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import type { FileInfo } from "../carousel/carousel";
import * as fs from 'fs';
import * as path from 'path';
import { isBrowser, isServer } from "@builder.io/qwik/build";

export const ModelsCollage = component$((props: { dirPath: string }) => {
    const modelState = useStore({
        modelUrls: ['']
    });

    useTask$(async () => {
        async function getTreeWithFiles(filename: string): Promise<Array<FileInfo>> {
            const stats = await fs.promises.lstat(filename);
            const resultMap = new Map<string, FileInfo>();
            if (stats.isDirectory()) {
                const children = await fs.promises.readdir(filename);
                await Promise.all(children.map(async (child) => {
                    const childrenResult = await getTreeWithFiles(path.posix.join(filename, child));
                    childrenResult.forEach((res) => {
                        if (!resultMap.has(res.path)) {
                            resultMap.set(res.path, { path: res.path, files: [] });
                        }
                        resultMap.get(res.path)?.files.push(...res.files);
                    });
                }));
            } else {
                const filePath = filename.replace('public', '');
                const dirname = path.dirname(filename);
                if (!resultMap.has(dirname)) {
                    resultMap.set(dirname, { path: dirname, files: [] });
                }
                resultMap.get(dirname)?.files.push(filePath);
            }
            return Array.from(resultMap.values());
        }

        const dirPath = props.dirPath;
        const target = dirPath.substring(dirPath.lastIndexOf('/') + 1);
        const filePath = `public/data/${target}/index.js`;

        if (isServer) {
            const tree1 = await getTreeWithFiles(props.dirPath);
            const album1 = tree1.reduce((accumulator, curr) => {
                return accumulator.concat(curr.files);
            }, [] as string[]);

            const stringAlbum = JSON.stringify(album1);

            const objectsString = `export const album = ${stringAlbum};\n`;
            fs.writeFile(filePath, objectsString, (err) => {
                if (err) throw err;
            });

            const album = await import('../../../public/data/models/index.js');
            modelState.modelUrls = album.album;
        }
        if (isBrowser) {
            const album = await import('../../../public/data/models/index.js');
            modelState.modelUrls = album.album;
        }
    });

    useVisibleTask$(async () => {

        if (isBrowser) {
            const album = await import('../../../public/data/models/index.js');
            modelState.modelUrls = album.album;
        }
        const thumbnails = modelState.modelUrls;

        const flexWrap = document.getElementById("flexWrap")!;

        let counter = 0;
        let row = 0;
        thumbnails.forEach(async (imgSrc) => {
            const a = document.createElement("a");
            a.href = "https://iisc.ac.in/decoding-the-molecular-crosstalk-behind-the-mitochondrial-function/"
            const img = document.createElement("img");
            img.alt = "model";
            img.src = imgSrc;
            img.classList.add("block", "object-cover", "object-center", "rounded-xl", "w-full", "h-full");

            a.appendChild(img);
            const col = document.createElement("div");
            if (row % 2 === 0) {
                col.classList.add("w-full", "p-2");
            } else {
                col.classList.add("w-1/2", "p-2");
            }
            col.appendChild(a);

            col.style.position = 'relative';

            flexWrap.appendChild(a);

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
});