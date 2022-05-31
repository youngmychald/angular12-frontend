import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id!: number;
  contact!: Contact;
  contacts: Contact[] | undefined;
  constructor(private route: ActivatedRoute, private contactService: ContactService, 
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.contact = new Contact();
    this.contactService.getContactById(this.id).subscribe( data => {
      this.contact = data;
   });
  }

  back(): void {
    this.location.back()
  }

}
