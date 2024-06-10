import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject( AuthService );
  const router = inject( Router );

  if ( authService.authStatus() === AuthStatus.authenticated ) { return true };
  if ( authService.authStatus() === AuthStatus.checking ) { return false };

  router.navigateByUrl('/authentication/login');
  return false;
};
