(()=>{"use strict";class e{constructor(e,t){window.addEventListener("popstate",(e=>this.route())),this._routes=e,this._defaultRoute=t,this._actualRoute=""}getActualRoute(){return this._actualRoute}route(){let e=!1;const t=window.location.hash;for(const[s,r]of Object.entries(this._routes))if("#"+s==t){this._actualRoute=s,r.init()&&(e=!0);break}e||this.routeDefault()}routeTo(e){let t=!1;for(const[s,r]of Object.entries(this._routes))s==e&&(t=!0);t?(this._actualRoute=e,window.location.hash="#"+e,this._routes[e].init()):console.log("route %s does not exist",e)}routeDefault(){this._actualRoute=this._defaultRoute.name,window.location.hash="#"+this._defaultRoute.name,this._defaultRoute.control.init()}}class t{constructor(e,t){this.name=e,this.storedClasses={},this.data=[],t.forEach((e=>{this.storedClasses[(new e).getStorageClassName()]=e}))}getData(){return this.data}load(){let e=window.localStorage.getItem(this.name);null==e?this.save():this.data=JSON.parse(e,((e,t)=>{if("object"==typeof t&&"_storageClassName"in t){let e=new this.storedClasses[t._storageClassName];return Object.assign(e,t)}return t}))}save(){window.localStorage.setItem(this.name,JSON.stringify(this.data))}}class s{constructor(e){this._app=e}init(){return!0}}class r{constructor(){this._navEl=document.querySelector("header nav"),this._userEl=document.getElementById("user"),this._user=""}init(e){this._navEl.innerHTML=this._nav(e),this._userEl.innerHTML=this._user}_nav(e){return String.raw`
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
        `}}let i={blue:{headerFooter:"#12146b",mainBg:"#191c94",text:"white",mandatory:"#ff4e00",dark:"#070f3d",note:"#070f3d",noteBgHover:"#00a0d5",tableSelected:"#1b62c2",tableSelectedHover:"#14478c",tableButtonBg:"#00a0d5",error:"#ff4e00"},green:{headerFooter:"#239311",mainBg:"#30cf16",text:"black",mandatory:"#bd0000",dark:"#0f3d07",note:"#053007",noteBgHover:"#46ee4e",tableSelected:"#108d16",tableSelectedHover:"#0b5b0e",tableButtonBg:"#46ee4e",error:"#bd0000"}};function a(e){let t=document.documentElement,s=i[e];t.style.setProperty("--header-footer-color",s.headerFooter),t.style.setProperty("--main-bg-color",s.mainBg),t.style.setProperty("--text-color",s.text),t.style.setProperty("--mandatory-color",s.mandatory),t.style.setProperty("--dark-color",s.dark),t.style.setProperty("--note-color",s.note),t.style.setProperty("--note-bg-color-hover",s.noteBgHover),t.style.setProperty("--table-selected-color",s.tableSelected),t.style.setProperty("--table-selected-hover-color",s.tableSelectedHover),t.style.setProperty("--table-button-bg-color",s.tableButtonBg),t.style.setProperty("--error-color",s.error)}class n extends s{constructor(e){super(e),this._loggedOutView=new r}init(){return a("blue"),this._loggedOutView.init(this._app.router.getActualRoute()),!0}}class l{constructor(e){this._storageClassName=e}getStorageClassName(){return this._storageClassName}}let o=["January","Febuary","March","April","May","June","July","August","September","October","November","December"],d=["Mo","Tu","We","Th","Fr","Sa","Su"];class h extends l{constructor(){super("Date"),this.day=1,this.month=1,this.year=1}static createDate(e,t,s){let r=new h;return r.day=e,r.month=t,r.year=s,r}static createCurrentDate(){let e=new Date;return this.createDate(e.getDate(),e.getMonth(),e.getFullYear())}static getDayShorts(){return d}getMonthName(){return o[this.month]}getDayInWeekName(){return new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(this.toDate()).toString()}getDayInWeekShortName(){return d[this.getDayInWeek()]}getDayInWeek(){return new Date(this.year,this.month,this.day).getDay()}getDaysInMonth(){let e=new Date,t=e.getMonth()+1,s=e.getFullYear();return new Date(s,t,0).getDate()}incrementMonth(){let e=new Date(this.year,this.month+1,1);this.year=e.getFullYear(),this.month=e.getMonth(),this.day=e.getDate()}dencrementMonth(){let e=new Date(this.year,this.month-1,1);this.year=e.getFullYear(),this.month=e.getMonth(),this.day=e.getDate()}toDate(){return new Date(this.year,this.month,this.day)}toString(){return this.getDayInWeekName()+" "+String(this.day)+". "+o[this.month]+" "+String(this.year)}compare(e){return this.day==e.day&&this.month==e.month&&this.year==e.year}makeCopy(){return h.createDate(this.day,this.month,this.year)}}const c={buildDate:new Date(2021,8,25),packageInfo:{name:"diary-js",homepage:"http://shetr.github.io/diary-js",version:"1.1.3",description:"Reworked version of zwa-diary-js.",main:"src/ts/index.ts",scripts:{test:'echo "Error: no test specified" && exit 1',gen:"node scripts/gen-project-info.js src/ts/gen/projectInfo.ts","css:scss":"node-sass --output-style compressed -o dist src/scss","css:autoprefixer":"postcss -u autoprefixer -r dist/*.css","css:lint":"stylelint src/scss/*.scss --syntax scss || true","build:css":"npm run css:lint && npm run css:scss && npm run css:autoprefixer","build:js":"npm run gen && webpack --mode=production","build:html":"posthtml -c posthtml.json","watch:css":'onchange "src/scss" -- npm run build:css',"watch:js":'onchange "src/js" -- webpack --mode=development',"watch:html":'onchange "src/views" -- npm run build:html',serve:'browser-sync start --server "dist" --files "dist"',watch:"run-p serve watch:*",build:"run-p build:*",deploy:"gh-pages -d dist","build-deploy":"npm run build && npm run deploy"},keywords:[],author:{name:"Petr Šádek",email:"shetr.git@gmail.com"},license:"ISC",devDependencies:{autoprefixer:"^10.3.4","browser-sync":"^2.27.5","gh-pages":"^3.2.3",htmlnano:"^1.1.1","node-sass":"^6.0.1","npm-run-all":"^4.1.5",onchange:"^7.1.0",postcss:"^8.3.6","postcss-cli":"^8.3.1",posthtml:"^0.16.5","posthtml-cli":"^0.10.0","posthtml-modules":"^0.7.4","source-map-loader":"^3.0.0",stylelint:"^13.13.1","ts-loader":"^9.2.5",typescript:"^4.4.3",webpack:"^5.53.0","webpack-cli":"^4.8.0"},dependencies:{}}};class u{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._footerEl=document.querySelector("footer"),this._formEl=null,this._headline="Diary";let e=c.packageInfo.author.name,t=c.buildDate.getFullYear(),s=c.packageInfo.version;this._footer=`${t}&nbsp;&nbsp;&nbsp;${e}&nbsp;&nbsp;&nbsp;v${s}`}getForm(){return this._formEl}init(){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._footerEl.innerHTML=this._footer,this._mainEl.innerHTML=this._basicCalendar(),this._formEl=document.querySelector("form")}_basicCalendar(){let e=h.createCurrentDate();return String.raw`
            <div id="currentDate">Today is ${e.toString()}</div>
            <form method="post" action="">
                <div id="calendar"></div>
            </form>
        `}}class m{constructor(){this._calendarWrapperEl=null,this._calendarBodyEl=null}init(e,t,s){this._calendarWrapperEl=document.getElementById("calendar"),this._calendarWrapperEl.innerHTML=this._calendar(e),this._calendarBodyEl=document.querySelector("tbody"),this._calendarBodyEl.innerHTML=this._calendarBody(e,t,s)}selectCell(e){let t=document.getElementById("day"+String(e));null!=t&&t.classList.add("selectedTab")}deselectCell(e){let t=document.getElementById("day"+String(e));null!=t&&t.classList.remove("selectedTab")}_calendar(e){return String.raw`
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
                    ${p(h.getDayShorts().map((e=>String.raw`
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
        `}_calendarBody(e,t,s){let r=this._calendarCells(e,t,s);return String.raw`
            ${p(r.map((e=>String.raw`
	            <tr>
                    ${p(e)}
                </tr>
            `)))}
        `}_calendarCells(e,t,s){let r=h.createDate(1,e.month,e.year),i=r.getDayInWeek(),a=h.createCurrentDate(),n=[],l=r.getDaysInMonth(),o=2-i;for(;l>0;){let r=[];for(let i=0;i<h.getDayShorts().length;i++){if(o<1||l<=0)r.push(this._otherMonthCell());else{let i=!1;t==o&&(i=!0),o==a.day&&e.month==a.month&&e.year==a.year?r.push(this._cell(i,"todayTab",o)):s.includes(o)?r.push(this._cell(i,"noteTab",o)):r.push(this._cell(i,"activeCellTab",o)),l--}o++}n.push(r)}return n}_cell(e,t,s){return String.raw`
            <td id="day${s}" ${e?'class ="selectedTab"':""}>
                    <input class="${t}" type="submit" name="selectDay" value="${s}">
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
        `}}function p(e){return e.reduce(((e,t)=>e+t),"")}class _ extends s{constructor(e){super(e),this._view=new m,this._selectedDay=-1,this._date=new h,this.noteDays=[]}init(){return this._selectedDay=-1,this._date=h.createCurrentDate(),this._view.init(this._date,this._selectedDay,this.noteDays),!0}update(){this._view.init(this._date,this._selectedDay,this.noteDays)}getSelectedDay(){return this._selectedDay}getDate(){return this._date}submitForm(e){if("selectDay"==e.name){let t=parseInt(e.value);this._view.deselectCell(this._selectedDay),this._view.selectCell(t),this._selectedDay=t,this._date.day=t}else"changeMonthLeft"==e.name?(this._selectedDay=-1,this._date.dencrementMonth(),this._view.init(this._date,this._selectedDay,this.noteDays)):"changeMonthRight"==e.name&&(this._selectedDay=-1,this._date.incrementMonth(),this._view.init(this._date,this._selectedDay,this.noteDays))}}class y extends n{constructor(e){super(e),this._view=new u,this._calendar=new _(e)}init(){let e=super.init();return e&&(this._view.init(),this._calendar.init(),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._calendar.submitForm(e.submitter)}))),e}}class g{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._loginFormEl=null,this._emailInputEl=null,this._passwordInputEl=null,this._errorEl=null,this._headline="Login"}init(){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._mainEl.innerHTML=this._loginForm(),this._loginFormEl=document.querySelector("form"),this._emailInputEl=document.getElementById("email"),this._passwordInputEl=document.getElementById("password"),this._errorEl=document.querySelector("p.error")}getForm(){return this._loginFormEl}getEmailInput(){return this._emailInputEl}getPasswordInput(){return this._passwordInputEl}clearErrors(){this._errorEl.textContent=""}setError(e){this._errorEl.textContent=e}_loginForm(){return String.raw`
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
        `}}class w extends n{constructor(e){super(e),this._view=new g}init(){let e=super.init();return e&&(this._view.init(),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._submitForm()}))),e}_submitForm(){let e=this._view.getEmailInput().value,t=this._view.getPasswordInput().value,s=this._findUser(e);null!=s?s.doesPasswordMatch(t).then((e=>{e?(this._app.user=s,this._app.router.routeTo("diary")):this._view.setError("Incorrect email or password.")})):this._view.setError("Incorrect email or password.")}_findUser(e){let t=this._app.getUsers().getData(),s=null;return t.forEach((t=>{t.email==e&&(s=t)})),s}}class v{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._registerFormEl=null,this._emailInputEl=null,this._password1InputEl=null,this._password2InputEl=null,this._errorEl=null,this._headline="Register"}init(){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._mainEl.innerHTML=this._registerForm(),this._registerFormEl=document.querySelector("form"),this._emailInputEl=document.getElementById("email"),this._password1InputEl=document.getElementById("password1"),this._password2InputEl=document.getElementById("password2"),this._errorEl=document.querySelector("p.error")}getForm(){return this._registerFormEl}getEmailInput(){return this._emailInputEl}getPassword1Input(){return this._password1InputEl}getPassword2Input(){return this._password2InputEl}clearErrors(){this._errorEl.textContent="",this._emailInputEl.classList.remove("error"),this._password1InputEl.classList.remove("error"),this._password2InputEl.classList.remove("error")}setEmailError(e){this._errorEl.textContent=e,this._emailInputEl.classList.add("error")}setPassword1Error(e){this._errorEl.textContent=e,this._password1InputEl.classList.add("error")}setPassword2Error(e){this._errorEl.textContent=e,this._password2InputEl.classList.add("error")}_registerForm(){return String.raw`
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
        `}}var E=function(e,t,s,r){return new(s||(s=Promise))((function(i,a){function n(e){try{o(r.next(e))}catch(e){a(e)}}function l(e){try{o(r.throw(e))}catch(e){a(e)}}function o(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,l)}o((r=r.apply(e,t||[])).next())}))};class b extends l{constructor(){super("User"),this.email="",this.passwordHash="",this.notes=[],this.diaryNotes=[],this.style="blue"}doesPasswordMatch(e){return E(this,void 0,void 0,(function*(){let t=yield f(e);return this.passwordHash==t}))}static createWithPassword(e,t){return E(this,void 0,void 0,(function*(){let s=new b;return s.email=e,s.passwordHash=yield f(t),s}))}static isEmailIncorrect(e){return e.indexOf("@")>-1&&e.indexOf(".")>-1?e.indexOf("@")>0&&e.indexOf(".")>e.indexOf("@")+1&&e.indexOf(".")<e.length-1?"":"Incorrect email.":"Missing @ or . in the email."}static isPasswordIncorrect(e){return e.length<=3?"Password must be longer than 3 characters.":""}}function f(e){return E(this,void 0,void 0,(function*(){const t=(new TextEncoder).encode(e),s=yield crypto.subtle.digest("SHA-256",t).then();return Array.from(new Uint8Array(s)).map((e=>e.toString(16).padStart(2,"0"))).join("")}))}class D extends n{constructor(e){super(e),this._view=new v}init(){let e=super.init();return e&&(this._view.init(),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._submitForm()})),this._view.getEmailInput().addEventListener("keyup",(e=>{e.preventDefault(),this._validateEmail()})),this._view.getPassword1Input().addEventListener("blur",(e=>{e.preventDefault(),this._validatePassword1()})),this._view.getPassword2Input().addEventListener("blur",(e=>{e.preventDefault(),this._validatePassword2()}))),e}_submitForm(){if(this._validatePassword2()&&this._validatePassword1()&&this._validateEmail()){let e=this._view.getEmailInput().value,t=this._view.getPassword1Input().value,s=this._app.getUsers();b.createWithPassword(e,t).then((e=>{s.getData().push(e),s.save(),this._app.user=e,this._app.router.routeTo("diary")}))}}_validateEmail(){this._view.clearErrors();let e=this._view.getEmailInput().value,t=b.isEmailIncorrect(e);return t?(this._view.setEmailError(t),!1):!this._isRegistered(e)||(this._view.setEmailError("Such a user already exists."),!1)}_validatePassword1(){this._view.clearErrors();let e=this._view.getPassword1Input().value,t=b.isPasswordIncorrect(e);return!t||(this._view.setPassword1Error(t),!1)}_validatePassword2(){return this._view.clearErrors(),this._view.getPassword1Input().value==this._view.getPassword2Input().value||(this._view.setPassword2Error("Passwords do not match."),!1)}_isRegistered(e){let t=this._app.getUsers().getData(),s=!1;return t.forEach((t=>{t.email==e&&(s=!0)})),s}}class S{constructor(){this._navEl=document.querySelector("header nav"),this._userEl=document.getElementById("user"),this._emailEl=null}init(e,t){this._navEl.innerHTML=this._nav(e),this._userEl.innerHTML=this._user(),this._emailEl=document.getElementById("loggedInUserEmail"),this._emailEl.textContent=t}_nav(e){return String.raw`
            <ul>
                <li>
                    <a href="#diary" ${"diary"==e?'id="pageSelected"':""}>Diary</a>
                </li>
                <li>
                    <a href="#changeStyle" ${"changeStyle"==e?'id="pageSelected"':""}>Change style</a>
                </li>
            </ul>
        `}_user(){return String.raw`
            <div>
                Logged&nbsp;in:&nbsp;<span id="loggedInUserEmail"></span>
            </div>
            <div class="styleLink">
                <a class="navLink" href="#logout">Logout</a>
            </div>
        `}}class I extends s{constructor(e){super(e),this._loggedInView=new S,this._user=new b}init(){let e=this._app.user;return null!=e&&(this._user=e,a(this._user.style),this._loggedInView.init(this._app.router.getActualRoute(),this._user.email),!0)}}class F{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._formEl=null,this._headline="Diary"}getForm(){return this._formEl}init(){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._mainEl.innerHTML=this._diary(),this._formEl=document.querySelector("form")}_diary(){return String.raw`
            <form method="post" action="">
                <div id="calendar"></div>
                <div id="diaryNote"></div>
            </form>
        `}}class N extends l{constructor(){super("DiaryNote"),this.date=new h,this.name="",this.description=""}static createDiaryNote(e,t,s){let r=new N;return r.date=e,r.name=t,r.description=s,r}static isNameIncorrect(e){return e.length>100?"The name is too long.":e.length<1?"The name must be at least one character.":""}static isDescriptionIncorrect(e){return e.length>2e4?"The description is too long.":""}}class x{constructor(){this._diaryNoteWrapperEl=null,this._nameEl=null,this._descriptionEl=null,this._errorEl=null}init(){this._diaryNoteWrapperEl=document.getElementById("diaryNote"),this._diaryNoteWrapperEl.innerHTML=""}clearNote(){this._diaryNoteWrapperEl.innerHTML=""}noneNote(){this._diaryNoteWrapperEl.innerHTML=this._noneNote()}createNote(){this._diaryNoteWrapperEl.innerHTML=this._createNote(),this._initFormData("",""),this._nameEl.addEventListener("blur",(e=>this.clearErrors())),this._descriptionEl.addEventListener("blur",(e=>this.clearErrors()))}changeNote(e,t){this._diaryNoteWrapperEl.innerHTML=this._changeNote(),this._initFormData(e,t),this._nameEl.addEventListener("blur",(e=>this.clearErrors())),this._descriptionEl.addEventListener("blur",(e=>this.clearErrors()))}existingNote(e,t){this._diaryNoteWrapperEl.innerHTML=this._existingNote(),this._initFormData(e,t)}_initFormData(e,t){this._nameEl=document.querySelector("input#name"),this._descriptionEl=document.querySelector("textarea#description"),this._errorEl=document.querySelector("p.error"),this._nameEl.value=e,this._descriptionEl.value=t}getNameInput(){return this._nameEl.value}getDescriptionInput(){return this._descriptionEl.value}clearErrors(){this._errorEl.textContent="",this._nameEl.classList.remove("error"),this._descriptionEl.classList.remove("error")}setNameError(e){this._errorEl.textContent=e,this._nameEl.classList.add("error")}setDescriptionError(e){this._errorEl.textContent=e,this._descriptionEl.classList.add("error")}_noneNote(){return String.raw`
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
        `}}class L{constructor(e,t){this._app=e,this._view=new x,this._calendar=t}init(e){return this._view.init(),this.update(e),!0}update(e){if(-1==this._calendar.getSelectedDay())this._view.clearNote();else{let t=this._findNote(e);null==t?this._view.noneNote():this._view.existingNote(t.name,t.description)}let t=this._calendar.getDate().makeCopy();this._calendar.noteDays=e.diaryNotes.filter((e=>e.date.month==t.month)).map((e=>e.date.day)),null==this._calendar.noteDays&&(this._calendar.noteDays=[]),this._calendar.update()}submitForm(e,t){if(-1!=this._calendar.getSelectedDay())if("createNote"==e.name)this._view.createNote();else if("create"==e.name||"safeChanges"==e.name){let e=this._calendar.getDate().makeCopy(),s=this._view.getNameInput(),r=this._view.getDescriptionInput();this._view.clearErrors();let i=N.isNameIncorrect(s);if(i)return void this._view.setNameError(i);if(i=N.isDescriptionIncorrect(r),i)return void this._view.setDescriptionError(i);let a=N.createDiaryNote(e.makeCopy(),s,r),n=t.diaryNotes,l=n.findIndex((t=>e.compare(t.date)));l<0?n.push(a):n[l]=a,this._app.getUsers().save(),this.update(t)}else if("change"==e.name){let e=this._findNote(t);null!=e&&this._view.changeNote(e.name,e.description)}else if("delete"==e.name){let e=this._calendar.getDate().makeCopy(),s=t.diaryNotes;t.diaryNotes=s.filter((t=>!t.date.compare(e))),this._app.getUsers().save(),this.update(t)}else this.update(t);else this.update(t)}_findNote(e){return e.diaryNotes.find((e=>this._calendar.getDate().compare(e.date)))}}class C extends I{constructor(e){super(e),this._view=new F,this._calendar=new _(e),this._diaryNote=new L(e,this._calendar)}init(){let e=super.init();return e&&(this._view.init(),this._calendar.init(),this._diaryNote.init(this._user),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._submitForm(e.submitter)}))),e}_submitForm(e){this._calendar.submitForm(e),this._diaryNote.submitForm(e,this._user)}}class M extends I{constructor(e){super(e)}init(){return super.init()&&(this._app.user=null),!1}}class P{constructor(){this._headlineEl=document.querySelector("header h1"),this._mainEl=document.querySelector("main"),this._changeStyleFormEl=null,this._headline="Change style"}init(e){this._headlineEl.innerHTML=this._headline,document.title=this._headline,this._mainEl.innerHTML=this._changeStyleForm(e),this._changeStyleFormEl=document.querySelector("form")}getForm(){return this._changeStyleFormEl}_changeStyleForm(e){return String.raw`
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
        `}}class T extends I{constructor(e){super(e),this._view=new P}init(){let e=super.init();return e&&(this._view.init(this._user.style),this._view.getForm().addEventListener("submit",(e=>{e.preventDefault(),this._submitForm()}))),e}_submitForm(){let e=this._view.getForm(),t=new FormData(e);this._user.style=(e=>{if(null!=e){let t=e.toString();if("blue"==t||"green"==t)return t}return"blue"})(t.get("style")),this._app.getUsers().save(),a(this._user.style)}}class k extends l{constructor(){super("Note"),this.name="",this.description=""}static createNote(e,t){let s=new k;return s.name=e,s.description=t,s}static isNameIncorrect(e){return e.length>100?"The name is too long.":e.length<1?"The name must be at least one character.":""}static isDescriptionIncorrect(e){return e.length>2e4?"The description is too long.":""}}new class{constructor(){let s={main:new y(this),login:new w(this),register:new D(this),diary:new C(this),logout:new M(this),changeStyle:new T(this)},r={name:"main",control:s.main};this.router=new e(s,r),this.router.route(),this._users=new t("diary-js-users",[b,h,k,N]),this._users.load(),this.user=null}getUsers(){return this._users}}})();
//# sourceMappingURL=bundle.js.map