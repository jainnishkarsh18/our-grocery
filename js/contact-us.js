function validateform() {

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let name = document.forms["contact"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (name.length <= 3) {
        alert("name should be greater than 3 letter");
        return false;
    }
    let number = document.forms["contact"]["number"].value;
    if (number.length > 10 || number.length < 10) {
        alert("invalid number");
        return false;
    }
    let email = document.forms["contact"]["email-id"].value;
    if (email.match(mailformat)) {
        return true;
    } else {
        alert("Invalid email");
        return false;
    }

}