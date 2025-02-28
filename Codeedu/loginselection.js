// Get buttons and login containers
const studentBtn = document.getElementById('studentBtn');
const facultyBtn = document.getElementById('facultyBtn');
const studentLogin = document.getElementById('studentLogin');
const facultyLogin = document.getElementById('facultyLogin');

// Event listeners for buttons
studentBtn.addEventListener('click', () => {
    studentLogin.style.display = 'block';
    facultyLogin.style.display = 'none';
});

facultyBtn.addEventListener('click', () => {
    facultyLogin.style.display = 'block';
    studentLogin.style.display = 'none';
});
