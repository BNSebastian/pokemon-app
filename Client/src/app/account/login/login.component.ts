import { AccountService } from 'src/app/_services/account.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) {}

  login() {
    this.accountService.login(this.model).subscribe((response) => {
      this.router.navigateByUrl('/');
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
