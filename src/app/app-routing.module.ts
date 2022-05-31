import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'create-contact', component: CreateContactComponent},
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'update-contact/:id', component: UpdateContactComponent},
  {path: 'contact-details/:id', component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
