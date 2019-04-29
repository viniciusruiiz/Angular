import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiDetailComponent } from './api-detail/api-detail.component';
import { ApiListComponent } from './api-list/api-list.component';

@NgModule({
  declarations: [ApiDetailComponent, ApiListComponent],
  imports: [
    CommonModule
  ],exports: [
    ApiDetailComponent,
    ApiListComponent
  ]
})
export class ApiModule { }
