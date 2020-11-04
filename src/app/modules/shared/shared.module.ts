import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import { VotingCardComponent } from './components/voting-card/voting-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    VotingCardComponent,
    FooterComponent,
    SnackBarComponent,
  ],
  exports: [
    NavbarComponent,
    VotingCardComponent,
    FooterComponent,
    SnackBarComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class SharedModule {
}
