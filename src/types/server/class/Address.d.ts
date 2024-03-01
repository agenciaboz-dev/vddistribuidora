import { Prisma } from "@prisma/client";
import { Socket } from "socket.io";
import { WithoutFunctions } from "./methodizer";
export type AddressPrisma = Prisma.AddressGetPayload<{}>;
export declare class Address {
    id: number;
    cep: string;
    street: string;
    number: string;
    district: string;
    uf: string;
    city: string;
    personId: number;
    constructor(data: AddressPrisma);
    static searchCep(cep: string, socket?: Socket): Promise<void>;
    init(data: AddressPrisma): void;
}
export type AddressForm = Omit<WithoutFunctions<Address>, "id" | "userId">;
