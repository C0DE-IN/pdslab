import { component$ } from '@builder.io/qwik';
import Carousel from '~/components/carousel/carousel';

export default component$(() => {
    return (
        <div class="max-w-[100vw]">
            <Carousel dirPath={'public/images/gallery'} collage={true} />
            </div>
    )
})