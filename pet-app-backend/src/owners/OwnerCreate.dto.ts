import { IsNotEmpty } from "class-validator"

export class OwnerCreateDto{

    id: string
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    address: string
    phoneNumber: string
    petDetails: string
}