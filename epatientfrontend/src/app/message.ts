import { Patient } from './patient';
import { Doctor } from './doctor';
import { Admin } from './admin';

export class Message {
    message: string;
    error: string;
    patients: Patient[];
    doctors: Doctor[];
    admins: Admin[];
}