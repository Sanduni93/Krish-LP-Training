import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../Owners.model';
import { OwnerService } from '../services/owner.services';

@Component({
  selector: 'pa-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  
  owner: Owner = {
    id: 0,
    firstName:'',
    lastName: '',
    address:'',
    phoneNumber: '',
    petDetails: ''
  };
 
  constructor(private router:Router, private routes:ActivatedRoute, private ownerService: OwnerService) { 
  
  }
  id: any;
  firstName:any;
  lastName:any;
  address:any;
  phoneNumber:any;
  petDetails:any;
  
  ngOnInit(): void {

    if(this.id != 0 ){

    this.owner == this.ownerService.onGetOwner(this.id);
   }
  }

}

