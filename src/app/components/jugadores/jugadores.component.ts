import { Component, OnInit } from '@angular/core';
import { PlayerServicesService } from 'src/app/services/player-services.service';
import { Jugador } from './jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores: Jugador[] = [ 
    {id:1 ,nombre:'santiago',apellido:'contreras',dni:'35667899',fechanac:'23/03/1990',altura:'1,78',posicion:'base',img:'llalla'},
    {id:1 ,nombre:'ramon',apellido:'aguilar',dni:'35667899',fechanac:'23/03/1990',altura:'1,78',posicion:'base',img:'llalla'},
    {id:1 ,nombre:'juan manuel',apellido:'galaxy',dni:'3589674',fechanac:'23/03/1990',altura:'1,78',posicion:'base',img:'llalla'},
    {id:1 ,nombre:'jorge roman',apellido:'lux',dni:'3558963',fechanac:'23/03/1990',altura:'1,78',posicion:'base',img:'llalla'},
    {id:1 ,nombre:'martin jose',apellido:'guzman',dni:'3647895',fechanac:'23/03/1990',altura:'1,78',posicion:'base',img:'llalla'}
  ];

  

  constructor(private jugadorService:PlayerServicesService) { }

  ngOnInit(): void {
  }

}
