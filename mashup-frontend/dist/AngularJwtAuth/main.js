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

module.exports = "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\">\n<div class=\"container-fluid \">\n    <div class=\"row\">\n        <div class=\"col-sm-5\">\n            <div class=\"row font-weight-bold \">\n\n                <h2>{{questitle}}</h2>\n                <mat-divider></mat-divider>\n            </div>\n            <div class=\"row\">\n                <p class=\"text-justify \">\n                    {{quesstatement}}\n                </p>\n                <br>\n\n                <mat-divider></mat-divider>\n\n            </div>\n            <ul>\n                <h2>Input</h2>\n                <div *ngFor=\"let inp of questioninputs\">\n                    <li>{{inp}}</li>\n\n                </div>\n                <br>\n\n\n            </ul>\n            <mat-divider></mat-divider>\n            <h2>Output</h2>\n            <p>{{questionout}}</p>\n\n\n        </div>\n        <div class=\"col-sm-7\" container-diff>\n            <select (change)=\"selectChangeHandler($event)\">\n                <option value=\"java\">Java</option>\n                <option value=\"python\">Python</option>\n                <option value=\"cpp\">C++</option>\n                <option value=\"c\">C</option>\n\n            </select>\n            <ngx-monaco-editor id=\"editor2\" class=\"my-code-editor\" [options]=\"editorOptions\" [(ngModel)]=\"code\"\n                (onInit)=\"onInit($event)\"></ngx-monaco-editor>\n            <form class=\"form-inline my-2 my-lg-0 hello\" #createForm=\"ngForm\" (ngSubmit)=\"submit()\">\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" id=\"button-addon2\">Submit </button>\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" id=\"button-addon2\">Compile </button>\n                <h3>Vote this question -> </h3>\n                <app-voting></app-voting>\n            </form>\n            <button (click)=sendDataToSubmissionService()></button>\n            <table id=\"conversation\" class=\"table table-striped\" style=\"margin-top: 20px;\">\n                <thead>\n                    <tr>\n                        <th>Results</th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let greeting of greetings\">\n                    <tr>\n                        <td [ngStyle]=\"colorg\" style=\"color:red\">{{greeting}}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n\n        </div>\n\n    </div>\n</div>"

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
        // name: string;
        this.code = "public class Employee {\n    public  String addEmployeeEmailId(String emailId){\n\n        return null;\n    }\n}\n";
        this.stompClient = null;
        this.auto = new _autocomplete__WEBPACK_IMPORTED_MODULE_4__["autocomplete"];
        this.selectedLang = 'java';
        this.editorOptions = { theme: 'vs-dark', language: 'java' };
        //  "username":this.uname,"questionId":this.qid,
        //  "questionTitle":this.questitle,result:this.result,
        //  "testCasePassed":this.testpass,"TotalTestCases":this.totaltest,
        //  "difficulty":this.difficulty
        this.options = {
            theme: 'vs-dark'
        };
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
        console.log(line);
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qid = this._route.snapshot.paramMap.get('qid');
        this.uname = this.token.getUsername();
        console.log(this.qid);
        console.log(this.uname);
        this.connect();
        // {"questionId":1,"questionTitle":"Awesome1","questionDescription":"Question2","inputFormat":"input format","outputFormat":"output Format","difficulty":"Intermediate","tags":"java","gitUrl":"url","username":"def"}
        this.quesservice.getQuestionById('f').subscribe(function (data) {
            _this.questionObj = data;
            _this.questitle = data['questionTitle'];
            _this.quesstatement = data['questionDescription'];
            _this.questioninputs = data['inputFormat'];
            _this.questionout = data['outputFormat'];
            _this.difficulty = data['difficulty'];
            console.log(data);
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
        var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__('http://localhost:8025/gkz-stomp-endpoint');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](socket);
        var _this = this;
        this.stompClient.connect({}, function (frame) {
            _this.setConnected(true);
            console.log('Connected: ' + frame);
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
        console.log('Disconnected!');
    };
    EditComponent.prototype.submit = function () {
        console.log("From here");
        console.log(this.questionObj);
        //console.log(this.code);
        this.greetings = [];
        this.stompClient.send('/gkz/hello', {}, JSON.stringify({ 'codeWritten': this.code }));
        console.log("sending data to submission service");
        //this.sendDataToSubmissionService();
    };
    EditComponent.prototype.sendDataToSubmissionService = function () {
        //console.log("ayhshd");
        this.quesservice.sendDatatoSubmission({ "code": this.code, "username": this.uname, "questionId": this.qid,
            "questionTitle": this.questitle, result: this.result,
            "testCasePassed": this.testpass, "totalTestCases": this.totaltest,
            "difficulty": this.difficulty });
    };
    EditComponent.prototype.showGreeting = function (message) {
        this.greetings.push(message);
        this.greetings = this.greetings[0].split('@*#');
        this.totaltest = this.greetings[0];
        this.testpass = this.greetings[1];
        this.greetings = this.greetings[2].split('\n');
        this.colorg = {
            color: "red"
        };
        if (this.greetings[0] === 'Tests passed') {
            this.result = "passed";
            this.colorg = {
                color: "green"
            };
        }
        else {
            this.result = "failed";
        }
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            styles: ['ngx-monaco-editor { height: 70vh; width:100%; display:block; }'],
            styleUrls: [],
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/_components/edit/edit.component.html")
        }),
        __metadata("design:paramtypes", [_services_questio_exe_engine_service__WEBPACK_IMPORTED_MODULE_1__["QuestioExeEngineService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/_components/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/_components/footer/footer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n   display: flex;\n   min-height: 100vh;\n   flex-direction: column;\n }\n\n main {\n   flex: 1 0 auto;\n }\n\n .page-footer{\n   background-image: url(\"/assets/MASHUP-BACK.png\");\n   background-size: cover;\n}"

/***/ }),

/***/ "./src/app/_components/footer/footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/footer/footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Compiled and minified CSS -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n\n<!-- Compiled and minified JavaScript -->\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n        \n<footer class=\"page-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">Footer Content</h5>\n        <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n      </div>\n      <div class=\"col l4 offset-l2 s12\">\n        <h5 class=\"white-text\">Links</h5>\n        <ul>\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n    © 2014 Copyright Text\n    <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n    </div>\n  </div>\n</footer>"

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

module.exports = ".post{\n    /* position: absolute; */\n    top: 10;\n    margin-right: 9%;\n    margin-left: 91%;\n}\n.logout{\n    position: absolute;\n    top: 2%;\n    right: 5%;\n    color: red;\n\n\n}\n.execut{\nposition: relative;\nmargin-right: 10%;\nmargin-left: 80%;\n\n}\n.userprofile{\n    position: absolute;\n    top: 2%;\n    right: 15%;\n    \n}\n"

/***/ }),

/***/ "./src/app/_components/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/_components/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n  <div class=\"row col-lg-12\">\n    <app-recommend>        \n    </app-recommend>\n  </div>\n  <!-- <div id=\"band\" class=\"container text-center\"> -->\n  <div class=\"row col-lg-12\">\n    <!-- <div class=\"row text-center\"> -->\n    <p>\n      We provide timely, specialised veterinary care to injured urban wild\n      animals, rehabilitate them, and then release them into their natural or\n      adoptive habitats. Create awareness, amongst citizens of all ages and\n      backgrounds, about urban wildlife, and to instil a deep regard for their\n      cohabitation needs and when to actively engage in their welfare. Community\n      outreach and education about our local environment and how we can enrich\n      and protect it. Develop a practise that employs better wildlife care\n      techniques, engaging specialists and veterinarians from across the world.\n    </p>\n    <!-- </div> -->\n  </div>\n\n  <!-- More Pictures aside section -->\n  <div class=\"row col-lg-12\">\n    <!-- <div class=\"row text-center\"> -->\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <img src=\"https://media.giphy.com/media/cpIvoQSU8vC9O/giphy.gif\" alt=\"code\" width=\"400\" height=\"300\" />\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <img\n          src=\"https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4646/original/humanities-to-coding.png\"\n          alt=\"build\" width=\"400\" height=\"300\" />\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <img src=\"https://www.gstatic.com/webp/gallery/1.jpg\" alt=\"feel\" width=\"400\" height=\"300\" />\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <p>\n  <iframe width=\"400\" height=\"315\" src=\"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1\">\n  </iframe><br />\n</p> -->\n\n<ng-template #loggedOut>\n  <!-- -------------------------- -->\n  <div id=\"band\" class=\"container text-center\">\n    <div class=\"jumbotron\">\n      <h1>Happy Coding!</h1>\n      <p><em>Place to the people who love to code!! Keep coding</em></p>\n    </div>\n    <p>\n      We provide timely, specialised veterinary care to injured urban wild\n      animals, rehabilitate them, and then release them into their natural or\n      adoptive habitats. Create awareness, amongst citizens of all ages and\n      backgrounds, about urban wildlife, and to instil a deep regard for their\n      cohabitation needs and when to actively engage in their welfare. Community\n      outreach and education about our local environment and how we can enrich\n      and protect it. Develop a practise that employs better wildlife care\n      techniques, engaging specialists and veterinarians from across the world.\n    </p>\n    <br />\n    <!-- More Pictures aside section -->\n\n    <div class=\"row text-center nav-fixed-bottom\">\n      <div class=\"col-sm-4\">\n        <div class=\"thumbnail\">\n          <img src=\"https://media.giphy.com/media/cpIvoQSU8vC9O/giphy.gif\" alt=\"code\" width=\"400\" height=\"300\" />\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"thumbnail\">\n          <img\n            src=\"https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4646/original/humanities-to-coding.png\"\n            alt=\"build\" width=\"400\" height=\"300\" />\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"thumbnail\">\n          <img src=\"https://www.gstatic.com/webp/gallery/1.jpg\" alt=\"feel\" width=\"400\" height=\"300\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>"

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

/***/ "./src/app/_components/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_components/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"isLoggedIn; else loggedOut\">\n  <h4 style=\"color: purple\">You are Logged in.</h4>\n  <h2 style=\"color: red\" >Hey, Enjoy the Stackroute guyz</h2>\n</div>\n\n<ng-template #loggedOut> -->\n<div class=\"row col-lg-12\">\n  <div class=\"col-lg-4\">\n\n  </div>\n  <div class=\"col-lg-4\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n          required minlength=\"6\" />\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Login</button>\n        <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n          Login failed: {{errorMessage}}\n        </div>\n      </div>\n    </form>\n    <hr />\n    <p>New User?</p>\n    <a [routerLink]=\"['/register']\" class=\"btn btn-success\">Sign Up</a>\n  </div>\n  <div class=\"col-lg-4\">\n\n  </div>\n</div>\n\n<!-- </ng-template> -->"

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
        console.log(this.form);
        this.loginInfo = new _components_auth_login_info__WEBPACK_IMPORTED_MODULE_3__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
            _this.reloadPage();
            _this.router.navigate(['home']);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
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

module.exports = ".nav-wrapper{\n    background-color: black;\n}\nimg{\n    width: 64px;\n    padding-bottom: 5px;\n}\n.input-field{\n    margin: 0%;\n    height: 64px;\n}\n.second-bar{\n    margin-left: 135px;\n    height: 60px;\n}\n.material-icons{\n    font-size: 40px;\n    color: black;\n    \n}\n#search{\n    margin: 0%;\n    background-image: url(\"/assets/MASHUP-BACK.png\");\n    background-position: center top;\n}\n.flex-container{\n    display: flex;\n    \n}"

/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" />\n\n<div *ngIf=\"info.token; else loggedOut\">\n  <nav>\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\"><img src=\"/assets/MASHUP.png\" class=\"image\" /></a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <div>\n          <li>\n            <a href=\"\" [routerLink]=\"['/post', info.username]\">Post Question</a>\n          </li>\n        </div>\n        <div>\n          <li><a href=\"\" [routerLink]=\"['/userprofile']\">Profile</a></li>\n        </div>\n        <div>\n          <li>\n            <a href=\"\" [routerLink]=\"['/execution']\" (click)=\"logout()\">Logout</a>\n          </li>\n        </div>\n        <div>\n          <li>\n            <form>\n              <div class=\"input-field\">\n                <input id=\"search\" type=\"search\" required />\n                <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n                <i class=\"material-icons\">close</i>\n              </div>\n            </form>\n          </li>\n        </div>\n      </ul>\n    </div>\n  </nav>\n</div>\n<ng-template #loggedOut>\n  <nav>\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\"><img src=\"/assets/MASHUP.png\" class=\"image\" /></a>\n      <!-- <form> -->\n\n      <!-- </form> -->\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <div class=\"flex-container\">\n\n          <div>\n            <li><a [routerLink]=\"['/fetch']\">Practice</a></li>\n          </div>\n          <div>\n            <li><a href=\"\">Contact Us</a></li>\n          </div>\n          <div>\n            <li *ngIf=\"!authority\">\n              <a href=\"\" routerLink=\"auth/login\"><span class=\"glyphicon glyphicon-log-in\"> </span> Login/Signup\n              </a>\n            </li>\n          </div>\n          <div>\n            <li>\n              <form>\n                <div class=\"input-field\">\n                  <input id=\"search\" type=\"search\" required />\n                  <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n                  <i class=\"material-icons\">close</i>\n                </div>\n              </form>\n            </li>\n          </div>\n        </div>\n      </ul>\n    </div>\n\n    <!-- <div class=\"nav-wrapper second-bar\">\n          \n      </div> -->\n  </nav>\n  <!-- <nav>\n      \n    </nav> -->\n</ng-template>"

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
        this.router.navigate(['home']);
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

module.exports = ".example-card {\n    max-width: 400px;\n    max-height: 400px;\n    margin-bottom: 40px;\n  }\n \n  .example-header-image {\n    background-image: url('http://www.hdicon.com/wp-content/uploads/2010/07/java.png');\n    background-size: cover;\n  }\n \n  .parallax { \n    /* The image used */\n    background-image: url('parallax1.jpg');\n  \n    /* Set a specific height */\n    height: 500px; \n  \n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }"

/***/ }),

/***/ "./src/app/_components/recommend/recommend.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_components/recommend/recommend.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center;padding-bottom: 3vh\">It's time to dive into the world of CODING....</h2>\n<div *ngFor=\"let question of fetch\" class=\"col-lg-4\">\n  <mat-card class=\"example-card\" style=\"background-color: rgb(206, 255, 191)\">\n    <mat-card-header style=\"height: 15vh;\">\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{question.questionTitle}}</mat-card-title>\n      <mat-card-subtitle>{{question.tags}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n    </mat-card-content>\n    <mat-card-actions style=\"padding-left:8vw;padding-bottom:2vh\">\n      <button mat-raised-button (click)=openEditor(question.questionId)>ATTEMPT</button>\n    </mat-card-actions>\n  </mat-card>\n</div>"

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
        console.log("hello");
        this.fetch = this.fetchservice.getallquestioninfo().subscribe(function (data) {
            console.log("hello");
            _this.fetch = data;
            console.log("hello");
            console.log(data);
        }, function (error) {
            console.log('some error occured');
            console.log(error.errorMessage);
        });
    };
    RecommendComponent.prototype.openEditor = function (questionId) {
        this.router.navigate(['/execution', questionId]);
        // console.log(questionId);
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

module.exports = "<!-- <h2 style=\"text-align:center\" style=\"color: #7373e5\">Registration</h2> -->\n<div class=\"row col-lg-12\">\n  <div class=\"col-lg-3\">\n\n  </div>\n  <div class=\"col-lg-6\">\n    <mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel style=\"color: pink\">Please provide details</ng-template>\n          <mat-form-field>\n            <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Email Id\" formControlName=\"emailId\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Interests\" formControlName=\"interest\" required>\n          </mat-form-field>\n          <br>\n          <div>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"secondFormGroup\" optional>\n        <form [formGroup]=\"secondFormGroup\" (ngSubmit)=\"onSubmit()\">\n          <ng-template matStepLabel>Fill out optional stuffs</ng-template>\n          <mat-form-field>\n            <input matInput placeholder=\"Gender\" formControlName=\"gender\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Age\" formControlName=\"age\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"College Name\" formControlName=\"college\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Discipline\" formControlName=\"discipline\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Course\" formControlName=\"course\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Current Company\" formControlName=\"company\">\n          </mat-form-field>\n          <br>\n          <div>\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n            <!-- <button mat-raised-button color=\"primary\" routerLink=\"/auth/login\">Done</button> -->\n          </div>\n        </form>\n      </mat-step>\n      <!-- <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      <div>\n          <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>&nbsp;&nbsp;\n          <button mat-raised-button color=\"warn\" (click)=\"stepper.reset()\">Reset</button>&nbsp;&nbsp;\n          <button mat-raised-button color=\"primary\" routerLink=\"/auth/login\">Proceed to Login</button>\n      </div>\n  </mat-step> -->\n    </mat-horizontal-stepper>\n  </div>\n  <div class=\"col-lg-3\">\n\n  </div>\n</div>"

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
            console.log('register form is invalid ');
            return;
        }
        var object = Object.assign(this.firstFormGroup.value, this.secondFormGroup.value);
        console.log('registerForm.value : ', object);
        this.registerService.register(object).subscribe(function (data) {
            console.log('data is ', data);
            _this.alertService.success(data, true);
            alert(data);
            _this.router.navigate(['/auth/login']);
        }, function (error) {
            console.log('we are getting some errors');
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

module.exports = "form {\n    display: inline-block;\n    margin-left: 25%;\n    margin-right:25%;\n    width: 50%;\n}\nh1{\n  color:green;\n}\n"

/***/ }),

/***/ "./src/app/_components/savequestion/savequestion.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_components/savequestion/savequestion.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div align = \"center\">\n  <h1>Post your {{ title }}!</h1>\n  <h1 *ngIf=\"isExist | async as value\" >data is : {{ xyz }}</h1>\n  <form [formGroup]=\"questionForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        formControlName=\"questionTitle\"\n        class=\"form-control\"\n        id=\"questionTitle\"\n        placeholder=\"Write Title of Question..\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.questionTitle.errors }\"\n      />\n      <div *ngIf=\"submitted && f.questionTitle.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.questionTitle.errors.required\">\n          Question Title is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <textarea\n        class=\"form-control\"\n        formControlName=\"questionDescription\"\n        id=\"questionDescription\"\n        rows=\"7\"\n        placeholder=\"Write Question Description here..\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.questionDescription.errors }\"\n      ></textarea>\n      <div\n        *ngIf=\"submitted && f.questionDescription.errors\"\n        class=\"invalid-feedback\"\n      >\n        <div *ngIf=\"f.questionDescription.errors.required\">\n          Question Title is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <textarea\n        class=\"form-control\"\n        formControlName=\"inputFormat\"\n        id=\"inputFormat\"\n        rows=\"7\"\n        placeholder=\"Write input format here..\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.inputFormat.errors }\"\n      ></textarea>\n      <div *ngIf=\"submitted && f.inputFormat.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.inputFormat.errors.required\">\n          input format is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <textarea\n        class=\"form-control\"\n        formControlName=\"outputFormat\"\n        id=\"outputFormat\"\n        rows=\"7\"\n        placeholder=\"Write output format here..\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.outputFormat.errors }\"\n      ></textarea>\n      <div *ngIf=\"submitted && f.outputFormat.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.outputFormat.errors.required\">\n          output format is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <select\n        class=\"form-control\"\n        formControlName=\"difficulty\"\n        id=\"difficulty\"\n        placeholder=\"Select difficulty level...\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.difficulty.errors }\"\n      >\n        <option *ngFor=\"let level of levels\" [value]=\"level\">{{\n          level\n        }}</option>\n        <div *ngIf=\"submitted && f.difficulty.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.difficulty.errors.required\">\n            Question Title is required\n          </div>\n        </div>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        formControlName=\"tags\"\n        class=\"form-control\"\n        id=\"tags\"\n        placeholder=\"Write tags for Question like Core java,Collection\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        formControlName=\"gitUrl\"\n        class=\"form-control\"\n        id=\"gitUrl\"\n        placeholder=\"Enter git Url of testcases..\"\n      />\n    </div>\n      {{username}}\n    <button type=\"submit\" class=\"btn btn-success\">Post Question</button>\n    <a routerLink=\"/home\" class=\"btn btn-link\">Cancel</a>\n    &nbsp;<br>\n    &nbsp;<br>\n    &nbsp;<br>\n    &nbsp;<br>\n    &nbsp;<br>\n    &nbsp;\n\n  </form>\n</div>\n"

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
        console.log('USERNAME : ' + this.uname);
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
            console.log('register form is invalid ');
            return;
        }
        console.log('questionForm: ', this.questionForm.value);
        this.uname = this.token.getUsername();
        // tslint:disable-next-line:label-position
        this.add = '{"username":"' + this.uname + '"}';
        console.log('masse:' + this.add);
        this.obj1 = JSON.parse(this.add);
        console.log(this.obj1);
        var obj2 = Object.assign(this.questionForm.value, this.obj1);
        console.log(obj2);
        this.questionservice.saveQuestion(obj2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
            console.log('data is ', data);
            // this.alertService.success(data, true);
            alert(data);
            _this.router.navigate(['home']);
        }, function (error) {
            console.log('we are getting some errors');
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

/***/ "./src/app/_components/scorebadge/scorebadge.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/_components/scorebadge/scorebadge.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/scorebadge/scorebadge.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/scorebadge/scorebadge.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  scorebadge works!\n</p>\n"

/***/ }),

/***/ "./src/app/_components/scorebadge/scorebadge.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/_components/scorebadge/scorebadge.component.ts ***!
  \****************************************************************/
/*! exports provided: ScorebadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorebadgeComponent", function() { return ScorebadgeComponent; });
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

var ScorebadgeComponent = /** @class */ (function () {
    function ScorebadgeComponent() {
    }
    ScorebadgeComponent.prototype.ngOnInit = function () {
    };
    ScorebadgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scorebadge',
            template: __webpack_require__(/*! ./scorebadge.component.html */ "./src/app/_components/scorebadge/scorebadge.component.html"),
            styles: [__webpack_require__(/*! ./scorebadge.component.css */ "./src/app/_components/scorebadge/scorebadge.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScorebadgeComponent);
    return ScorebadgeComponent;
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

module.exports = "<br><br><br>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Question ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Question Title </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.title}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"level\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Question Level </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.level}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"tag\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Question Tag </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.tag\"> {{row.tag}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"try1\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Solution </th>\n      <td mat-cell *matCellDef=\"let row\"><a mat-raised-button routerLink=\".\">Solution</a></td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

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
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


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

module.exports = "<h4>Content from Server</h4>\n{{board}}\n{{errorMessage}}"

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

module.exports = ".tile1{\n  height: 100%;\n  width: 80%;\n}\n.card {\n  width: 100%;\n  padding: 5%;\n  \n}\n.box{\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-content: stretch;\n  width: 60%;\n}\n.box>*:first-child {\n  -ms-grid-row-align: stretch;\n      align-self: stretch;\n}\n.profileimage{\n  /* width: 100%; */\n  padding: 2vh 2vh 0vh 2vh;\n}"

/***/ }),

/***/ "./src/app/_components/userprofile/userprofile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/userprofile/userprofile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"20vh\">\n  <mat-grid-tile\n    [colspan]=\"tiles[0].cols\"\n    [rowspan]=\"tiles[0].rows\"\n    [style.background]=\"tiles[0].color\"\n    class=\"profile\"\n  >\n    <div class=\"box\">\n      <div>\n        <mat-card class=\"card\" style=\"display:block;\">\n          <img\n            mat-card-image\n            src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n            alt=\"Photo of a Shiba Inu\"\n            class=\"profileimage\"\n            width=\"195px\"\n            height=\"164px\"\n          />\n\n          <mat-card-content>\n            <p>{{ abc.firstName }} {{ abc.lastName }}</p>\n          </mat-card-content>\n          <p style=\"opacity:.7\">@ {{ abc.userName }}</p>\n        </mat-card>\n      </div>\n      <div>\n        <mat-card class=\"card card2\" style=\"display:block; margin-top: 1vh;\">\n          <p>\n            <!-- Password : {{ abc.password }} -->\n            <!-- <input type=\"text\"  value='password'></p> -->\n          </p>\n\n          <div [ngSwitch]=\"bhaak\">\n            <ng-template [ngSwitchCase]=\"'bhaak1'\">\n              <p>Email Id : {{ abc.emailId }}</p>\n              <p>list {{ abc.interests.join(\", \") }}</p>\n            </ng-template>\n            <ng-template [ngSwitchCase]=\"'bhaak2'\">\n                Email Id :<input type=text value= {{abc.emailId}}>\n              <p>list {{ abc.interests.join(\", \") }}</p>\n            </ng-template>\n          </div>\n          <button (click)=changemaadi()>Update Profile</button>\n        </mat-card>\n      </div>\n    </div>\n  </mat-grid-tile>\n\n  <mat-grid-tile\n    [colspan]=\"tiles[1].cols\"\n    [rowspan]=\"tiles[1].rows\"\n    [style.background]=\"tiles[1].color\"\n  >\n    <mat-tab-group class=\"tile1\">\n      <mat-tab label=\"Question Attempted\">\n        <mat-list role=\"list\" *ngFor=\"let questionA of abc.attemptedQuestion | slice:1;\">\n          <mat-list-item role=\"listitem\" [routerLink]=\"['/submission-component']\"\n            ><i class=\"fab fa-quora\"></i> &nbsp;\n            <p>{{ questionA.questionTitle }}</p>\n            </mat-list-item\n          >\n        </mat-list>\n      </mat-tab>\n      <mat-tab label=\"Question Posted\">\n        <mat-list role=\"list\" *ngFor=\"let questionP of abc.postedQuestion | slice:1;\">\n          <mat-list-item role=\"listitem\"\n            ><i class=\"fab fa-quora\"></i> &nbsp;\n            {{ questionP.questionTitle }}</mat-list-item\n          >\n        </mat-list>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-grid-tile>\n</mat-grid-list>\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_userprofile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userprofile-service.service */ "./src/app/services/userprofile-service.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ELEMENT_DATA = [
    { position: 1, name: 'Hydroge ns rdctf dgfdhbcm dvi dkgfdvd dfg fdgdfgf dfgfdg dfgdfg dffhdg guhny' },
    { position: 2, name: 'Heliumwegfhdgcufyiguohef eft udjqe  qetuyg qeqiqyhdg qef' },
    { position: 3, name: 'Lithium' },
    { position: 4, name: 'Beryllium' },
];
var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(token, userService) {
        this.token = token;
        this.userService = userService;
        this.tiles = [
            { text: 'One', cols: 1, rows: 4, color: 'white' },
            { text: 'Two', cols: 2, rows: 4, color: 'white' },
            { text: 'three', cols: 1, rows: 4, color: 'grey' },
        ];
        this.displayedColumns = ['position', 'name'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    UserprofileComponent.prototype.changemaadi = function () {
        this.bhaak = 'bhaak2';
    };
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uname = this.token.getUsername();
        this.userService.getUserProfile(this.uname).subscribe(function (data) { return _this.abc = data; });
        console.log('ABC : ', this.abc);
        this.bhaak = 'bhaak1';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserprofileComponent.prototype, "paginator", void 0);
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/_components/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/_components/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _services_userprofile_service_service__WEBPACK_IMPORTED_MODULE_2__["UserprofileServiceService"]])
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

module.exports = ".flex-container {\n    display: flex;\n    width: 300px;\n\n  }\n  \n  .flex-container > div {\n    margin: 10px;\n    padding: 20px;\n    font-size: 30px;\n  }"

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
        this.vote = "UP";
        console.log(this.vote);
        this.username = this.token.getUsername();
        // tslint:disable-next-line:label-position
        this.add = '{"userName":"' + this.username + '"}';
        console.log('masse:' + this.add);
        this.obj1 = JSON.parse(this.add);
        console.log(this.obj1);
        this.add = '{"voteStatus":"' + this.vote + '"}';
        console.log('masse:' + this.add);
        this.obj2 = JSON.parse(this.add);
        console.log(this.obj2);
        var obj3 = Object.assign(this.obj2, this.obj1);
        this.questionservice.sendVote(obj3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            console.log('data is ', data);
            // this.alertService.success(data, true);
            //alert(data);
        }, function (error) {
            console.log('we are getting some errors');
            //alert(error);
        });
    };
    VotingComponent.prototype.myFunction2 = function () {
        this.vote = "DOWN";
        console.log(this.vote);
        this.username = this.token.getUsername();
        // tslint:disable-next-line:label-position
        this.add = '{"userName":"' + this.username + '"}';
        console.log('masse:' + this.add);
        this.obj1 = JSON.parse(this.add);
        console.log(this.obj1);
        this.add = '{"voteStatus":"' + this.vote + '"}';
        console.log('masse:' + this.add);
        this.obj2 = JSON.parse(this.add);
        console.log(this.obj2);
        var obj3 = Object.assign(this.obj2, this.obj1);
        this.questionservice.sendVote(obj3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            console.log('data is ', data);
            // this.alertService.success(data, true);
            //alert(data);
        }, function (error) {
            console.log('we are getting some errors');
            //alert(error);
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
/* harmony import */ var _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components/voting/voting.component */ "./src/app/_components/voting/voting.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/login/login.component */ "./src/app/_components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/home/home.component */ "./src/app/_components/home/home.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/user/user.component */ "./src/app/_components/user/user.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/register/register.component */ "./src/app/_components/register/register.component.ts");
/* harmony import */ var _components_savequestion_savequestion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/savequestion/savequestion.component */ "./src/app/_components/savequestion/savequestion.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/edit/edit.component */ "./src/app/_components/edit/edit.component.ts");
/* harmony import */ var _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/userprofile/userprofile.component */ "./src/app/_components/userprofile/userprofile.component.ts");
/* harmony import */ var _components_submission_submission_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/submission/submission.component */ "./src/app/_components/submission/submission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'userprofile',
        component: _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_9__["UserprofileComponent"]
    },
    {
        path: 'execution',
        component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]
    },
    {
        path: 'execution/:qid',
        component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]
    },
    {
        path: 'post/:username',
        component: _components_savequestion_savequestion_component__WEBPACK_IMPORTED_MODULE_7__["SavequestionComponent"]
    },
    {
        path: 'user',
        component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]
    },
    {
        path: 'auth/login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'voting',
        component: _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_0__["VotingComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'submission-component',
        component: _components_submission_submission_component__WEBPACK_IMPORTED_MODULE_10__["SubmissionComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".container{\n    overflow-x: hidden;\n    overflow-y: hidden;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n&nbsp;<br>\n&nbsp;<br>\n&nbsp;<br>\n&nbsp;\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n&nbsp;<br>\n&nbsp;<br>\n&nbsp;<br>\n&nbsp;\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/login/login.component */ "./src/app/_components/login/login.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/user/user.component */ "./src/app/_components/user/user.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/home/home.component */ "./src/app/_components/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/register/register.component */ "./src/app/_components/register/register.component.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _components_savequestion_savequestion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_components/savequestion/savequestion.component */ "./src/app/_components/savequestion/savequestion.component.ts");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_components/auth/auth-interceptor */ "./src/app/_components/auth/auth-interceptor.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_components/edit/edit.component */ "./src/app/_components/edit/edit.component.ts");
/* harmony import */ var _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_components/userprofile/userprofile.component */ "./src/app/_components/userprofile/userprofile.component.ts");
/* harmony import */ var _services_userprofile_service_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/userprofile-service.service */ "./src/app/services/userprofile-service.service.ts");
/* harmony import */ var _components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_components/recommend/recommend.component */ "./src/app/_components/recommend/recommend.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_submission_submission_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_components/submission/submission.component */ "./src/app/_components/submission/submission.component.ts");
/* harmony import */ var _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_components/voting/voting.component */ "./src/app/_components/voting/voting.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_components/navbar/navbar.component */ "./src/app/_components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_components/footer/footer.component */ "./src/app/_components/footer/footer.component.ts");
/* harmony import */ var _components_scorebadge_scorebadge_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_components/scorebadge/scorebadge.component */ "./src/app/_components/scorebadge/scorebadge.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__["EditComponent"],
                _components_savequestion_savequestion_component__WEBPACK_IMPORTED_MODULE_20__["SavequestionComponent"],
                _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_27__["UserprofileComponent"],
                _components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_29__["RecommendComponent"],
                _components_submission_submission_component__WEBPACK_IMPORTED_MODULE_31__["SubmissionComponent"],
                _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_32__["VotingComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_33__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__["FooterComponent"],
                _components_scorebadge_scorebadge_component__WEBPACK_IMPORTED_MODULE_35__["ScorebadgeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22__["OwlModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_21__["ResizableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_17__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_18__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_19__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_0__["HttpModule"],
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_23__["MonacoEditorModule"].forRoot(monacoConfig),
                _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"].forRoot([
                    { path: 'fetch', component: _components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_29__["RecommendComponent"] },
                    { path: 'voting', component: _components_voting_voting_component__WEBPACK_IMPORTED_MODULE_32__["VotingComponent"] }
                ])
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true },
                _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["httpInterceptorProviders"],
                _services_userprofile_service_service__WEBPACK_IMPORTED_MODULE_28__["UserprofileServiceService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
        this.loginUrl = 'http://localhost:8092/authentication-service/api/auth/signin';
        this.signupUrl = 'http://localhost:8092/authentication-service/api/auth/signup';
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
        this.url3 = 'http://localhost:8022/api/v1/question/1';
        this.url2 = 'http://localhost:8069/rest/neo4j/questions/2';
        this.url4 = 'http://172.23.239.150:8026/api/v1/submission';
    }
    QuestioExeEngineService.prototype.sendDatatoSubmission = function (quesresultdata) {
        console.log(quesresultdata);
        this._http.post(this.url4, quesresultdata).subscribe();
    };
    QuestioExeEngineService.prototype.getQuestionById = function (id) {
        var quest = this._http.get(this.url3);
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
        this.questionPopulatorApidUrl = 'http://localhost:8092/question-service/api/v1/';
        this.getallquestionUrl = 'http://localhost:8092/recommendation-service/rest/neo4j/questions';
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
        return this.http.post("http://localhost:8092/registration-service/api/v1/register", user, { responseType: 'text' });
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
        // acd = [ 'hffh', 'fgdgdg'];
        this.userProfileUrl = 'http://localhost:8092/userprofile-service/api/v1/';
    }
    UserprofileServiceService.prototype.getUserProfile = function (userName) {
        // tslint:disable-next-lin
        console.log('USERNAME : ', userName);
        var userProfile = this.http.get('http://localhost:8092/userprofile-service/api/v1/userprofile/' + userName);
        console.log('hii');
        // console.log(userProfile);
        return userProfile;
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

module.exports = __webpack_require__(/*! /home/boeingwave3-kishlay/Downloads/boeing-wave3-mashup/mashup-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map