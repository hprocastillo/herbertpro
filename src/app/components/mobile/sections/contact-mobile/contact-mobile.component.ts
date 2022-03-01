import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageSvcService} from "../../../../services/message-svc.service";

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent implements OnInit {


  newForm: FormGroup;
  successMessage: boolean = false;
  today = Date();

  constructor(private fb: FormBuilder, private messageSvc: MessageSvcService) {

    this.newForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  saveMessage() {
    if (this.newForm.valid) {
      const message = this.newForm.value;
      message.createdAt = this.today;
      this.messageSvc.saveMessage(message).then();
      this.newForm.reset();
      this.successMessage = true;
    }
  }

  closeAlert() {
    this.successMessage = false;
  }
}
