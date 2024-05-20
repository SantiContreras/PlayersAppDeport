import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { Routes , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/jugadores/form.component';
import { FormsModule } from '@angular/forms';



const routes:Routes = [
  { path:'',redirectTo:'' ,pathMatch:'full'},
  {path:'jugadores',component:JugadoresComponent},
  {path:'listajugadores',component:ListPlayersComponent},
  {path:'jugadores/nuevo', component:FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPlayersComponent,
    JugadoresComponent,
    FormComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
