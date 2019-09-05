import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '.././app-routing.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {NgMaterialModule} from '../NgMaterialModule';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgMaterialModule
  ],
  declarations: [HeaderComponent, FooterComponent, ConfirmationDialogComponent],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
