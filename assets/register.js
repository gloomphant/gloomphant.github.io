//nomor 8
class RegisterData{
	constructor(data) {
        this.username = data.username;
        this.password = data.password;
        this.day = data.day;
        this.month = data.month;
        this.year = data.year;
        this.hobby = data.hobby;
    }

    initDate() {
        return `${this.day}-${this.month}-${this.year}`;
    }

    isValid() {
        return this.username.length >= 8
                && this.password.length >= 8
                && this.hobby.length > 0;
    }

    showAll() {
        return 
            `Username: ${this.username}
            Password: ${this.password}
            Date of Birth: ${this.initDate()}
            Hobby: ${this.hobby}`;
    }
}