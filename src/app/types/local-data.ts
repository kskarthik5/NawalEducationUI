import { Student } from "./student";
import { Teacher } from "./teacher";

export interface LocalData {
    status?:boolean,
    role:'teacher' | 'student' | 'admin',
    data:Teacher | Student
}
