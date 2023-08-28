import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { StoreModule } from '@ngrx/store';

import { LoggedGuard } from './shared/guards/logged/logged.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { userReducer } from './shared/stores/reducers/user.reducers';

registerLocaleData(localePt);

const LOCALE_PROVAIDER = {
  provide: LOCALE_ID,
  useValue: 'pt-BR',
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [LoggedGuard, LOCALE_PROVAIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
