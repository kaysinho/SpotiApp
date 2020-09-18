import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './pages/artist/artist.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'search', component: SearchComponent},
  {path : 'artist/:id', component: ArtistComponent},
  {path : '', pathMatch:'full', redirectTo:'home'},
  {path : '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
