import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-servicios',
  templateUrl: './buscar-servicios.page.html',
  styleUrls: ['./buscar-servicios.page.scss'],
})
export class BuscarServiciosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

}
