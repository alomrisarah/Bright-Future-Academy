document.addEventListener("DOMContentLoaded", function () {
 const joinEventForm = document.getElementById("joinEventForm")
 const joinEventModal = document.getElementById("joinEventModal")

 if (!joinEventForm || !joinEventModal) {
  console.error("Form or modal element not found.")
  return
 }

 joinEventForm.addEventListener("submit", function (event) {
  event.preventDefault()
  const eventTitleElement = joinEventModal.querySelector(".modal-title")
  if (!eventTitleElement) {
   console.error("Modal title element not found.")
   return
  }

  const eventTitle = eventTitleElement.textContent.replace("Join ", "")
  const eventDate = "December 30, 2024"
  alert(`You have successfully joined the event: ${eventTitle} on ${eventDate}. we well `)

  joinEventForm.reset()

  const modalInstance = bootstrap.Modal.getInstance(joinEventModal)
  if (modalInstance) {
   modalInstance.hide()
  }
 })
})
///////////////////////////////////////////////////////////
window.addEventListener("scroll", function () {
 var scrollToTopBtn = document.getElementById("scrollToTopBtn")
 var scrollPosition = window.scrollY

 if (scrollPosition > 100) {
  scrollToTopBtn.classList.add("show")
 } else {
  scrollToTopBtn.classList.remove("show")
 }

 if (scrollPosition === 0) {
  scrollToTopBtn.textContent = "Scroll to Bottom"
 } else if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight) {
  scrollToTopBtn.textContent = "Scroll to Top"
 }
})

document.getElementById("scrollToTopBtn").addEventListener("click", function () {
 var scrollToTopBtn = document.getElementById("scrollToTopBtn")

 if (scrollToTopBtn.textContent === "Scroll to Bottom") {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
 } else if (scrollToTopBtn.textContent === "Scroll to Top") {
  window.scrollTo({ top: 0, behavior: "smooth" })
 }
})

