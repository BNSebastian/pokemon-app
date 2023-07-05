import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) {}

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
