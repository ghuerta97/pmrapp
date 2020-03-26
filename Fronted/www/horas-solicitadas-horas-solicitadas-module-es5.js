(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["horas-solicitadas-horas-solicitadas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/horas-solicitadas/horas-solicitadas.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/horas-solicitadas/horas-solicitadas.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"mt-3\" *ngFor=\"let hora of horaSolicitadas\">\r\n    <mat-card-header>\r\n      <mat-card-title>{{hora.especialidad.nombre}}</mat-card-title>\r\n    <mat-card-subtitle>{{hora.fechaConsulta}} {{hora.horaConsulta}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      Dr. {{ hora.profesional.nombres }} {{ hora.profesional.apellidos }}\r\n    {{ hora.observacion }}\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button color=\"danger\" (click)=\"openDialogCancelar(hora)\" >Cancelar</button>\r\n      <button mat-button color=\"primary\" >Editar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/horas-solicitadas/horas-solicitadas-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/horas-solicitadas/horas-solicitadas-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HorasSolicitadasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorasSolicitadasPageRoutingModule", function() { return HorasSolicitadasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _horas_solicitadas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horas-solicitadas.page */ "./src/app/pages/horas-solicitadas/horas-solicitadas.page.ts");




var routes = [
    {
        path: '',
        component: _horas_solicitadas_page__WEBPACK_IMPORTED_MODULE_3__["HorasSolicitadasPage"]
    }
];
var HorasSolicitadasPageRoutingModule = /** @class */ (function () {
    function HorasSolicitadasPageRoutingModule() {
    }
    HorasSolicitadasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HorasSolicitadasPageRoutingModule);
    return HorasSolicitadasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/horas-solicitadas/horas-solicitadas.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/horas-solicitadas/horas-solicitadas.module.ts ***!
  \*********************************************************************/
/*! exports provided: HorasSolicitadasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorasSolicitadasPageModule", function() { return HorasSolicitadasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _horas_solicitadas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horas-solicitadas-routing.module */ "./src/app/pages/horas-solicitadas/horas-solicitadas-routing.module.ts");
/* harmony import */ var _horas_solicitadas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./horas-solicitadas.page */ "./src/app/pages/horas-solicitadas/horas-solicitadas.page.ts");
/* harmony import */ var src_app_angularmaterial_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/angularmaterial.module */ "./src/app/angularmaterial.module.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var HorasSolicitadasPageModule = /** @class */ (function () {
    function HorasSolicitadasPageModule() {
    }
    HorasSolicitadasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _horas_solicitadas_routing_module__WEBPACK_IMPORTED_MODULE_5__["HorasSolicitadasPageRoutingModule"],
                src_app_angularmaterial_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot()
            ],
            declarations: [
                _horas_solicitadas_page__WEBPACK_IMPORTED_MODULE_6__["HorasSolicitadasPage"],
                _horas_solicitadas_page__WEBPACK_IMPORTED_MODULE_6__["DialogCancelar"]
            ],
            entryComponents: [
                _horas_solicitadas_page__WEBPACK_IMPORTED_MODULE_6__["DialogCancelar"]
            ]
        })
    ], HorasSolicitadasPageModule);
    return HorasSolicitadasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/horas-solicitadas/horas-solicitadas.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/horas-solicitadas/horas-solicitadas.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvcmFzLXNvbGljaXRhZGFzL2hvcmFzLXNvbGljaXRhZGFzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/horas-solicitadas/horas-solicitadas.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/horas-solicitadas/horas-solicitadas.page.ts ***!
  \*******************************************************************/
/*! exports provided: HorasSolicitadasPage, DialogCancelar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorasSolicitadasPage", function() { return HorasSolicitadasPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCancelar", function() { return DialogCancelar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_horas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/horas.service */ "./src/app/services/horas.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var HorasSolicitadasPage = /** @class */ (function () {
    function HorasSolicitadasPage(horaService, dialog) {
        this.horaService = horaService;
        this.dialog = dialog;
        this.horaSolicitadas = [];
    }
    HorasSolicitadasPage.prototype.ngOnInit = function () {
        var _this = this;
        var value = localStorage.getItem('user_rut');
        if (value) {
            this.horaService.getHorasByPacienteRut(value).subscribe(function (result) {
                _this.horaSolicitadas = result;
                console.log(_this.horaSolicitadas);
            });
        }
    };
    HorasSolicitadasPage.prototype.openDialogCancelar = function (hora) {
        var _this = this;
        var dia = this.dialog.open(DialogCancelar, {});
        dia.beforeClosed().subscribe(function (data) {
            if (data.cancelar) {
                hora.asignada = false;
                hora.paciente = null;
                _this.horaService.cancelarHoraMedica(hora)
                    .subscribe(function (data) {
                    _this.ngOnInit();
                }, function (error) {
                    console.error(error);
                });
            }
        });
    };
    HorasSolicitadasPage.ctorParameters = function () { return [
        { type: _services_horas_service__WEBPACK_IMPORTED_MODULE_2__["HorasService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    HorasSolicitadasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-horas-solicitadas',
            template: __webpack_require__(/*! raw-loader!./horas-solicitadas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/horas-solicitadas/horas-solicitadas.page.html"),
            styles: [__webpack_require__(/*! ./horas-solicitadas.page.scss */ "./src/app/pages/horas-solicitadas/horas-solicitadas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_horas_service__WEBPACK_IMPORTED_MODULE_2__["HorasService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], HorasSolicitadasPage);
    return HorasSolicitadasPage;
}());

var DialogCancelar = /** @class */ (function () {
    function DialogCancelar(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogCancelar.prototype.close = function () { this.dialogRef.close({ cancelar: false }); };
    DialogCancelar.prototype.cancelar = function () { this.dialogRef.close({ cancelar: true }); };
    DialogCancelar.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
    ]; };
    DialogCancelar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-cancelar',
            template: '<div mat-dialog-content> ¿Desea cancelar?</div> <div mat-dialog-actions > <button mat-button (click)="cancelar()" >Si </button> <button mat-button >Cancelar </button>   </div>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], DialogCancelar);
    return DialogCancelar;
}());



/***/ })

}]);
//# sourceMappingURL=horas-solicitadas-horas-solicitadas-module-es5.js.map