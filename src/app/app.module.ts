import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { RepositryCardComponent } from './repositry-card/repositry-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: ':username', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RepositryCardComponent,
    UserInfoComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
