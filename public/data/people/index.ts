export {  PI } from './pi';
export {  PDFS } from './pdfs';
export {  PHDS } from './phds';
export {  STAFFS } from './staffs';
export {  ALUMNUS } from './alumnus';
export {  ALUMNUS_STAFF } from './alumnus_staff';

export interface Alumni {
    name: string;
    passout?: string;
    position: string;
    place: string;
}
export interface People {
    title?: string;
    name: string;
    imgSrc?: string;
    position: string;
    email?: string;
    credentials?: string[];
    summary?: string[];
    fellowships?: string;
}
export interface Content {
    title?: string;
    imgSrc?: string;
    list?: {
        title?: string;
        array?: string[];
    };
    text: string[];
}
export interface Award {
    name: string;
    from: string;
    year: string;
}
export interface Pi {
    title: string;
    name: string;
    imgSrc?: string;
    position: string;
    email?: string;
    started?: string;
    credentials?: string[];
    summary?: Content[];
    awards?: Award[];
}

