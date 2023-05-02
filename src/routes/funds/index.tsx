import { component$ } from '@builder.io/qwik';
import { Link, routeLoader$ } from '@builder.io/qwik-city';
import type { Agency} from '../../../public/data/funds';
import { AGENCIES, PDFFUNDS } from '../../../public/data/funds';

export const useLoader = routeLoader$(async () => {
  return [AGENCIES, PDFFUNDS];
});

export default component$(() => {
  const [fundingAgencies, pdfAgencies] = useLoader().value;

  return (
    <div class="space-y-2 max-w-[100vw]">
      <div class="card light-mode dark:dark-mode  border-light dark:border-dark dark:see-through see-through">
        <h2 class="text-center text-xl font-bold spacing">Research Funding</h2>
        <h3 class="text-center text-lg font-bold spacing">We are greatful to our past and current funding agencies</h3>
        <div class="spacing">
          <Fund agencies={fundingAgencies} />
        </div>
      </div>
      <div class="card light-mode dark:dark-mode border-light dark:border-dark dark:see-through see-through">
        <h2 class="text-center text-xl font-bold spacing">Post Doctoral Funding</h2>
        <div class="spacing">
          <Fund agencies={pdfAgencies} />
        </div>
      </div>
    </div>
  )
});

export const Fund = component$((props: { agencies: Agency[] }) => {
  return <div>
    <ul class="flex-wrap flex flex-row gap-5 justify-evenly card  border-light dark:border-dark rounded-lg">
      {
        props.agencies.map((agency, index) => (
          <li class="justify-center flex flex-col flex-[0_0_30%]  light-mode dark:darker-dark border-light dark:border-dark" key={index}>
            <svg class="h-48 my-3 ">
              <use xlink:href={`${agency.logo}#${agency.svg_id}`} href={`${agency.logo}#${agency.svg_id}`}></use>
            </svg>
            <div class="spacing">
              <Link href={agency.link} target="_blank">
                <p class="text-center">{agency.title}</p>
              </Link>
            </div>
          </li>
        ))
      }
    </ul>
  </div>
});