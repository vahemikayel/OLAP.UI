// import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ErrorInterceptor } from './core/interceptors/error.interceptor';
// import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
// import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
// import { CoreModule } from './core/core.module';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import { SharedModule } from './../shared/shared.module';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//     CoreModule,
//     NgxSpinnerModule,
//     SharedModule
//   ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
//   ],
//   bootstrap: [AppComponent],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class AppModule { }
