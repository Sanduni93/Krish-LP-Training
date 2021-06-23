import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import pets from './data/pets.json';
import { PetService } from './services/pet.service';

@Component({
  selector: 'pa-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
 pets: any [] = pets;
  showTable: boolean = true;
  constructor(private router:Router, private petService: PetService) { }

  ngOnInit(): void {
  }

  toggleShowTable(){
    this.showTable = !this.showTable;
  }
  onDelete(id: number){
    for(let i = 0; i < this.pets.length; ++i){
      if (this.pets[i].id === id) {
          this.pets.splice(i,1);
      }
    }
 
}

}
