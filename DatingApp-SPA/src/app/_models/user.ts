import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knowsAs: string;
    age: number;
    gender: string;
    create: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}