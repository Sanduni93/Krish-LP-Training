import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../Pets.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'pa-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.scss']
})
export class EditpetComponent implements OnInit {
  id: any;
  petType: any;
  vaccination: any;
  doneDate: any;
  period: any;
  nextDate: any;
  ownerDetails: any;

  constructor(private router:Router, private routes:ActivatedRoute, private petsService: PetService) { }
  

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let pets: Pet = {
      id: form.value.id,
      petType: form.value.petType,
      vaccination: form.value.vaccination,
      doneDate: form.value.doneDate,
      period: form.value.period,
      nextDate: form.value.nextDate,
      ownerDetails: form.value.ownerDetails,
    }

    this.petsService.onAdd(pets);
    this.router.navigateByUrl('pets');

}
}