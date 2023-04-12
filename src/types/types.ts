import { data } from "../data/FeeData";

export type FeeType = "Exam Fee" | "Application Fee"  | keyof typeof data | null;

export type NationalityType = "INDIAN" | "FOREIGN" |  "NRI" |  "SAARC"| keyof typeof data["Exam Fee"] | keyof typeof data["Application Fee"] | null;


export type CourseType = "Medical" |  "Dental" | "Ayurveda" | null;

export type LevelType = "UG" | "UG-DIPLOMA" | "PG" | "Ph.D" | null; 

export type TotalFeeType = number;




export interface StateType {
    feeType:FeeType,
    nationality:NationalityType,
    course:CourseType,
    level:LevelType,
    totalFee:TotalFeeType,

}

