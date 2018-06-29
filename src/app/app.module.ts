import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/common/nav/nav.component';
import { UsersComponent } from './components/common/users/users.component';
import { UserDetailComponent } from './components/common/user-detail/user-detail.component';

const appRoutes = [
  {path: "nav", component:NavComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
