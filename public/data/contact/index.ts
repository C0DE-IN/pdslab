export interface Contact {
    name: string;
    position: string;
    lab_name: string;
    lab_number: string;
    department: string;
    division: string;
    institute: string;
    address: string[];
    email: string;
    tel: string;
    map: string;
  }

export const CONTACT: Contact = {
    name: "Dr. Patrick D' Silva",
    position: "Professor",
    lab_name: "Mitochondrial Biology Lab",
    lab_number: "FA-07",
    department: "Department of Biochemistry",
    division: "New Biological Sciences",
    institute: "Indian Institute of Science",
    address: ["Bangalore", "560012", "Karnataka", "India"],
    email: "patrick@iisc.ac.in",
    tel: "+91-80-2293-2821",
    map: "https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=new+biological+science+building,+iisc,+bangalore&amp;aq=&amp;sll=13.021009,77.565247&amp;sspn=0.025004,0.040169&amp;ie=UTF8&amp;hq=new+biological+science+building,&amp;hnear=Indian+Institute+of+Science,+CV+Raman+Rd,+Bangalore,+   Karnataka+560012&amp;ll=13.023792,77.563841&amp;spn=0.025003,0.040169&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=4096866765399146113&amp;output=embed"
}