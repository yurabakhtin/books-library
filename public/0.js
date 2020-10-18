(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BookShow.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/BookShow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('main', ['changePageTitle'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('books', ['loadBook'])), {}, {
    goBack: function goBack() {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].go(-1);
      this.changePageTitle(this.$store.getters['search/getKeyword'] ? 'search' : 'home');
    }
  }),
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('books', ['isLoading', 'getBookData', 'getBookError'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('search', ['getKeyword'])),
  mounted: function mounted() {
    this.loadBook();
    this.changePageTitle('book');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BookShow.vue?vue&type=template&id=bf4482b6&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/BookShow.vue?vue&type=template&id=bf4482b6& ***!
  \******************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-100" },
    [
      _c("h3", [_vm._v(_vm._s(_vm.getBookData("title")))]),
      _vm._v(" "),
      _c(
        "b-alert",
        { attrs: { variant: "danger", show: _vm.getBookError.length } },
        [_vm._v(_vm._s(_vm.getBookError))]
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("b-spinner", {
                staticClass: "m-5",
                attrs: { variant: "primary" }
              })
            ],
            1
          )
        : !_vm.getBookData("id")
        ? _c("strong", [_vm._v("No book found.")])
        : _c(
            "div",
            [
              _c("b-img-lazy", {
                staticClass: "mr-3",
                attrs: {
                  src: "/api/books/" + _vm.getBookData("id") + "/thumbnail",
                  width: "200",
                  height: "400",
                  "blank-color": "#6cb2eb",
                  rounded: "",
                  left: ""
                }
              }),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.getBookData("description")))]),
              _vm._v(" "),
              _c("div", { staticClass: "clearfix" }),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("ISBN: " + _vm._s(_vm.getBookData("isbn")))
              ]),
              _c("br"),
              _vm._v(" "),
              _c(
                "b-button",
                { attrs: { variant: "primary" }, on: { click: _vm.goBack } },
                [
                  _c("b-icon", { attrs: { icon: "arrow-left-circle-fill" } }),
                  _vm._v(" Back")
                ],
                1
              )
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/BookShow.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/BookShow.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookShow_vue_vue_type_template_id_bf4482b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookShow.vue?vue&type=template&id=bf4482b6& */ "./resources/js/views/BookShow.vue?vue&type=template&id=bf4482b6&");
/* harmony import */ var _BookShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookShow.vue?vue&type=script&lang=js& */ "./resources/js/views/BookShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookShow_vue_vue_type_template_id_bf4482b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookShow_vue_vue_type_template_id_bf4482b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/BookShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/BookShow.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/BookShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BookShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BookShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/BookShow.vue?vue&type=template&id=bf4482b6&":
/*!************************************************************************!*\
  !*** ./resources/js/views/BookShow.vue?vue&type=template&id=bf4482b6& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookShow_vue_vue_type_template_id_bf4482b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BookShow.vue?vue&type=template&id=bf4482b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BookShow.vue?vue&type=template&id=bf4482b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookShow_vue_vue_type_template_id_bf4482b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookShow_vue_vue_type_template_id_bf4482b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);