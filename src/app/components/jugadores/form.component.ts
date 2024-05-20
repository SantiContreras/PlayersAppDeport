import { Component, OnInit } from '@angular/core';
import { Jugador } from './jugador';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  jugador :Jugador = new Jugador()
  private  titulo : string = 'crear jugador'
  constructor() { }
   
  ngOnInit(): void {
  }

  createForm(){
    console.log(this.jugador)
  }

}
