import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Owner } from '../Owners.model';
import { OwnerService } from '../services/owner.services';


@Component({
  selector: 'pa-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  

  constructor (private router:Router, private routes:ActivatedRoute, private ownerService: OwnerService) { }
 id: any;
  firstName:any;
  lastName:any;
  address:any;
  phoneNumber:any;
  petDetails:any;

  ngOnInit(): void {


  
  }
 

  onSubmit(form: NgForm){
    let owners: Owner = {
      id: form.value.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      phoneNumber: form.value.phoneNumber,
      petDetails: form.value.petDetails,
    }

    this.ownerService.onAdd(owners);
    this.router.navigateByUrl('owners');
  }

}
