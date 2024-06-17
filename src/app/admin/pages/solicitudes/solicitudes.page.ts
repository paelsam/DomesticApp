import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {
 

  constructor() { 
  }
  items: string[] = []; 
  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`${i}`);
    }
  }

}
