import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/service/home.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public lat: number = 40.678178;
  public lng: number = -73.944158;
  public zoom: number = 12; 
  dataContact: any;
  Note : string;
  constructor( private _homeService: HomeService,
    private fbContact: FormBuilder,
    private appService: AppService,) {
      this.createdFormContact();
     }

  ngOnInit(): void {
  }
  createdFormContact(){
    this.dataContact = this.fbContact.group({
      Name: ['', Validators.required],
      PhoneNumber: ['', Validators.required],

    });
  }
SendContact(){
  if (this.dataContact.valid) {
    let dataPost : any = {};
    dataPost.Name = this.dataContact.value.Name;
    dataPost.PhoneNumber= this.dataContact.value.PhoneNumber;
    dataPost.Note = this.Note;
    this._homeService.createContacts(dataPost).subscribe(res => {
      console.log("orderSuccess call api", res);
    })
  } else {
    this.appService.notificautionStatusError('Vui lòng nhập đủ thông tin');
  }
 
  }
 
 
}

