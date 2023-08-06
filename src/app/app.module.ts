import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterbuttonComponent } from './components/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './components/counterdisplay/counterdisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { appState } from './services/store/global/app.state';
import { BlogFormDialogComponent } from './components/blog-form-dialog/blog-form-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './services/store/blog/blog.effect';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomCounterComponent,
    HomeComponent,
    CounterComponent,
    BlogComponent,
    NavbarComponent,
    BlogFormDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(appState),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BlogEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
