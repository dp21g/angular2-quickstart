import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { HeroComponent }       from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import {SharedModule}          from '../shared/shared.module';
import { routing }             from './hero.routing';

// TODO: Remove in RC 6
import { HeroService }         from './hero.service';

@NgModule({
  imports: [ CommonModule, FormsModule, routing , SharedModule],
  // TODO: Remove in RC 6
  providers: [ HeroService ],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent
  ]
})
export class HeroModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/