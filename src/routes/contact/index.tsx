import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { Contact} from '../../../public/data/contact';
import { CONTACT } from '../../../public/data/contact';

export const useContactData = routeLoader$(async (): Promise<Contact> => {
  return CONTACT;
});
export default component$(() => {
  const contact = useContactData().value;
  return (
    <div class="border-light dark:border-dark max-w-[100vw]">
      <ul class="w-full min-h-max flex max-md:flex-col md:flex-row place-content-center gap-x-5 spacing card light-mode dark:dark-mode border-light dark:border-dark">
        <li class="flex flex-col max-md:flex-[0_0_90%] md:flex-[0_0_45%] card gap-y-3 ">
          <h2 class="text-center text-2xl font-bold spacing">Contact Information</h2>
            <div class="p-8 light-mode dark:darker-dark border-light dark:border-dark " >
              <h1 class="text-2xl font-bold">{contact.name}</h1>
              <h3 class="text-base text-sky-900 dark:text-sky-400">{contact.position}</h3>
              <h2 class="text-xl font-bold">{contact.lab_name}</h2>
              <h3 class="">{contact.lab_number}, {contact.department}</h3>
              <h3 class="">{contact.division}</h3>
              <h3 class="">{contact.institute}</h3>
              {
                contact.address.map((obj, index) => (
                  <h3 class="text-base" key={index}>{obj}</h3>
                ))
              }
              <span class="flex flex-col">
                <a class="text-sky-900 dark:text-sky-400" href={`mailto:${contact.email}`} >
                  <span class=" flex flex-row items-center">
                    <svg class="w-[32px] h-[32px] mr-1">
                      <use xlink:href={`/icons/mail.svg#mail`} href={`/icons/mail.svg#mail`}></use>
                    </svg>
                    <span>
                      {contact.email}
                    </span>
                  </span>
                </a>

                <a class="text-sky-900 dark:text-sky-400" href={`tel:${contact.tel}`}>
                  <span class=" flex flex-row items-center">
                    <svg class="w-[32px] h-[32px] mr-1">
                      <use xlink:href={`/icons/phone.svg#phone`} href={`/icons/phone.svg#phone`}></use>
                    </svg>
                    <span>
                      {contact.tel}
                    </span>
                  </span>
                </a>
              </span>
            </div>
        </li>
        <li class="flex flex-col max-md:flex-[0_0_90%] md:flex-[0_0_45%] card gap-y-3">
          <h2 class="text-center text-2xl font-bold spacing">Map & Navigation</h2>
          <div class="see-through grow border-light dark:border-dark" >
            <iframe class="h-full w-full border-light dark:border-dark" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=new+biological+science+building,+iisc,+bangalore&amp;aq=&amp;sll=13.021009,77.565247&amp;sspn=0.025004,0.040169&amp;ie=UTF8&amp;hq=new+biological+science+building,&amp;hnear=Indian+Institute+of+Science,+CV+Raman+Rd,+Bangalore,+   Karnataka+560012&amp;ll=13.023792,77.563841&amp;spn=0.025003,0.040169&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=4096866765399146113&amp;output=embed"></iframe>
          </div>
        </li>
      </ul>
    </div>
  )
});