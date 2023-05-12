export {  MESSAGES } from './messages';

export interface para {
    sub_heading:string;
    content:string[];
}

export interface mess {
    title:string;
    content:{
        heading:string;
        topics: para[]
        contact:string;
        focus:string;
        focus_detail:string;
    }
    vacancy:string;
    publications:string[];
}
