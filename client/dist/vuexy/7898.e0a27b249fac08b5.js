"use strict";(self.webpackChunkvuexy=self.webpackChunkvuexy||[]).push([[7898],{7898:function(fn,J,u){u.r(J),u.d(J,{PagesModule:function(){return mn}});var p=u(7289),h=u(5134),E=u(6019),C=u(9133),H=u(962),k=(u(3512),u(2681),u(6054)),b=u(6860),e=u(6154),F=u(8805),j=(u(8105),u(1125),u(1366),u(5686),u(8735),u(8053),u(6220)),z=u(9187),W=u(1885),K=u(3841),he=function(i){(0,W.Z)(n,i);var o=(0,K.Z)(n);function n(t,a){var r;return(0,h.Z)(this,n),(r=o.call(this,t,a)).scheduler=t,r.work=a,r}return(0,p.Z)(n,[{key:"requestAsyncId",value:function(a,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==s&&s>0?(0,j.Z)((0,z.Z)(n.prototype),"requestAsyncId",this).call(this,a,r,s):(a.actions.push(this),a.scheduled||(a.scheduled=requestAnimationFrame(function(){return a.flush(null)})))}},{key:"recycleAsyncId",value:function(a,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==s&&s>0||null===s&&this.delay>0)return(0,j.Z)((0,z.Z)(n.prototype),"recycleAsyncId",this).call(this,a,r,s);0===a.actions.length&&(cancelAnimationFrame(r),a.scheduled=void 0)}}]),n}(u(6339).o),me=function(i){(0,W.Z)(n,i);var o=(0,K.Z)(n);function n(){return(0,h.Z)(this,n),o.apply(this,arguments)}return(0,p.Z)(n,[{key:"flush",value:function(a){this.active=!0,this.scheduled=void 0;var s,r=this.actions,l=-1,c=r.length;a=a||r.shift();do{if(s=a.execute(a.state,a.delay))break}while(++l<c&&(a=r.shift()));if(this.active=!1,s){for(;++l<c&&(a=r.shift());)a.unsubscribe();throw s}}}]),n}(u(5192).v),D=(new me(he),u(2907),u(3405));u(6087),u(8526);RegExp(/[&<>"']/g.source);var ie=new e.OlP("ng-select-selection-model"),Et=function(){function i(){(0,h.Z)(this,i),this._selected=[]}return(0,p.Z)(i,[{key:"value",get:function(){return this._selected}},{key:"select",value:function(n,t,a){if(n.selected=!0,(!n.children||!t&&a)&&this._selected.push(n),t)if(n.parent){var r=n.parent.children.length,s=n.parent.children.filter(function(l){return l.selected}).length;n.parent.selected=r===s}else n.children&&(this._setChildrenSelectedState(n.children,!0),this._removeChildren(n),this._selected=a&&this._activeChildren(n)?[].concat((0,b.Z)(this._selected.filter(function(l){return l.parent!==n})),[n]):[].concat((0,b.Z)(this._selected),(0,b.Z)(n.children.filter(function(l){return!l.disabled}))))}},{key:"unselect",value:function(n,t){if(this._selected=this._selected.filter(function(s){return s!==n}),n.selected=!1,t)if(n.parent&&n.parent.selected){var a,r=n.parent.children;this._removeParent(n.parent),this._removeChildren(n.parent),(a=this._selected).push.apply(a,(0,b.Z)(r.filter(function(s){return s!==n&&!s.disabled}))),n.parent.selected=!1}else n.children&&(this._setChildrenSelectedState(n.children,!1),this._removeChildren(n))}},{key:"clear",value:function(n){this._selected=n?this._selected.filter(function(t){return t.disabled}):[]}},{key:"_setChildrenSelectedState",value:function(n,t){var r,a=(0,k.Z)(n);try{for(a.s();!(r=a.n()).done;){var s=r.value;s.disabled||(s.selected=t)}}catch(l){a.e(l)}finally{a.f()}}},{key:"_removeChildren",value:function(n){this._selected=[].concat((0,b.Z)(this._selected.filter(function(t){return t.parent!==n})),(0,b.Z)(n.children.filter(function(t){return t.parent===n&&t.disabled&&t.selected})))}},{key:"_removeParent",value:function(n){this._selected=this._selected.filter(function(t){return t!==n})}},{key:"_activeChildren",value:function(n){return n.children.every(function(t){return!t.disabled||t.selected})}}]),i}(),Ct=function(){return new Et},bt=function(){var i=(0,p.Z)(function o(){(0,h.Z)(this,o)});return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[{provide:ie,useValue:Ct}],imports:[[E.ez]]}),i}(),Q=u(1705),wt=u(8947),St=u(9731),It=u(4090),xt=u(7102),kt=u(1425),Ft=u(821),Dt=u(6148),Zt=u(9852),Nt=u(2787),Ot=u(8152),Z=u(3907),Lt=u(739),G=u(8260),ae=u(8726),Bt=u(3700),Mt=u(4104),oe=u(3113),Pt=u(9850);function Rt(i,o){if(1&i&&(e.TgZ(0,"ngb-alert",45),e.TgZ(1,"div",46),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.qZA(),e.qZA()),2&i){var n=e.oxw();e.Q6J("type","danger")("dismissible",!1),e.xp6(3),e.Oqu(n.error)}}function Yt(i,o){1&i&&e._UZ(0,"div",47)}function Ht(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}var Vt=function(o){return{"d-block":o}};function Ut(i,o){if(1&i&&(e.TgZ(0,"div",48),e.YNc(1,Ht,2,0,"div",49),e.qZA()),2&i){var n=e.oxw();e.Q6J("ngClass",e.VKq(2,Vt,n.submitted&&n.f.password.errors)),e.xp6(1),e.Q6J("ngIf",n.f.password.errors.required)}}function Qt(i,o){1&i&&e._UZ(0,"span",50)}var Gt=function(o){return{"is-invalid":o}},Jt=function(o){return{"is-invalid error":o}},qt=function(o,n){return{"icon-eye-off":o,"icon-eye":n}},jt=function(){var i=function(){function o(n,t,a,r,s){(0,h.Z)(this,o),this._coreConfigService=n,this._formBuilder=t,this._route=a,this._router=r,this._authenticationService=s,this.loading=!1,this.submitted=!1,this.error="",this._unsubscribeAll=new D.xQ,this._coreConfigService.config={layout:{navbar:{hidden:!0},menu:{hidden:!0},footer:{hidden:!0},customizer:!1,enableLocalStorage:!1}}}return(0,p.Z)(o,[{key:"f",get:function(){return this.loginForm.controls}},{key:"togglePasswordTextType",value:function(){this.passwordTextType=!this.passwordTextType}},{key:"onSubmit",value:function(){var t=this;this.submitted=!0,!this.loginForm.invalid&&(this.loading=!0,this._authenticationService.login(this.f.username.value,this.f.password.value,G.N.client_id,G.N.client_secret,G.N.grant_type).pipe((0,Lt.P)()).subscribe(function(a){t._router.navigate([t.returnUrl])},function(a){t.error=a,t.loading=!1}))}},{key:"ngOnInit",value:function(){var t=this;this.loginForm=this._formBuilder.group({username:["",C.kI.required],password:["",C.kI.required]}),this.returnUrl=this._route.snapshot.queryParams.returnUrl||"/",this._coreConfigService.config.pipe((0,F.R)(this._unsubscribeAll)).subscribe(function(a){t.coreConfig=a})}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}]),o}();return i.\u0275fac=function(n){return new(n||i)(e.Y36(ae.R),e.Y36(C.qu),e.Y36(Z.gz),e.Y36(Z.F0),e.Y36(Bt.$))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-auth-login-v2"]],decls:61,vars:19,consts:[[1,"auth-wrapper","auth-v2"],[1,"auth-inner","row","m-0"],["href","javascript:void(0);",1,"brand-logo"],["alt","brand-logo","height","28",3,"src"],[1,"brand-text","text-primary","ml-1"],[1,"d-none","d-lg-flex","col-lg-8","align-items-center","p-5"],[1,"w-100","d-lg-flex","align-items-center","justify-content-center","px-5"],["alt","Login V2",1,"img-fluid",3,"src"],[1,"d-flex","col-lg-4","align-items-center","auth-bg","px-2","p-lg-5"],[1,"col-12","col-sm-8","col-md-6","col-lg-12","px-xl-2","mx-auto"],[1,"card-title","font-weight-bold","mb-1"],[1,"card-text","mb-2"],[3,"type","dismissible",4,"ngIf"],[1,"auth-login-form","mt-2",3,"formGroup","ngSubmit"],[1,"form-group"],["for","login-username",1,"form-label"],["type","text","formControlName","username","placeholder","username","aria-describedby","login-username","autofocus","","tabindex","1",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"d-flex","justify-content-between"],["for","login-password"],["routerLink","/pages/authentication/forgot-password-v2"],[1,"input-group","input-group-merge","form-password-toggle"],["formControlName","password","placeholder","\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7","aria-describedby","login-password","tabindex","2",1,"form-control","form-control-merge",3,"type","ngClass"],[1,"input-group-append"],[1,"input-group-text","cursor-pointer"],[1,"feather","font-small-4",3,"ngClass","click"],["class","invalid-feedback",3,"ngClass",4,"ngIf"],[1,"custom-control","custom-checkbox"],["id","remember-me","type","checkbox","tabindex","3",1,"custom-control-input"],["for","remember-me",1,"custom-control-label"],["tabindex","4","rippleEffect","",1,"btn","btn-primary","btn-block",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"text-center","mt-2"],["routerLink","/pages/authentication/register-v2"],[1,"divider","my-2"],[1,"divider-text"],[1,"auth-footer-btn","d-flex","justify-content-center"],["href","javascript:void(0)",1,"btn","btn-facebook"],["data-feather","facebook"],["href","javascript:void(0)",1,"btn","btn-twitter","white"],["data-feather","twitter"],["href","javascript:void(0)",1,"btn","btn-google"],["data-feather","mail"],["href","javascript:void(0)",1,"btn","btn-github"],["data-feather","github"],[3,"type","dismissible"],[1,"alert-body"],[1,"invalid-feedback"],[1,"invalid-feedback",3,"ngClass"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"a",2),e._UZ(3,"img",3),e.TgZ(4,"h2",4),e._uU(5,"StockIt"),e.qZA(),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e._UZ(8,"img",7),e.qZA(),e.qZA(),e.TgZ(9,"div",8),e.TgZ(10,"div",9),e.TgZ(11,"h2",10),e._uU(12,"Welcome to StockIt! \ud83d\udc4b"),e.qZA(),e.TgZ(13,"p",11),e._uU(14,"Please sign-in to your account and start the adventure"),e.qZA(),e.YNc(15,Rt,4,3,"ngb-alert",12),e.TgZ(16,"form",13),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(17,"div",14),e.TgZ(18,"label",15),e._uU(19,"UserName"),e.qZA(),e._UZ(20,"input",16),e.YNc(21,Yt,1,0,"div",17),e.qZA(),e.TgZ(22,"div",14),e.TgZ(23,"div",18),e.TgZ(24,"label",19),e._uU(25,"Password"),e.qZA(),e.TgZ(26,"a",20),e.TgZ(27,"small"),e._uU(28,"Forgot Password?"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"div",21),e._UZ(30,"input",22),e.TgZ(31,"div",23),e.TgZ(32,"span",24),e.TgZ(33,"i",25),e.NdJ("click",function(){return t.togglePasswordTextType()}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(34,Ut,2,4,"div",26),e.qZA(),e.TgZ(35,"div",14),e.TgZ(36,"div",27),e._UZ(37,"input",28),e.TgZ(38,"label",29),e._uU(39," Remember Me"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"button",30),e.YNc(41,Qt,1,0,"span",31),e._uU(42,"Sign in "),e.qZA(),e.qZA(),e.TgZ(43,"p",32),e.TgZ(44,"span"),e._uU(45,"New on our platform?"),e.qZA(),e.TgZ(46,"a",33),e.TgZ(47,"span"),e._uU(48,"\xa0Create an account"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(49,"div",34),e.TgZ(50,"div",35),e._uU(51,"or"),e.qZA(),e.qZA(),e.TgZ(52,"div",36),e.TgZ(53,"a",37),e._UZ(54,"i",38),e.qZA(),e.TgZ(55,"a",39),e._UZ(56,"i",40),e.qZA(),e.TgZ(57,"a",41),e._UZ(58,"i",42),e.qZA(),e.TgZ(59,"a",43),e._UZ(60,"i",44),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.s9C("src",t.coreConfig.app.appLogoImage,e.LSH),e.xp6(5),e.Q6J("src","dark"===t.coreConfig.layout.skin?"assets/images/pages/login-v2-dark.svg":"assets/images/pages/login-v2.svg",e.LSH),e.xp6(7),e.Q6J("ngIf",t.error),e.xp6(1),e.Q6J("formGroup",t.loginForm),e.xp6(4),e.Q6J("ngClass",e.VKq(12,Gt,t.submitted&&t.f.usernameerrors)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.username.errors),e.xp6(9),e.Q6J("type",t.passwordTextType?"text":"password")("ngClass",e.VKq(14,Jt,t.submitted&&t.f.password.errors)),e.xp6(3),e.Q6J("ngClass",e.WLB(16,qt,t.passwordTextType,!t.passwordTextType)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.password.errors),e.xp6(6),e.Q6J("disabled",t.loading),e.xp6(1),e.Q6J("ngIf",t.loading))},directives:[E.O5,C._Y,C.JL,C.sg,C.Fj,C.JJ,C.u,E.mk,Mt.oO,Z.yS,oe.R,Pt.R,H.xm],styles:['.auth-wrapper{display:flex;flex-basis:100%;min-height:100vh;min-height:calc(var(--vh, 1vh) * 100);width:100%}.auth-wrapper .auth-inner{width:100%;position:relative}.auth-wrapper.auth-v1{align-items:center;justify-content:center;overflow:hidden}.auth-wrapper.auth-v1 .auth-inner:before{width:244px;height:243px;content:" ";position:absolute;top:-54px;left:-46px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC)}@media (max-width: 575.98px){.auth-wrapper.auth-v1 .auth-inner:before{display:none}}.auth-wrapper.auth-v1 .auth-inner:after{width:272px;height:272px;content:" ";position:absolute;bottom:-55px;right:-75px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=);z-index:-1}@media (max-width: 575.98px){.auth-wrapper.auth-v1 .auth-inner:after{display:none}}.auth-wrapper.auth-v2{align-items:flex-start}.auth-wrapper.auth-v2 .auth-inner{overflow-y:auto;height:100vh;height:calc(var(--vh, 1vh) * 100)}.auth-wrapper.auth-v2 .brand-logo{position:absolute;top:2rem;left:2rem;margin:0;z-index:1}.auth-wrapper.auth-v1 .auth-inner{max-width:400px}.auth-wrapper .brand-logo{display:flex;justify-content:center;margin:1rem 0 2rem}.auth-wrapper .brand-logo .brand-text{font-weight:600}.auth-wrapper .auth-footer-btn .btn{padding:.6rem!important}.auth-wrapper .auth-footer-btn .btn:not(:last-child){margin-right:1rem}@media (min-width: 1200px){.auth-wrapper.auth-v2 .auth-card{width:400px}}.auth-wrapper .auth-bg{background-color:#fff}.dark-layout .auth-wrapper .auth-bg{background-color:#283046}@media (max-height: 625px){.dark-layout .auth-wrapper .auth-inner{background-color:#283046}.auth-wrapper .auth-bg{padding-top:3rem}.auth-wrapper .auth-inner{background-color:#fff;padding-bottom:1rem}.auth-wrapper.auth-v2 .brand-logo{width:100%;display:flex;justify-content:unset;position:relative;left:0;padding-left:1.5rem}}.auth-help-icon{position:absolute;top:10px;right:10px}\n'],encapsulation:2}),i}(),zt={lang:"en",data:{SAMPLE:{AWESOME:"Create Awesome \ud83d\ude4c"}}},Wt={lang:"fr",data:{SAMPLE:{AWESOME:"Cr\xe9er g\xe9nial \ud83d\ude4c"}}},Kt={lang:"de",data:{SAMPLE:{AWESOME:"Erstelle Awesome \ud83d\ude4c"}}},Xt={lang:"pt",data:{SAMPLE:{AWESOME:"Crie incr\xedvel \ud83d\ude4c"}}},$t=u(7330),en=u(1781),tn=u(9753),nn=function(){var i=function(){function o(n){(0,h.Z)(this,o),this._coreTranslationService=n,this._coreTranslationService.translate(zt,Wt,Kt,Xt)}return(0,p.Z)(o,[{key:"ngOnInit",value:function(){this.contentHeader={headerTitle:"Home",actionButton:!0,breadcrumb:{type:"",links:[{name:"Home",isLink:!0,link:"/"},{name:"Sample",isLink:!1}]}}}}]),o}();return i.\u0275fac=function(n){return new(n||i)(e.Y36($t.s))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-sample"]],decls:16,vars:4,consts:[[1,"content-wrapper","container-xxl","p-0"],[1,"content-body"],[3,"contentHeader"],["id","sample-page"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body","pb-1"],[1,"card-text"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"app-content-header",2),e.TgZ(3,"section",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"h4",8),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.qZA(),e.TgZ(11,"div",9),e.TgZ(12,"p",10),e._uU(13,"This is your second page."),e.qZA(),e.TgZ(14,"p",10),e._uU(15," Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake drag\xe9e chupa chups jujubes. Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o drag\xe9e chocolate. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("contentHeader",t.contentHeader),e.xp6(7),e.Oqu(e.lcZ(10,2,"SAMPLE.AWESOME")))},directives:[en.e],pipes:[tn.X$],styles:[""]}),i}(),an=u(4402),A=u(3059),on=u(4700),rn=u(4573),sn=u(9053),ln=u(3726),un=u(9340),cn=[{path:"login",component:jt,data:{animation:"auth"}},{path:"sample",component:nn,canActivate:[A.a1]},{path:"createproduct",component:on.g,canActivate:[A.a1]},{path:"printbarcode",component:rn.e,canActivate:[A.a1]},{path:"productlist",component:sn.Z,canActivate:[A.a1]},{path:"home",component:an.O,canActivate:[A.a1]},{path:"purchases",component:Ot.F,canActivate:[A.a1]},{path:"sales",component:Nt.h,canActivate:[A.a1]},{path:"sales return",component:Zt.P,canActivate:[A.a1]},{path:"purchases return",component:Dt.J,canActivate:[A.a1]},{path:"profit and loss",component:Ft.m,canActivate:[A.a1]},{path:"product quantity alerts",component:ln.M,canActivate:[A.a1]},{path:"warehouse report",component:un.N,canActivate:[A.a1]},{path:"sale report",component:kt._,canActivate:[A.a1]},{path:"purchase report",component:xt.C,canActivate:[A.a1]},{path:"customer report",component:It.v,canActivate:[A.a1]},{path:"suplplier report",component:St.l,canActivate:[A.a1]}],dn=function(){var i=(0,p.Z)(function o(){(0,h.Z)(this,o)});return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[E.ez,Z.Bz.forChild(cn),H.IJ,C.u5,C.UX,Q.$]]}),i}(),hn=[{path:"miscellaneous/error",component:function(){var i=function(){function o(n){(0,h.Z)(this,o),this._coreConfigService=n,this._unsubscribeAll=new D.xQ,this._coreConfigService.config={layout:{navbar:{hidden:!0},footer:{hidden:!0},menu:{hidden:!0},customizer:!1,enableLocalStorage:!1}}}return(0,p.Z)(o,[{key:"ngOnInit",value:function(){var t=this;this._coreConfigService.config.pipe((0,F.R)(this._unsubscribeAll)).subscribe(function(a){t.coreConfig=a})}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}]),o}();return i.\u0275fac=function(n){return new(n||i)(e.Y36(ae.R))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-error"]],decls:14,vars:2,consts:[[1,"misc-wrapper"],["href","javascript:void(0);",1,"brand-logo"],["alt","brand-logo","height","28",3,"src"],[1,"brand-text","text-primary","ml-1"],[1,"misc-inner","p-2","p-sm-3"],[1,"w-100","text-center"],[1,"mb-1"],[1,"mb-2"],["routerLink","/","rippleEffect","",1,"btn","btn-primary","mb-2","btn-sm-block"],["alt","Error page",1,"img-fluid",3,"src"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"a",1),e._UZ(2,"img",2),e.TgZ(3,"h2",3),e._uU(4,"StockIt"),e.qZA(),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"h2",6),e._uU(8,"Page Not Found \ud83d\udd75\ud83c\udffb\u200d\u2640\ufe0f"),e.qZA(),e.TgZ(9,"p",7),e._uU(10,"Oops! \ud83d\ude16 The requested URL was not found on this server."),e.qZA(),e.TgZ(11,"a",8),e._uU(12,"Back to Home"),e.qZA(),e._UZ(13,"img",9),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.s9C("src",t.coreConfig.app.appLogoImage,e.LSH),e.xp6(11),e.Q6J("src","dark"===t.coreConfig.layout.skin?"assets/images/pages/error-dark.svg":"assets/images/pages/error.svg",e.LSH))},directives:[Z.yS,oe.R],styles:[".misc-wrapper[_ngcontent-%COMP%]{display:flex;flex-basis:100%;min-height:100vh;width:100%;align-items:center;justify-content:center}.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%]{position:relative;max-width:750px}.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{display:flex;justify-content:center;position:absolute;top:2rem;left:2rem;margin:0}.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]{font-weight:600}@media (max-height: 625px){.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%]{margin-top:4rem}}"]}),i}(),data:{animation:"misc"}}],gn=function(){var i=(0,p.Z)(function o(){(0,h.Z)(this,o)});return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[E.ez,Z.Bz.forChild(hn),Q.$]]}),i}(),mn=function(){var i=(0,p.Z)(function o(){(0,h.Z)(this,o)});return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[],imports:[[E.ez,Q.$,wt.N,H.IJ,bt,C.u5,dn,gn]]}),i}()}}]);