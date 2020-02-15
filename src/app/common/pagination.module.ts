import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    declarations: [
        PaginationComponent,
    ],
    exports: [
        PaginationComponent,
    ]
})
export class PaginationModule { }
