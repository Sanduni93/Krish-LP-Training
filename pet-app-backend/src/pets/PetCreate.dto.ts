import { IsNotEmpty } from "class-validator"

export class PetCreateDto{
    id: string
    @IsNotEmpty()
    petType: string
    vaccination: string
    doneDate: string
    period: string
    nextDate: string
    @IsNotEmpty()
    ownerDetails: string
}