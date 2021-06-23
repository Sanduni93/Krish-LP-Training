import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../Pets.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'pa-updatepet',
  templateUrl: './updatepet.component.html',
  styleUrls: ['./updatepet.component.scss']
})
export class UpdatepetComponent implements OnInit {

  pet: Pet = {
    id: 0,
    petType:'',
    vaccination: '',
    doneDate:'',
    period: '',
    nextDate: '',
    ownerDetails:''
  };

  constructor(private router:Router, private routes:ActivatedRoute, private petService: PetService) { }

  id: any;
  petType:any;
  vaccination: any;
  doneDate: any;
  period: any;
  nextDate: any;
  ownerDetails: any;

  ngOnInit(): void {

    if(this.id != 0 ){

      this.pet == this.petService.onGetPet(this.id);
     }
  }

}
