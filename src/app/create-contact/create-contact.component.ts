import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
//import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  public createContactForm: any
  public isValidFlg:boolean = true;

  public get firstName(): FormControl {
    return this.createContactForm.get('firstName');
  }
  
  public get lastName (): FormControl{
    return this.createContactForm.get('lastName');
  } 
  
  public get emailId (): FormControl{
    return this.createContactForm.get('emailId');
  } 
  
  public get address (): FormControl{
    return this.createContactForm.get('address');
  }
  
  public get phoneNumber (): FormControl{
    return this.createContactForm.get('phoneNumber');
  }

  public get dateOfBirth (): FormControl{
    return this.createContactForm.get('dateOfBirth');
  } 

  contact: Contact = new Contact();
  constructor(private contactService: ContactService,
    private router: Router,
    private location: Location,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createContactForm = new FormGroup({
      'firstName' : new FormControl('', Validators.required),
      'lastName' : new FormControl ('', Validators.required),
      'emailId' : new FormControl('', Validators.required),
      'address' : new FormControl('', Validators.required),
      'phoneNumber' : new FormControl('', Validators.required),
      'dateOfBirth' : new FormControl('', Validators.required),
    });
   }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe( data =>{
      console.log(data);
      //this.goToContactList();
    },
    error => console.log(error));
  }

  goToContactList(){
    this.router.navigate(['/contacts']);
  }
  
  onSubmit(){
    console.log(this.contact);
    this.saveContact();
    this.goToContactList();
  }

  back(): void {
    this.location.back()
  }
}
