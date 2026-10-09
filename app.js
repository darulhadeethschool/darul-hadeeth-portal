const students=[
{id:"DH001",name:"Aisha Abdullahi",class:"JSS 1",gender:"Female",term:"1st"},
{id:"DH002",name:"Abdulrahman Yusuf",class:"JSS 1",gender:"Male",term:"1st"},
{id:"DH003",name:"Fatimah Ibrahim",class:"JSS 2",gender:"Female",term:"1st"},
{id:"DH004",name:"Muhammad Sani",class:"JSS 3",gender:"Male",term:"1st"}
];
const teachers=[
{id:"T001",name:"Ustaz Hassan",subject:"Arabic",class:"JSS 1"},
{id:"T002",name:"Mrs. Amina",subject:"English",class:"JSS 2"},
{id:"T003",name:"Mr. Ibrahim",subject:"Mathematics",class:"JSS 3"}
];
const subjects=["English Language","Mathematics","Arabic","Islamic Studies","Basic Science","Social Studies","Yoruba","Computer Studies","Agricultural Science"];

function login(){document.getElementById("login").classList.add("hidden");document.getElementById("app").classList.remove("hidden");showPage("dashboard")}
function logout(){document.getElementById("app").classList.add("hidden");document.getElementById("login").classList.remove("hidden")}
function toggleSidebar(){document.getElementById("sidebar").classList.toggle("open")}
function showPage(p){
 if(p==="dashboard") dashboard();
 if(p==="students") studentsPage();
 if(p==="teachers") teachersPage();
 if(p==="classes") classesPage();
 if(p==="results") resultsPage();
 if(p==="attendance") simplePage("Attendance","Record daily student attendance by class and date.");
 if(p==="announcements") simplePage("Announcements","Publish school announcements for teachers, students and parents.");
 if(p==="settings") simplePage("Settings","Academic session, terms, grading system and user permissions.");
 if(innerWidth<801) document.getElementById("sidebar").classList.remove("open");
}
function dashboard(){
 document.getElementById("main").innerHTML=`<h1>Dashboard</h1><p>Welcome to Darul-Hadeeth School Portal.</p>
 <div class="cards"><div class="card"><h3>Students</h3><div class="number">${students.length}</div></div><div class="card"><h3>Teachers</h3><div class="number">${teachers.length}</div></div><div class="card"><h3>Classes</h3><div class="number">9</div></div><div class="card"><h3>Subjects</h3><div class="number">${subjects.length}</div></div></div>
 <div class="grid2"><div class="panel"><h2>Academic Session</h2><p><b>2026/2027</b></p><p>Current term: <span class="badge">1st Term</span></p></div><div class="panel"><h2>Quick actions</h2><button class="primary" onclick="studentsPage()">Add Student</button> <button class="primary" onclick="resultsPage()">Enter Results</button></div></div>`;
}
function studentsPage(){
 document.getElementById("main").innerHTML=`<h1>Students</h1><div class="panel"><div class="toolbar"><input placeholder="Search student..." oninput="filterStudents(this.value)"><button class="primary" onclick="studentForm()">+ Add Student</button></div><div class="table-wrap"><table class="table" id="studentTable"><tr><th>Admission No.</th><th>Name</th><th>Class</th><th>Gender</th><th>Term</th></tr>${students.map(s=>`<tr><td>${s.id}</td><td>${s.name}</td><td>${s.class}</td><td>${s.gender}</td><td>${s.term}</td></tr>`).join("")}</table></div></div>`;
}
function filterStudents(q){document.querySelectorAll("#studentTable tr").forEach((r,i)=>{if(i)r.style.display=r.innerText.toLowerCase().includes(q.toLowerCase())?"":"none"})}
function studentForm(){document.getElementById("main").innerHTML=`<h1>Register Student</h1><div class="panel"><div class="form"><label>Admission No.<input id="sid" placeholder="DH005"></label><label>Full Name<input id="sname" placeholder="Student full name"></label><label>Class<select id="sclass"><option>Primary 1</option><option>Primary 2</option><option>Primary 3</option><option>Primary 4</option><option>Primary 5</option><option>Primary 6</option><option>JSS 1</option><option>JSS 2</option><option>JSS 3</option></select></label><label>Gender<select id="sgender"><option>Male</option><option>Female</option></select></label><div class="full"><button class="primary" onclick="saveStudent()">Save Student</button></div></div></div>`}
function saveStudent(){let s={id:sid.value,name:sname.value||"New Student",class:sclass.value,gender:sgender.value,term:"1st"};students.push(s);studentsPage()}
function teachersPage(){document.getElementById("main").innerHTML=`<h1>Teachers</h1><div class="panel"><div class="toolbar"><span>Teacher accounts and subject assignments</span><button class="primary">+ Add Teacher</button></div><table class="table"><tr><th>ID</th><th>Name</th><th>Subject</th><th>Class</th></tr>${teachers.map(t=>`<tr><td>${t.id}</td><td>${t.name}</td><td>${t.subject}</td><td>${t.class}</td></tr>`).join("")}</table></div>`}
function classesPage(){document.getElementById("main").innerHTML=`<h1>Classes & Subjects</h1><div class="grid2"><div class="panel"><h2>Classes</h2><p>Primary 1–6</p><p>JSS 1–3</p></div><div class="panel"><h2>Subjects</h2>${subjects.map(x=>`<span class="badge" style="display:inline-block;margin:4px">${x}</span>`).join("")}</div></div>`}
function resultsPage(){document.getElementById("main").innerHTML=`<h1>Results</h1><div class="panel"><div class="toolbar"><select><option>JSS 1</option><option>JSS 2</option><option>JSS 3</option></select><select><option>1st Term</option><option>2nd Term</option><option>3rd Term</option></select><button class="primary">Save Results</button></div><div class="table-wrap"><table class="table"><tr><th>Student</th><th>CA 1</th><th>CA 2</th><th>Exam</th><th>Total</th><th>Grade</th></tr>${students.slice(0,2).map(s=>`<tr><td>${s.name}</td><td><input type="number" min="0" max="20" value="15" style="width:65px"></td><td><input type="number" min="0" max="20" value="16" style="width:65px"></td><td><input type="number" min="0" max="60" value="48" style="width:65px"></td><td>79</td><td><span class="badge">B</span></td></tr>`).join("")}</table></div><p><small>Demo calculation shown. The production version will calculate totals/grades automatically and store results online.</small></p></div>`}
function simplePage(title,desc){document.getElementById("main").innerHTML=`<h1>${title}</h1><div class="panel"><p>${desc}</p><button class="primary">+ Add Record</button></div>`}
document.getElementById("app").classList.add("hidden");
