(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/auth/auth-interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/_components/auth/auth-interceptor.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, ' ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/_components/auth/login-info.ts":
/*!************************************************!*\
  !*** ./src/app/_components/auth/login-info.ts ***!
  \************************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/_components/edit/autocomplete.ts":
/*!**************************************************!*\
  !*** ./src/app/_components/edit/autocomplete.ts ***!
  \**************************************************/
/*! exports provided: autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return autocomplete; });
// tslint:disable-next-line:class-name
var autocomplete = /** @class */ (function () {
    function autocomplete() {
    }
    autocomplete.prototype.getCppCompletionProvider = function (monaco) {
        return {
            provideCompletionItems: function (model, position) {
                // tslint:disable-next-line:max-line-length
                var completionItems = [{ label: 'arrays', kind: monaco.languages.CompletionItemKind.Keyword, detail: 'SQL', documentation: 'sql selector.'
                    }
                ];
                return completionItems;
            }
        };
    };
    autocomplete.prototype.getCCompletionProvider = function (monaco) {
        return {
            provideCompletionItems: function (model, position) {
                // tslint:disable-next-line:max-line-length
                var completionItems = [{ label: 'basic', kind: monaco.languages.CompletionItemKind.Keyword, detail: 'SQL', documentation: 'sql selector.' },
                ];
                return completionItems;
            }
        };
    };
    autocomplete.prototype.getPythonCompletionProvider = function (monaco) {
        return {
            provideCompletionItems: function (model, position) {
                // tslint:disable-next-line:max-line-length
                var completionItems = [{ label: 'print', kind: monaco.languages.CompletionItemKind.Keyword, detail: 'SQL', documentation: 'sql selector.' }
                ];
                return completionItems;
            }
        };
    };
    autocomplete.prototype.getJavaCompletionProvider = function (monaco) {
        return {
            provideCompletionItems: function (model, position) {
                // tslint:disable-next-line:max-line-length
                var completionItems = [{ label: 'Integer', kind: monaco.languages.CompletionItemKind.Keyword, detail: 'SQL', documentation: 'sql selector.' }];
                return completionItems;
            }
        };
    };
    return autocomplete;
}());



/***/ }),

/***/ "./src/app/_components/edit/edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/_components/edit/edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\">\n<div class=\"container-fluid \">\n    <div class=\"row\">\n        <div class=\"col-sm-5\" style=\"padding-left:5vw;padding-top:5vh;\">\n            <div class=\"row font-weight-bold \" >\n\n                <h5>{{questionTitle}}</h5>   <app-voting></app-voting>\n                <mat-divider></mat-divider>\n            </div>\n            <div class=\"row\">\n                <p class=\"text-justify \">\n                    {{questionDescription}}\n                </p>\n                <br>\n                <mat-divider></mat-divider>\n            </div>\n            <ul style=\"padding:0%; margin:0%\">\n                <h5>Input</h5>\n                <div *ngFor=\"let inp of inputFormat\"> \n                    <li>{{inp}}</li>\n                </div>\n                <br>\n\n            </ul>\n            <mat-divider></mat-divider>\n\n\n            <ul style=\"padding:0%; margin:0%\">\n                <h5>Output</h5>\n                <div *ngFor=\"let out of outputFormat\"> \n                    <li>{{out}}</li>\n\n                </div>\n                <br>\n\n\n            </ul>\n           \n\n        </div>\n        <div class=\"col-sm-7\" >\n            <select (change)=\"selectChangeHandler($event)\">\n                <option value=\"java\">Java</option>\n                <option value=\"python\">Python</option>\n                <option value=\"cpp\">C++</option>\n                <option value=\"c\">C</option>\n\n            </select>\n            <ngx-monaco-editor id=\"editor2\" class=\"my-code-editor\" [options]=\"editorOptions\" [(ngModel)]=\"code\"\n                (onInit)=\"onInit($event)\"></ngx-monaco-editor>\n\n            <form class=\"form-inline my-2 my-lg-0 hello\" >\n                <button class=\"btn btn-outline-success my-2 my-sm-0\"(click)=submit()>Compile </button>\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=sendDataToSubmissionService()>Submit</button>  \n            </form>\n                  \n            <table id=\"conversation\" class=\"table table-striped\" style=\"margin-top: 20px;\">\n                <thead>\n                    <tr>\n                        <th>Results</th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let greeting of greetings\">\n                    <tr>\n                        <td [ngStyle]=\"colorg\" style=\"color:red\">{{greeting}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/_components/edit/edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_components/edit/edit.component.ts ***!
  \****************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questio_exe_engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/questio-exe-engine.service */ "./src/app/services/questio-exe-engine.service.ts");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocomplete */ "./src/app/_components/edit/autocomplete.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditComponent = /** @class */ (function () {
    function EditComponent(quesservice, _route, token) {
        this.quesservice = quesservice;
        this._route = _route;
        this.token = token;
        // wesocket
        this.title = 'grokonez';
        this.description = 'Angular-WebSocket Demo';
        this.greetings = [];
        this.disabled = true;
        this.stompClient = null;
        this.auto = new _autocomplete__WEBPACK_IMPORTED_MODULE_4__["autocomplete"];
        this.selectedLang = 'java';
        this.editorOptions = { theme: 'vs-dark', language: 'java' };
        // tslint:disable-next-line:member-ordering
        this.options = { theme: 'vs-dark' };
        // tslint:disable-next-line:member-ordering
        this.jsonCode = [
            '{',
            '    "p1": "v3",',
            '    "p2": false',
            '}'
        ].join('\n');
        // tslint:disable-next-line:member-ordering
        this.model = {
            value: this.jsonCode,
            language: 'json',
            uri: 'foo.json',
        };
        // tslint:disable-next-line:member-ordering
        this.originalModel = {
            code: 'heLLo world!',
            language: 'text/plain'
        };
        // tslint:disable-next-line:member-ordering
        this.modifiedModel = {
            code: 'hello orlando!',
            language: 'text/plain'
        };
        // tslint:disable-next-line:member-ordering
        this.colorg = {};
    }
    EditComponent.prototype.selectChangeHandler = function (event) {
        // update the ui
        this.selectedLang = event.target.value;
        this.editorOptions = { theme: 'vs-dark', language: this.selectedLang };
        if (this.selectedLang === 'java') {
            monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getJavaCompletionProvider(monaco));
        }
        else if (this.selectedLang === 'python') {
            monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getPythonCompletionProvider(monaco));
        }
        else if (this.selectedLang === 'cpp') {
            monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getCppCompletionProvider(monaco));
        }
        else {
            monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getCCompletionProvider(monaco));
        }
    };
    EditComponent.prototype.onInit = function (editor) {
        var line = editor.getPosition();
        var monaco = window['monaco'];
        monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getJavaCompletionProvider(monaco));
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionId = this._route.snapshot.paramMap.get('qid');
        this.uname = this.token.getUsername();
        this.connect();
        this.quesservice.getQuestionById(this.questionId).subscribe(function (data) {
            _this.questionObj = data;
            _this.questionId = data['questionId'];
            _this.questionTitle = data['questionTitle'];
            _this.questionDescription = data['questionDescription'];
            _this.inputFormat1 = data['inputFormat'];
            _this.inputFormat = _this.inputFormat1.split('\n');
            _this.outputFormat1 = data['outputFormat'];
            _this.outputFormat = _this.outputFormat1.split('\n');
            _this.difficulty = data['difficulty'];
            _this.tags = data['tags'];
            _this.gitUrl = data['gitUrl'];
            // tslint:disable-next-line:no-shadowed-variable
            _this.quesservice.getcode(_this.gitUrl, _this.uname).subscribe(function (data) {
                _this.code = data['codeTemplate'];
            });
        });
    };
    // socket code
    EditComponent.prototype.setConnected = function (connected) {
        this.disabled = !connected;
        if (connected) {
            this.greetings = [];
        }
    };
    EditComponent.prototype.connect = function () {
        var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__('http://13.234.74.67:8025/gkz-stomp-endpoint');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](socket);
        var _this = this;
        this.stompClient.connect({}, function (frame) {
            _this.setConnected(true);
            _this.stompClient.subscribe('/topic/hi', function (helo) {
                _this.showGreeting(JSON.parse(helo.body).codeTemplate);
            });
        });
    };
    EditComponent.prototype.disconnect = function () {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
        this.setConnected(false);
    };
    EditComponent.prototype.submit = function () {
        this.greetings = [];
        this.stompClient.send('/gkz/hello', {}, JSON.stringify({ 'name': this.uname + '@#' + this.code }));
    };
    EditComponent.prototype.sendDataToSubmissionService = function () {
        this.quesservice.sendDatatoSubmission({ 'code': this.code, 'username': this.uname, 'questionId': this.questionId,
            'questionTitle': this.questionTitle, result: this.result,
            'testCasePassed': this.testpass, 'totalTestCases': this.totaltest,
            'difficulty': this.difficulty });
    };
    EditComponent.prototype.showGreeting = function (message) {
        this.greetings.push(message);
        this.greetings = this.greetings[0].split('@*#');
        this.totaltest = this.greetings[0];
        this.testpass = this.greetings[1];
        this.greetings = this.greetings[2].split('\n');
        if (this.greetings[0] === '') {
            this.greetings[0] = 'Tests passed';
        }
        this.colorg = {
            color: "red"
        };
        if (this.greetings[0] === 'Tests passed') {
            this.result = 'passed';
            this.colorg = {
                color: "green"
            };
        }
        else {
            this.result = 'failed';
        }
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            styles: ['ngx-monaco-editor { height: 70vh; width:100%; display:block; }', "ul{\n    list-style-type: none;\n  }"],
            styleUrls: [],
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/_components/edit/edit.component.html")
        }),
        __metadata("design:paramtypes", [_services_questio_exe_engine_service__WEBPACK_IMPORTED_MODULE_1__["QuestioExeEngineService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/_components/editaudio/autocomplete.ts":
/*!*******************************************************!*\
  !*** ./src/app/_components/editaudio/autocomplete.ts ***!
  \*******************************************************/
/*! exports provided: autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return autocomplete; });
var autocomplete = /** @class */ (function () {
    function autocomplete() {
    }
    autocomplete.prototype.getCppCompletionProvider = function (monaco) {
        return {
            provideCompletionItems: function (model, position) {
                var completionItems = [{ label: 'arrays', kind: monaco.languages.CompletionItemKind.Keyword, detail: 'SQL', documentation: 'sql selector.' }
                ];
                return completionItems;
            }
        };
    };
    autocomplete.prototype.getCCompletionProvider = function (monaco) {
        return {
            provideCompletionItems: function (model, position) {
                var completionItems = [{ label: 'basic', kind: monaco.languages.CompletionItemKind.Keyword, detail: 'SQL', documentation: 'sql selector.' }];
                return completionItems;
            }
        };
    };
    autocomplete.prototype.getPythonCompletionProvider = function (monaco) {
        return {
            provideCompletionItems: function (model, position) {
                var completionItems = [{ label: 'print', kind: monaco.languages.CompletionItemKind.Keyword, detail: 'SQL', documentation: 'sql selector.' }];
                return completionItems;
            }
        };
    };
    autocomplete.prototype.getJavaCompletionProvider = function (monaco) {
        return {
            provideCompletionItems: function (model, position) {
                var completionItems = [{ label: 'Integer', kind: monaco.languages.CompletionItemKind.Keyword, detail: 'SQL', documentation: 'sql selector.' }];
                return completionItems;
            }
        };
    };
    return autocomplete;
}());



/***/ }),

/***/ "./src/app/_components/editaudio/editaudio.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_components/editaudio/editaudio.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta\n  name=\"viewport\"\n  content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\"\n/>\n\n&nbsp;<br>&nbsp;<br>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-7\" container-diff>\n      <ngx-monaco-editor\n        id=\"editor2\"\n        class=\"my-code-editor\"\n        [ngStyle]=\"styleb\"\n        [options]=\"editorOptions\"\n        [(ngModel)]=\"code\"\n        (onInit)=\"onInit($event)\"\n      ></ngx-monaco-editor>\n      <audio class=\"audiocss\" controls style=\"width: 100%;\" #audio>\n        <source src=\"{{ audiopath }}\" type=\"audio/mpeg\" />\n      </audio>\n      &nbsp;<br>\n      <form\n        class=\"form-inline my-2 my-lg-0 hello\"\n        #createForm=\"ngForm\"\n        (ngSubmit)=\"submit()\"\n      >\n        <button\n          class=\"btn btn-outline-success my-2 my-sm-0\"\n          type=\"submit\"\n          id=\"button-addon2\"\n        >\n          Run\n        </button>&nbsp;&nbsp;&nbsp;&nbsp;\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"startTimer(audio)\">Start</button>\n      </form>\n      <br>&nbsp;<br>&nbsp;<br>\n    </div>\n    <div class=\"col-sm-5\">\n      <table\n        id=\"conversation\"\n        class=\"table table-striped\"\n        style=\"margin-top: 20px;\"\n      >\n        <thead>\n          <tr>\n            <th>Results</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let greeting of greetings\">\n          <tr>\n            <td [ngStyle]=\"colorg\" style=\"color:red\">{{ greeting }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/editaudio/editaudio.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_components/editaudio/editaudio.component.ts ***!
  \**************************************************************/
/*! exports provided: EditaudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaudioComponent", function() { return EditaudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete */ "./src/app/_components/editaudio/autocomplete.ts");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditaudioComponent = /** @class */ (function () {
    function EditaudioComponent() {
        // wesocket
        this.styleb = {};
        this.title = 'grokonez';
        this.val = 'true';
        this.description = 'Angular-WebSocket Demo';
        this.greetings = [];
        this.disabled = true;
        this.code = "public class Employee {\n    public  String addEmployeeEmailId(String emailId){\n\n        return null;\n    }\n}\n";
        this.readabilityTime = 20;
        this.stompClient = null;
        this.audiopath = '/assets/audio.mp3';
        this.i = 0;
        this.mvnDependencyDownload = 0;
        // socket ends here
        this.auto = new _autocomplete__WEBPACK_IMPORTED_MODULE_1__["autocomplete"];
        this.selectedLang = 'java';
        this.editorOptions = { theme: 'vs-light', language: 'java', readOnly: 'true' };
        this.options = {
            theme: 'vs-dark'
        };
        this.jsonCode = [
            '{',
            '    "p1": "v3",',
            '    "p2": false',
            '}'
        ].join('\n');
        this.model = {
            value: this.jsonCode,
            language: 'json',
            uri: 'foo.json',
        };
        this.originalModel = {
            code: 'heLLo world!',
            language: 'text/plain'
        };
        this.modifiedModel = {
            code: 'hello orlando!',
            language: 'text/plain'
        };
        this.colorg = {};
    }
    EditaudioComponent.prototype.changeReadibility = function (readValue) {
        this.editorOptions = { theme: 'vs-light', language: 'java', readOnly: readValue };
    };
    EditaudioComponent.prototype.onInit = function (editor) {
        var monaco = window['monaco'];
        monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getJavaCompletionProvider(monaco));
    };
    EditaudioComponent.prototype.ngOnInit = function () {
        this.connect();
    };
    // socket code
    EditaudioComponent.prototype.setConnected = function (connected) {
        this.disabled = !connected;
        if (connected) {
            this.greetings = [];
        }
    };
    EditaudioComponent.prototype.connect = function () {
        var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__('http://13.234.74.67:8031/gkz-stomp-endpoint-js');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](socket);
        var _this = this;
        this.stompClient.connect({}, function (frame) {
            _this.setConnected(true);
            this.connectedSocket = true;
            _this.stompClient.subscribe('/topic-js/hi', function (hello) {
                if (_this.mvnDependencyDownload > 1) {
                    _this.showResults(JSON.parse(hello.body).greeting);
                }
                else {
                    _this.mvnDependencyDownload++;
                }
            });
        });
    };
    EditaudioComponent.prototype.disconnect = function () {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
        this.setConnected(false);
    };
    EditaudioComponent.prototype.submit = function () {
        this.greetings = [];
        this.stompClient.send('/gkz/hello', {}, JSON.stringify({ 'name': this.code }));
    };
    EditaudioComponent.prototype.showResults = function (output) {
        this.greetings.push(output);
        this.greetings = this.greetings[0].split('#*@');
        this.totaltest = this.greetings[0];
        this.passed = this.greetings[1];
        this.greetings = this.greetings[2].split('\n');
        this.colorg = {
            color: "red"
        };
        if (this.greetings[0] === 'Tests passed') {
            this.colorg = { color: 'green' };
        }
    };
    EditaudioComponent.prototype.startTimer = function (audio) {
        var _this = this;
        audio.play();
        this.timeStart = 0;
        this.interval = setInterval(function () {
            if (_this.timeStart === _this.readabilityTime) {
                clearInterval(_this.interval);
                _this.changeReadibility('false');
                _this.timeStart++;
            }
            else {
                _this.timeStart++;
            }
        }, 1000);
        this.submit();
    };
    EditaudioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editaudio',
            styles: ['ngx-monaco-editor { height: 70vh; width:100%; display:block; }'],
            styleUrls: [],
            template: __webpack_require__(/*! ./editaudio.component.html */ "./src/app/_components/editaudio/editaudio.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], EditaudioComponent);
    return EditaudioComponent;
}());



/***/ }),

/***/ "./src/app/_components/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/_components/footer/footer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li a {\n  font-size: 15px;\n}\n.copyright-text{\n  font-size: 20px;\n}\n.credits a{\n  font-size: 15px;\n}\n"

/***/ }),

/***/ "./src/app/_components/footer/footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/footer/footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Bell Bootstrap 4 Theme</title>\n  <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">\n  <meta content=\"\" name=\"keywords\">\n  <meta content=\"\" name=\"description\">\n\n  <meta property=\"og:title\" content=\"\">\n  <meta property=\"og:image\" content=\"\">\n  <meta property=\"og:url\" content=\"\">\n  <meta property=\"og:site_name\" content=\"\">\n  <meta property=\"og:description\" content=\"\">\n\n  <!-- Twitter Cards integration: https://dev.twitter.com/cards/  -->\n  <meta name=\"twitter:card\" content=\"summary\">\n  <meta name=\"twitter:site\" content=\"\">\n  <meta name=\"twitter:title\" content=\"\">\n  <meta name=\"twitter:description\" content=\"\">\n  <meta name=\"twitter:image\" content=\"\">\n\n  <!-- Favicon -->\n  <link href=\"/assets/img/favicon.ico\" rel=\"icon\">\n\n  <!-- Google Fonts -->\n  <link href=\"https://fonts.googleapis.com/css?family=Raleway:400,500,700|Roboto:400,900\" rel=\"stylesheet\">\n\n  <!-- Bootstrap CSS File -->\n  <link href=\"/assets/lib/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n  <!-- Libraries CSS Files -->\n  <link href=\"/assets/lib/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n  <!-- Main Stylesheet File -->\n  <link href=\"/assets/css/style.css\" rel=\"stylesheet\">\n\n</head>\n\n<body>\n  <!-- Page Content\n    ================================================== -->\n    <footer class=\"site-footer\">\n      <div class=\"bottom\">\n        <div class=\"container\">\n          <div class=\"row\">\n\n            <div class=\"col-lg-6 col-xs-12 text-lg-left text-center\">\n              <p class=\"copyright-text\">\n                © MASHUP\n              </p>\n              <div class=\"credits\">\n               Designed by <a href=\"\">MASHUP</a>\n              </div>\n            </div>\n\n            <div class=\"col-lg-6 col-xs-12 text-lg-right text-center\">\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">About Us</a>\n                </li>\n\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">Features</a>\n                </li>\n\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">Portfolio</a>\n                </li>\n\n                <li class=\"list-inline-item\">\n                  <a href=\"#team\">Team</a>\n                </li>\n              </ul>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </footer>\n    <a class=\"scrolltop\" href=\"#\"><span class=\"fa fa-angle-up\"></span></a>\n\n  <!-- Required JavaScript Libraries -->\n  <script src=\"/assets/lib/jquery/jquery.min.js\"></script>\n  <script src=\"/assets/lib/jquery/jquery-migrate.min.js\"></script>\n  <script src=\"/assets/lib/superfish/hoverIntent.js\"></script>\n  <script src=\"/assets/lib/superfish/superfish.min.js\"></script>\n  <script src=\"/assets/lib/tether/js/tether.min.js\"></script>\n  <script src=\"/assets/lib/stellar/stellar.min.js\"></script>\n  <script src=\"/assets/lib/bootstrap/js/bootstrap.bundle.min.js\"></script>\n  <script src=\"/assets/lib/counterup/counterup.min.js\"></script>\n  <script src=\"/assets/lib/waypoints/waypoints.min.js\"></script>\n  <script src=\"/assets/lib/easing/easing.js\"></script>\n  <script src=\"/assets/lib/stickyjs/sticky.js\"></script>\n  <script src=\"/assets/lib/parallax/parallax.js\"></script>\n  <script src=\"/assets/lib/lockfixed/lockfixed.min.js\"></script>\n\n  <!-- Template Specisifc Custom Javascript File -->\n  <script src=\"/assets/js/custom.js\"></script>\n\n  <script src=\"/assets/contactform/contactform.js\"></script>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/_components/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_components/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/_components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/_components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/_components/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_components/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post{\n    /* position: absolute; */\n    top: 10;\n    margin-right: 9%;\n    margin-left: 91%;\n}\n.logout{\n    position: absolute;\n    top: 2%;\n    right: 5%;\n    color: red;\n\n\n}\n.execut{\nposition: relative;\nmargin-right: 10%;\nmargin-left: 80%;\n\n}\n.userprofile{\n    position: absolute;\n    top: 2%;\n    right: 15%;\n    \n}\n\n"

/***/ }),

/***/ "./src/app/_components/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/_components/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n  <app-recommend>        \n  </app-recommend>\n</div>\n\n<ng-template #loggedOut>\n  \n  <app-landing></app-landing>\n  <!-- -------------------------- -->\n  <div id=\"band\" class=\"container text-center\">\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/_components/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_components/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(token) {
        this.token = token;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    HomeComponent.prototype.logout = function () {
        this.token.signOut();
        window.location.reload();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/_components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/_components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/_components/landing/landing.component.css":
/*!***********************************************************!*\
  !*** ./src/app/_components/landing/landing.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-fixed-top{\n    background:black;\n}\n.logo{\n    width: 100px;\n}\n.hero::after{\n    min-height: 800px;\n    background: url(\"/assets/MASHUP-BACK.png\");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\np.tagline[_ngcontent-c3][_ngcontent-c3]{\n    margin-bottom: 20px;\n    margin-top: 20px;\n}\n.info p{\n    font-size: 15px;\n}\n#contact .form input, #contact .form textarea {\n    border-radius: 0;\n    box-shadow: none;\n    font-size: 15px;\n}\n.team-img{\n    height: 300px;\n}"

/***/ }),

/***/ "./src/app/_components/landing/landing.component.html":
/*!************************************************************!*\
  !*** ./src/app/_components/landing/landing.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">\n  <meta content=\"\" name=\"keywords\">\n  <meta content=\"\" name=\"description\">\n\n  <!-- Facebook Opengraph integration: https://developers.facebook.com/docs/sharing/opengraph -->\n  <meta property=\"og:title\" content=\"\">\n  <meta property=\"og:image\" content=\"\">\n  <meta property=\"og:url\" content=\"\">\n  <meta property=\"og:site_name\" content=\"\">\n  <meta property=\"og:description\" content=\"\">\n\n  <!-- Twitter Cards integration: https://dev.twitter.com/cards/  -->\n  <meta name=\"twitter:card\" content=\"summary\">\n  <meta name=\"twitter:site\" content=\"\">\n  <meta name=\"twitter:title\" content=\"\">\n  <meta name=\"twitter:description\" content=\"\">\n  <meta name=\"twitter:image\" content=\"\">\n\n  <!-- Favicon -->\n  <link href=\"/assets/img/favicon.ico\" rel=\"icon\">\n\n  <!-- Google Fonts -->\n  <link href=\"https://fonts.googleapis.com/css?family=Raleway:400,500,700|Roboto:400,900\" rel=\"stylesheet\">\n\n  <!-- Bootstrap CSS File -->\n  <link href=\"/assets/lib/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n  <!-- Libraries CSS Files -->\n  <link href=\"/assets/lib/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n  <!-- Main Stylesheet File -->\n  <link href=\"/assets/css/style.css\" rel=\"stylesheet\">\n</head>\n\n<body>\n  <!-- Page Content\n    ================================================== -->\n\n    <!-- Hero -->\n\n  <section class=\"hero hello\">\n    <div class=\"container text-center bye\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <a class=\"hero-brand\" href=\"#\" title=\"Home\"><img alt=\"Bell Logo\" src=\"/assets/fire.png\" class=\"logo\"></a>\n        </div>\n      </div>\n\n      <div class=\"col-md-12\">\n        <h1>\n            MASHUP\n          </h1>\n\n        <p class=\"tagline\">\n          We empower programmers\n        </p>\n        <a class=\"btn btn-full startbtn\" href=\"#about\">Get Started Now</a>\n      </div>\n    </div>\n\n  </section>\n  <!-- /Hero -->\n\n  <!-- Features -->\n\n  <section class=\"features\" id=\"features\">\n    <div class=\"container\">\n      <h2 class=\"text-center\">\n          Features\n        </h2>\n\n      <div class=\"row\">\n        <div class=\"feature-col col-lg-4 col-xs-12\">\n          <div class=\"card card-block text-center\">\n            <div>\n              <div class=\"feature-icon\">\n                <span class=\"fa fa-cogs\"></span>\n              </div>\n            </div>\n\n            <div>\n              <h3>\n                  Recommendation\n                </h3>\n\n              <p>\n                Our algorithms provide you with right set of challenges to tackle with.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"feature-col col-lg-4 col-xs-12\">\n          <div class=\"card card-block text-center\">\n            <div>\n              <div class=\"feature-icon\">\n                <span class=\"fa fa-envelope\"></span>\n              </div>\n            </div>\n\n            <div>\n              <h3>\n                  Support\n                </h3>\n\n              <p>\n                We like to hear from you. Anything you feel asking.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"feature-col col-lg-4 col-xs-12\">\n          <div class=\"card card-block text-center\">\n            <div>\n              <div class=\"feature-icon\">\n                <span class=\"fa fa-bell\"></span>\n              </div>\n            </div>\n\n            <div>\n              <h3>\n                  Get notified\n                </h3>\n\n              <p>\n                Stay updated with MASHUP using our email and mobile notifications.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"feature-col col-lg-4 col-xs-12\">\n          <div class=\"card card-block text-center\">\n            <div>\n              <div class=\"feature-icon\">\n                <span class=\"fa fa-database\"></span>\n              </div>\n            </div>\n\n            <div>\n              <h3>\n                  Good Documentation\n                </h3>\n\n              <p>\n                We are proud to have one of the best documentation of learning modules.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"feature-col col-lg-4 col-xs-12\">\n          <div class=\"card card-block text-center\">\n            <div>\n              <div class=\"feature-icon\">\n                <span class=\"fa fa-graduation-cap\"></span>\n              </div>\n            </div>\n\n            <div>\n              <h3>\n                  Get Certified\n                </h3>\n\n              <p>\n                Signed-up members have access to our assessment platfrom, where you stand against the world.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"feature-col col-lg-4 col-xs-12\">\n          <div class=\"card card-block text-center\">\n            <div>\n              <div class=\"feature-icon\">\n                <span class=\"fa fa-dashboard\"></span>\n              </div>\n            </div>\n\n            <div>\n              <h3>\n                  Track your progress\n                </h3>\n\n              <p>\n                Dashboard allows to view and keep track of all your effort.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- /Features -->\n  <!-- Call to Action -->\n\n  <!-- Portfolio -->\n\n  <section class=\"portfolio\" id=\"portfolio\">\n    <div class=\"container text-center\">\n      <h2>\n          Get Certified in.........\n        </h2>\n      <p>\n        Handpicked programming topics and mind-bending coding !\n      </p>\n    </div>\n\n    <div class=\"portfolio-grid\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" src=\"/assets/angular.jpeg\">\n              <div class=\"portfolio-over\">\n                <div>\n                  <h3 class=\"card-title\">\n                    Coming Soon....\n                  </h3>\n\n                  <p class=\"card-text\">\n\n                  </p>\n                </div>\n              </div></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" src=\"/assets/CPlus.jpeg\">\n              <div class=\"portfolio-over\">\n                <div>\n                  <h3 class=\"card-title\">\n                    Coming Soon....\n                  </h3>\n\n                  <p class=\"card-text\">\n\n                  </p>\n                </div>\n              </div></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" src=\"/assets/CSharp.jpeg\">\n              <div class=\"portfolio-over\">\n                <div>\n                  <h3 class=\"card-title\">\n                    Coming Soon....\n                  </h3>\n\n                  <p class=\"card-text\">\n\n                  </p>\n                </div>\n              </div></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" src=\"/assets/javascript.jpeg\">\n              <div class=\"portfolio-over\">\n                <div>\n                  <h3 class=\"card-title\">\n                    Coming Soon....\n                  </h3>\n\n                  <p class=\"card-text\">\n\n                  </p>\n                </div>\n              </div></a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" src=\"/assets/nodejs.jpeg\">\n              <div class=\"portfolio-over\">\n                <div>\n                  <h3 class=\"card-title\">\n                    Coming Soon....\n                  </h3>\n\n                  <p class=\"card-text\">\n\n                  </p>\n                </div>\n              </div></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" src=\"/assets/java.png\">\n              <div class=\"portfolio-over\">\n                <div>\n                  <h3 class=\"card-title\">\n                    Start with Java\n                  </h3>\n\n                  <p class=\"card-text\">\n\n                  </p>\n                </div>\n              </div></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" src=\"/assets/python.png\">\n              <div class=\"portfolio-over\">\n                <div>\n                  <h3 class=\"card-title\">\n                    Coming Soon....\n                  </h3>\n\n                  <p class=\"card-text\">\n\n                  </p>\n                </div>\n              </div></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" src=\"/assets/ruby.jpeg\">\n              <div class=\"portfolio-over\">\n                <div>\n                  <h3 class=\"card-title\">\n                    Coming Soon....\n                  </h3>\n\n                  <p class=\"card-text\">\n\n                  </p>\n                </div>\n              </div></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- /Portfolio -->\n  \n  <!-- Team -->\n\n  <section class=\"team\" id=\"team\">\n      <div class=\"container\">\n        <h2 class=\"text-center\">\n            Meet our team\n          </h2>\n  \n        <div class=\"row\">\n          <div class=\"col-sm-3 col-xs-6\">\n            <div class=\"card card-block\">\n              <a href=\"#\"><img alt=\"\" class=\"team-img\" src=\"/assets/rohit.jpeg\">\n                <div class=\"card-title-wrap\">\n                  <span class=\"card-title\">Rohit Patil</span> <span class=\"card-text\">CEO & Co-Founder</span>\n                </div>\n  \n                <div class=\"team-over\">\n                  <h4 class=\"hidden-md-down\">\n                    Connect with me\n                  </h4>\n  \n                  <nav class=\"social-nav\">\n                    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n              </nav>\n  \n              <p>\n                Electronics Engineer || Full Stack Developer\n              </p>\n            </div>\n            </a>\n          </div>\n        </div>\n  \n        <div class=\"col-sm-3 col-xs-6\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" class=\"team-img\" src=\"/assets/ishu.jpg\">\n                <div class=\"card-title-wrap\">\n                  <span class=\"card-title\">Ishu Matil</span> <span class=\"card-text\">Managing Director</span>\n                </div>\n  \n                <div class=\"team-over\">\n                  <h4 class=\"hidden-md-down\">\n                    Connect with me\n                  </h4>\n  \n                  <nav class=\"social-nav\">\n                    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n            </nav>\n  \n            <p>\n              Information Technology || Software Engineer || Full Stack Developer\n            </p>\n          </div>\n          </a>\n        </div>\n      </div>\n  \n      <div class=\"col-sm-3 col-xs-6\">\n        <div class=\"card card-block\">\n          <a href=\"#\"><img alt=\"\" class=\"team-img\" src=\"/assets/kislay.jpg\">\n                <div class=\"card-title-wrap\">\n                  <span class=\"card-title\">Kishlay Verma</span> <span class=\"card-text\">CTO & Co-Founder</span>\n                </div>\n  \n                <div class=\"team-over\">\n                  <h4 class=\"hidden-md-down\">\n                    Connect with me\n                  </h4>\n  \n                  <nav class=\"social-nav\">\n                    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n          </nav>\n  \n          <p>\n            Information Technology || Full Stack Developer\n          </p>\n        </div>\n        </a>\n      </div>\n      </div>\n  \n      <div class=\"col-sm-3 col-xs-6\">\n        <div class=\"card card-block\">\n          <a href=\"#\"><img alt=\"\" class=\"team-img\" src=\"/assets/ujjawala.jpg\">\n                <div class=\"card-title-wrap\">\n                  <span class=\"card-title\">Ujjawala Yati</span> <span class=\"card-text\">COO & Co-Founder</span>\n                </div>\n  \n                <div class=\"team-over\">\n                  <h4 class=\"hidden-md-down\">\n                    Connect with me\n                  </h4>\n  \n                  <nav class=\"social-nav\">\n                    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n          </nav>\n  \n          <p>\n            Computer Science || Full Stack Developer\n          </p>\n        </div>\n        </a>\n      </div>\n      </div>\n      </div>\n      </div>\n\n    \n\n\n      <div class=\"container\">\n          <!-- <h2 class=\"text-center\">\n              Meet our team\n            </h2> -->\n    \n          <div class=\"row\">\n            <div class=\"col-sm-3 col-xs-6\">\n              <div class=\"card card-block\">\n                <a href=\"#\"><img alt=\"\" class=\"team-img\" src=\"/assets/pratima.jpg\">\n                  <div class=\"card-title-wrap\">\n                    <span class=\"card-title\">Pratima Verma</span> <span class=\"card-text\">Design Lead</span>\n                  </div>\n    \n                  <div class=\"team-over\">\n                    <h4 class=\"hidden-md-down\">\n                      Connect with me\n                    </h4>\n    \n                    <nav class=\"social-nav\">\n                      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n                </nav>\n    \n                <p>\n                  Information Technology || Full Stack Developer\n                </p>\n              </div>\n              </a>\n            </div>\n          </div>\n    \n          <div class=\"col-sm-3 col-xs-6\">\n            <div class=\"card card-block\">\n              <a href=\"#\"><img alt=\"\" class=\"team-img\" src=\"/assets/keshav.png\">\n                  <div class=\"card-title-wrap\">\n                    <span class=\"card-title\">Keshav Kumar</span> <span class=\"card-text\">Director</span>\n                  </div>\n    \n                  <div class=\"team-over\">\n                    <h4 class=\"hidden-md-down\">\n                      Connect with me\n                    </h4>\n    \n                    <nav class=\"social-nav\">\n                      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n              </nav>\n    \n              <p>\n                Electronics Engineer || Full Stack Developer\n              </p>\n            </div>\n            </a>\n          </div>\n        </div>\n    \n        <div class=\"col-sm-3 col-xs-6\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" class=\"team-img\" src=\"/assets/uma.jpg\">\n                  <div class=\"card-title-wrap\">\n                    <span class=\"card-title\">Uma Mahesh</span> <span class=\"card-text\">CFO</span>\n                  </div>\n    \n                  <div class=\"team-over\">\n                    <h4 class=\"hidden-md-down\">\n                      Connect with me\n                    </h4>\n    \n                    <nav class=\"social-nav\">\n                      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n            </nav>\n    \n            <p>\n              Computer Science || Full Stack Developer\n            </p>\n          </div>\n          </a>\n        </div>\n        </div>\n    \n        <div class=\"col-sm-3 col-xs-6\">\n          <div class=\"card card-block\">\n            <a href=\"#\"><img alt=\"\" class=\"team-img\" src=\"/assets/sidd.jpg\">\n                  <div class=\"card-title-wrap\">\n                    <span class=\"card-title\">Siddharth Singhal</span> <span class=\"card-text\">Chairman & Co-Founder</span>\n                  </div>\n    \n                  <div class=\"team-over\">\n                    <h4 class=\"hidden-md-down\">\n                      Connect with me\n                    </h4>\n    \n                    <nav class=\"social-nav\">\n                      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n            </nav>\n    \n            <p>\n              Computer Science || Full Stack Developer\n            </p>\n          </div>\n          </a>\n        </div>\n        </div>\n        </div>\n        </div>\n\n\n\n        <div class=\"container\">\n      \n            <div class=\"row\">\n              <div class=\"col-sm-3 col-xs-6\">\n                <div class=\"card card-block\">\n                  <a href=\"#\"><img alt=\"\" class=\"team-img\" src=\"/assets/namita.jpg\">\n                    <div class=\"card-title-wrap\">\n                      <span class=\"card-title\">Namita Arora</span> <span class=\"card-text\">Technical Lead & Developer</span>\n                    </div>\n      \n                    <div class=\"team-over\">\n                      <h4 class=\"hidden-md-down\">\n                        Connect with me\n                      </h4>\n      \n                      <nav class=\"social-nav\">\n                        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n                  </nav>\n      \n                  <p>\n                    Computer Science || Full Stack Developer\n                  </p>\n                </div>\n                </a>\n              </div>\n            </div>\n            </div>\n        </div>\n    </section>\n    <!-- /Team -->\n\n\n\n\n  <!-- @component: footer -->\n  <section id=\"contact\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n          <h2 class=\"section-title\">Contact Us</h2>\n        </div>\n      </div>\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-3 col-md-4\">\n          <div class=\"info\">\n            <div>\n              <i class=\"fa fa-map-marker\"></i>\n              <p>Stackroute<br>Koramangala, Bangalore, India</p>\n            </div>\n\n            <div>\n              <i class=\"fa fa-envelope\"></i>\n              <p>admin@mashup.com</p>\n            </div>\n\n            <div>\n              <i class=\"fa fa-phone\"></i>\n              <p>080 2325365</p>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"col-lg-5 col-md-8\">\n          <div class=\"form\">\n            <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n            <div id=\"errormessage\"></div>\n            <form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\n              <div class=\"form-group\">\n                <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" name=\"message\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"text-center\"><button type=\"submit\">Send Message</button></div>\n            </form>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n  <!-- Required JavaScript Libraries -->\n  <script src=\"/assets/lib/jquery/jquery.min.js\"></script>\n  <script src=\"/assets/lib/jquery/jquery-migrate.min.js\"></script>\n  <script src=\"/assets/lib/superfish/hoverIntent.js\"></script>\n  <script src=\"/assets/lib/superfish/superfish.min.js\"></script>\n  <script src=\"/assets/lib/tether/js/tether.min.js\"></script>\n  <script src=\"/assets/lib/stellar/stellar.min.js\"></script>\n  <script src=\"/assets/lib/bootstrap/js/bootstrap.bundle.min.js\"></script>\n  <script src=\"/assets/lib/counterup/counterup.min.js\"></script>\n  <script src=\"/assets/lib/waypoints/waypoints.min.js\"></script>\n  <script src=\"/assets/lib/easing/easing.js\"></script>\n  <script src=\"/assets/lib/stickyjs/sticky.js\"></script>\n  <script src=\"/assets/lib/parallax/parallax.js\"></script>\n  <script src=\"/assets/lib/lockfixed/lockfixed.min.js\"></script>\n\n  <!-- Template Specisifc Custom Javascript File -->\n  <script src=\"/assets/js/custom.js\"></script>\n\n  <script src=\"/assets/contactform/contactform.js\"></script>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/_components/landing/landing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/_components/landing/landing.component.ts ***!
  \**********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/_components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/_components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/_components/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_components/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-img {\n    /* The image used */\n    background-image: url(\"/assets/key.jpg\");\n  \n    /* Control the height of the image */\n    min-height: 500px;\n    width: 100%;\n    length: 100%;\n    \n  \n    /* Center and scale the image nicely */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n  }\n\n  @media (min-width: 992px){\n  .col-lg-4 {\n      -webkit-box-flex: 0;\n      margin-top: 100px;\n      flex: 0 0 33.333333%;\n      max-width: 33.333333%;\n  }}\n\n  label{\n    font-size: 20px;\n    color: white;\n  }\n\n  p{\n    color: white;\n    font-size: 15px;\n  }\n\n  .form-control {\n    display: block;\n    width: 100%;\n    padding: .375rem .75rem;\n    font-size: 2rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}"

/***/ }),

/***/ "./src/app/_components/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-img\">\n<div class=\"row col-lg-12\">\n  <div class=\"col-lg-4\">\n  </div>\n  <div class=\"col-lg-4\">\n    <form name=\"form\" (ngSubmit) = \"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n          required minlength=\"6\" />\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\">Login</button>\n        <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n          Login failed: {{errorMessage}}\n        </div>\n      </div>\n    </form>\n    <hr />\n    <p>New User?</p>\n    <a [routerLink]=\"['/register']\" class=\"btn btn-success\">Sign Up</a>\n  </div>\n  <div class=\"col-lg-4\">\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/_components/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_components/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _components_auth_login_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_components/auth/login-info */ "./src/app/_components/auth/login-info.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, tokenStorage) {
        this.router = router;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginInfo = new _components_auth_login_info__WEBPACK_IMPORTED_MODULE_3__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
            // this.reloadPage(); /*changed login routing */
        }, function (error) {
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
        this.router.navigate(['']);
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/_components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/_components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-wrapper{\n    background-color: skyblue;\n}\nli img{\n    width: 70px;\n}\n#logoimage{\n  width:30px;\n  max-width: 100%;\n}\n.input-field{\n    margin: 0%;\n    height: 65px;\n    font-size: 30px;\n}\n#search{\n    margin: 0%;\n    background-color: whitesmoke;\n    background-position: center top;\n}\n.flex-container{\n    display: flex;\n\n}\n.navhover:hover{\n    color: rgb(75, 44, 4);\n    text-decoration: none;\n    font-size: 20px;\n}\n.nav-menu a {\n  padding: 13px 13px 13px 13px;\n  text-decoration: none;\n  font-size: 15px;\n  display: inline-block;\n}\n@media (min-width: 1200px){\n.container {\n    max-width: 100%;\n    margin: 0;\n}}\n@media (min-width: 1200px)\n{\n.container[_ngcontent-c1] {\n    max-width: 100%;\n    padding-top: 3px;\n}}\nli a{\n    margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>Bell Bootstrap 4 Theme</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta content=\"\" name=\"keywords\">\n  <meta content=\"\" name=\"description\">\n\n  <!-- Facebook Opengraph integration: https://developers.facebook.com/docs/sharing/opengraph -->\n  <meta property=\"og:title\" content=\"\">\n  <meta property=\"og:image\" content=\"\">\n  <meta property=\"og:url\" content=\"\">\n  <meta property=\"og:site_name\" content=\"\">\n  <meta property=\"og:description\" content=\"\">\n\n  <!-- Twitter Cards integration: https://dev.twitter.com/cards/  -->\n  <meta name=\"twitter:card\" content=\"summary\">\n  <meta name=\"twitter:site\" content=\"\">\n  <meta name=\"twitter:title\" content=\"\">\n  <meta name=\"twitter:description\" content=\"\">\n  <meta name=\"twitter:image\" content=\"\">\n\n  <!-- Favicon -->\n  <link href=\"/assets/img/favicon.ico\" rel=\"icon\">\n\n  <!-- Google Fonts -->\n  <link href=\"https://fonts.googleapis.com/css?family=Raleway:400,500,700|Roboto:400,900\" rel=\"stylesheet\">\n\n  <!-- Bootstrap CSS File -->\n  <link href=\"/assets/lib/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n  <!-- Libraries CSS Files -->\n  <link href=\"/assets/lib/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n  <!-- Main Stylesheet File -->\n  <link href=\"/assets/css/style.css\" rel=\"stylesheet\">\n\n</head>\n\n<body>\n  <!-- Page Content\n    ================================================== -->\n  <!-- Header -->\n\n  <header id=\"header\">\n    <div class=\"container\">\n      <div *ngIf=\"info.token; else loggedOut\">\n      <nav id=\"nav-menu-container\" class=\"\">\n        <ul class=\"nav-menu\">\n          <li><a href=\"#\">\n         <img id=\"logoimage\" alt=\"Logo\" src=\"/assets/fire.png\" class=\"logo\">\n          </a></li>\n          <li><a href=\"\" [routerLink]=\"['/post', info.username]\">Post Question</a></li>\n          <li><a href=\"\" [routerLink]=\"['/userprofile']\">Profile</a></li>\n          <li><a href=\"\" [routerLink]=\"['/editaudio']\">Learn Coding</a></li>\n          <li><a href=\"\" (click)=\"logout()\">Logout</a></li>\n          <li><a href=\"#contact\">Contact Us</a></li>\n          <li><app-searchservice [routerLink]=\"['/searchdisplay']\"></app-searchservice></li>\n        </ul>\n      </nav>\n\n      <!-- #nav-menu-container -->\n      <nav class=\"nav social-nav pull-right d-none d-lg-inline\">\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n      </nav>\n    </div>\n\n    <ng-template #loggedOut>\n      <nav id=\"nav-menu-container\" class=\"\">\n        <ul class=\"nav-menu\">\n          <li><a href=\"#\">\n          <img id=\"logoimage\" alt=\"Bell Logo\" src=\"/assets/fire.png\" class=\"logo\">\n          </a></li>\n          <li><a href=\"\" [routerLink]=\"['/fetch']\">Practice</a></li>\n          <li><a href=\"\" [routerLink]=\"['/editaudio']\">Learn Coding</a></li>\n          <li *ngIf=\"!authority\"><a href=\"\" [routerLink]=\"['/auth/login']\">Login/Signup</a></li>\n          <li><a href=\"#contact\">Contact Us</a></li>\n          <li><app-searchservice [routerLink]=\"['/searchdisplay']\"></app-searchservice></li>\n        </ul>\n      </nav>\n\n      <!-- #nav-menu-container -->\n      <nav class=\"nav social-nav pull-right d-none d-lg-inline\">\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n      </nav>\n    </ng-template>\n    </div>\n  </header>\n\n  <!-- Required JavaScript Libraries -->\n  <script src=\"/assets/lib/jquery/jquery.min.js\"></script>\n  <script src=\"/assets/lib/jquery/jquery-migrate.min.js\"></script>\n  <script src=\"/assets/lib/superfish/hoverIntent.js\"></script>\n  <script src=\"/assets/lib/superfish/superfish.min.js\"></script>\n  <script src=\"/assets/lib/tether/js/tether.min.js\"></script>\n  <script src=\"/assets/lib/stellar/stellar.min.js\"></script>\n  <script src=\"/assets/lib/bootstrap/js/bootstrap.bundle.min.js\"></script>\n  <script src=\"/assets/lib/counterup/counterup.min.js\"></script>\n  <script src=\"/assets/lib/waypoints/waypoints.min.js\"></script>\n  <script src=\"/assets/lib/easing/easing.js\"></script>\n  <script src=\"/assets/lib/stickyjs/sticky.js\"></script>\n  <script src=\"/assets/lib/parallax/parallax.js\"></script>\n  <script src=\"/assets/lib/lockfixed/lockfixed.min.js\"></script>\n\n  <!-- Template Specisifc Custom Javascript File -->\n  <script src=\"/assets/js/custom.js\"></script>\n\n  <script src=\"/assets/contactform/contactform.js\"></script>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, token) {
        this.router = router;
        this.token = token;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    NavbarComponent.prototype.logout = function () {
        this.token.signOut();
        window.location.reload();
        this.router.navigate(['']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/_components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/_components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/_components/recommend/recommend.component.css":
/*!***************************************************************!*\
  !*** ./src/app/_components/recommend/recommend.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n  font-size: 15px;\n}\n.col-md-4{\n  width: 500px;\n  height: auto;\n  background-color: rgb(25, 158, 184)\n}\n.btn{\n  justify-content: baseline;\n}\nh1{\n  margin: 40px;\n  color: rgb(25, 158, 184)\n}\n.card{\n  margin-top: 20px;\n  margin-bottom: 10px;\n  justify-content: center;\n\n\n}\n.card-body{\n  height: 300px;\n\n}\n.card-deck{\n  background-color: rgb(25, 158, 184)\n}\n"

/***/ }),

/***/ "./src/app/_components/recommend/recommend.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_components/recommend/recommend.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:22px\">\n      <h1>Let's dive into the world of Coding...</h1>\n      <hr size=\"30\">\n    </div>\n    <br /><br /><br /><br />\n  </div>\n  <div class=\"row\" style=\"text-align:center\">\n      <div class=\"card-deck\">\n      <div *ngFor=\"let question of fetch\" class=\"col-md-4\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\">{{ question.questionTitle }}</h2>\n            <p class=\"card-text\">Related to: {{ question.tags }}</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Of level: {{ question.difficulty }}</small></p>\n            <button\n              type=\"button\"\n              class=\"btn btn-primary\"\n              (click)=\"openEditor(question.questionId)\"\n            >\n              ATTEMPT\n            </button>\n          </div>\n        </div>\n        <br />\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/recommend/recommend.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_components/recommend/recommend.component.ts ***!
  \**************************************************************/
/*! exports provided: RecommendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendComponent", function() { return RecommendComponent; });
/* harmony import */ var _services_questionservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/questionservice.service */ "./src/app/services/questionservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecommendComponent = /** @class */ (function () {
    function RecommendComponent(_route, router, fetchservice) {
        this._route = _route;
        this.router = router;
        this.fetchservice = fetchservice;
    }
    RecommendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchservice.getallquestioninfo().subscribe(function (data) {
            _this.fetch = data;
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    RecommendComponent.prototype.openEditor = function (questionId) {
        this.router.navigate(['/execution', questionId]);
    };
    RecommendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommend',
            template: __webpack_require__(/*! ./recommend.component.html */ "./src/app/_components/recommend/recommend.component.html"),
            styles: [__webpack_require__(/*! ./recommend.component.css */ "./src/app/_components/recommend/recommend.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_questionservice_service__WEBPACK_IMPORTED_MODULE_0__["QuestionserviceService"]])
    ], RecommendComponent);
    return RecommendComponent;
}());



/***/ }),

/***/ "./src/app/_components/register/register.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/register/register.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"maindiv\" class=\"container\">\n<div class=\"row col-lg-12\">\n  <div class=\"col-lg-3\">\n  </div>\n  <div class=\"col-lg-6\">\n    <mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel style=\"color: pink\">Please provide details</ng-template>\n          <mat-form-field>\n            <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Email Id\" formControlName=\"emailId\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Interests\" formControlName=\"interest\" required>\n          </mat-form-field>\n          <br>\n          <div>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"secondFormGroup\" optional>\n        <form [formGroup]=\"secondFormGroup\" (ngSubmit)=\"onSubmit()\">\n          <ng-template matStepLabel>Fill out optional stuffs</ng-template>\n          <mat-form-field>\n            <input matInput placeholder=\"Gender\" formControlName=\"gender\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Age\" formControlName=\"age\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"College Name\" formControlName=\"college\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Discipline\" formControlName=\"discipline\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Course\" formControlName=\"course\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Current Company\" formControlName=\"company\">\n          </mat-form-field>\n          <br>\n          <div>\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n  <div class=\"col-lg-3\">\n\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/register/register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_components/register/register.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService, registerService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.registerService = registerService;
        this.alertService = alertService;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7)]],
            interest: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.secondFormGroup = this.formBuilder.group({
            gender: [''],
            age: [''],
            college: [''],
            course: [''],
            discipline: [''],
            company: ['']
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.firstFormGroup.invalid) {
            alert('register form is invalid ');
            return;
        }
        var object = Object.assign(this.firstFormGroup.value, this.secondFormGroup.value);
        this.registerService.register(object).subscribe(function (data) {
            _this.alertService.success(data, true);
            alert(data);
            _this.router.navigate(['/auth/login']);
        }, function (error) {
            _this.alertService.error('user already exists');
            alert('error');
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/_components/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_0__["RegisterService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/_components/savequestion/savequestion.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/_components/savequestion/savequestion.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n    display: inline-block;\n    margin-left: 25%;\n    margin-right:25%;\n    width: 50%;\n}\nh1{\n  color:green;\n  margin: 50px;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  padding: .375rem .75rem;\n  font-size: 2rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}"

/***/ }),

/***/ "./src/app/_components/savequestion/savequestion.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_components/savequestion/savequestion.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align = \"center\">\n  <h1>Post your {{ title }}!</h1>\n  <h1 *ngIf=\"isExist | async as value\" >data is : {{ xyz }}</h1>\n  <form [formGroup]=\"questionForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        formControlName=\"questionTitle\"\n        class=\"form-control\"\n        id=\"questionTitle\"\n        placeholder=\"Write Title of Question..\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.questionTitle.errors }\"\n      />\n      <div *ngIf=\"submitted && f.questionTitle.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.questionTitle.errors.required\">\n          Question Title is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <textarea\n        class=\"form-control\"\n        formControlName=\"questionDescription\"\n        id=\"questionDescription\"\n        rows=\"7\"\n        placeholder=\"Write Question Description here..\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.questionDescription.errors }\"\n      ></textarea>\n      <div\n        *ngIf=\"submitted && f.questionDescription.errors\"\n        class=\"invalid-feedback\"\n      >\n        <div *ngIf=\"f.questionDescription.errors.required\">\n          Question Title is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <textarea\n        class=\"form-control\"\n        formControlName=\"inputFormat\"\n        id=\"inputFormat\"\n        rows=\"7\"\n        placeholder=\"Write input format here..\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.inputFormat.errors }\"\n      ></textarea>\n      <div *ngIf=\"submitted && f.inputFormat.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.inputFormat.errors.required\">\n          input format is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <textarea\n        class=\"form-control\"\n        formControlName=\"outputFormat\"\n        id=\"outputFormat\"\n        rows=\"7\"\n        placeholder=\"Write output format here..\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.outputFormat.errors }\"\n      ></textarea>\n      <div *ngIf=\"submitted && f.outputFormat.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.outputFormat.errors.required\">\n          output format is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <select\n        class=\"form-control\"\n        formControlName=\"difficulty\"\n        id=\"difficulty\"\n        placeholder=\"Select difficulty level...\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.difficulty.errors }\"\n      >\n        <option *ngFor=\"let level of levels\" [value]=\"level\">{{\n          level\n        }}</option>\n        <div *ngIf=\"submitted && f.difficulty.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.difficulty.errors.required\">\n            Question Title is required\n          </div>\n        </div>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        formControlName=\"tags\"\n        class=\"form-control\"\n        id=\"tags\"\n        placeholder=\"Write tags for Question like Core java,Collection\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        formControlName=\"gitUrl\"\n        class=\"form-control\"\n        id=\"gitUrl\"\n        placeholder=\"Enter git Url of testcases..\"\n      />\n    </div>\n      {{username}}\n    <button type=\"submit\" class=\"btn btn-success\">Post Question</button>\n    <a routerLink=\"/home\" class=\"btn btn-link\">Cancel</a>\n    &nbsp;<br>\n    &nbsp;<br>\n    &nbsp;<br>\n    &nbsp;<br>\n    &nbsp;<br>\n    &nbsp;\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/savequestion/savequestion.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_components/savequestion/savequestion.component.ts ***!
  \********************************************************************/
/*! exports provided: SavequestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavequestionComponent", function() { return SavequestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questionservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/questionservice.service */ "./src/app/services/questionservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SavequestionComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function SavequestionComponent(token, _route, questionservice, router, formBuilder, alertService) {
        this.token = token;
        this._route = _route;
        this.questionservice = questionservice;
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.title = 'Question';
        this.submitted = false;
        this.levels = ['-----Select Difficulty------', 'Beginner', 'Intermediate',
            'Advance', 'Expert'];
    }
    Object.defineProperty(SavequestionComponent.prototype, "f", {
        get: function () {
            return this.questionForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SavequestionComponent.prototype.ngOnInit = function () {
        this.questionForm = this.formBuilder.group({
            questionTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            questionDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            inputFormat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            outputFormat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            difficulty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gitUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SavequestionComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        if (this.questionForm.invalid) {
            alert('Question form is invalid ');
            return;
        }
        this.uname = this.token.getUsername();
        // tslint:disable-next-line:label-position
        this.add = '{"username":"' + this.uname + '"}';
        this.obj1 = JSON.parse(this.add);
        var obj2 = Object.assign(this.questionForm.value, this.obj1);
        this.questionservice.saveQuestion(obj2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
            alert(data);
            _this.router.navigate(['home']);
        }, function (error) {
            alert(error);
        });
    };
    SavequestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-savequestion',
            template: __webpack_require__(/*! ./savequestion.component.html */ "./src/app/_components/savequestion/savequestion.component.html"),
            styles: [__webpack_require__(/*! ./savequestion.component.css */ "./src/app/_components/savequestion/savequestion.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_questionservice_service__WEBPACK_IMPORTED_MODULE_1__["QuestionserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], SavequestionComponent);
    return SavequestionComponent;
}());



/***/ }),

/***/ "./src/app/_components/scoreandbadge/scoreandbadge.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/_components/scoreandbadge/scoreandbadge.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header\n{\n  font-weight: bold;\n}\n.example-card{\nwidth: 220px;\nmargin-bottom: 120px;\n}\n#cardtitle{\n  font-size:18px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/_components/scoreandbadge/scoreandbadge.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/scoreandbadge/scoreandbadge.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-content>\n      <img mat-card-image src=\"../../../assets/badge.jpg\" alt=\"Badge-image\">\n  </mat-card-content>\n</mat-card>\n<!-- <p id=\"cardtitle\">Your Total Score is : {{userData['totalScore']}}</p> -->"

/***/ }),

/***/ "./src/app/_components/scoreandbadge/scoreandbadge.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_components/scoreandbadge/scoreandbadge.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScoreandbadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreandbadgeComponent", function() { return ScoreandbadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scorebadge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/scorebadge.service */ "./src/app/services/scorebadge.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScoreandbadgeComponent = /** @class */ (function () {
    function ScoreandbadgeComponent(scorebadgeservice) {
        this.scorebadgeservice = scorebadgeservice;
    }
    ScoreandbadgeComponent.prototype.ngOnInit = function () {
    };
    ScoreandbadgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scoreandbadge',
            template: __webpack_require__(/*! ./scoreandbadge.component.html */ "./src/app/_components/scoreandbadge/scoreandbadge.component.html"),
            styles: [__webpack_require__(/*! ./scoreandbadge.component.css */ "./src/app/_components/scoreandbadge/scoreandbadge.component.css")]
        }),
        __metadata("design:paramtypes", [_services_scorebadge_service__WEBPACK_IMPORTED_MODULE_1__["ScorebadgeService"]])
    ], ScoreandbadgeComponent);
    return ScoreandbadgeComponent;
}());



/***/ }),

/***/ "./src/app/_components/searchdisplay/searchdisplay.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/_components/searchdisplay/searchdisplay.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .col-lg-4{\n    width: 500px;\n    height: auto;\n    margin-bottom: 20px;\n    background-color: rgb(25, 158, 184)\n  }\n\n  .btn{\n    justify-content: center;\n  }\n\n  .card{\n    margin-top: 20px;\n    margin-bottom: 10px;\n    justify-content: center;\n\n\n  }\n\n  .card-body{\n    height: 300px;\n\n\n  }\n\n  .card-deck{\n    /* background-color: rgb(25, 158, 184) */\n    background-color: rgb(25, 158, 184)\n\n  }\n\n  h2{\n    margin: 40px;\n    text-align: center;\n    color: rgb(25, 158, 184)\n  }\n\n  p{\n    font-size: 15px;\n    text-align: center;\n  }\n\n  h3{\n    text-align: center;\n  }\n\n  button{\n    align-content: center;\n  }\n"

/***/ }),

/***/ "./src/app/_components/searchdisplay/searchdisplay.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/searchdisplay/searchdisplay.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align: center\">\n  <h2>Are you looking for ...</h2>\n  <div class=\"card-deck\">\n  <div *ngFor=\"let question of fetch\" class=\"col-lg-4\">\n      <div class=\"card\">\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">{{question.questionTitle}}</h3>\n            <p class=\"card-text\">Of level: {{question.difficulty}}</p>\n            <p class=\"card-text\">Related to: {{question.tags}}</p>\n            <p class=\"card-text\"><small class=\"text-muted\"></small></p>\n            <button class=\"btn btn-primary\" [routerLink]=\"['/execution',question.questionId]\">ATTEMPT</button>\n          </div>\n    </div>    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/_components/searchdisplay/searchdisplay.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_components/searchdisplay/searchdisplay.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchdisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchdisplayComponent", function() { return SearchdisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_searchservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/searchservice.service */ "./src/app/services/searchservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchdisplayComponent = /** @class */ (function () {
    function SearchdisplayComponent(_route, router, fetchservice) {
        this._route = _route;
        this.router = router;
        this.fetchservice = fetchservice;
    }
    SearchdisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tag = this._route.snapshot.paramMap.get('tag');
        this.fetchservice.findQuestion(this.tag).subscribe(function (data) { return _this.fetch = data; });
        console.log(this.fetchservice.findQuestion(this.tag).subscribe(function (data) { return _this.fetch = data; }));
    };
    SearchdisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchdisplay',
            template: __webpack_require__(/*! ./searchdisplay.component.html */ "./src/app/_components/searchdisplay/searchdisplay.component.html"),
            styles: [__webpack_require__(/*! ./searchdisplay.component.css */ "./src/app/_components/searchdisplay/searchdisplay.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_searchservice_service__WEBPACK_IMPORTED_MODULE_2__["SearchserviceService"]])
    ], SearchdisplayComponent);
    return SearchdisplayComponent;
}());



/***/ }),

/***/ "./src/app/_components/searchservice/searchservice.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/_components/searchservice/searchservice.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\nbody{\n  background: #f2f2f2;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.search {\n  width: 100%;\n  position: relative\n}\n\n.searchTerm {\n  float: left;\n  width: 100%;\n  border: 3px solid #00B4CC;\n  padding: 5px;\n  height: 40px;\n  border-radius: 5px;\n  outline: none;\n  color: #9DBFAF;\n  margin-top: 13px;\n  margin-left: 10px;\n  font-size: 15px;\n}\n\n.searchTerm:focus{\n  color: #00B4CC;\n}\n\n.searchButton {\n  position: absolute;\n  right: -50px;\n  top: 15px;\n  width: 40px;\n  height: 35px;\n  border: 1px solid #00B4CC;\n  background: #00B4CC;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/_components/searchservice/searchservice.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/searchservice/searchservice.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"\" #createForm=\"ngForm\" (ngSubmit)=\"search()\">\n  <div class=\"search\">\n     <input type=\"text\" class=\"searchTerm\" placeholder=\"Search\" name=\"tag\" [(ngModel)]=\"tag\" >\n     <button type=\"submit\" class=\"searchButton\" onclick=\"location.reload()\">\n      <i class=\"fa fa-search\"></i>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/_components/searchservice/searchservice.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_components/searchservice/searchservice.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchserviceComponent", function() { return SearchserviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_searchservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/searchservice.service */ "./src/app/services/searchservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchserviceComponent = /** @class */ (function () {
    function SearchserviceComponent(_route, router, fetchservice) {
        this._route = _route;
        this.router = router;
        this.fetchservice = fetchservice;
    }
    SearchserviceComponent.prototype.ngOnInit = function () {
    };
    SearchserviceComponent.prototype.search = function () {
        this.router.navigate(['/display', this.tag]);
    };
    SearchserviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchservice',
            template: __webpack_require__(/*! ./searchservice.component.html */ "./src/app/_components/searchservice/searchservice.component.html"),
            styles: [__webpack_require__(/*! ./searchservice.component.css */ "./src/app/_components/searchservice/searchservice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_searchservice_service__WEBPACK_IMPORTED_MODULE_1__["SearchserviceService"]])
    ], SearchserviceComponent);
    return SearchserviceComponent;
}());



/***/ }),

/***/ "./src/app/_components/submission/submission.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/_components/submission/submission.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  td, th {\n    width: 25%;\n  }\n  "

/***/ }),

/***/ "./src/app/_components/submission/submission.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/submission/submission.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Question ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Question Title </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.title}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"level\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Question Level </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.level}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"tag\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Question Tag </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.tag\"> {{row.tag}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"try1\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Solution </th>\n      <td mat-cell *matCellDef=\"let row\"><a mat-raised-button routerLink=\".\">Solution</a></td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/_components/submission/submission.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/_components/submission/submission.component.ts ***!
  \****************************************************************/
/*! exports provided: SubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionComponent", function() { return SubmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
var SubmissionComponent = /** @class */ (function () {
    function SubmissionComponent() {
        this.displayedColumns = ['id', 'title', 'level', 'tag', 'try1'];
        // Create 100 users
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](users);
    }
    SubmissionComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SubmissionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SubmissionComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SubmissionComponent.prototype, "sort", void 0);
    SubmissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submission',
            template: __webpack_require__(/*! ./submission.component.html */ "./src/app/_components/submission/submission.component.html"),
            styles: [__webpack_require__(/*! ./submission.component.css */ "./src/app/_components/submission/submission.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmissionComponent);
    return SubmissionComponent;
}());

/** Builds and returns a new User. */
function createNewUser(id) {
    var title = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    var try1 = 'HELLO';
    return {
        id: id.toString(),
        title: title,
        level: Math.round(Math.random() * 100).toString(),
        tag: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
        try1: try1
    };
}


/***/ }),

/***/ "./src/app/_components/user/user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_components/user/user.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/user/user.component.html":
/*!******************************************************!*\
  !*** ./src/app/_components/user/user.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/user/user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_components/user/user.component.ts ***!
  \****************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserBoard().subscribe(function (data) {
            _this.board = data;
        }, function (error) {
            _this.errorMessage = error.status + ": " + JSON.parse(error.error).message;
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/_components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/_components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/_components/userprofile/userprofile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/_components/userprofile/userprofile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile1{\n  height: 100%;\n  width: 80%;\n}\n\n.card {\n  width: 100%;\n  padding: 5%;\n  \n}\n\n.tile2{\n  height: 100%;\n  width: 50%;\n  margin-left: 50px;\n}\n\n.box{\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-content: stretch;\n  width: 60%;\n}\n\n.box>*:first-child {\n  -ms-grid-row-align: stretch;\n      align-self: stretch;\n}\n\n.profileimage{\n  padding: 2vh 2vh 0vh 2vh;\n}"

/***/ }),

/***/ "./src/app/_components/userprofile/userprofile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/userprofile/userprofile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"20vh\">\n  <mat-grid-tile [colspan]=\"tiles[0].cols\" [rowspan]=\"tiles[0].rows\" [style.background]=\"tiles[0].color\"\n    class=\"profile\">\n    <div class=\"box\">\n      <div>\n        <mat-card class=\"card\" style=\"display:block;\">\n          <img mat-card-image\n            src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIVFRUWFRcXFxUWFxUVFRYYFxcXGBUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUrLS0tLS8tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIAOIA3wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwj/xABCEAABAwEFBQUECAQEBwAAAAABAAIRAwQFEiExBkFRYYEicZGhsRMywfAjQlJicoLR4QeisvEUFTPCJCVDU2Nz0v/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAkEQEBAAICAgEFAQEBAAAAAAAAAQIRAzESIUEEIjJRYROBFP/aAAwDAQACEQMRAD8A+4oiICIiAiIgIiICLx7gAScgMyV8/wBrtqXMflUhgya1sglxzxVHbhr2fXRRbpMm3V7Q3/SslMvec9zRqScguCtO3Nqc44HBonQMblkThJLicozPNcZed4vjtGZLiJjUwcuGYPQqjr3iYxTiMGDpOuXdKp576azDXburTtxXDhirVIAzwkNE8wNOOu5b2/xKtGJvamBnDWYTrBIOfgQvm1OhUjG7ORl93hkobn1Gy6ZzieU5BRup1P0++3B/EehU7FfsP0LmtdgJ/Dm5pz0Mrt6bw4Aggg5gjQr8ttt5HajNsZ8uB4jcuw2Q2zdZnhwk0nf6lKcvxs3B3qk5P2i8f6fdkWiw2tlam2pTdiY8SCOH6retWIiIgIiICIiAiIgIiICIiAiIgIiICIiDltur39ixrRvlzhyHujqYyXzG1lna9o4OzBdGZL5ntEd3n4dXtTTfarQKTTGKqQCNwbl8Ceqv7LspZaDQBTDjvc7tEnjmsru1vjqR8UvIPf2o11MaclXMpzk4HIjqTnC+/wBqu6k4QabSO4Klr7JWU5imBvy4qm9NPDb41aarmiBAjcPhwUQ2gZ8/VfT702FpvcSDCrX/AMO6e57vJV/0x+V5wZ3pwjDiyGuXWF6xxYeEHyP919DsOwdBhkve7lMQeMhSry2WoOYQ1sOAyKzvPjtp/wCbLXtr/hLtS6lWFlqO+iqnsTo2odAOR08F9oX5fshNJ4doaVQO6tcCPTyX6eY6QCNCJ8V1cd3HFyzVZIiLRkIiICIiAiIgIiICIiAiIgIiICIiD5/s/SxW6qXGfZl7RyJPa85XXWkrjNnq/wDzG0CCJqVZHMPI/ddhVKo1naNUUZ5Ul7VGqhY5urBFqKNUKlOUWqAuXLbswRy5Rqj1vqKJVCwrbb5dtIcNepG859R8+K/St0j6ClP/AG2f0hfmba8/8S4fPJfpu7WkUaYOopsHg0L1eH8Y8Xn/ACqSiItWAiIgIiICIiAiIgIiICIiAiIgLwleqPeDSaVQDUsdHfBhRekybunC3UG/5rWwGWuLnEwRJIBOu4E+at9oLwqs7NKmXneRAA6laLusOG2NeTLnUZfwDgAHHqcPgvdoxWIii2XE8Q3zOngVlll9u3TjhPPTmLRtJbqZ7VmJHIh39JVndl/mtqwtK5a/LFbWlsEtES6CcjnkCXEke7nI1OSuNk/avMVO0AcnZSRzhYW3p04ydrypaVx1831asRFFmUxJ9c11t9UwwGFwd5tqPcBMN3wYPcs7fu0219u48o07e/N1Wm08JM+QVzd1SsDgqwZ0cD5Lm7HclpzMjTs+7E5QSYB+1pGo4LqLopVMIFQCRvBxDxKpy6n6Rxe/3/1wm21EC3Abnez56mDlvX6AuW/2Wh7qbWlpa3EASD2ZjONDmMs18c2msjf8dZ3ujCcjOYBaHFs9SF9D2Gss2h9UGW+yDfzFw+DVvx8l3jjGPJwY3HPPL46dyiIu15oiIgIiICIiAiIgIiICIiAiIgLxwXqIOTuew1KdpqvcZY5pwmcwcQkQp1ppyp1pZhPecuuqiWl8BZeMmOnX/pc8/JQ2uxMJ7Q8VYXVZmAZCFV22qSVPsVqYxvbdGcZ+Sw49eTr5ZfBE2iEkjiudbQB1V9fVqaJJOioKdoaSMBmdVzcm/Ounin2RLo2RvAKVgAGSj2ar4rOrUVKup77sntixojHJwzoJGZ8PVd3/AA/sPsqLhM5gE8SASf6lz1z2CrVcXNYSJDcUZCMz2t2oX0G77IKVMMGcaniTqV0/TYXy3eo4fq+XGcfjO6koiLveWIiICIiAiIgIiICIiAiIgIiICIiDCq2QRyVFac8l0CpLwpYXeYVc56acV1XL2j34mJMZqfVogNzI04wol/3YysML2y0kSFTWLZp1lP0Z9pTJnBVl5bmD2XHPdzXHjNbj0rfLXtha6Jc49vLdLhC1UrNh3hWFptG5tmZOEjOMuemi5q0XRVtBiq8NbObaQwA6ZEyTu3HeVnlHRPLXS6oPkwDMd2S3VX7louq7qdnZhptDW8B6rNwJIAEkkBo4kmAPFY63S5evbvdjacWYH7TnHzj/AGq8Ue77MKVNlMfVaB3wMz4qQvWwmsZHh55eWVoiIrKiIiAiIgIiICIiAiIgIiICIiAiIgKvvcSIHvDNTyVy21d5f4epQqH3HONJ/LEMTXeLAPzKL0th7yka3nEOYK9dmI5KPaKk9phz8j3r1tuESRB4Ll+du7Hc9Ki12Qg7lrZThb7VbQXKBarc1mcrmz/jvmXr3Xl41g0Kx2GdSdXxVXAOA+iB3nRzu8aDquabRfWdifk2cm8ebv0VffNsw2gMaYLWNcOrnf8AyrcM1m5ee7xr70Aslx+xu0/tWilWPb3OO/kea7BejLt5dmroREUoEREBERAREQEREBERAREQERYvfAlBkvHOhQHXiCQ1vWdyyYDiknuVvFG0l7lyu3tk9rZajQMwMTfxMOIei6aVVXuQREieGU+CmTfpG9Xb59s7emJgBO5XTqoIgiR4rlhd76FR3Z7GIwRoBuB4K8s1WQvPsuN09bGzKbarTZmnd5kehUY2RoOg+PirMslYOprOxpLGllOFxm1zsFenV3e47uJlp8ZH5l273QFzt5XUbQXSOy3M9Mw3qrYS+U0pyX7a33a4ghwX0rZ6+sTQH+K+d3HZyGAHWF092COi9LHj9PMzz9u/BlergaO3DaVZ1J9M4Wuwk4hI+8BGm/XRdpQtrXDhKi42dqS7SkXgcDovVVIiIgIiICIiAiIgLwlHGFDtVaRAKmQSXVgtD6nE6qE2rlzWu0VCIdxV5ira8r0e1Iy4ncO9LRe1NjCW9vCDyBjn+y1WxntKT2b4xdRp8FzT7QScByy6HLctcMJe2eWVkUVu26tVYkZUmTGFkyRzecz0hUTq3sqxLpNKqcU5ktcdSDwVkbmcXOgZB0KUbqxUy1wn5yXpzHDGfa8y5Z5XddXZbOCxjpzIADpkOyynmQs/8upP1bB4t7J8slV7Jgvsxoumab46e8w+o6K2tTzTcHEdl2R5GMivL5+Kbu3qfT8t1NVqfcH2KpH4gD5iFpdc1Yb2O6keRCu6LpEhbHFcn+OF+HZOfOfLnGXK9x7bgB90yfSApdqsrKVIgCBEAcScupVowSVGvGkHDk2I75U48eON9Iz5Msp7UVhotaHucQ1rM3OJgNHMlRn7WUBh9k1z24hLyC2BOZDTmSsNqaeOiKQ0NQF33jBPgIEdyqGXcG0sgvQmOOt1w3LLeo6C/LupWhpqMe0VANTADxwd8Cpuz9pc6hSJJBALTmfqmPSFQUbA6oGAaaH9F1DWCm1rQIACwvqa22l3drdldwGTiFJoXg/fmq6mclk5+Sz0svbPbmvMaHgVKXMhwDQfBWFivA6OzHHeP1VbBbIvGmcwvVAIiIC8JXq0VCgxq1FFq5ra8qLUyWkURyzCczI3futtYBzSPnvQmdVGe4t7vRW0jbVQthjDh7WjuiqbwoQ4OG7P8pOfgVZVCA7GO53wKiVjJbO55YfwvAIWk/irVSpAPdwOfitrrMIWYpYTB3ZT8VvLZarzNncFbYHCnW4B+R79x8cuqn3w/wB1vU9ch8VV25m9SnVvaQ/kB1GvzzU8k3NnH6uki7KmE4d279FZkKlp+YV3Z3Ymgrks065dvAICiWp8M5kqXaDkqy1Ok92X6pjDKqS8qcx3/D91mLHLYW20Mlw6n0/RTqVPJb2+mMntou6jhyUq0he0GZrOs1Uva2/TbZz2R3LGs+B1hANFrtbfcHF3oCmjbY52YHASpGKAFFZm4n5y+Ss3Ol0bgM/iosTKvbqryMJ7wrBc1Zq2eIZZ5LobPWD2hw+Ssqs2IiKBi8qPUK2Odmei1PVora0uWpy2PWouV4qjvELBzpW5xWiqzePBWQrra/2cE+7MHkDkT0WNajAPGW/yk/qttsa2oxzToQWkd+RWmxOcWNa73gMLjxLYz6xPVW2JFfMle0TIWL3dqeazoMgxu3KBDtdGWkKPYcuyd/qrOqMyFE9jqtMctzVZ5TV3GQYpd21YdgO/MKJZ68uwOydu+8OXNZ2tpAxN1bmPiFlni1xy/SytpgKuIUuvVD2NeNCPgtLWqMVsqh+zmp0HxUoNWuIqd4HxCkhqsowY1ZYVk4LNgUXtM6R7QIheVzGHvPoVlalDvZ5FKQJMGANZLSAB1VvhHy20K0MDokkTHEnQLGnPuzO9x4nlyWFNhgNGu+PQclOo0A0Zpl6JWYOEK2uSYdwlc6+tjM/UBy++Rv8AwjzV3s7VPaadT2vgfgscvTSLpERUSiA9o9/wWJWThDj4+S11jBlaM2D9FGcVIeVoqsVohpctZqQsg7cVg9qt0dq28iWn2gzH1xy+0OYVfQtX05aDkWtcOoqNJ/lar1zFy94WU0rUyo0dhzAzucHEx3EOy/CVaWI9r5SqR3qLTMqQ3RR8JYTJWTGrBq3UgqxNVt+WPEyQSHDMOGRBG8FQrgvz2pNKrArN6CoB9ZvA8R8i+tvukLhrzsZFQVGmHNOo1lbces541lnvG7jrbI/C91LcfpGd0w8dCQfzKcGqoum1e1wuOTmtcHdS3MeCtgDPL+37rO469NJd+0a15PbzB8j+6lsCg3jVDXUyeLh6KdTfInko1S0cswtZcsaj+9RUtNV0kqvvy0GnTYdT7RoA7zn5T4KcAqTa9jnsosa7DNWS7eGhrgcPPMDqrYf1XJYWe8DUOCmBl7zhoOXeplTtZT2Bqd7uQPDifkV120hhFKmMNNo7RG/rvJ4q19nOQyAyAV89TpXHd7aWtxHu05Kxu9+Co3mYPVaWUwAtYfJy3Lmyb4utRYUX4mg8QCs1RLVWZoVHeJUwqG8q2KtRS6MivCFuqNBUVxIWkqljXVbKjY9xyIUpxUesye/cd4VkMQ5VN8NJpPP2YePyuk+UqbWqluvQ7iodrtAfTeyM3Nc0HdJBAWF58Jlq3VdM+n5Lj5SbjbYnSAVN3Lm7jvKG4HgyOOvVXH+KldGnOksapIgBQmWoAKLWtRcYlRpO06tUDhkqa20JHzwVq1gDFrayVMvjUWbiruBpbUcPufEK/DlW2ajhqv8Awt8z+ynYlfL3dqY+lPtZWwtpkfaPwV1ZzkFze175FMfj/wBq6KxmWN7h6Jr0fLe8+i1OKxtVcNHNRW2niqaXSCVz9+Vg+0ULPnicHvBG7CWjPlr4K+kESFU2GmDaatXV0CkDwawkkDhLnGe4cEhV3ZbOGNDW6ceJ4qS1q1U3LYVW0j1+i1spr0ytjHLOtMVzdT5pgcCR8fipiqbnrdpzeInw/urZUSKtqmHEc1ZKHbaWYI6q2PauXSOSsHBSAxeFqvtTSC+lwWl5jVWDmBVdtpYssxOUjIj55qMt6+1px+PlPLpFrvB4EHUHMHvVVUsZ96m7Lex0kfldqOs9F5bbvrAkMtI/NTxHqQ4ei8oUbQMg+m7vxM8gCvL5eTLK6yr2eLiwwm8NwtFMES5sOG9a7PXjJbqrKx95gA4hwP6FV94OwDFGW/ktfpOe45eF6Y/WcEyx8538p5qyt1nbmqOz22SruwneV6seRVk/QLKkxYawvbVWDGql7TOmBcMRjWGz/NHxWD3KJdtXE+oebR5E/FTqlEgBx0PlOYlXlk9VWxzu0bcTqXeR5hdVRENHcPRc9fQl9If+Ro8VfvfAhXvSvygWs5rGz05K1Wh4LgOKntqMptlxAVJfS1iFfdvbZqLqh1iGji4+6PncCqzZCrLczJOZ7zqfFcxtfaate1UycrO0FrR99313DnoOHUq/2csj2IOzDVlmtVnqbipAKpfSY8B4hYmqNNF68rUQCqVpKlXacNVp45eK6JcuwlpB4GR0XTtM5rNavVrr6IimK1HWLkRWVYFVttPv9x9F4itBz1V5xanTilNxxaoi8fPt9Dj031Tkq5wlpB5oiyy/JOP4qq7Rouisv6Ii9589VjZlV3ue0ERPlCNc/wD1Pxj+kK6qH6OnzcZ5xp4Iijk/KJx6qovP/Wo/+0eitK5yKIt/hl8ubtDzjOZWFdoLTI3L1F4nNb5PZ4ZPFw21DyGZEjtDy0X1W4f9Cmd+EZ9ERdv09+1xfUdrUaraF6i6q5I8clEIizaR7V3robN7jfwj0RFn8r3p/9k=\"\n            alt=\"Photo of a Shiba Inu\" class=\"profileimage\" width=\"195px\" height=\"164px\" />\n\n          <mat-card-content>\n            <p>{{ profile.firstName }} {{ profile.lastName }}</p>\n          </mat-card-content>\n          <p style=\"opacity:.7\">@ {{ profile.userName }}</p>\n        </mat-card>\n      </div>\n      <div>\n        <mat-card class=\"card card2\" style=\"display:block; margin-top: 1vh;\">\n          <div [ngSwitch]=\"profileState\">\n            <ng-template [ngSwitchCase]=\"'currentProfile'\">\n              <p>Email Id : {{ profile.emailId }}</p>\n              <p>Age : {{ profile.age }}</p>\n              <p>Gender : {{ profile.gender }}</p>\n              <p>Company : {{ profile.company }}</p>\n              <p>College : {{ profile.college }}</p>\n              <p>Course : {{ profile.course }}</p>\n              <p>Discipline : {{ profile.discipline }}</p>\n              <p>list {{ profile.interests.join(\", \") }}</p>\n            </ng-template>\n            <ng-template [ngSwitchCase]=\"'updatingProfile'\">\n              <p>Email Id : {{ profile.emailId }}</p>\n              <p>\n                 <label>Age:-</label>\n                 <input type=\"text\" value =  \"{{ profile.age }}\" [(ngModel)]=\"profile.age\"/>\n              </p>\n                <label>Gender:-</label>\n               <input type=\"text\" value= \"{{ profile.gender}}\" [(ngModel)]=\"profile.gender\"/>\n              <p>\n                  <label>Company:-</label>\n                  <input type=\"text\" value= \"{{ profile.company }}\" [(ngModel)]=\"profile.company\"/>\n              </p>\n              <p>\n                  <label>College:</label>\n                 <input type=\"text\" value = \"{{ profile.college }}\" [(ngModel)]=\"profile.college\"/>\n              </p>\n              <p>\n                  <label>Course:-</label>\n                <input type=\"text\" value=\"{{ profile.course }}\" [(ngModel)]=\"profile.course\"/></p>\n              <p>\n                  <label>Discipline:-</label>\n                  <input type=\"text\" value=\"{{ profile.discipline }}\" [(ngModel)]=\"profile.discipline\"/>\n              </p>\n              <p>list {{ profile.interests.join(\", \") }}</p>\n            </ng-template>\n          </div> \n          <button (click)=\"updateProfile()\">Update Profile</button>\n          <button (click)=\"submitUpdatedProfile(profile.age, profile.gender, profile.company, profile.college, profile.course, profile.discipline)\">Submit Changes</button>\n          <button (click)=\"deleteUserProfile()\">Delete Profile</button>\n        </mat-card>\n      </div>\n    </div>\n  </mat-grid-tile>\n  \n  <mat-grid-tile [colspan]=\"tiles[2].cols\" [rowspan]=\"tiles[2].rows\" [style.background]=\"tiles[2]\">\n    <app-scoreandbadge></app-scoreandbadge>\n  </mat-grid-tile>\n\n  <mat-grid-tile [colspan]=\"tiles[1].cols\" [rowspan]=\"tiles[1].rows\" [style.background]=\"tiles[1].color\">\n    <mat-tab-group class=\"tile1\">\n      <mat-tab label=\"Question Attempted\">\n        <mat-list role=\"list\" *ngFor=\"let questionA of (profile.attemptedQuestion | slice: 1)\">\n          <mat-list-item role=\"listitem\" [routerLink]=\"['/submission-component']\"><i class=\"fab fa-quora\"></i> &nbsp;\n            <p>{{ questionA.questionTitle }}</p>\n          </mat-list-item>\n        </mat-list>\n      </mat-tab>\n      <mat-tab label=\"Question Posted\">\n        <mat-list role=\"list\" *ngFor=\"let questionP of (profile.postedQuestion | slice: 1)\">\n          <mat-list-item role=\"listitem\">\n            <i class=\"fab fa-quora\"></i>;\n            {{ questionP.questionTitle }}</mat-list-item>\n        </mat-list>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-grid-tile>\n</mat-grid-list>\n\n"

/***/ }),

/***/ "./src/app/_components/userprofile/userprofile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_components/userprofile/userprofile.component.ts ***!
  \******************************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_userprofile_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/userprofile-service.service */ "./src/app/services/userprofile-service.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var src_app_services_scorebadge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scorebadge.service */ "./src/app/services/scorebadge.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprofileComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function UserprofileComponent(token, userService, scorebadgeservice) {
        this.token = token;
        this.userService = userService;
        this.scorebadgeservice = scorebadgeservice;
        // for getting data from scoreand badge service
        this.userData = {};
        this.tiles = [
            { text: 'One', cols: 1, rows: 5, color: 'white' },
            { text: 'Two', cols: 2, rows: 2.5, color: 'white' },
            { text: 'three', cols: 2, rows: 2.5, color: 'grey' },
        ];
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uname = this.token.getUsername();
        this.userService.getUserProfile(this.uname).subscribe(function (data) { return _this.profile = data; });
        this.profileState = 'currentProfile';
        // call score and badge service to get data(added by pratima on 27th feb2019)
        this.scorebadgeservice.getUserData(this.uname).subscribe(function (data) {
            _this.userData = data;
        }, function (error) {
            // alert(error);
        });
    };
    UserprofileComponent.prototype.updateProfile = function () {
        this.profileState = 'updatingProfile';
    };
    UserprofileComponent.prototype.submitUpdatedProfile = function (age, gender, company, college, course, discipline) {
        this.profile.age = age;
        this.profile.gender = gender;
        this.profile.company = company;
        this.profile.college = college;
        this.profile.course = course;
        this.profile.disciple = discipline;
        this.userService.updateProfile(this.profile).subscribe();
        this.profileState = 'currentProfile';
    };
    UserprofileComponent.prototype.deleteUserProfile = function () {
        this.userService.deleteUserProfile(this.profile.username).subscribe();
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/_components/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/_components/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _services_userprofile_service_service__WEBPACK_IMPORTED_MODULE_1__["UserprofileServiceService"], src_app_services_scorebadge_service__WEBPACK_IMPORTED_MODULE_3__["ScorebadgeService"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/app/_components/voting/voting.component.css":
/*!*********************************************************!*\
  !*** ./src/app/_components/voting/voting.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n    display: flex;\n    width: 30vw;\n\n  }\n  \n  .flex-container > div {\n    margin: .3vw;\n    font-size: 15px;\n  }\n  \n  button{\n    width: 10px;\n    height:20px;\n  }\n  \n  i{\n   font-size:15px;\n  }"

/***/ }),

/***/ "./src/app/_components/voting/voting.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/voting/voting.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.indigo-pink.min.css\">\n<script defer src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script>\n\n<div class=\"flex-container\">\n<div>\n  <!-- FAB button with ripple -->\n<button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\" (click)=\"myFunction1()\">\n  <i class=\"material-icons\">thumb_up</i>\n</button>\n<p>Up vote</p>\n</div>\n<div>\n<!-- FAB button with ripple -->\n<button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\" (click)=\"myFunction2()\">\n  <i class=\"material-icons\">thumb_down</i>\n</button>\n<p>Down vote</p>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/_components/voting/voting.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_components/voting/voting.component.ts ***!
  \********************************************************/
/*! exports provided: VotingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingComponent", function() { return VotingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_questionservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/questionservice.service */ "./src/app/services/questionservice.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VotingComponent = /** @class */ (function () {
    function VotingComponent(token, http, questionservice) {
        this.token = token;
        this.http = http;
        this.questionservice = questionservice;
    }
    VotingComponent.prototype.ngOnInit = function () {
    };
    VotingComponent.prototype.myFunction1 = function () {
        this.vote = 'UP';
        this.username = this.token.getUsername();
        // tslint:disable-next-line:label-position
        this.add = '{"userName":"' + this.username + '"}';
        this.obj1 = JSON.parse(this.add);
        this.add = '{"voteStatus":"' + this.vote + '"}';
        this.obj2 = JSON.parse(this.add);
        var obj3 = Object.assign(this.obj2, this.obj1);
        this.questionservice.sendVote(obj3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            // this.alertService.success(data, true);
            alert('Voting Successfull');
        }, function (error) {
            alert(error);
        });
    };
    VotingComponent.prototype.myFunction2 = function () {
        this.vote = 'DOWN';
        this.username = this.token.getUsername();
        // tslint:disable-next-line:label-position
        this.add = '{"userName":"' + this.username + '"}';
        this.obj1 = JSON.parse(this.add);
        this.add = '{"voteStatus":"' + this.vote + '"}';
        this.obj2 = JSON.parse(this.add);
        var obj3 = Object.assign(this.obj2, this.obj1);
        this.questionservice.sendVote(obj3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            // this.alertService.success(data, true);
            alert('Successfull');
        }, function (error) {
            alert(error);
        });
    };
    VotingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voting',
            template: __webpack_require__(/*! ./voting.component.html */ "./src/app/_components/voting/voting.component.html"),
            styles: [__webpack_require__(/*! ./voting.component.css */ "./src/app/_components/voting/voting.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], src_app_services_questionservice_service__WEBPACK_IMPORTED_MODULE_1__["QuestionserviceService"]])
    ], VotingComponent);
    return VotingComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_searchdisplay_searchdisplay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components/searchdisplay/searchdisplay.component */ "./src/app/_components/searchdisplay/searchdisplay.component.ts");
/* harmony import */ var _components_searchservice_searchservice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/searchservice/searchservice.component */ "./src/app/_components/searchservice/searchservice.component.ts");
/* harmony import */ var _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/voting/voting.component */ "./src/app/_components/voting/voting.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/login/login.component */ "./src/app/_components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/home/home.component */ "./src/app/_components/home/home.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/user/user.component */ "./src/app/_components/user/user.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/register/register.component */ "./src/app/_components/register/register.component.ts");
/* harmony import */ var _components_savequestion_savequestion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/savequestion/savequestion.component */ "./src/app/_components/savequestion/savequestion.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/edit/edit.component */ "./src/app/_components/edit/edit.component.ts");
/* harmony import */ var _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/userprofile/userprofile.component */ "./src/app/_components/userprofile/userprofile.component.ts");
/* harmony import */ var _components_submission_submission_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/submission/submission.component */ "./src/app/_components/submission/submission.component.ts");
/* harmony import */ var _components_editaudio_editaudio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/editaudio/editaudio.component */ "./src/app/_components/editaudio/editaudio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: 'userprofile',
        component: _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__["UserprofileComponent"]
    },
    {
        path: 'execution',
        component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]
    },
    {
        path: 'execution/:qid',
        component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]
    },
    {
        path: 'post/:username',
        component: _components_savequestion_savequestion_component__WEBPACK_IMPORTED_MODULE_9__["SavequestionComponent"]
    },
    {
        path: 'user',
        component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]
    },
    {
        path: 'auth/login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'voting',
        component: _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_2__["VotingComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'submission-component',
        component: _components_submission_submission_component__WEBPACK_IMPORTED_MODULE_12__["SubmissionComponent"]
    },
    {
        path: 'search',
        component: _components_searchservice_searchservice_component__WEBPACK_IMPORTED_MODULE_1__["SearchserviceComponent"]
    },
    {
        path: 'editaudio',
        component: _components_editaudio_editaudio_component__WEBPACK_IMPORTED_MODULE_13__["EditaudioComponent"]
    },
    {
        path: 'display/:tag',
        component: _components_searchdisplay_searchdisplay_component__WEBPACK_IMPORTED_MODULE_0__["SearchdisplayComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Site {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n    position: relative;\n  }\n  \n  .Site-content {\n    flex: 1;\n    /* padding-top: 70px; */\n  }\n "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body class=\"Site\">\n    <nav class=\"fixed-top\">\n        <app-navbar></app-navbar>\n    </nav>\n<app-navbar></app-navbar>\n<main class=\"Site-content\">\n<router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>\n</body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token-storage.service */ "./src/app/services/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
                _this.authority = 'user';
                return true;
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_editaudio_editaudio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components/editaudio/editaudio.component */ "./src/app/_components/editaudio/editaudio.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/login/login.component */ "./src/app/_components/login/login.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/user/user.component */ "./src/app/_components/user/user.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/home/home.component */ "./src/app/_components/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/register/register.component */ "./src/app/_components/register/register.component.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _components_savequestion_savequestion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_components/savequestion/savequestion.component */ "./src/app/_components/savequestion/savequestion.component.ts");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_components/auth/auth-interceptor */ "./src/app/_components/auth/auth-interceptor.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_components/edit/edit.component */ "./src/app/_components/edit/edit.component.ts");
/* harmony import */ var _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_components/userprofile/userprofile.component */ "./src/app/_components/userprofile/userprofile.component.ts");
/* harmony import */ var _services_userprofile_service_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/userprofile-service.service */ "./src/app/services/userprofile-service.service.ts");
/* harmony import */ var _components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_components/recommend/recommend.component */ "./src/app/_components/recommend/recommend.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_submission_submission_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_components/submission/submission.component */ "./src/app/_components/submission/submission.component.ts");
/* harmony import */ var _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_components/voting/voting.component */ "./src/app/_components/voting/voting.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_components/navbar/navbar.component */ "./src/app/_components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_components/footer/footer.component */ "./src/app/_components/footer/footer.component.ts");
/* harmony import */ var _components_scoreandbadge_scoreandbadge_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_components/scoreandbadge/scoreandbadge.component */ "./src/app/_components/scoreandbadge/scoreandbadge.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_components/landing/landing.component */ "./src/app/_components/landing/landing.component.ts");
/* harmony import */ var _components_searchservice_searchservice_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_components/searchservice/searchservice.component */ "./src/app/_components/searchservice/searchservice.component.ts");
/* harmony import */ var _components_searchdisplay_searchdisplay_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_components/searchdisplay/searchdisplay.component */ "./src/app/_components/searchdisplay/searchdisplay.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var monacoConfig = {
    baseUrl: 'assets',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: function () {
        console.log(window.monaco);
        var id = 'foo.json';
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [{
                    uri: 'http://myserver/foo-schema.json',
                    fileMatch: [id],
                    schema: {
                        type: 'object',
                        properties: {
                            p1: {
                                enum: ['v1', 'v2']
                            },
                            p2: {
                                $ref: 'http://myserver/bar-schema.json'
                            }
                        }
                    }
                }, {
                    uri: 'http://myserver/bar-schema.json',
                    fileMatch: [id],
                    schema: {
                        type: 'object',
                        properties: {
                            q1: {
                                enum: ['x1', 'x2']
                            }
                        }
                    }
                }]
        });
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_27__["EditComponent"],
                _components_savequestion_savequestion_component__WEBPACK_IMPORTED_MODULE_21__["SavequestionComponent"],
                _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_28__["UserprofileComponent"],
                _components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_30__["RecommendComponent"],
                _components_submission_submission_component__WEBPACK_IMPORTED_MODULE_32__["SubmissionComponent"],
                _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_33__["VotingComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_34__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__["FooterComponent"],
                _components_scoreandbadge_scoreandbadge_component__WEBPACK_IMPORTED_MODULE_36__["ScoreandbadgeComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_37__["LandingComponent"],
                _components_searchservice_searchservice_component__WEBPACK_IMPORTED_MODULE_38__["SearchserviceComponent"],
                _components_editaudio_editaudio_component__WEBPACK_IMPORTED_MODULE_0__["EditaudioComponent"],
                _components_searchdisplay_searchdisplay_component__WEBPACK_IMPORTED_MODULE_39__["SearchdisplayComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_23__["OwlModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_22__["ResizableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_18__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_20__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ScrollingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_24__["MonacoEditorModule"].forRoot(monacoConfig),
                _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"].forRoot([
                    { path: 'fetch', component: _components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_30__["RecommendComponent"] },
                    { path: 'voting', component: _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_33__["VotingComponent"] }
                ])
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"], multi: true },
                _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__["httpInterceptorProviders"],
                _services_userprofile_service_service__WEBPACK_IMPORTED_MODULE_29__["UserprofileServiceService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loginUrl = 'http://13.234.74.67:8092/authentication-service/api/auth/signin';
        this.signupUrl = 'http://13.234.74.67:8092/authentication-service/api/auth/signup';
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (emailId, password) {
        var _this = this;
        return this.http.post("http://localhost:4000/users/authenticate", { emailId: emailId, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/questio-exe-engine.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/questio-exe-engine.service.ts ***!
  \********************************************************/
/*! exports provided: QuestioExeEngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestioExeEngineService", function() { return QuestioExeEngineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestioExeEngineService = /** @class */ (function () {
    function QuestioExeEngineService(_http) {
        this._http = _http;
        this.url = './assets/question.json';
        this.url3 = 'http://13.234.74.67:8092/question-service/api/v1/question/';
        this.url2 = 'http://13.234.74.67:8023/rest/neo4j/questions/2';
        this.url4 = 'http://13.234.74.67:8029/api/v1/submission';
        this.url5 = 'http://13.234.74.67:8092/execution-engine/api/v1/question';
    }
    QuestioExeEngineService.prototype.getcode = function (gitUrl, username) {
        return this._http.put(this.url5 + "/" + username, { "gitUrl": gitUrl });
    };
    QuestioExeEngineService.prototype.sendDatatoSubmission = function (quesresultdata) {
        console.log(quesresultdata);
        console.log("oye kishlay data bhej raha hu accept karle");
        this._http.post(this.url4, quesresultdata).subscribe();
    };
    QuestioExeEngineService.prototype.getQuestionById = function (id) {
        console.log('ID : ' + id);
        var quest = this._http.get(this.url3 + id);
        console.log(quest);
        return quest;
    };
    QuestioExeEngineService.prototype.findques = function () {
        var trackinfo = this._http.get(this.url);
        return trackinfo;
    };
    QuestioExeEngineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestioExeEngineService);
    return QuestioExeEngineService;
}());



/***/ }),

/***/ "./src/app/services/questionservice.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/questionservice.service.ts ***!
  \*****************************************************/
/*! exports provided: QuestionserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionserviceService", function() { return QuestionserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionserviceService = /** @class */ (function () {
    function QuestionserviceService(_http) {
        this._http = _http;
        this.questionPopulatorApidUrl = 'http://13.234.74.67:8092/question-service/api/v1/';
        this.getallquestionUrl = 'http://13.234.74.67:8092/recommendation-service/rest/neo4j/questions';
        console.log('http service got called');
    }
    QuestionserviceService.prototype.saveQuestion = function (questionObj) {
        // tslint:disable-next-line:prefer-const
        console.log('QUESTION : ', questionObj);
        var savedQuestionObj = this._http.post(this.questionPopulatorApidUrl + 'question', questionObj, { responseType: 'text' });
        console.log(savedQuestionObj);
        return savedQuestionObj;
    };
    QuestionserviceService.prototype.getallquestioninfo = function () {
        var allinfo = this._http.get(this.getallquestionUrl);
        console.log(allinfo);
        return allinfo;
    };
    QuestionserviceService.prototype.sendVote = function (questionObj) {
        // tslint:disable-next-line:prefer-const
        console.log('QUESTION : ', questionObj);
        var savedQuestionObj = this._http.post('http://172.23.239.122:8058/vote', questionObj, { responseType: 'text' });
        console.log(savedQuestionObj);
        return savedQuestionObj;
    };
    QuestionserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionserviceService);
    return QuestionserviceService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.getAll = function () {
        return this.http.get("http://localhost:8096/api/v1/users");
    };
    RegisterService.prototype.getById = function (id) {
        return this.http.get("http://localhost:8096/api/v1/users/" + id);
    };
    RegisterService.prototype.register = function (user) {
        console.log('user details are  : ', user);
        return this.http.post("http://13.234.74.67:8092/registration-service/api/v1/register", user, { responseType: 'text' });
    };
    RegisterService.prototype.update = function (user) {
        return this.http.put("http://localhost:8096/api/v1/users/" + user.id, user);
    };
    RegisterService.prototype.delete = function (id) {
        return this.http.delete("http://localhost:8096/api/v1/users/" + id);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/scorebadge.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/scorebadge.service.ts ***!
  \************************************************/
/*! exports provided: ScorebadgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorebadgeService", function() { return ScorebadgeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScorebadgeService = /** @class */ (function () {
    function ScorebadgeService(_http) {
        this._http = _http;
        this.scoreBadgeApidUrl = 'http://13.234.74.67:8092/score-badge-service/api/v1/';
        console.log('http service got called');
    }
    ScorebadgeService.prototype.getUserData = function (userName) {
        // tslint:disable-next-line:prefer-const
        var getUserData = this._http.get(this.scoreBadgeApidUrl + 'getTotalScore' + '/' + userName);
        console.log(getUserData);
        return getUserData;
    };
    ScorebadgeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScorebadgeService);
    return ScorebadgeService;
}());



/***/ }),

/***/ "./src/app/services/searchservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/searchservice.service.ts ***!
  \***************************************************/
/*! exports provided: SearchserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchserviceService", function() { return SearchserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchserviceService = /** @class */ (function () {
    function SearchserviceService(httpclient) {
        this.httpclient = httpclient;
        this.fetchURL = 'http://13.234.74.67:8092/search-service/api/v1/question/';
        this.getinfo = 'http://13.234.74.67:8092/search-service/api/v1/searched';
    }
    SearchserviceService.prototype.findQuestion = function (tag) {
        var info = this.httpclient.get(this.fetchURL + tag);
        console.log(tag + info);
        return info;
    };
    SearchserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchserviceService);
    return SearchserviceService;
}());



/***/ }),

/***/ "./src/app/services/token-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'http://13.234.74.67:8092/authentication-service/api/test/user';
    }
    UserService.prototype.getUserBoard = function () {
        return this.http.get(this.userUrl, { responseType: 'text' });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/userprofile-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/userprofile-service.service.ts ***!
  \*********************************************************/
/*! exports provided: UserprofileServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileServiceService", function() { return UserprofileServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofileServiceService = /** @class */ (function () {
    function UserprofileServiceService(http) {
        this.http = http;
        this.userProfileUrl = 'http://13.234.74.67:8092/userprofile-service/api/v1/';
    }
    UserprofileServiceService.prototype.getUserProfile = function (userName) {
        // tslint:disable-next-lin
        console.log('USERNAME : ', userName);
        var userProfile = this.http.get('http://13.234.74.67:8092/userprofile-service/api/v1/userprofile/' + userName);
        return userProfile;
    };
    UserprofileServiceService.prototype.updateProfile = function (updatedProfile) {
        // tslint:disable-next-lin
        console.log('User Profile : ', updatedProfile);
        var newProfile = this.http.post('http://13.234.74.67:8092/userprofile-service/api/v1/userprofile/', updatedProfile);
        console.log('hii');
        return newProfile;
    };
    UserprofileServiceService.prototype.deleteUserProfile = function (username) {
        var deletedProfile = this.http.delete('http://13.234.74.67:8092/userprofile-service/api/v1/userprofile/' + username);
        return deletedProfile;
    };
    UserprofileServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserprofileServiceService);
    return UserprofileServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/MashupRelease/boeing-wave3-mashup/mashup-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map