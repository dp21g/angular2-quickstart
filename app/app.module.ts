import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HighlightDirective }  from './highlight.directive';
import { TitleComponent }  from './title.component';
import {UserService } from './user.service';

import {FormsModule} from '@angular/forms';
import {HighlightDirective as ContactHighlightDirective} from './contact/highlight.directive';
import {ContactModule} from './contact/contact.module';
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, ContactModule, routing],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
