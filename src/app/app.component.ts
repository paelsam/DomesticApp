import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './authentication/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './authentication/interfaces/auth-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // public authService = inject( AuthService );
  // public router = inject( Router );


  // public finishedAuthCheck = computed<boolean>(() => {
  //   if ( this.authService.authStatus() === AuthStatus.checking ) return false;
  //   return true;
  // });

  // public authStatusChangedEffect = effect(() => {

  //   switch( this.authService.authStatus() ) {
  //     case AuthStatus.checking:
  //       break;
  //     case AuthStatus.authenticated:
  //       const currentRoute = this.router.url;
  //       if ( currentRoute === '/404' || currentRoute === '/authentication/login' || currentRoute === '/auth/register' ) {
  //         this.router.navigateByUrl('/panel');
  //       }
  //       break;
  //     case AuthStatus.notAuthenticated:
  //       this.router.navigateByUrl('/authentication/login');
  //       break;
  //   }
  // })

}
