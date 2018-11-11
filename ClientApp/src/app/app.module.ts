import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { HabitacionesService } from './habitaciones/habitaciones.service';
import { HabitacionesFormComponent } from './habitaciones/habitaciones-form/habitaciones-form.component';
import { HeaderComponent } from './home/shared/header/header.component';
import { RecepcionComponent } from './recepcion/recepcion.component';
import { FooterComponent } from './home/shared/footer/footer.component';
import { RegisterComponent } from './account/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AccountService } from './account/account.service';
import { RecepcionService } from './recepcion/recepcion.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LogInterceptorService } from './services/log-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HabitacionesComponent,
    HabitacionesFormComponent,
    HeaderComponent,
    RecepcionComponent,
    FooterComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'habitaciones', component: HabitacionesComponent,canActivate:[AuthGuardService] },
      { path: 'habitaciones-agregar', component: HabitacionesFormComponent },
      { path: 'habitaciones-editar/:id', component: HabitacionesFormComponent },
      { path: 'register-login', component: RegisterComponent },
      { path: 'recepcion', component: RecepcionComponent }
    ])
  ],
  providers: [HabitacionesService,
    AuthGuardService,
    AccountService,
    RecepcionService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:LogInterceptorService,
    multi:true,
  },{
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
