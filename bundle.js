(()=>{"use strict";class e{constructor(e,t){window.addEventListener("popstate",(e=>this.route())),this._routes=e,this._defaultRoute=t,this._actualRoute=""}getActualRoute(){return this._actualRoute}route(){let e=!1;const t=window.location.hash;for(const[r,s]of Object.entries(this._routes))if("#"+r==t){this._actualRoute=r,s.init()&&(e=!0);break}e||this.routeDefault()}routeTo(e){let t=!1;for(const[r,s]of Object.entries(this._routes))r==e&&(t=!0);t?(this._actualRoute=e,window.location.hash="#"+e,this._routes[e].init()):console.log("route %s does not exist",e)}routeDefault(){this._actualRoute=this._defaultRoute.name,window.location.hash="#"+this._defaultRoute.name,this._defaultRoute.control.init()}}class t{constructor(e,t){this.name=e,this.storedClasses={},this.data=[],t.forEach((e=>{this.storedClasses[e.name]=e}))}getData(){return this.data}load(){let e=window.localStorage.getItem(this.name);null==e?this.save():this.data=JSON.parse(e,((e,t)=>{if("object"==typeof t&&"_class"in t){let e=new this.storedClasses[t._class];return Object.assign(e,t)}return t}))}save(){window.localStorage.setItem(this.name,JSON.stringify(this.data))}}class r{constructor(e){this._app=e}init(){return!0}}class s{constructor(){this._navEl=document.querySelector("header nav"),this._userEl=document.getElementById("user"),this._user=""}init(e){this._navEl.innerHTML=this._nav(e),this._userEl.innerHTML=this._user}_nav(e){return String.raw`
            <ul>
                <li>
                    <a href="#main" ${"main"==e?'id="pageSelected"':""}>Main page</a>
                </li>
                <li>
                    <a href="#login" ${"login"==e?'id="pageSelected"':""}>Login</a>
                </li>
                <li>
                    <a href="#register" ${"register"==e?'id="pageSelected"':""}>Register</a>
                </li>
            </ul>
        `}}let i={blue:{headerFooter:"#12146b",mainBg:"#191c94",text:"white",mandatory:"#ff4e00",dark:"#070f3d",note:"#070f3d",noteBgHover:"#00a0d5",tableSelected:"#1b62c2",tableSelectedHover:"#14478c",tableButtonBg:"#00a0d5",error:"#ff4e00"},green:{headerFooter:"#239311",mainBg:"#30cf16",text:"black",mandatory:"#bd0000",dark:"#0f3d07",note:"#053007",noteBgHover:"#46ee4e",tableSelected:"#108d16",tableSelectedHover:"#0b5b0e",tableButtonBg:"#46ee4e",error:"#bd0000"}};function a(e){let t=document.documentElement,r=i[e];t.style.setProperty("--header-footer-color",r.headerFooter),t.style.setProperty("--main-bg-color",r.mainBg),t.style.setProperty("--text-color",r.text),t.style.setProperty("--mandatory-color",r.mandatory),t.style.setProperty("--dark-color",r.dark),t.style.setProperty("--note-color",r.note),t.style.setProperty("--note-bg-color-hover",r.noteBgHover),t.style.setProperty("--table-selected-color",r.tableSelected),t.style.setProperty("--table-selected-hover-color",r.tableSelectedHover),t.style.setProperty("--table-button-bg-color",r.tableButtonBg),t.style.setProperty("--error-color",r.error)}class n extends r{constructor(e){super(e),this._loggedOutView=new s}init(){return a("blue"),this._loggedOutView.init(this._app.router.getActualRoute()),!0}}class l{constructor(){this._class=this.__proto__.constructor.name}}let o=["January","Febuary","March","April","May","June","July","August","September","October","November","December"],d=["Monday","Tuesday","Wednesday","Thursday","Fiday","Saturday","Sunday"],h=["Mo","Tu","We","Th","Fr","Sa","Su"];class u extends l{constructor(){super(),this.day=1,this.month=1,this.year=1}static createDate(e,t,r){let s=new u;return s.day=e,s.month=t,s.year=r,s}static createCurrentDate(){let e=new Date;return this.createDate(e.getDate(),e.getMonth(),e.getFullYear())}static getDayShorts(){return h}getMonthName(){return o[this.month]}getDayInWeekName(){return d[this.getDayInWeek()]}getDayInWeekShortName(){return h[this.getDayInWeek()]}getDayInWeek(){return new Date(this.year,this.month,this.day).getDay()}getDaysInMonth(){let e=new Date,t=e.getMonth()+1,r=e.getFullYear();return new Date(r,t,0).getDate()}incrementMonth(){let e=new Date(this.year,this.month+1,1);this.year=e.getFullYear(),this.month=e.getMonth(),this.day=e.getDate()}dencrementMonth(){let e=new Date(this.year,this.month-1,1);this.year=e.getFullYear(),this.month=e.getMonth(),this.day=e.getDate()}toString(){return d[this.getDayInWeek()]+" "+String(this.day)+". "+o[this.month]+" "+String(this.year)}compare(e){return this.day==e.day&&this.month==e.month&&this.year==e.year}makeCopy(){return u.createDate(this.day,this.month,this.year)}}class c{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._formEl=null,this._headline="Diary"}getForm(){return this._formEl}init(){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._mainEl.innerHTML=this._basicCalendar(),this._formEl=document.querySelector("form")}_basicCalendar(){let e=u.createCurrentDate();return String.raw`
            <div id="currentDate">Today is ${e.toString()}</div>
            <form method="post" action="">
                <div id="calendar"></div>
            </form>
        `}}class m{constructor(){this._calendarWrapperEl=null,this._calendarBodyEl=null}init(e,t,r){this._calendarWrapperEl=document.getElementById("calendar"),this._calendarWrapperEl.innerHTML=this._calendar(e),this._calendarBodyEl=document.querySelector("tbody"),this._calendarBodyEl.innerHTML=this._calendarBody(e,t,r)}selectCell(e){let t=document.getElementById("day"+String(e));null!=t&&t.classList.add("selectedTab")}deselectCell(e){let t=document.getElementById("day"+String(e));null!=t&&t.classList.remove("selectedTab")}_calendar(e){return String.raw`
            <table>
                <thead>
                <tr> 
                    <td colspan="5">
                        <div class="buttonTab">
                            ${e.getMonthName()} ${e.year}
                        </div>
                    </td> 
                    <td>
                        <input class="buttonTab" type="submit" name="changeMonthLeft" value="<">
                    </td> 
                    <td>
                        <input class="buttonTab" type="submit" name="changeMonthRight" value=">">
                    </td> 
                </tr>
                <tr>
                    ${p(u.getDayShorts().map((e=>String.raw`
                        <td>
                            <div>
                                ${e}
                            </div>
                        </td>
                    `)))}
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        `}_calendarBody(e,t,r){let s=this._calendarCells(e,t,r);return String.raw`
            ${p(s.map((e=>String.raw`
	            <tr>
                    ${p(e)}
                </tr>
            `)))}
        `}_calendarCells(e,t,r){let s=u.createDate(1,e.month,e.year),i=s.getDayInWeek(),a=u.createCurrentDate(),n=[],l=s.getDaysInMonth(),o=2-i;for(;l>0;){let s=[];for(let i=0;i<u.getDayShorts().length;i++){if(o<1||l<=0)s.push(this._otherMonthCell());else{let i=!1;t==o&&(i=!0),o==a.day&&e.month==a.month&&e.year==a.year?s.push(this._cell(i,"todayTab",o)):r.includes(o)?s.push(this._cell(i,"noteTab",o)):s.push(this._cell(i,"activeCellTab",o)),l--}o++}n.push(s)}return n}_cell(e,t,r){return String.raw`
            <td id="day${r}" ${e?'class ="selectedTab"':""}>
                    <input class="${t}" type="submit" name="selectDay" value="${r}">
            </td>
        `}_otherMonthCell(){return String.raw`
            <td>
                <div class="deactivatedCellTab">
                    <svg width="20" height="20" viewBox="0 0 10 10">
                        <line x1="0" y1="0" x2="10" y2="10"/>
                        <line x1="0" y1="10" x2="10" y2="0"/>
                    </svg>
                </div>
            </td>
        `}}function p(e){return e.reduce(((e,t)=>e+t),"")}class _ extends r{constructor(e){super(e),this._view=new m,this._selectedDay=-1,this._date=null,this.noteDays=[]}init(){return this._selectedDay=-1,this._date=u.createCurrentDate(),this._view.init(this._date,this._selectedDay,this.noteDays),!0}update(){this._view.init(this._date,this._selectedDay,this.noteDays)}getSelectedDay(){return this._selectedDay}getDate(){return this._date}submitForm(e){if("selectDay"==e.name){let t=parseInt(e.value);this._view.deselectCell(this._selectedDay),this._view.selectCell(t),this._selectedDay=t,this._date.day=t}else"changeMonthLeft"==e.name?(this._selectedDay=-1,this._date.dencrementMonth(),this._view.init(this._date,this._selectedDay,this.noteDays)):"changeMonthRight"==e.name&&(this._selectedDay=-1,this._date.incrementMonth(),this._view.init(this._date,this._selectedDay,this.noteDays))}}class y extends n{constructor(e){super(e),this._view=new c,this._calendar=new _(e)}init(){let e=super.init();return e&&(this._view.init(),this._calendar.init(),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._calendar.submitForm(e.submitter)}))),e}}class g{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._loginFormEl=null,this._emailInputEl=null,this._passwordInputEl=null,this._errorEl=null,this._headline="Login"}init(){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._mainEl.innerHTML=this._loginForm(),this._loginFormEl=document.querySelector("form"),this._emailInputEl=document.getElementById("email"),this._passwordInputEl=document.getElementById("password"),this._errorEl=document.querySelector("p.error")}getForm(){return this._loginFormEl}getEmailInput(){return this._emailInputEl}getPasswordInput(){return this._passwordInputEl}clearErrors(){this._errorEl.textContent=""}setError(e){this._errorEl.textContent=e}_loginForm(){return String.raw`
            <form method="post" action="">
                <label>
                    Email: <span class="mandatory">*</span>
                    <input id="email" required type="email" name="email"/>
                </label>
                <label>
                    Password: <span class="mandatory">*</span>
                    <input id="password" required type="password" name="password" />
                </label>
                <p class="error"></p>
                <input class="submitForm" type="submit" value="Login">
                <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
            </form>
        `}}class w extends n{constructor(e){super(e),this._view=new g}init(){let e=super.init();return e&&(this._view.init(),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._submitForm()}))),e}_submitForm(){let e=this._view.getEmailInput().value,t=this._view.getPasswordInput().value,r=this._findUser(e);null!=r?r.doesPasswordMatch(t).then((e=>{e?(this._app.user=r,this._app.router.routeTo("diary")):this._view.setError("Incorrect email or password.")})):this._view.setError("Incorrect email or password.")}_findUser(e){let t=this._app.getUsers().getData(),r=null;return t.forEach((t=>{t.email==e&&(r=t)})),r}}class E{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._registerFormEl=null,this._emailInputEl=null,this._password1InputEl=null,this._password2InputEl=null,this._errorEl=null,this._headline="Register"}init(){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._mainEl.innerHTML=this._registerForm(),this._registerFormEl=document.querySelector("form"),this._emailInputEl=document.getElementById("email"),this._password1InputEl=document.getElementById("password1"),this._password2InputEl=document.getElementById("password2"),this._errorEl=document.querySelector("p.error")}getForm(){return this._registerFormEl}getEmailInput(){return this._emailInputEl}getPassword1Input(){return this._password1InputEl}getPassword2Input(){return this._password2InputEl}clearErrors(){this._errorEl.textContent="",this._emailInputEl.classList.remove("error"),this._password1InputEl.classList.remove("error"),this._password2InputEl.classList.remove("error")}setEmailError(e){this._errorEl.textContent=e,this._emailInputEl.classList.add("error")}setPassword1Error(e){this._errorEl.textContent=e,this._password1InputEl.classList.add("error")}setPassword2Error(e){this._errorEl.textContent=e,this._password2InputEl.classList.add("error")}_registerForm(){return String.raw`
            <form method="post" action="">
                <label>
                    Email: <span class="mandatory">*</span>
                    <input id="email" required type="email" name="email"/>
                </label>
                <label>
                    Password: <span class="mandatory">*</span>
                    <input id="password1" required type="password" name="password1" />
                </label>
                <label>
                    Password check: <span class="mandatory">*</span>
                    <input id="password2" required type="password" name="password2" />
                </label>
                <p class="error"></p>
                <input class="submitForm" type="submit" value="Register">
                <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
            </form>
        `}}class v extends l{constructor(){super(),this.email="",this.passwordHash="",this.notes=[],this.diaryNotes=[],this.style="blue"}async doesPasswordMatch(e){let t=await b(e);return this.passwordHash==t}static async createWithPassword(e,t){let r=new v;return r.email=e,r.passwordHash=await b(t),r}static isEmailIncorrect(e){return e.indexOf("@")>-1&&e.indexOf(".")>-1?e.indexOf("@")>0&&e.indexOf(".")>e.indexOf("@")+1&&e.indexOf(".")<e.length-1?"":"Incorrect email.":"Missing @ or . in the email."}static isPasswordIncorrect(e){return e.length<=3?"Password must be longer than 3 characters.":""}}async function b(e){const t=(new TextEncoder).encode(e),r=await crypto.subtle.digest("SHA-256",t).then();return Array.from(new Uint8Array(r)).map((e=>e.toString(16).padStart(2,"0"))).join("")}class f extends n{constructor(e){super(e),this._view=new E}init(){let e=super.init();return e&&(this._view.init(),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._submitForm()})),this._view.getEmailInput().addEventListener("keyup",(e=>{e.preventDefault(),this._validateEmail()})),this._view.getPassword1Input().addEventListener("blur",(e=>{e.preventDefault(),this._validatePassword1()})),this._view.getPassword2Input().addEventListener("blur",(e=>{e.preventDefault(),this._validatePassword2()}))),e}_submitForm(){if(this._validatePassword2()&&this._validatePassword1()&&this._validateEmail()){let e=this._view.getEmailInput().value,t=this._view.getPassword1Input().value,r=this._app.getUsers();v.createWithPassword(e,t).then((e=>{r.getData().push(e),r.save(),this._app.user=e,this._app.router.routeTo("diary")}))}}_validateEmail(){this._view.clearErrors();let e=this._view.getEmailInput().value,t=v.isEmailIncorrect(e);return t?(this._view.setEmailError(t),!1):!this._isRegistered(e)||(this._view.setEmailError("Such a user already exists."),!1)}_validatePassword1(){this._view.clearErrors();let e=this._view.getPassword1Input().value,t=v.isPasswordIncorrect(e);return!t||(this._view.setPassword1Error(t),!1)}_validatePassword2(){return this._view.clearErrors(),this._view.getPassword1Input().value==this._view.getPassword2Input().value||(this._view.setPassword2Error("Passwords do not match."),!1)}_isRegistered(e){let t=this._app.getUsers().getData(),r=!1;return t.forEach((t=>{t.email==e&&(r=!0)})),r}}class D{constructor(){this._navEl=document.querySelector("header nav"),this._userEl=document.getElementById("user"),this._emailEl=null}init(e,t){this._navEl.innerHTML=this._nav(e),this._userEl.innerHTML=this._user(e),this._emailEl=document.getElementById("loggedInUserEmail"),this._emailEl.textContent=t}_nav(e){return String.raw`
            <ul>
                <li>
                    <a href="#diary" ${"diary"==e?'id="pageSelected"':""}>Diary</a>
                </li>
                <li>
                    <a href="#changeStyle" ${"changeStyle"==e?'id="pageSelected"':""}>Change style</a>
                </li>
            </ul>
        `}_user(e){return String.raw`
            <div>
                Logged&nbsp;in:&nbsp;<span id="loggedInUserEmail"></span>
            </div>
            <div class="styleLink">
                <a class="navLink" href="#logout">Logout</a>
            </div>
        `}}class S extends r{constructor(e){super(e),this._loggedInView=new D}init(){let e=this._app.user;return null!=e&&(a(e.style),this._loggedInView.init(this._app.router.getActualRoute(),e.email),!0)}}class I{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._formEl=null,this._headline="Diary"}getForm(){return this._formEl}init(){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._mainEl.innerHTML=this._diary(),this._formEl=document.querySelector("form")}_diary(){return String.raw`
            <form method="post" action="">
                <div id="calendar"></div>
                <div id="diaryNote"></div>
            </form>
        `}}class F extends l{constructor(){super(),this.date=null,this.name="",this.description=""}static createDiaryNote(e,t,r){let s=new F;return s.date=e,s.name=t,s.description=r,s}static isNameIncorrect(e){return e.length>100?"The name is too long.":e.length<1?"The name must be at least one character.":""}static isDescriptionIncorrect(e){return e.length>2e4?"The description is too long.":""}}class N{constructor(){this._diaryNoteWrapperEl=null,this._nameEl=null,this._descriptionEl=null,this._errorEl=null}init(){this._diaryNoteWrapperEl=document.getElementById("diaryNote"),this._diaryNoteWrapperEl.innerHTML=""}clearNote(){this._diaryNoteWrapperEl.innerHTML=""}noneNote(){this._diaryNoteWrapperEl.innerHTML=this._noneNote()}createNote(){this._diaryNoteWrapperEl.innerHTML=this._createNote(),this._initFormData("",""),this._nameEl.addEventListener("blur",(e=>this.clearErrors())),this._descriptionEl.addEventListener("blur",(e=>this.clearErrors()))}changeNote(e,t){this._diaryNoteWrapperEl.innerHTML=this._changeNote(),this._initFormData(e,t),this._nameEl.addEventListener("blur",(e=>this.clearErrors())),this._descriptionEl.addEventListener("blur",(e=>this.clearErrors()))}existingNote(e,t){this._diaryNoteWrapperEl.innerHTML=this._existingNote(),this._initFormData(e,t)}_initFormData(e,t){this._nameEl=document.querySelector("input#name"),this._descriptionEl=document.querySelector("textarea#description"),this._errorEl=document.querySelector("p.error"),this._nameEl.value=e,this._descriptionEl.value=t}getNameInput(){return this._nameEl.value}getDescriptionInput(){return this._descriptionEl.value}clearErrors(){this._errorEl.textContent="",this._nameEl.classList.remove("error"),this._descriptionEl.classList.remove("error")}setNameError(e){this._errorEl.textContent=e,this._nameEl.classList.add("error")}setDescriptionError(e){this._errorEl.textContent=e,this._descriptionEl.classList.add("error")}_noneNote(){return String.raw`
            <input class="submitForm" type="submit" name="createNote" value="Create note">
        `}_createNote(){return String.raw`
            <label>
                Name: <span class="mandatory">*</span>
                <input id="name" type="text" name="name" value="">
            </label>
            <label for="description">
                Description:
            </label>
            <textarea id="description" id="description" name="description" cols="35" rows="15" ></textarea>
            <p class="error"></p>
            <input class="submitForm" type="submit" name="create" value="Create">
            <a class="submitForm" href="javascript:window.print()">Print</a>
            <input class="submitForm" type="submit" name="cancel" value="Cancel">
            <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
        `}_changeNote(){return String.raw`
            <label>
                Name: <span class="mandatory">*</span>
                <input id="name" type="text" name="name" value="">
            </label>
            <label for="description">
                Description:
            </label>
            <textarea id="description" id="description" name="description" cols="35" rows="15" ></textarea>
            <p class="error"></p>
            <input class="submitForm" type="submit" name="safeChanges" value="Safe changes">
            <a class="submitForm" href="javascript:window.print()">Print</a>
            <input class="submitForm" type="submit" name="cancel" value="Cancel">
            <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
        `}_existingNote(){return String.raw`
            <label>
                Name:
                <input id="name" readonly type="text" name="name" value="">
            </label>
            <label for="description">
                Description:
            </label>
            <textarea readonly id="description" name="description" cols="35" rows="15" ></textarea>
            <div>
                <input class="submitForm" type="submit" name="change" value="Change">
                <a class="submitForm" href="javascript:window.print()">Print</a>
                <input class="submitForm" type="submit" name="delete" value="Delete">
            </div>
        `}}class x extends r{constructor(e,t){super(e),this._view=new N,this._calendar=t}init(){return this._view.init(),this.update(),!0}update(){if(-1==this._calendar.getSelectedDay())return void this._view.clearNote();let e=this._findNote();null==e?this._view.noneNote():this._view.existingNote(e.name,e.description);let t=this._calendar.getDate().makeCopy();this._calendar.noteDays=this._app.user.diaryNotes.filter((e=>e.date.month==t.month)).map((e=>e.date.day)),null==this._calendar.noteDays&&(this._calendar.noteDays=[]),this._calendar.update()}submitForm(e){if(-1!=this._calendar.getSelectedDay())if("createNote"==e.name)this._view.createNote();else if("create"==e.name||"safeChanges"==e.name){let e=this._calendar.getDate().makeCopy(),t=this._view.getNameInput(),r=this._view.getDescriptionInput();this._view.clearErrors();let s=F.isNameIncorrect(t);if(s)return void this._view.setNameError(s);if(s=F.isDescriptionIncorrect(r),s)return void this._view.setDescriptionError(s);let i=F.createDiaryNote(e.makeCopy(),t,r),a=this._app.user.diaryNotes,n=a.findIndex((t=>e.compare(t.date)));n<0?a.push(i):a[n]=i,this._app._users.save(),this.update()}else if("change"==e.name){let e=this._findNote();null!=e&&this._view.changeNote(e.name,e.description)}else if("delete"==e.name){let e=this._calendar.getDate().makeCopy(),t=this._app.user.diaryNotes;this._app.user.diaryNotes=t.filter((t=>!t.date.compare(e))),this._app._users.save(),this.update()}else this.update();else this._view.clearNote()}_findNote(){return this._app.user.diaryNotes.find((e=>this._calendar.getDate().compare(e.date)))}}class L extends S{constructor(e){super(e),this._view=new I,this._calendar=new _(e),this._diaryNote=new x(e,this._calendar)}init(){let e=super.init();return e&&(this._view.init(),this._calendar.init(),this._diaryNote.init(),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._submitForm(e.submitter)}))),e}_submitForm(e){this._calendar.submitForm(e),this._diaryNote.submitForm(e)}}class M extends S{constructor(e){super(e)}init(){return super.init()&&(this._app.user=null),!1}}class T{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._changeStyleFormEl=null,this._headline="Change style"}init(e){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._mainEl.innerHTML=this._changeStyleForm(e),this._changeStyleFormEl=document.querySelector("form")}getForm(){return this._changeStyleFormEl}_changeStyleForm(e){return String.raw`
            <form method="post" action="">
                <label>
                    Styles: <span class="mandatory">*</span>
                </label>
                <label>
                    <input class="radioBut" required type="radio" name="style" value="blue" ${"blue"==e?"checked":""}>
                    Blue style
                </label>
                <label>
                    <input class="radioBut" type="radio" name="style" value="green" ${"green"==e?"checked":""}>
                    Green style
                </label>
                <input class="submitForm" type="submit" value="Change">
                <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
            </form>
        `}}class P extends S{constructor(e){super(e),this._view=new T}init(){let e=super.init();return e&&(this._view.init(this._app.user.style),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._submitForm()}))),e}_submitForm(){let e=this._view.getForm(),t=this._app.user,r=new FormData(e);t.style=r.get("style"),a(t.style)}}class C extends l{constructor(){super(),this.name="",this.description=""}static createNote(e,t){let r=new C;return r.name=e,r.description=t,r}static isNameIncorrect(e){return e.length>100?"The name is too long.":e.length<1?"The name must be at least one character.":""}static isDescriptionIncorrect(e){return e.length>2e4?"The description is too long.":""}}new class{constructor(){let r={main:new y(this),login:new w(this),register:new f(this),diary:new L(this),logout:new M(this),changeStyle:new P(this)},s={name:"main",control:r.main};this.router=new e(r,s),this.router.route(),this._users=new t("diary-js-users",[v,u,C,F]),this._users.load(),this.user=null}getUsers(){return this._users}}})();