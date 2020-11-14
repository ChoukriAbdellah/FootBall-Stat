import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SuperheroService } from './shared/superhero.service';
import { PowerPipe } from './shared/power.pipe';
import { PowerstatPipe } from './shared/powerstat.pipe';
import { SfilterPipe } from './shared/sfilter.pipe';
import { FavfilterPipe } from './shared/favfilter.pipe';
import { PreloaderComponent } from './helpers/preloader/preloader.component';
import { NotfoundComponent } from './helpers/notfound/notfound.component';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoriteComponent,
    NavbarComponent,
    HeroDetailsComponent,
    HeroListComponent,
    PowerPipe,
    PowerstatPipe,
    SfilterPipe,
    FavfilterPipe,
    PreloaderComponent,
    NotfoundComponent,
    TeamComponent,
    TeamListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent },
      { path: 'favorite', component: FavoriteComponent },
      { path: '**', component: SearchComponent }
    ])
  ],
  providers: [SuperheroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
