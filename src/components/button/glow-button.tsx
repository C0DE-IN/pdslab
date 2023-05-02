import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const GlowButton = component$((props: { name: string, link?: string }) => {

    useStylesScoped$(`
    @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(255,104,243, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(255,104,243, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(255,104,243, 0);
        }
      }
      
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    `)
    return <Link href={props.link} target="_blank">
        <div class="relative group w-min">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <button class="relative px-4 py-2.5 mb-5 bg-black rounded-lg  flex items-center animate-pulse duration-3s ease-out">
                <span class="flex items-center space-x-5 text-white bg-gradient-to-r-pink-600-purple-600 background-clip-text">{props.name}</span>
            </button>
        </div>
    </Link>
});