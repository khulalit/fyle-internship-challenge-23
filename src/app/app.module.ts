import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { RepositryCardComponent } from './repositry-card/repositry-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { InputDataService } from './services/input-data.service';
import { SkteltonLoadingComponent } from './sktelton-loading/sktelton-loading.component';
import { UserRepoComponent } from './user-repo/user-repo.component';


const routes: Routes = [
  { path: '', component: HomeComponent,},
  { path: 'user/:username', component: UserRepoComponent, title : 'fyle-frontend-challenge'}
];

@NgModule({
  declarations: [
    AppComponent,
    RepositryCardComponent,
    UserInfoComponent,
    PaginationComponent,
    HomeComponent,
    SkteltonLoadingComponent,
    UserRepoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [InputDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
