import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, ROUTES} from '@angular/router';
import { EditComponent } from './owners/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './owners/update/update.component';
import { PetsComponent } from './pets/pets.component';

import { UpdatepetComponent } from './pets/updatepet/updatepet.component';

import { EditpetComponent } from './pets/editpet/editpet.component';




@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    HomeComponent,
    EditComponent,
   UpdateComponent,
   PetsComponent,
   EditpetComponent,
   UpdatepetComponent,
   
   
   
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'owners', component:OwnersComponent},
    
      {path:'pets', component:PetsComponent},
     
      {path:'home', component:HomeComponent},
      {path:'owners/add/:id', component:EditComponent},
      {path:'owners/update/:id', component:UpdateComponent},
      {path:'pets/add/:id', component:EditpetComponent},
      {path:'pets/updatepet/:id', component:UpdatepetComponent},
      {path:'', redirectTo: 'home', pathMatch:'full'},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
