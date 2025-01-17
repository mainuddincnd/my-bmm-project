function openWindow(page) {
    var newWindow = window.open('', '_blank', 'width=800,height=600');

   
    if (page === 'team') {
        newWindow.document.write('<h1>Our Team</h1>');
        newWindow.document.write('<p>Welcome to the team page! Here is our team...</p>');
    } else if (page === 'history') {
        newWindow.document.write('<h1>History</h1>');
        newWindow.document.write('<p>Welcome to the history page! Here is our history...</p>');
    }
    newWindow.document.close();
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Function to hide all slides
function hideAllSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
}

// Function to show specific slide
function showSlide(index) {
    hideAllSlides();
    slides[index].style.display = 'block';
}

// Function to change slides
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initially show the first slide
showSlide(currentSlide);

// Change slides every 4 seconds
setInterval(nextSlide, 4000);



document.getElementById("notice-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const noticeText = document.getElementById("notice-input").value;
    const noticeDate = document.getElementById("notice-date").value;

    console.log("Notice Form Submitted");
    console.log("Notice Text:", noticeText);
    console.log("Notice Date:", noticeDate);

    if (noticeText && noticeDate) {
        // Create new notice element
        const newNotice = document.createElement("li");
        newNotice.innerHTML = `${noticeText} <span class="date">[${noticeDate}]</span> <span class="delete-btn">X</span>`;

        // Append to the notice list
        const noticeList = document.getElementById("notice-list");
        noticeList.appendChild(newNotice);

        console.log("Notice Added:", newNotice);

        // Clear the form fields
        document.getElementById("notice-input").value = "";
        document.getElementById("notice-date").value = "";

        // Add delete functionality to the new notice
        newNotice.querySelector(".delete-btn").addEventListener("click", function () {
            newNotice.remove();
        });
    }
});
