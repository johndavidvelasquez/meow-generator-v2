import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedsComponent } from './components/breeds/breeds/breeds.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'breeds', component: BreedsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
