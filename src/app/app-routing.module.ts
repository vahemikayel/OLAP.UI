import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { SimpleAnalizeComponent } from './data/simpleanalize/simpleanalize.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule), data: { breadcrumb: {skip: true} } },
  { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule), data: { breadcrumb: {skip: true} } },
  { 
    path: 'dataA', 
    children: [
      { 
          path: 'simpleanalize',
          component: SimpleAnalizeComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule,
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class AppRoutingModule { }
