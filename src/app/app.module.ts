import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';

import { StoreModule, StoreConfig } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { countryReducer } from './store/reducer';

const storeConfig: StoreConfig<any, any> = {
  initialState: {
    // Initial state configuration
    country: {
      id: 0,
      name: '',
      states: []
    }
  },
  metaReducers: [
    // Meta reducers configuration
  ],
};

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      country: countryReducer
    }, storeConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
