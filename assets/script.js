//nomor 5
function checkMin8Char(event){
	const inp = event.target;
	const icon = inp.nextSibling;

	if(inp.value.length >= 8){
		icon.classList.remove("hidden");
	}
	else{
		icon.classList.add("hidden");
	}
}

//nomor 6
function initDoB(day_el,month_el,year_el){
	const months= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	
	for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.text = day;
        day_el.appendChild(option);
    }
	
	months.forEach(function(month, index){
        const option = document.createElement('option');
        option.value = index + 1; // Month numbers (1-12)
        option.text = month;
        month_el.appendChild(option);
    });

	for (let year = 2014; year <= 2024; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.text = year;
        year_el.appendChild(option);
    }
}

//nomor 9
function validation(event){
    const hobbies = document.querySelectorAll('input[name="hobby"]:checked');

    const validUsername = document.querySelector('input[name="username"]').value.length >= 8;
    const validPassword = document.querySelector('input[name="password"]').value.length >= 8;
	const validHobbies = document.querySelectorAll('input[name="hobby"]:checked').length > 0;

    // Show an error if validation fails
    if (!validUsername || !validPassword || !validHobbies) {
        alert('Invalid inputs');
        return false;
    }
	else return true;
}

//nomor 11
function submit(event){
    if (validation()) {
        document.getElementById('confirmation_container').classList.remove("hidden");

        const username = document.querySelector('input[name="username"]').value;
        const day = document.querySelector('select[name="day"]').value;
        const month = document.querySelector('select[name="month"]').value;
        const year = document.querySelector('select[name="year"]').value;
        const dob = `${day}-${month}-${year}`;
        const hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked')).map(hobby => hobby.value).join(',');

        document.querySelector('input[name="usernameconf"]').value = username;
        document.querySelector('input[name="dobconf"]').value = dob;
        document.querySelector('input[name="hobbyconf"]').value = hobbies;
    }
}

(function(){
	//nomor 3: mouse hover
	document.querySelector('h1').addEventListener('mouseover', function(){
        document.querySelector('h1').style.color = 'blue';
    });
	document.querySelector('h1').addEventListener('mouseout', function(){
        document.querySelector('h1').style.color = 'blue';
    });

	//nomor6: dob
	const day_el = document.querySelector('select[name="day"]');
    const month_el = document.querySelector('select[name="month"]');
    const year_el = document.querySelector('select[name="year"]');
	initDoB(day_el, month_el, year_el);

	//event listener check input, button, submit
    document.querySelector('input[name="username"]').addEventListener('input', checkMin8Char);
    document.querySelector('input[name="password"]').addEventListener('input', checkMin8Char);
})();
	
