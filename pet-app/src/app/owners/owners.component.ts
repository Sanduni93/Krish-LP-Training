import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import owners from './data/owners.json';

import { OwnerService } from './services/owner.services';

@Component({
  selector: 'pa-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  // title:String = 'Shashee Animal Care'
  //owners: Owner[] = owners;
  owners: any[] = owners;
  showTable: boolean = true;

  constructor(private router:Router, private ownerService: OwnerService) {}

  ngOnInit(): void { 
  }

  toggleShowTable(){
    this.showTable = !this.showTable;
  }

 onDelete(id: number){
    for(let i = 0; i < this.owners.length; ++i){
      if (this.owners[i].id === id) {
          this.owners.splice(i,1);
      }
    }
 
}
}