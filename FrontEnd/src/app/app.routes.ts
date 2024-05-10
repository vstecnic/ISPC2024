import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IniciarSesionComponent } from './pages/auth/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: "Home", component:HomeComponent},
    {path: "Inicio", component:HomeComponent},
    {path:"destinos", component: DestinosComponent},
    {path:"contacto", component: ContactoComponent},
    {path:"nosotros", component: NosotrosComponent},
    {path:"iniciar-sesion", component:IniciarSesionComponent},
    {path:"registro", component:RegistroComponent},
    {path: '**', component: Pagina404Component},
];
