document.addEventListener("DOMContentLoaded", () => {
 const sections = document.querySelectorAll(".card")
 sections.forEach((section) => (section.style.display = "none"))

 const gradesSection = document.getElementById("grades")
 if (gradesSection) {
  gradesSection.style.display = "block"
 }

 const dropdownItems = document.querySelectorAll(".dropdown-item")
 dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
   const targetId = e.target.getAttribute("href").substring(1)

   sections.forEach((section) => (section.style.display = "none"))

   const targetSection = document.getElementById(targetId)
   if (targetSection) {
    targetSection.style.display = "block"
   }
  })
 })

 const profileLink = document.getElementById("profileLink")
 if (profileLink) {
  profileLink.addEventListener("click", (e) => {
   e.preventDefault()
   const settingsSection = document.getElementById("settings")
   const sections = document.querySelectorAll(".card")
   sections.forEach((section) => (section.style.display = "none"))
   if (settingsSection) {
    settingsSection.style.display = "block"
   }
  })
 }
})

///////////////////////////////////////////////////////////////////////////////////
let gradesData = JSON.parse(localStorage.getItem("gradesData")) || [
 { student: "Ahmed Ali", grade: "A" },
 { student: "Sara Mohamed", grade: "B" },
 { student: "Ali Hassan", grade: "C" },
 { student: "Mahmoud Ibrahim", grade: "B" },
 { student: "Fatima Khaled", grade: "A" },
 { student: "Noor Ahmed", grade: "C" },
 { student: "Yasmin Omar", grade: "A" },
 { student: "Omar Youssef", grade: "B" },
 { student: "Laila Adel", grade: "C" },
 { student: "Khaled Sameer", grade: "B" },
 { student: "Huda Ali", grade: "A" },
]

let isGradesVisible = false

// Function to render grades
function renderGrades() {
 const gradesList = document.getElementById("gradesList")

 if (isGradesVisible) {
  gradesList.innerHTML = "<p class='text-muted'>Click 'Manage Grades' to start.</p>"
  isGradesVisible = false
  return
 }

 if (gradesData.length === 0) {
  gradesList.innerHTML = "<p class='text-muted'>No grades available. Click 'Add Grade' to start.</p>"
  isGradesVisible = true
  return
 }

 gradesList.innerHTML = `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Student</th>
                    <th>Grade</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${gradesData
                 .map(
                  (item, index) => `
                    <tr>
                        <td>${item.student}</td>
                        <td>${item.grade}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editGrade(${index})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteGrade(${index})">Delete</button>
                        </td>
                    </tr>
                `
                 )
                 .join("")}
            </tbody>
        </table>
        <button class="btn btn-success mt-3" onclick="addGrade()">Add Grade</button>
        <button class="btn btn-primary mt-3" onclick="saveGrades()">Save Changes</button>
    `

 isGradesVisible = true
}

function editGrade(index) {
 const currentGrade = gradesData[index]
 const newGrade = prompt(`Enter a new grade for ${currentGrade.student}:`, currentGrade.grade)
 if (newGrade !== null && newGrade.trim() !== "") {
  gradesData[index].grade = newGrade.trim()
  renderGrades()
 }
}

function deleteGrade(index) {
 if (confirm(`Are you sure you want to delete the grade for ${gradesData[index].student}?`)) {
  gradesData.splice(index, 1)
  renderGrades()
 }
}

function addGrade() {
 const studentName = prompt("Enter the student's name:")
 const studentGrade = prompt("Enter the grade:")
 if (studentName && studentGrade) {
  gradesData.push({ student: studentName.trim(), grade: studentGrade.trim() })
  renderGrades()
 } else {
  alert("Both student name and grade are required.")
 }
}

function saveGrades() {
 localStorage.setItem("gradesData", JSON.stringify(gradesData))
 alert("Grades saved successfully.")
 document.getElementById("gradesList").innerHTML = "<p class='text-muted'>Click 'Manage Grades' to start.</p>"
 isGradesVisible = false
}

document.getElementById("manageGradesBtn").addEventListener("click", renderGrades)

document.getElementById("gradesList").innerHTML = "<p class='text-muted'>Click 'Manage Grades' to start.</p>"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let subjectsData = JSON.parse(localStorage.getItem("subjectsData")) || [
 { subject: "Mathematics", teacher: "Ahmed Ali" },
 { subject: "Science", teacher: "Sara Mohamed" },
 { subject: "History", teacher: "Ali Hassan" },
 { subject: "English", teacher: "Mahmoud Ibrahim" },
 { subject: "Physics", teacher: "Fatima Khaled" },
 { subject: "Chemistry", teacher: "Noor Ahmed" },
 { subject: "Biology", teacher: "Yasmin Omar" },
 { subject: "Art", teacher: "Omar Youssef" },
 { subject: "Music", teacher: "Laila Adel" },
 { subject: "Physical Education", teacher: "Khaled Sameer" },
]

let isTableVisible = false

function renderSubjects() {
 const subjectsList = document.getElementById("subjectsList")
 if (isTableVisible) {
  subjectsList.innerHTML = "<p>Click 'Manage Subjects' to start.</p>"
  isTableVisible = false
  return
 }

 subjectsList.innerHTML = `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${subjectsData
                 .map(
                  (item, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.subject}</td>
                        <td>${item.teacher}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editSubject(${index})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="removeSubject(${index})">Remove</button>
                        </td>
                    </tr>
                `
                 )
                 .join("")}
            </tbody>
        </table>
        <button class="btn btn-success mt-3" onclick="addSubject()">Add New Subject</button>
        <button class="btn btn-primary mt-3" onclick="saveChanges()">Save Changes</button>
    `

 isTableVisible = true
}

function editSubject(index) {
 const newSubject = prompt("Enter new subject name for " + subjectsData[index].subject, subjectsData[index].subject)
 const newTeacher = prompt("Enter new teacher name for " + subjectsData[index].teacher, subjectsData[index].teacher)
 if (newSubject !== null && newTeacher !== null) {
  subjectsData[index].subject = newSubject.trim()
  subjectsData[index].teacher = newTeacher.trim()
  renderSubjects()
 }
}

function removeSubject(index) {
 if (confirm(`Are you sure you want to remove ${subjectsData[index].subject}?`)) {
  subjectsData.splice(index, 1)
  renderSubjects()
 }
}

function addSubject() {
 const newSubject = prompt("Enter the new subject name:")
 const newTeacher = prompt("Enter the teacher name:")
 if (newSubject && newTeacher) {
  subjectsData.push({ subject: newSubject.trim(), teacher: newTeacher.trim() })
  renderSubjects()
 }
}

function saveChanges() {
 localStorage.setItem("subjectsData", JSON.stringify(subjectsData))
 alert("Changes saved successfully.")
 document.getElementById("subjectsList").innerHTML = "<p>Click 'Manage Subjects' to start.</p>"
 isTableVisible = false
}

document.getElementById("manageSubjectsBtn").addEventListener("click", renderSubjects)
document.getElementById("subjectsList").innerHTML = "<p>Click 'Manage Subjects' to start.</p>"
/////////////////////////////////////////////////////////////////////////////////////////////
let classesData = JSON.parse(localStorage.getItem("classesData")) || [
 { className: "Class 1A", schedule: "Monday, Wednesday, Friday - 8:00 AM to 10:00 AM" },
 { className: "Class 2B", schedule: "Tuesday, Thursday - 10:30 AM to 12:30 PM" },
 { className: "Class 3C", schedule: "Monday, Wednesday - 1:00 PM to 3:00 PM" },
 { className: "Class 4D", schedule: "Monday, Friday - 9:00 AM to 11:00 AM" },
 { className: "Class 5E", schedule: "Tuesday, Thursday - 2:00 PM to 4:00 PM" },
 { className: "Class 6F", schedule: "Wednesday, Saturday - 10:00 AM to 12:00 PM" },
 { className: "Class 7G", schedule: "Monday, Wednesday - 3:30 PM to 5:30 PM" },
 { className: "Class 8H", schedule: "Tuesday, Friday - 11:00 AM to 1:00 PM" },
 { className: "Class 9I", schedule: "Monday, Thursday - 4:00 PM to 6:00 PM" },
 { className: "Class 10J", schedule: "Wednesday, Saturday - 8:30 AM to 10:30 AM" },
]

let isClassesVisible = false

// Function to render classes
function renderClasses() {
 const classesList = document.getElementById("classesList")

 if (isClassesVisible) {
  classesList.innerHTML = "<p class='text-muted'>Click 'Manage Classes' to start.</p>"
  isClassesVisible = false
  return
 }

 if (classesData.length === 0) {
  classesList.innerHTML = "<p class='text-muted'>No classes available. Click 'Add Class' to start.</p>"
  isClassesVisible = true
  return
 }

 classesList.innerHTML = `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Class Name</th>
                    <th>Schedule</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${classesData
                 .map(
                  (item, index) => `
                    <tr>
                        <td>${item.className}</td>
                        <td>${item.schedule}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editClass(${index})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteClass(${index})">Delete</button>
                        </td>
                    </tr>
                `
                 )
                 .join("")}
            </tbody>
        </table>
        <button class="btn btn-success mt-3" onclick="addClass()">Add Class</button>
        <button class="btn btn-primary mt-3" onclick="saveClasses()">Save Changes</button>
    `

 isClassesVisible = true
}

// Function to edit a class
function editClass(index) {
 const currentClass = classesData[index]
 const newClassName = prompt(`Enter a new name for ${currentClass.className}:`, currentClass.className)
 const newSchedule = prompt(`Enter a new schedule for ${currentClass.className}:`, currentClass.schedule)

 if (newClassName !== null && newSchedule !== null && newClassName.trim() !== "" && newSchedule.trim() !== "") {
  classesData[index].className = newClassName.trim()
  classesData[index].schedule = newSchedule.trim()
  renderClasses()
 }
}

// Function to delete a class
function deleteClass(index) {
 if (confirm(`Are you sure you want to delete ${classesData[index].className}?`)) {
  classesData.splice(index, 1)
  renderClasses()
 }
}

// Function to add a new class
function addClass() {
 const newClassName = prompt("Enter the new class name:")
 const newSchedule = prompt("Enter the schedule:")

 if (newClassName && newSchedule) {
  classesData.push({ className: newClassName.trim(), schedule: newSchedule.trim() })
  renderClasses()
 } else {
  alert("Both class name and schedule are required.")
 }
}

// Function to save classes to localStorage
function saveClasses() {
 localStorage.setItem("classesData", JSON.stringify(classesData))
 alert("Classes saved successfully.")
 document.getElementById("classesList").innerHTML = "<p class='text-muted'>Click 'Manage Classes' to start.</p>"
 isClassesVisible = false
}

// Event listener for manage classes button
document.getElementById("manageClassesBtn").addEventListener("click", renderClasses)

// Initial placeholder message
document.getElementById("classesList").innerHTML = "<p class='text-muted'>Click 'Manage Classes' to start.</p>"
/////////////////////////////////////////////////////////////////////////////////
// Teacher messages array
const messages = [
 { title: "Parent-Teacher Meeting", description: "Remember to attend the Parent-Teacher meeting on November 30." },
 { title: "Grading Deadline", description: "Submit all grades by December 5." },
 { title: "Classroom Supplies", description: "Check the classroom supplies list and update as needed." },
 { title: "Winter Break Plan", description: "Make sure to share the winter break schedule with students." },
 { title: "Welcome to the teaching staff!", description: "We are excited to have you on the team!" },
 { title: "Parent-Teacher Meeting", description: "Remember to attend the Parent-Teacher meeting on November 30." },
 { title: "Grading Deadline", description: "Submit all grades by December 5." },
 { title: "Classroom Supplies", description: "Check the classroom supplies list and update as needed." },
 { title: "Winter Break Plan", description: "Make sure to share the winter break schedule with students." },
 { title: "Welcome to the teaching staff!", description: "We are excited to have you on the team!" },
]

const messageList = document.getElementById("messageList")

messages.forEach(function (message) {
 const listItem = document.createElement("li")

 listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "p-3", "gap-3", "rounded", "border", "bg-light")

 const title = document.createElement("span")
 title.classList.add("message-title", "text-truncate", "fw-bold")
 title.style.maxWidth = "70%"
 title.textContent = message.title

 const buttonContainer = document.createElement("div")
 buttonContainer.classList.add("d-flex", "gap-3")

 const showDetailsButton = document.createElement("button")
 showDetailsButton.classList.add("btn", "btn-primary", "btn-sm", "rounded-pill")
 showDetailsButton.textContent = "Detailes"
 showDetailsButton.addEventListener("click", function () {
  showMessageDetails(message)
 })

 const deleteButton = document.createElement("button")
 deleteButton.classList.add("btn", "btn-danger", "btn-sm", "rounded-pill")
 deleteButton.textContent = "Delete"
 deleteButton.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this message?")) {
   listItem.remove()
  }
 })

 buttonContainer.appendChild(showDetailsButton)
 buttonContainer.appendChild(deleteButton)

 listItem.appendChild(title)
 listItem.appendChild(buttonContainer)

 messageList.appendChild(listItem)
})
function showMessageDetails(message) {
 const detailsContainer = document.getElementById("messageDetails")
 detailsContainer.innerHTML = `
    <h5>Details for: ${message.title}</h5>
    <p>${message.description}</p>
    <button class="btn btn-secondary" onclick="closeMessageDetails()">Close</button>
  `
 detailsContainer.style.display = "block"
}
function closeMessageDetails() {
 const detailsContainer = document.getElementById("messageDetails")
 detailsContainer.style.display = "none"
}

document.getElementById("sendMessageBtn").addEventListener("click", function () {
 const sendFormHtml = `
        <div id="sendForm">
            <h5>Send Message to Teachers</h5>
            <form id="sendMessageForm">
                <div class="mb-3">
                    <label for="from" class="form-label">From:</label>
                    <input type="text" id="from" class="form-control" placeholder="Your name" required>
                </div>
                <div class="mb-3">
                    <label for="to" class="form-label">To:</label>
                    <input type="text" id="to" class="form-control" placeholder="Recipient name" required>
                </div>
                <div class="mb-3">
                    <label for="subject" class="form-label">Subject:</label>
                    <input type="text" id="subject" class="form-control" placeholder="Subject" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message:</label>
                    <textarea id="message" class="form-control" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" class="btn btn-success">Send</button>
            </form>
        </div>
    `

 const sendMessageFormContainer = document.getElementById("sendMessageFormContainer")
 sendMessageFormContainer.innerHTML = sendFormHtml
 sendMessageFormContainer.style.display = "block"

 document.getElementById("sendMessageForm").addEventListener("submit", function (e) {
  e.preventDefault()
  alert(`Message Sent!`)
  sendMessageFormContainer.innerHTML = ""
  sendMessageFormContainer.style.display = "none"
 })
})

///////////////////////////////////////////////////////////////////////////////////////
function previewProfilePic(event) {
 const file = event.target.files[0]
 const reader = new FileReader()
 reader.onload = function () {
  document.getElementById("profilePicPreview").src = reader.result
 }
 reader.readAsDataURL(file)
}

window.onload = function () {
 const username = localStorage.getItem("username")
 const email = localStorage.getItem("email")
 const profilePic = localStorage.getItem("profilePic")

 if (username) {
  document.getElementById("displayUsername").textContent = username
  document.querySelector(".username").textContent = username
 }

 if (email) {
  document.getElementById("displayEmail").textContent = email
 }

 if (profilePic) {
  document.getElementById("profilePicPreview").src = profilePic
  document.querySelector(".profile-img").src = profilePic
 }
}

document.getElementById("editProfileBtn").addEventListener("click", function () {
 const username = document.getElementById("displayUsername").textContent
 const email = document.getElementById("displayEmail").textContent

 document.getElementById("editUsername").value = username
 document.getElementById("editEmail").value = email
 document.getElementById("editProfileModal").style.display = "block"
})

document.getElementById("editProfileForm").addEventListener("submit", function (event) {
 event.preventDefault()

 const newUsername = document.getElementById("editUsername").value
 const newEmail = document.getElementById("editEmail").value
 const newProfilePic = document.getElementById("profilePicPreview").src

 localStorage.setItem("username", newUsername)
 localStorage.setItem("email", newEmail)
 localStorage.setItem("profilePic", newProfilePic)

 document.getElementById("displayUsername").textContent = newUsername
 document.getElementById("displayEmail").textContent = newEmail
 document.querySelector(".username").textContent = newUsername
 document.querySelector(".profile-img").src = newProfilePic

 document.getElementById("editProfileModal").style.display = "none"
})
///////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
 var calendarEl = document.getElementById("calendar-container")

 var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
  headerToolbar: {
   left: "prev,next today",
   center: "title",
   right: "dayGridMonth,dayGridWeek,dayGridDay",
  },
  events: [
   { title: "Faculty Meeting", start: "2024-11-24T14:00:00", description: "Monthly faculty meeting to discuss upcoming school events" },
   { title: "Department Meeting - Math", start: "2024-11-25T10:00:00", description: "Math department meeting to review the curriculum" },
   { title: "Parent-Teacher Conference", start: "2024-11-27T09:00:00", description: "One-on-one meetings with parents to discuss student progress" },
   { title: "Professional Development", start: "2024-12-03T09:00:00", description: "Workshop on new teaching strategies" },
   { title: "School-wide Staff Meeting", start: "2024-12-07T15:00:00", description: "Meeting to discuss school-wide initiatives and updates" },
   { title: "Grading Day", start: "2024-12-12", description: "Day allocated for grading students' exams and assignments" },
   { title: "Holiday Break (Teacher's)", start: "2024-12-20", description: "Winter break for teachers" },
   { title: "New Teacher Orientation", start: "2025-01-05T08:30:00", description: "Orientation for new teachers joining the school" },
   { title: "Staff Retreat", start: "2025-01-12", description: "Annual staff retreat for team building and professional development" },
   { title: "Teacher Evaluation", start: "2025-02-10", description: "Observation and evaluation of teaching practices" },
   { title: "Spring Break (Teacher's)", start: "2025-03-15", description: "Spring break for teachers" },
  ],
  contentHeight: "auto",
  eventContent: function (arg) {
   return {
    html: `
                    <div class="event-card">
                        <p class="event-title">${arg.event.title}</p>
                    </div>
                `,
   }
  },
  eventClick: function (info) {
   var modal = document.createElement("div")
   modal.classList.add("event-modal")
   modal.innerHTML = `
                <div class="modal-content">
                    <h4>${info.event.title}</h4>
                    <p>${info.event.extendedProps.description}</p>
                    <button class="close-btn">Close</button>
                </div>
            `
   document.body.appendChild(modal)

   modal.querySelector(".close-btn").addEventListener("click", function () {
    modal.remove()
   })
  },
 })

 calendar.render()
})

////////////////////////////////////////////////////
function confirmLogout() {
 const isConfirmed = confirm("Are you sure you want to logout?")
 if (isConfirmed) {
  sessionStorage.clear()
  localStorage.clear()
  alert("You have logged out!")
  window.location.href = "login.html"
 }
}
document.getElementById("logoutButton").addEventListener("click", confirmLogout)
/////////////////////////////////////////////
document.getElementById("paymentForm").addEventListener("submit", function (event) {
 event.preventDefault()

 if (document.getElementById("paymentForm").checkValidity()) {
  setTimeout(function () {
   document.getElementById("paymentSuccess").style.display = "block"
   document.getElementById("paymentForm").reset()
  }, 1000)
 } else {
  alert("Please fill in all fields correctly.")
 }
})
