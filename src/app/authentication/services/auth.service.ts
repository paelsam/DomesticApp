import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { CheckTokenResponse } from '../interfaces/check-token-response.interface';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.baseUrl;

  // Injectable dependencies
  private http = inject(HttpClient);

  // Signals
  private _fullName = signal<string | null>(null);
  private _role = signal<string | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  // Computed properties
  public fullName = computed(() => this._fullName());
  public role = computed(() => this._role());
  public authStatus = computed(() => this._authStatus());


  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(response: CheckTokenResponse): boolean {
    this._fullName.set(response.name + ' ' + response.lastname);
    this._role.set(response.rol);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', response.access_token);

    return true;
  }

  login(login: string, password: string, role: string): Observable<boolean> {
    const url = `${this.baseUrl}/login/${role}`;
    const body = { login, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map((response: LoginResponse) => this.setAuthentication(response)),
        catchError(error => throwError(() => error))
      );
  }

  logout() {
    localStorage.removeItem('token');
    this._authStatus.set(AuthStatus.notAuthenticated);
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/auth`;
    const token = localStorage.getItem('token');

    if (!token) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>(url, { headers })
      .pipe(
        map((response: CheckTokenResponse) => this.setAuthentication(response)),
        catchError(error => {
          console.log( error );
          this._authStatus.set(AuthStatus.notAuthenticated);
          return of(false);
        })
      );
  }
}
