import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {RedditSearchServiceService} from './reddit-search-service.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RedditSearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
