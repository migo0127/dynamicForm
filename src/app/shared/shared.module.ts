import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DragDropModule}  from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';

const ShareModule = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const MaterialModule = [
  DragDropModule,
  MatFormFieldModule,
  MatDialogModule,
];

const NgxBootstrap = [
  ModalModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...ShareModule,
    ...MaterialModule,
    ...NgxBootstrap,
    ModalModule.forRoot(),
  ],
  exports: [
    ...ShareModule,
    ...MaterialModule,
    ...NgxBootstrap,
  ]
})
export class SharedModule { }
