document.addEventListener("DOMContentLoaded", () => {
 const searchButton = document.getElementById("searchButton")
 const searchInput = document.getElementById("searchGrades")
 const tableRows = document.querySelectorAll("#gradesTable tr")

 searchButton.addEventListener("click", () => {
  const searchQuery = searchInput.value.toLowerCase()

  tableRows.forEach((row) => {
   const subjectCell = row.querySelector("td:nth-child(1)")
   const subjectText = subjectCell.textContent.toLowerCase()

   if (subjectText.includes(searchQuery)) {
    row.style.display = ""
   } else {
    row.style.display = "none"
   }
  })
 })

 searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
   searchButton.click()
  }
 })
})

//////////////////////////////////////////////////////////////////////////
function filterAssignments() {
 let input = document.getElementById("assignmentSearch")
 let filter = input.value.toLowerCase()
 let table = document.getElementById("assignmentsTable")
 let rows = table.getElementsByTagName("tr")

 for (let i = 1; i < rows.length; i++) {
  let cells = rows[i].getElementsByTagName("td")
  let subject = cells[0].innerText.toLowerCase()
  let title = cells[1].innerText.toLowerCase()

  if (subject.includes(filter) || title.includes(filter)) {
   rows[i].style.display = ""
  } else {
   rows[i].style.display = "none"
  }
 }
}
//////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
 const sections = document.querySelectorAll(".section")

 sections.forEach((section) => {
  section.style.display = "none"
 })

 let sectionToDisplay = window.location.hash ? window.location.hash.substring(1) : "grades"

 const targetSection = document.getElementById(sectionToDisplay)
 if (targetSection) {
  targetSection.style.display = "block"
 }

 const navLinks = document.querySelectorAll(".dropdown-item")
 navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
   e.preventDefault()
   const targetId = e.target.getAttribute("href").substring(1)

   sections.forEach((section) => {
    section.style.display = "none"
   })

   const sectionToShow = document.getElementById(targetId)
   if (sectionToShow) {
    sectionToShow.style.display = "block"
   }

   window.location.hash = targetId
  })
 })

 const dropdownItems = document.querySelectorAll(".dropdown-item")
 dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
   e.preventDefault()

   const targetId = e.target.getAttribute("href").substring(1)

   sections.forEach((section) => {
    section.style.display = "none"
   })

   const sectionToShow = document.getElementById(targetId)
   if (sectionToShow) {
    sectionToShow.style.display = "block"
   }

   window.location.hash = targetId
  })
 })
})
//////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////
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
   { title: "Math Exam", start: "2024-11-24", description: "Final Exam for Mathematics Course" },
   { title: "English Assignment Due", start: "2024-11-30", description: "Essay on Climate Change due" },
   { title: "Science Experiment Report", start: "2024-12-02", description: "Report on the science experiment due" },
   { title: "History Project Deadline", start: "2024-12-05", description: "History project due for submission" },
   { title: "Holiday Break Starts", start: "2024-12-10", description: "Start of Winter Break" },
   { title: "School Reopens", start: "2025-01-10", description: "First day back after the winter holidays" },
   { title: "Physics Lab Test", start: "2025-01-15", description: "Practical lab test on Newton's Laws" },
   { title: "Art Project Due", start: "2025-01-20", description: "Final submission of art project" },
   { title: "Group Discussion - Literature", start: "2025-02-01", description: "Literature class group discussion on 'The Great Gatsby'" },
   { title: "Chemistry Midterm", start: "2025-02-10", description: "Midterm Exam for Chemistry" },
   { title: "Spring Break Starts", start: "2025-03-15", description: "Enjoy your Spring Break!" },
  ],

  contentHeight: "auto",
  eventContent: function (arg) {
   return {
    html: `<b>${arg.event.title}</b><br><span>${arg.event.extendedProps.description}</span>`,
   }
  },
  eventContent: function (arg) {
   return {
    html: `<div class="event-card">
                <p class="event-title">${arg.event.title}</p>
                </div>`,
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

   // Add styles to modal
   modal.style.padding = "20px"
   modal.style.background = "white"
   modal.style.borderRadius = "8px"
   modal.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"
   modal.style.position = "fixed"
   modal.style.top = "50%"
   modal.style.left = "50%"
   modal.style.transform = "translate(-50%, -50%)"
   modal.style.zIndex = "1000"

   document.body.appendChild(modal)

   modal.querySelector(".close-btn").addEventListener("click", function () {
    modal.remove()
   })
  },
 })

 calendar.render()
})

///////////////////////////////////////////////////////////////////////

const messages = [
 { title: "Math Exam Reminder", description: "Don't forget the Math exam on November 24!" },
 { title: "History Project Deadline", description: "Submit your history project by December 5." },
 { title: "Biology Lab Report Due", description: "Biology lab report due on December 7." },
 { title: "Winter Break Starts", description: "Winter break begins December 20!" },
 { title: "Welcome to our school family!", description: "We hope you have a wonderful experience." },
]

const messageList = document.getElementById("messageList")

// Populate message list
messages.forEach((message) => {
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
 showDetailsButton.textContent = "Details"
 showDetailsButton.addEventListener("click", () => showMessageDetails(message))

 const deleteButton = document.createElement("button")
 deleteButton.classList.add("btn", "btn-danger", "btn-sm", "rounded-pill")
 deleteButton.textContent = "Delete"
 deleteButton.addEventListener("click", () => {
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
 document.getElementById("messageTitle").textContent = message.title
 document.getElementById("messageDescription").textContent = message.description
 detailsContainer.style.display = "block"
}

function closeMessageDetails() {
 const detailsContainer = document.getElementById("messageDetails")
 detailsContainer.style.display = "none"
}

document.getElementById("sendMessageBtn").addEventListener("click", () => {
 const sendMessageFormContainer = document.getElementById("sendMessageFormContainer")
 sendMessageFormContainer.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        <h4>Send a New Message</h4>
                    </div>
                    <div class="card-body">
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
                </div>
            `
 sendMessageFormContainer.style.display = "block"

 document.getElementById("sendMessageForm").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Message Sent!")
  sendMessageFormContainer.innerHTML = ""
  sendMessageFormContainer.style.display = "none"
 })
})
///////////////////////
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
//////////////////////////////////////////////////////////////////////////////////
//    object
const studentData = {
 name: "John Doe",
 courses: ["Math 101", "Science 202", "History 303", "Computer Science 404", "Biology 505", "Physics 606", "Chemistry 707", "English 808"],
}

function initializeCoursesTable() {
 const tableBody = document.getElementById("coursesTableBody")
 tableBody.innerHTML = ""
 studentData.courses.forEach((course) => {
  const row = document.createElement("tr")
  row.innerHTML = `<td>${course}</td>`
  tableBody.appendChild(row)
 })
}

// add a course from the dropdown
function addCourse() {
 const courseSelect = document.getElementById("courseSelect")
 const selectedCourse = courseSelect.value

 if (!selectedCourse) {
  alert("Please select a course to add.")
  return
 }

 if (!studentData.courses.includes(selectedCourse)) {
  // Add the course to the student's courses
  studentData.courses.push(selectedCourse)

  // Add the course to the table
  const tableBody = document.getElementById("coursesTableBody")
  const newRow = document.createElement("tr")
  newRow.innerHTML = `<td>${selectedCourse}</td>`
  tableBody.appendChild(newRow)

  alert(`Course "${selectedCourse}" added successfully.`)
 } else {
  alert("This course is already added.")
 }
}

// Attach the event listener to the "Add Course" button
document.addEventListener("DOMContentLoaded", () => {
 // Initialize the courses table
 initializeCoursesTable()

 // Get the Add Course button and attach the click event listener
 const addCourseBtn = document.getElementById("addCourseBtn")
 addCourseBtn.addEventListener("click", addCourse)
})
//////////////////////////////////////////////////////////////////////
