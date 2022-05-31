import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact'
import { ContactService } from '../contact.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  /*term string to compare with every property of the contact list */
  public term!: string;
  
  contacts: Contact[] | undefined;

  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.getContacts();
  }

  private getContacts(){
    this.contactService.getContactList().subscribe(data => {
      this.contacts = data;
    });
  }

  contactDetails(id: number){
    this.router.navigate(['contact-details', id]);
  }

  updateContact(id: number){
    this.router.navigate(['update-contact', id]);
  }

  deleteContact(id: number){
    this.contactService.deleteContact(id).subscribe( data => {
      console.log(data);
      this.getContacts();
    })
  }
}
