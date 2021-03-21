import { Patient } from './patient';
import { Doctor } from './doctor';

export class Message {
    message: string;
    error: string;
    patients: Patient[];
    doctors: Doctor[];
}