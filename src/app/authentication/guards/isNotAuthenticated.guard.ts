import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { AuthService } from '../services/auth.service';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthService );
  const router = inject( Router );

  if ( authService.authStatus() === AuthStatus.authenticated ) {
    //! TODO: Redireccioanr a la página del usuario con un rol específico.
    router.navigateByUrl('/panel');
    return false;
  };

  return true;
};
