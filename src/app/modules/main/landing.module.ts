import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LadingRoutingModule} from './landing-routing.module';
import {LandingComponent} from './landing/landing.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LadingRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class LandingModule {
}
