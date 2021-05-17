module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/ImagePreview.js":
/*!**********************************************!*\
  !*** ./src/forum/components/ImagePreview.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImagePreview; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var ImagePreview = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ImagePreview, _Component);

  function ImagePreview() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ImagePreview.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.regExp = /(?<=\[upl-image-preview url=)([\w\d:\.&\?\/\-_]*)(?=\])/g;
    this.index = 0;
  };

  _proto.view = function view() {
    var _this = this;

    this.images = this.attrs.content.match(this.regExp);
    var fullScreen = $('#composer > div').hasClass("fullScreen");
    return this.images && fullScreen ? m('.ComposerBody-imagePreview', m('.ImagePreview', m('.ImagePreview-currentImage', {
      onmouseup: finish,
      onmousemove: moveView
    }, m('img#img_view', {
      src: this.images[this.index],
      onload: init,
      onmousewheel: zoom,
      ondragstart: stop,
      onmousedown: start
    }), m('.zoomButtons', m('button', {
      onclick: zoomIn,
      onmouseup: stopPropagation
    }, m('i.fas.fa-search-minus')), m('button', {
      onclick: zoomInit,
      onmouseup: stopPropagation
    }, m('i.fas.fa-search')), m('button', {
      onclick: zoomOut,
      onmouseup: stopPropagation
    }, m('i.fas.fa-search-plus'))), m('button.Left', {
      onclick: this.changeIndexPrev.bind(this),
      onmouseup: stopPropagation
    }, m('i.fas.fa-chevron-left')), m('button.Right', {
      onclick: this.changeIndexNext.bind(this),
      onmouseup: stopPropagation
    }, m('i.fas.fa-chevron-right'))), m('.ImagePreview-listImage', this.images.map(function (image, index) {
      return m('img.ImageListItem#PreviewItem-' + index, {
        src: image,
        onclick: _this.imageSelectHandler.bind(_this)
      });
    })))) : '';
  };

  _proto.imageSelectHandler = function imageSelectHandler(e) {
    document.querySelector('#img_view').removeAttribute('style');
    this.index = e.path[0].id.split('-')[1];
    scale = 1;
    m.redraw();
  };

  _proto.changeIndexPrev = function changeIndexPrev(e) {
    document.querySelector('#img_view').removeAttribute('style');
    this.index = this.index == 0 ? this.images.length - 1 : this.index - 1;
    scale = 1;
    m.redraw();
  };

  _proto.changeIndexNext = function changeIndexNext(e) {
    document.querySelector('#img_view').removeAttribute('style');
    this.index = (this.index + 1) % this.images.length;
    scale = 1;
    m.redraw();
  };

  return ImagePreview;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);


var scale = 1;
var target = null;
var x_prev = 0,
    y_prev = 0,
    currentX = 0,
    currentY = 0,
    width = 0,
    height = 0;

function init(e) {
  e.preventDefault();
  app.forum.data.attributes['block-cat-image-preview.imgWidth'] = e.currentTarget.width;
  app.forum.data.attributes['block-cat-image-preview.imgHeight'] = e.currentTarget.height;
}

function zoom(e) {
  e.preventDefault();
  scale += e.deltaY * -0.01;
  scale = Math.min(Math.max(1, scale), 3);
  var x_target = app.forum.attribute('block-cat-image-preview.imgWidth');
  var y_target = app.forum.attribute('block-cat-image-preview.imgHeight');

  if (scale * x_target !== 0) {
    e.currentTarget.style.width = scale * x_target + 'px';
    e.currentTarget.style.height = scale * y_target + 'px';
  }

  width = scale * x_target;
  height = scale * y_target;
  var w = e.target.parentNode.offsetWidth;
  var h = e.target.parentNode.offsetHeight;
  currentX = e.currentTarget.style.left.slice(0, -2);
  currentY = e.currentTarget.style.top.slice(0, -2);
  currentX = Math.min(Math.max(w - width, currentX), 0);
  currentY = Math.min(Math.max(h - height, currentY), 0);
  e.currentTarget.style.left = currentX + 'px';
  e.currentTarget.style.top = currentY + 'px';
}

function zoomIn(e) {
  scale -= 1;
  scale = Math.min(Math.max(1, scale), 3);
  var x_target = app.forum.attribute('block-cat-image-preview.imgWidth');
  var y_target = app.forum.attribute('block-cat-image-preview.imgHeight');

  if (scale * x_target !== 0) {
    e.currentTarget.parentNode.parentNode.children[0].style.width = scale * x_target + 'px';
    e.currentTarget.parentNode.parentNode.children[0].style.height = scale * y_target + 'px';
  }

  e.currentTarget.parentNode.parentNode.children[0].style.left = 0 + 'px';
  e.currentTarget.parentNode.parentNode.children[0].style.top = 0 + 'px';
}

function zoomInit(e) {
  scale = 1;
  var x_target = app.forum.attribute('block-cat-image-preview.imgWidth');
  var y_target = app.forum.attribute('block-cat-image-preview.imgHeight');

  if (scale * x_target !== 0) {
    e.currentTarget.parentNode.parentNode.children[0].style.width = scale * x_target + 'px';
    e.currentTarget.parentNode.parentNode.children[0].style.height = scale * y_target + 'px';
  }

  e.currentTarget.parentNode.parentNode.children[0].style.left = 0 + 'px';
  e.currentTarget.parentNode.parentNode.children[0].style.top = 0 + 'px';
}

function zoomOut(e) {
  scale += 1;
  scale = Math.min(Math.max(1, scale), 3);
  var x_target = app.forum.attribute('block-cat-image-preview.imgWidth');
  var y_target = app.forum.attribute('block-cat-image-preview.imgHeight');

  if (scale * x_target !== 0) {
    e.currentTarget.parentNode.parentNode.children[0].style.width = scale * x_target + 'px';
    e.currentTarget.parentNode.parentNode.children[0].style.height = scale * y_target + 'px';
  }

  e.currentTarget.parentNode.parentNode.children[0].style.left = 0 + 'px';
  e.currentTarget.parentNode.parentNode.children[0].style.top = 0 + 'px';
}

function start(e) {
  target = e.currentTarget;
  x_prev = e.clientX - target.offsetLeft;
  y_prev = e.clientY - target.offsetTop;
  width = target.offsetWidth;
  height = target.offsetHeight;
  target.style.transition = 'none';
  target.style.transition = 'none';
}

function moveView(e) {
  e.preventDefault();

  if (target !== null) {
    target.style.cursor = 'grabbing';
    currentX += e.clientX - x_prev - target.offsetLeft;
    currentY += e.clientY - y_prev - target.offsetTop;
    target.style.left = currentX + 'px';
    target.style.top = currentY + 'px';
  }
}

function finish(e) {
  e.preventDefault();
  var w = e.currentTarget.offsetWidth;
  var h = e.currentTarget.offsetHeight;

  try {
    currentX = target.style.left.slice(0, -2);
    currentY = target.style.top.slice(0, -2);
    currentX = Math.min(Math.max(w - width, currentX), 0);
    currentY = Math.min(Math.max(h - height, currentY), 0);
    target.style.transition = 'top 100ms';
    target.style.transition = 'left 100ms';
    target.style.left = currentX + 'px';
    target.style.top = currentY + 'px';
    target.style.cursor = 'grab';
  } catch (_unused) {}

  target = null;
  e.stopPropagation();
}

function stop() {
  return false;
}

function stopPropagation(e) {
  e.preventDefault();
  e.stopPropagation();
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ImagePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ImagePreview */ "./src/forum/components/ImagePreview.js");



app.initializers.add('block-cat/image-preview', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (view) {
    view.children[0].children.push(m(_components_ImagePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: this.value
    }));
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map