import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor() { }
  items: string[] = []; 
  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`${i}`);
    }
  }

}
