export interface userDTo {
    id: number;
    creationDate: string;
    name: string;
    family: string;
    phoneNumber: string;
    email: string;
    password: string;
    avatarName: string;
    isActive: boolean;
    gender: Gender;
    roles: Role[];
}
interface Role {
    roleId: number;
    roleTitle: string;
}
export enum Gender {
    نامشخص = 0,
    آقا = 1,
    خانم = 2
}