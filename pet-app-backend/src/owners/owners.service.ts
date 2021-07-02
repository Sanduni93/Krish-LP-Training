import { Injectable, NotFoundException } from '@nestjs/common';
import { Owner } from './Owner.model';
import {v1 as uuid} from 'uuid';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';
import { OwnerCreateDto } from './OwnerCreate.dto';

@Injectable()
export class OwnersService {
    
    private owners: Owner[]= [];

    getAllOwners(){
        return this.owners;
    }

    createOwner(ownerCreateDto: OwnerCreateDto){

        const{
            firstName,
            lastName,
            address,
            phoneNumber,
            petDetails
            } = ownerCreateDto
        
        const owner ={
            id:uuid(),
            firstName,
            lastName,
            address,
            phoneNumber,
            petDetails
        }
        this.owners.push(owner);
        return owner;

    }

    ownerSearch(ownerSearchDto:OwnerSearchDto){
        const{id,name} = ownerSearchDto;
        let owners = this.getAllOwners();
        if(id){
        owners = owners.filter(owner => owner.id === id);
        }
        if(name){
        owners = owners.filter(owner => owner.firstName.includes(name) || owner.lastName.includes(name));
        }

        return owners;       
    }

    getOwnerById(id: string):Owner {
        const owners = this.getAllOwners();
        let owner = owners.find(owner => owner.id === id);
        if(!owner){

            throw new NotFoundException(`${id} does not exist`);
        }
        return owner;

    }

    updateOwner(ownerUpdatedto: OwnerUpdateDto):Owner{
        const{id,address} = ownerUpdatedto;

        let owner = this.getOwnerById(id);
        owner.address = address;
        return owner;
    }

    deleteOwner(id:string):boolean{
        let owners = this.getAllOwners();
        this.owners = owners.filter(owner => owner.id != id);

        return (owners.length != this.owners.length);

    }
}
