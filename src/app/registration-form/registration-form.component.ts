import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  firstName: any;
  lastName: any;
  email: any;
  phoneNumber: any;
  bio: any;
  image1: any;
  image2: any;
  image3: any;
  video: any;

  submitForm() {
    // Submit form data to backend (you need to implement this)
    console.log('Form submitted!');
  }

  handleImageUpload(event: any, imageNumber: number) {
    const file = event.target.files[0];
    switch (imageNumber) {
      case 1:
        this.image1 = file;
        break;
      case 2:
        this.image2 = file;
        break;
      case 3:
        this.image3 = file;
        break;
      default:
        break;
    }
  }

  handleVideoUpload(event: any) {
    this.video = event.target.files[0];
  }
}
