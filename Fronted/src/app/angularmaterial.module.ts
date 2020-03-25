import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatTableModule, MatPaginatorModule, MatSelectModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatTabsModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
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
        MatProgressSpinnerModule,
        ScrollingModule
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
        MatDividerModule,
        ScrollingModule
    ], 
    providers : [
        MatDatepickerModule,
    ]
})
export class AngularMaterialModule {

}