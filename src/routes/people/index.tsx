import { component$ } from '@builder.io/qwik';
import { Link, routeLoader$ } from '@builder.io/qwik-city';
import type { Pi, People, Alumni } from '../../../public/data/people';
import { PI, PDFS, PHDS, STAFFS, ALUMNUS, ALUMNUS_STAFF } from '../../../public/data/people';

export const usePeopleLoader = routeLoader$(() => {
    return [PI, PDFS, PHDS, STAFFS, ALUMNUS, ALUMNUS_STAFF];
});

export default component$(() => {
    const [pi, pdfs, phds, staffs, alumnus, alumnus_staff] = usePeopleLoader().value;

    return (
        <div class="max-w-[100vw] flex flex-col gap-y-2 spacing light-mode dark:dark-mode border-light dark:border-dark see-through dark:see-through">
            <PiCard pi={pi as Pi} heading={"Principal Investigator"} />
            <PeopleCard people={pdfs as People[]} heading={"Post Doctoral Fellows"} />
            <PeopleCard people={phds as People[]} heading={"PhD Students"} />
            <PeopleCard people={staffs as People[]} heading={"Project Fellows"} />
            <TableCard alumnus={alumnus as Alumni[]} year={true} heading={"Alumnus"} />
            <TableCard alumnus={alumnus_staff as Alumni[]} year={false} heading={"Alumnus Staffs & Post Doctoral Fellows"} />
        </div>
    );
});

export const PiCard = component$((props: { pi: Pi, heading: string }) => {
    return (
        <Link href={"/people/patrick-d-silva"}>
            <div class="flex flex-col  border-light dark:border-dark spacing light-mode dark:darker-dark">
                <h2 class="text-center spacing  text-xl font-bold">{props.heading}</h2>
                {
                    props.pi.imgSrc ?
                        <img class="h-96 object-contain object-top rounded-lg" src={props.pi.imgSrc} />
                        : null
                }
                <div class="spacing">
                    <h2 class="font-bold  text-center">{props.pi.name}</h2>
                    <p class="text-center">{props.pi.position}</p>
                </div>
            </div>
        </Link>
    )
});

export const PeopleCard = component$((props: { people: People[], heading: string }) => {
    return (
        <div>
            <h2 class="text-center spacing  text-xl font-bold">{props.heading}</h2>

            <ul class="flex flex-row flex-wrap gap-y-6 spacing justify-evenly light-mode dark:darker-dark  border-light dark:border-dark" >
                {
                    props.people
                        .map((obj, index) => (
                            <li key={index}
                                class="overflow-hidden border-light dark:border-dark group-hover:border-dark  group-hover:dark:border-light  flex flex-col light-mode dark:dark-mode cursor-pointer min-[320px]:flex-[0_0_90%]  sm:flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_30%] 2xl:flex-[0_0_23%]" >
                                <Link href={"/people/" + obj.name.replace(/\s/g, "_")}>
                                    <div class="relative">
                                        <div class="absolute z-10 w-full text-white outline-1 bottom-0 tracking-wide  bg-gradient-to-t from-slate-700 to-transparent bg-opacity-25 rounded-xl p-3">
                                            <h2 class="mt-2 text-white opacity-100 font-bold ">{obj.title ? obj.title : null}{obj.name}</h2>
                                            <p class="opacity-100">{obj.position}</p>
                                        </div>
                                        {
                                            obj.imgSrc ?
                                                <img class="hover:scale-110 transition-all duration-500 h-72 w-full object-cover object-top rounded-md text-justify border-light dark:border-dark" src={obj.imgSrc} />
                                                : null
                                        }
                                    </div>
                                </Link>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
});

export const TableCard = component$((props: { alumnus: Alumni[], year: boolean, heading: string }) => {
    return (
        <div class="spacing card  border-light dark:border-dark flex flex-col justify-between">
            <h2 class="text-center spacing  text-xl font-bold">{props.heading}</h2>
            <span class="spacing light-mode dark:darker-dark border-light dark:border-dark">
                <table class="table-auto">
                    <thead >
                        <tr class="justify-between text-left">
                            <th>Name</th>
                            {props.year ? <th>Year</th> : null}
                            <th >Position</th>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            props.alumnus.map((obj, index) => (
                                <tr key={index}>
                                    <td class="break-words">{obj.name}</td>
                                    {props.year ? <td class="break-words">{obj.passout}</td> : null}
                                    <td class="break-words">{obj.position}</td>
                                    <td class="break-all">{obj.place}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </span>
        </div>
    )
});