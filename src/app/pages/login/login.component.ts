import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

export interface User {
  email: string;
  password: string;
  username: string;
  image: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form) {
    this.authService.getUser(form.value).subscribe((user: User) => {
      if (user[0]) {
        if (user[0].password === form.value.password) {
          localStorage.setItem(
            'user',
            JSON.stringify({
              username: user[0].email,
              email: user[0].email,
              image: user[0].image,
            })
          );
          this.router.navigate(['/recommended']);
        }
      }
    });
  }
}
