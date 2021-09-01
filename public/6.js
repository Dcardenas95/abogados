(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cases.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Cases.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/List */ "./resources/js/components/List.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    List: _components_List__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showRegister: false,
      listPersons: [],
      status: [{
        'status': 'Inicio'
      }, {
        'status': 'Finalizado'
      }, {
        'status': 'proceso'
      }],
      numeroCaso: '',
      nombreCliente: [{
        'nombre': 'Luis',
        'apellido': 'Romero'
      }, {
        'nombre': 'Luis',
        'apellido': 'Romero'
      }, {
        'nombre': 'Luis',
        'apellido': 'Romero'
      }, {
        'nombre': 'Luis',
        'apellido': 'Romero'
      }, {
        'nombre': 'Luis',
        'apellido': 'Romero'
      }, {
        'nombre': 'Luis',
        'apellido': 'Romero'
      }],
      apellido: '',
      numero: '',
      direccion: ''
    };
  },
  created: function created() {
    document.title = 'Casos';
    this.getList();
  },
  methods: {
    getList: function getList() {},
    sendData: function sendData() {
      var data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.numero,
        numero: this.numero,
        direccion: this.direccion
      };
      this.listPersons.push(data);
      this.showRegister = false;
      this.id = '';
      this.cedula = '';
      this.nombre = '', this.apellido = '', this.numero = '', this.direccion = '';
      console.log(data);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cases.vue?vue&type=template&id=bb0a8f98&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Cases.vue?vue&type=template&id=bb0a8f98& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass: "create",
          on: {
            click: function($event) {
              _vm.showRegister = true
            }
          }
        },
        [_c("i", { staticClass: "bx bx-plus" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "client-container" }, [
        _c("h1", [_vm._v("Casos")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "client-content" },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.listPersons, function(i) {
              return _c("List", {
                attrs: {
                  cedula: i.cedula,
                  nombre: i.nombre,
                  apellido: i.apellido,
                  numero: i.numero,
                  direccion: i.direccion
                }
              })
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _vm.showRegister
        ? _c("div", { staticClass: "form-content" }, [
            _c("i", {
              staticClass: "bx bx-x",
              on: {
                click: function($event) {
                  _vm.showRegister = false
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "form-item" }, [
              _c("h3", [_vm._v("Número del caso")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.numeroCaso,
                    expression: "numeroCaso"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.numeroCaso },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.numeroCaso = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-item" }, [
              _c("h3", [_vm._v("Nombre del cliente")]),
              _vm._v(" "),
              _c(
                "select",
                { attrs: { name: "nombreClients", id: "" } },
                _vm._l(_vm.nombreCliente, function(i) {
                  return _c("option", { domProps: { value: i.nombre } }, [
                    _vm._v(_vm._s(i.nombre) + " " + _vm._s(i.apellido))
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-item" }, [
              _c("h3", [_vm._v("Estado")]),
              _vm._v(" "),
              _c(
                "select",
                { attrs: { name: "nombreClients", id: "" } },
                _vm._l(_vm.status, function(i) {
                  return _c("option", { domProps: { value: i.nombre } }, [
                    _vm._v(_vm._s(i.status))
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "button", on: { click: _vm.sendData } }, [
              _vm._v("Crear")
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fields" }, [
      _c("h3", [_vm._v("Número del caso")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Nombre del cliente")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Tipo de caso")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Acción")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-item" }, [
      _c("h3", [_vm._v("Tipo de caso")]),
      _vm._v(" "),
      _c("input", { attrs: { type: "text" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Cases.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Cases.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cases_vue_vue_type_template_id_bb0a8f98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cases.vue?vue&type=template&id=bb0a8f98& */ "./resources/js/views/Cases.vue?vue&type=template&id=bb0a8f98&");
/* harmony import */ var _Cases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cases.vue?vue&type=script&lang=js& */ "./resources/js/views/Cases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cases_vue_vue_type_template_id_bb0a8f98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cases_vue_vue_type_template_id_bb0a8f98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Cases.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Cases.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Cases.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Cases.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Cases.vue?vue&type=template&id=bb0a8f98&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Cases.vue?vue&type=template&id=bb0a8f98& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cases_vue_vue_type_template_id_bb0a8f98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Cases.vue?vue&type=template&id=bb0a8f98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cases.vue?vue&type=template&id=bb0a8f98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cases_vue_vue_type_template_id_bb0a8f98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cases_vue_vue_type_template_id_bb0a8f98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);