import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DbzComponent } from './pages/dbz/dbz.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { MyApiRoutingModule } from './pages/my-api/my-api-routing.module'; // Importa el módulo de rutas
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dbz', component: DbzComponent },
  { path: 'cocteles', component: CocktailsComponent },
  { path: 'my-api', loadChildren: () => import('./pages/my-api/my-api.module').then(m => m.MyApiModule),
    canActivate: [AuthGuard]
   }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MyApiRoutingModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

