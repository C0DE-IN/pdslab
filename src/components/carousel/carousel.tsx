import { component$, useStore, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { isBrowser, isServer } from '@builder.io/qwik/build';
import * as fs from 'fs';
import * as path from 'path';
import { Collage } from '../collage/collage';
import { Slider } from '../slider/slider';

export interface FileInfo {
  path: string;
  files: string[];
}
export interface CarouselStore {
  carouselUrls: string[];
  collageArray: FileInfo[];
}
export default component$((props: { dirPath: string, collage?: boolean }) => {
  const carouselState = useStore<CarouselStore>({
    carouselUrls: [''],
    collageArray: [{ path: '', files: [''] }]
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
      const stringTree = JSON.stringify(tree1);
      const stringAlbum = JSON.stringify(album1);

      const regex = /"(\w+)":/g;
      const noQuoteStringTree = stringTree.replace(regex, '$1:');
      const objectsString = `export const tree = ${noQuoteStringTree};\nexport const album = ${stringAlbum};\n`;
      fs.writeFile(filePath, objectsString, (err) => {
        if (err) throw err;
      });
      if (target === 'album') {
        const { tree, album } = await import('../../../public/data/album/index.js');
        carouselState.carouselUrls = album;
        carouselState.collageArray = tree;

      }
      if (target === 'gallery') {
        const { tree, album } = await import('../../../public/data/gallery/index.js');
        carouselState.carouselUrls = album;
        carouselState.collageArray = tree;

      }
    }
    if (isBrowser) {
      if (target === 'album') {
        const { tree, album } = await import('../../../public/data/album/index.js');
        carouselState.carouselUrls = album;
        carouselState.collageArray = tree;

      }
      if (target === 'gallery') {
        const { tree, album } = await import('../../../public/data/gallery/index.js');
        carouselState.carouselUrls = album;
        carouselState.collageArray = tree;

      }
    }
  });

  useVisibleTask$(async ({track}) => {
    track(() => carouselState.carouselUrls);
  })

  return (
    <div class="space-y-2">
      <Slider carouselState={carouselState} />
      {props.collage ? <Collage carouselState={carouselState} /> : null}
    </div>
  )
});


