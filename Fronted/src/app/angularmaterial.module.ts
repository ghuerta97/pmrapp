import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { CommonModule } from '@angular/common';
@NgModule({
    imports : [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class AngularMaterialModule {

}