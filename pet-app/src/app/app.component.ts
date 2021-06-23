import { Component } from '@angular/core';
import owners from '.data/owners.json';
import pets from '.data/pets.json';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Animal Clinic';
}
