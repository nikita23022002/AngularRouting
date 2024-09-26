import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile = {
    name: '',
    email: '',
    phone: '',
    bio: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Profile Created:', form.value);
      // You can handle form submission logic here
      form.reset();
    }
  }
}
