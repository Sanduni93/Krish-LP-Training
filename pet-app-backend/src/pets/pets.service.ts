import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './Pet.model';
import {v1 as uuid} from 'uuid';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';
import { PetCreateDto } from './PetCreate.dto';

@Injectable()
export class PetsService {

    private pets: Pet[] = [];

    getAllPets(){
        return this.pets;
    }
    createPet(petCreateDto: PetCreateDto){

        const{
            petType,
            vaccination,
            doneDate,
            period,
            nextDate,
            ownerDetails
            } = petCreateDto
    
        const pet = {
            id: uuid(),
            petType,
            vaccination,
            doneDate,
            period,
            nextDate,
            ownerDetails
        }
        this.pets.push(pet);
        return pet;
    }

    petSearch(petSearchDto:PetSearchDto){
        const {id} = petSearchDto;
        let pets = this.getAllPets();
        if(id){
            pets = pets.filter(pet => pet.id === id);
        }

        return pets;
    }

    getPetById(id: string):Pet {
        const pets = this.getAllPets();
        let pet = pets.find(pet => pet.id === id);
        if(!pet){

            throw new NotFoundException(`${id} does not exist`);
        }
        return pet;

    }

    updatePet(petUpdatedto: PetUpdateDto):Pet{
        const{id,vaccination} = petUpdatedto;

        let pet = this.getPetById(id);
        pet.vaccination = vaccination;
        return pet;
    }

    deletePet(id:string):boolean{
        let pets = this.getAllPets();
        this.pets = pets.filter(pet => pet.id != id);

        return (pets.length != this.pets.length);

    }
}
