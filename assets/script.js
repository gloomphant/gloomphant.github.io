// Function to check if username and password have at least 8 characters
function checkMin8Char(event) {
    const input = event.target;
    const checkIcon = input.nextElementSibling;

    // Show the check icon if the input has 8 or more characters
    if (input.value.length >= 8) {
        checkIcon.classList.remove("hidden");
    } else {
        checkIcon.classList.add("hidden");
    }
}

// Function to initialize the date dropdowns
function initDoB(day_el, month_el, year_el) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Fill the day dropdown (1-31)
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.text = day;
        day_el.appendChild(option);
    }

    // Fill the month dropdown with names from the months array
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1; // Month numbers (1-12)
        option.text = month;
        month_el.appendChild(option);
    });

    // Fill the year dropdown (1900-2022)
    for (let year = 1900; year <= 2022; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.text = year;
        year_el.appendChild(option);
    }
}

// Function to validate the form
function validation() {
    const username = document.querySelector('input[name="username"]');
    const password = document.querySelector('input[name="password"]');
    const hobbies = document.querySelectorAll('input[name="hobby"]:checked');

    // Validate if username and password have 8 or more characters
    const validUsername = username.value.length >= 8;
    const validPassword = password.value.length >= 8;

    // Validate if at least one hobby is selected
    const validHobbies = hobbies.length > 0;

    // Show an error if validation fails
    if (!validUsername || !validPassword || !validHobbies) {
        alert('Invalid inputs');
        return false;
    }

    return true;
}

// Function to handle the form submission
function submit(event) {
    event.preventDefault(); // Prevent actual form submission

    // If validation passes, show the confirmation data
    if (validation()) {
        const confirmationContainer = document.getElementById('confirmation_container');
        confirmationContainer.classList.remove("hidden");

        // Fill the confirmation fields with form data
        const usernameConf = document.querySelector('input[name="usernameconf"]');
        const dobConf = document.querySelector('input[name="dobconf"]');
        const hobbyConf = document.querySelector('input[name="hobbyconf"]');

        const username = document.querySelector('input[name="username"]').value;
        const day = document.querySelector('select[name="day"]').value;
        const month = document.querySelector('select[name="month"]').value;
        const year = document.querySelector('select[name="year"]').value;
        const dob = `${day}-${month}-${year}`;
        const hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked')).map(hobby => hobby.value).join(',');

        usernameConf.value = username;
        dobConf.value = dob;
        hobbyConf.value = hobbies;
    }
}

// Immediately invoked function to set up event listeners
(function() {
    const title = document.querySelector('h1');
    const checkButton = document.querySelector('input[name="check"]');
    const form = document.getElementById('register_form');
    
    // Handle title hover (change color to blue on mouseover and reset on mouseout)
    title.addEventListener('mouseover', () => {
        title.style.color = 'blue';
    });

    title.addEventListener('mouseout', () => {
        title.style.color = 'black';
    });

    // Initialize date dropdowns
    const day_el = document.querySelector('select[name="day"]');
    const month_el = document.querySelector('select[name="month"]');
    const year_el = document.querySelector('select[name="year"]');
    initDoB(day_el, month_el, year_el);

    // Check username and password length
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    usernameInput.addEventListener('input', checkMin8Char);
    passwordInput.addEventListener('input', checkMin8Char);

    // Handle Check button click
    checkButton.addEventListener('click', validation);

    // Handle form submission
    form.addEventListener('submit', submit);
})();
