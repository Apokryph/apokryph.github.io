import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyDoqcHbLPwFumM82cl3Rgi4_j_iUMHCzR4',
  authDomain: 'apokryph-angular-games.firebaseapp.com',
  projectId: 'apokryph-angular-games',
  storageBucket: 'apokryph-angular-games.appspot.com',
  messagingSenderId: '30674594990',
  appId: '1:30674594990:web:df69165bcca3da2fb8913f',
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom([BrowserAnimationsModule]),
    importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig)),
    importProvidersFrom(AngularFirestoreModule),
  ],
};
