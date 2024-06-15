import { Component, OnInit, inject } from '@angular/core';
import { LaborService } from 'src/app/shared/services/labor.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent  implements OnInit {

  public baseUrl = environment.baseUrl;

  private laborService = inject(LaborService);



  ngOnInit() {
    this.laborService.getLaboresDetails().subscribe((response) => {
      console.log(response);
    });
  }

}
