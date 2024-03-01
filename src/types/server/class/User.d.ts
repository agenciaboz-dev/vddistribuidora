import { Prisma } from "@prisma/client";
import { Socket } from "socket.io";
import { LoginForm } from "../types/shared/user/login";
import { WithoutFunctions } from "./helpers";
export type UserPrisma = Prisma.UserGetPayload<{}>;
export type UserForm = Omit<WithoutFunctions<User>, "id">;
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    cpf: string;
    constructor(id: number);
    init(): Promise<void>;
    static signup(socket: Socket, data: UserForm): Promise<void>;
    static login(socket: Socket, data: LoginForm): Promise<void>;
    load(data: UserPrisma): void;
}
export default User;
