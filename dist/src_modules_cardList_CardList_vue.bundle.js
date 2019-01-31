(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src_modules_cardList_CardList_vue"],{

/***/ "./src/modules/cardList/CardList.vue":
/*!*******************************************************!*\
  !*** ./src/modules/cardList/CardList.vue + 9 modules ***!
  \*******************************************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_exports____webpack_require__.r, __webpack_require__.d, __webpack_require__.t, __webpack_require__.n, __webpack_require__,  */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js (<- Module is referenced from different chunks by these modules: ./src/modules/Profile/Profile.vue + 9 modules, ./src/modules/cardList/CardList.vue + 9 modules, ./src/modules/chat/Chat.vue + 14 modules, ./src/modules/dashboard/Dashboard.vue + 9 modules, ./src/modules/home/HomeModule.vue + 49 modules, ./src/modules/login/LoginForm.vue + 4 modules, ./src/modules/timeline/ActivityTimeline.vue + 9 modules) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.js (<- Module is not an ECMAScript module) */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/cardList/CardList.vue?vue&type=template&id=14fc5f7e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("CardList")
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/modules/cardList/CardList.vue?vue&type=template&id=14fc5f7e&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.js
var vue = __webpack_require__("./node_modules/vue/dist/vue.js");
var vue_default = /*#__PURE__*/__webpack_require__.n(vue);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cardList/CardList.vue?vue&type=template&id=786c4daf&
var CardListvue_type_template_id_786c4daf_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-list",
    { attrs: { "three-line": "" } },
    [
      _vm._l(_vm.items, function(item, index) {
        return [
          item.header
            ? _c("v-subheader", { key: item.header }, [
                _vm._v("\n            " + _vm._s(item.header) + "\n        ")
              ])
            : item.divider
            ? _c("v-divider", { key: index, attrs: { inset: item.inset } })
            : _c(
                "v-list-tile",
                { key: item.title, attrs: { avatar: "" } },
                [
                  _c("v-list-tile-avatar", [
                    _c("img", { attrs: { src: item.avatar } })
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [
                      _c("v-list-tile-title", {
                        domProps: { innerHTML: _vm._s(item.title) }
                      }),
                      _vm._v(" "),
                      _c("v-list-tile-sub-title", {
                        domProps: { innerHTML: _vm._s(item.subtitle) }
                      })
                    ],
                    1
                  )
                ],
                1
              )
        ]
      })
    ],
    2
  )
}
var CardListvue_type_template_id_786c4daf_staticRenderFns = []
CardListvue_type_template_id_786c4daf_render._withStripped = true


// CONCATENATED MODULE: ./src/components/cardList/CardList.vue?vue&type=template&id=786c4daf&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cardList/CardList.vue?vue&type=script&lang=ts&

/* harmony default export */ var CardListvue_type_script_lang_ts_ = (vue_default.a.extend({
    data() {
        return {
            items: [
                { header: 'Today' },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Brunch this weekend?',
                    subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                    subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Oui oui',
                    subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Birthday gift',
                    subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Recipe to try',
                    subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
                }
            ]
        };
    }
}));

// CONCATENATED MODULE: ./src/components/cardList/CardList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var cardList_CardListvue_type_script_lang_ts_ = (CardListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/components/cardList/CardList.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  cardList_CardListvue_type_script_lang_ts_,
  CardListvue_type_template_id_786c4daf_render,
  CardListvue_type_template_id_786c4daf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/cardList/CardList.vue"
/* harmony default export */ var CardList = (component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/cardList/CardList.vue?vue&type=script&lang=ts&


/* harmony default export */ var modules_cardList_CardListvue_type_script_lang_ts_ = (vue_default.a.extend({
    components: {
        CardList: CardList
    }
}));

// CONCATENATED MODULE: ./src/modules/cardList/CardList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_modules_cardList_CardListvue_type_script_lang_ts_ = (modules_cardList_CardListvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/modules/cardList/CardList.vue
/* harmony export export */ __webpack_require__.d(__webpack_exports__, "default", function() { return cardList_CardList; });





/* normalize component */

var CardList_component = Object(componentNormalizer["default"])(
  src_modules_cardList_CardListvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var CardList_api; }
CardList_component.options.__file = "src/modules/cardList/CardList.vue"
/* harmony default export */ var cardList_CardList = (CardList_component.exports);

/***/ })

}]);
//# sourceMappingURL=src_modules_cardList_CardList_vue.bundle.js.map