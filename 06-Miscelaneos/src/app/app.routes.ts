import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

const APP_ROUTE: Routes = [
  { path: 'Home', component: HomeComponent },
  {
    path: 'Usuario/:id', component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);
