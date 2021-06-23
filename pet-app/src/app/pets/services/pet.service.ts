import { Injectable } from '@angular/core';
import pets from '../data/pets.json';
import { Pet } from '../Pets.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets: Pet[] = pets;
  constructor() { }

  onGet() {
    return this.pets;
  }

  onGetPet(id: Number) {
    return this.pets.find(s => s.id == id);
  }

  onAdd(owner: Pet) {
    this.pets.push(owner);
  }
  
  onDelete(id: Number){
    
  }
}
