import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { jwtInterceptorFn, errorInterceptorFn, loadingInterceptorFn } from './core/interceptors/interceptorhelpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
        provideRouter(routes), 
        provideClientHydration(), 
        provideHttpClient(withInterceptors([errorInterceptorFn, loadingInterceptorFn, jwtInterceptorFn])),
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        importProvidersFrom(ToastrModule.forRoot()),
        importProvidersFrom(BrowserModule),
        importProvidersFrom(BrowserAnimationsModule),
        BrowserAnimationsModule,
        BrowserModule,
        provideAnimations(),
        provideNoopAnimations(),
        CommonModule
    ]
};
