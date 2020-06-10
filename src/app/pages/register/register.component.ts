import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) {}

  ngOnInit(): void {}

  onSubmit(form) {
    this.authService.newUser(form.value).subscribe(() => {
      this.authService.loggedUser = form;
      this.toastService.open({
        variant: 'success',
        toastTitle: 'Success!',
        toastText: 'Successfully registered!',
        actionType: 'icon'
      });
      this.router.navigate(['/recommended']);
    });
  }
}
