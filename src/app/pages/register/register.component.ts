import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'ma-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterPage implements OnInit {
  username: string;
  email: string;
  password: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form) {
    this.authService.newUser(form.value).subscribe(() => {
      console.log('usuario inserido com sucesso!');
    });
  }
}
