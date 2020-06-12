import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'ma-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterPage implements OnInit {
  username: string;
  email: string;
  password: string;
  image: string;

  @ViewChild('uploadImage') uploadImage: ElementRef;
  @ViewChild('uploadLabel') uploadLabel: ElementRef;

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) {}

  ngOnInit(): void {}

  onFileChange(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.uploadImage.nativeElement.style.backgroundImage = `url(${e.target.result})`;
        this.uploadImage.nativeElement.classList.add('active');
        this.uploadLabel.nativeElement.innerText = file.name;
        this.image = e.target.result.toString();
      };

      reader.readAsDataURL(file);
    } else {
      console.error('invalid image!');
      this.toastService.open({
        variant: 'error',
        toastText: 'Error trying to upload image!',
        toastTitle: 'Oopsss :(',
      });
    }
  }

  onSubmit(form) {
    const newUser = {
      ...form.value,
      image: this.image,
    };

    this.authService.newUser(newUser).subscribe(() => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          username: newUser.username,
          email: newUser.email,
          image: newUser.image,
        })
      );
      this.toastService.open({
        variant: 'success',
        toastTitle: 'Success!',
        toastText: 'Successfully registered!',
        actionType: 'icon',
      });
      this.router.navigate(['/recommended']);
    });
  }
}
