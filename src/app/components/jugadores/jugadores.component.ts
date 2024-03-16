import { Component, OnInit } from '@angular/core';
import { Jugador } from './jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores: Jugador[] = [ 
    {id:1 ,nombre:'santiago',apellido:'contreras',dni:'35667899',fechaNac:'23/03/1990',altura:'1,78',img:'llalla'}
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
