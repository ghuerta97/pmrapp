import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatTableModule, MatPaginatorModule, MatSelectModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatTabsModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
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
        MatPaginatorModule,
        MatSelectModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDividerModule,
        MatTabsModule,
        MatDialogModule,
        MatProgressSpinnerModule
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
        MatPaginatorModule,
        MatSelectModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDividerModule,
        MatTabsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatDividerModule
    ], 
    providers : [
        MatDatepickerModule,
    ]
})
export class AngularMaterialModule {

}