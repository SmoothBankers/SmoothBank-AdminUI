import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ManageCardsComponent } from './cards/manage-cards.component';
import { ManageLoansComponent } from './loans/manage-loans.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'view-admin', component: ViewAdminComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'users', component: ManageUsersComponent, canActivate: [AuthGuard] },
  { path: 'cards', component: ManageCardsComponent},
  { path: 'loans', component: ManageLoansComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ViewAdminComponent,
    ManageUsersComponent,
    HeaderComponent,
    UserDetailsComponent,
    ManageCardsComponent,
    ManageLoansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
