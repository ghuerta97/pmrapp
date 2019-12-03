import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
@NgModule({
    imports : [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ]
})
export class AngularMaterialModule {

}