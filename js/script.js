let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide-image");
    let captions = document.getElementsByClassName("slide-caption");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captions[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    captions[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

showSlides();

function submitForm() {
    let form = document.forms["contact-form"];
    let userName = form["user-name"].value;
    let emailAddress = form["email-address"].value;
    let dropDown = form["drop-down"].value;
    if (userName == "") alert("Check Again");
    console.log(form);
    console.log(userName);
    console.log(emailAddress);
    console.log(dropDown);
}

document.getElementById("send-button").addEventListener('click', () => submitForm());