import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { environment } from 'src/environments/environment';
import { Solicitud } from '../../interfaces/solicitud.interface';
import { Worker } from '../../../shared/interfaces/worker.interface';
import { map } from 'leaflet';
import { User } from 'src/app/shared/interfaces/user-response.interface';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
})
export class SolicitudesComponent implements OnInit {

  public baseUrl: string = environment.baseUrl;

  private http: HttpClient = inject(HttpClient);
  private authService: AuthService = inject(AuthService);

  public user: User | null = this.authService.user();
  public solicitudes: Solicitud[] = [];

  private token = localStorage.getItem('token');
  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  ngOnInit() {
    if (!this.user) return;
    this.http.get<Solicitud[]>(`${this.baseUrl}/solicitud/${this.user?.id}`, { headers: this.headers })
      .subscribe({
        next: (solicitudes) => {
          if (Array.isArray(solicitudes)) {
            solicitudes.map(solicitud => {
              if (!solicitud.usuario_labor_id) return;
              this.http.get<Worker>(`${this.baseUrl}/user/${solicitud.usuario_labor_id}`, { headers: this.headers })
                .subscribe((trabajador: Worker) => {
                  this.solicitudes.push({ ...solicitud, trabajador });
                })
            });
          }
        },
        error: (error) => {
          console.log(error);
        }

      });



  }

}
