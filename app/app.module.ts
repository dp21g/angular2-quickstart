import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {SharedModule}          from './shared/shared.module';
import { TitleComponent }  from './title.component';
import {UserService } from './user.service';

import {FormsModule} from '@angular/forms';
import {ContactModule} from './contact/contact.module';
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, ContactModule, routing, SharedModule],
  declarations: [
    AppComponent,
    TitleComponent,
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
