import { Injectable } from '@angular/core';
import owners from '../data/owners.json';
import { Owner } from '../Owners.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  owners: Owner[] = owners;

  constructor() { }

  onGet() {
    return this.owners;
  }

  onGetOwner(id: Number) {
    return this.owners.find(s => s.id == id);
  }

  onAdd(owner: Owner) {
    this.owners.push(owner);
  }
  onDelete(id: Number){
    
  }
 
}