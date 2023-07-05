import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map((user) => {
        if (user) return true;
        console.log('you shall not pass!');
        return false;
      })
    );
  }
}
