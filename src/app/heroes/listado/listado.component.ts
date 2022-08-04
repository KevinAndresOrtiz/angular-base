import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor','Capitan America']
    heroeDeleted: string = '';
    borrarHeroe(){
      this.heroeDeleted = this.heroes.splice(this.heroes.length-1,1)[0]
    }
}
