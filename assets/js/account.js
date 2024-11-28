///////////////////////////////////////////////////
function handleResetLink() {
 const email = document.getElementById("resetEmail").value
 if (email.trim() === "") {
  alert("Please enter an email address.")
 } else {
  alert("We will contact you soon.")
 }
}
document.querySelector("form").addEventListener("submit", function (e) {
 e.preventDefault()
 const role = document.getElementById("role").value

 if (!role) {
  alert("Please select a role.")
  return
 }

 if (role === "student") {
  window.location.href = "stu-dashbord.html"
 } else if (role === "teacher") {
  window.location.href = "teacher-dashbord.html"
 }
})
