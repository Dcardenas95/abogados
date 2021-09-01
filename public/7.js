(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Client.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Client.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
      cliente_id: "",
      cedula: "",
      nombre: "",
      apellido: "",
      numero: "",
      direccion: "",
      telefono: ""
    };
  },
  created: function created() {
    document.title = "Clientes";
    this.getList();
  },
  methods: {
    getList: function getList() {
      var me = this;
      var url = 'api/customer/index';
      axios.get(url).then(function (response) {
        var res = response.data;
        me.listPersons = res;
      })["catch"](function (error) {
        console.log(error);
      });
    },
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
      this.id = "";
      this.cedula = "";
      this.nombre = "", this.apellido = "", this.numero = "", this.direccion = "";
      console.log(data);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Client.vue?vue&type=template&id=0f9a5fac&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Client.vue?vue&type=template&id=0f9a5fac& ***!
  \****************************************************************************************************************************************************************************************************/
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
        _c("h1", [_vm._v("Clientes")]),
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
                  cliente_id: i.id,
                  cedula: i.cedula,
                  nombre: i.nombre,
                  apellido: i.apellido,
                  numero: i.numero,
                  direccion: i.direccion,
                  telefono: i.telefono
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
              _c("h3", [_vm._v("Cédula")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cedula,
                    expression: "cedula"
                  }
                ],
                staticClass: "form-control form-control-lg",
                attrs: { type: "text" },
                domProps: { value: _vm.cedula },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.cedula = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-item" }, [
              _c("h3", [_vm._v("Nombre")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nombre,
                    expression: "nombre"
                  }
                ],
                staticClass: "form-control form-control-lg",
                attrs: { type: "text" },
                domProps: { value: _vm.nombre },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.nombre = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-item" }, [
              _c("h3", [_vm._v("Apellido")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.apellido,
                    expression: "apellido"
                  }
                ],
                staticClass: "form-control form-control-lg",
                attrs: { type: "text" },
                domProps: { value: _vm.apellido },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.apellido = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-item" }, [
              _c("h3", [_vm._v("Número")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.numero,
                    expression: "numero"
                  }
                ],
                staticClass: "form-control form-control-lg",
                attrs: { type: "text" },
                domProps: { value: _vm.numero },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.numero = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-item" }, [
              _c("h3", [_vm._v("Dirección")]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.direccion,
                    expression: "direccion"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "exampleFormControlTextarea1", rows: "3" },
                domProps: { value: _vm.direccion },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.direccion = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-item" }, [
              _c("h3", [_vm._v("Telefono")]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.telefono,
                    expression: "telefono"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "exampleFormControlTextarea1", rows: "3" },
                domProps: { value: _vm.telefono },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.telefono = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "button", on: { click: _vm.sendData } }, [
              _vm._v("Crear Clientes")
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
      _c("h3", [_vm._v("id_cliente")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Cédula")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Nombre")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Apellido")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Dirección")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Teléfono")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Acción")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Client.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Client.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Client_vue_vue_type_template_id_0f9a5fac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Client.vue?vue&type=template&id=0f9a5fac& */ "./resources/js/views/Client.vue?vue&type=template&id=0f9a5fac&");
/* harmony import */ var _Client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Client.vue?vue&type=script&lang=js& */ "./resources/js/views/Client.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Client_vue_vue_type_template_id_0f9a5fac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Client_vue_vue_type_template_id_0f9a5fac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Client.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Client.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Client.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Client.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Client.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Client.vue?vue&type=template&id=0f9a5fac&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Client.vue?vue&type=template&id=0f9a5fac& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_template_id_0f9a5fac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Client.vue?vue&type=template&id=0f9a5fac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Client.vue?vue&type=template&id=0f9a5fac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_template_id_0f9a5fac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_template_id_0f9a5fac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);