import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15,
    },
    {
      nombre: 'Vegeta',
      poder: 1000
    }
  ];

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 1000
  }

  agregarNuevoPersonaje( personaje: Personaje ) {
    this.personajes.push(personaje)

  }



}
