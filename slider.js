let slideIndex = 0;
// let intervalId = null;


const slides = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.dots');


// Calling the showSlide function after loading of the DOM CONTENTS
// const initializeSlider = () => {
    //     showSlide(slideIndex);
    //     // intervalId = setInterval(nextSlide, 1000)
    // };
    
// document.addEventListener('DOMContentLoaded', initializeSlider);



// The Main Slider Function
const showSlide = (index) => {
    
    // Logic for removing & changing Img
    slides.forEach(slide => {
        slide.classList.remove('displaySlide')
    });
    
    slides[index].classList.add('displaySlide');


    // Logic for removing & applying Bg-color on dot
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    dots[index].classList.add('active');
}


// Invoking/Calling the showSlide function
showSlide(slideIndex);


// Logic for changing Images and applying Bg-color based on the specified index number
dots.forEach((dot,index) => {
    dot.addEventListener('click', () => {

        showSlide(slideIndex = index);
    });
});








const nextSlide = () => {
    slideIndex ++;

    // If slideIndex exceeds the number of slides, set it to 0
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    showSlide(slideIndex);
}


const prevSlide = () => {
    slideIndex --;

    // If slideIndex is less than 0, set it to the index of the last slide
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlide(slideIndex);
}







// Initialize slideIndex to 0
// let slideIndex = 0;

// // Select all slides and dots
// const slides = document.querySelectorAll('.mySlides');
// const dots = document.querySelectorAll('.dots');

// // Function to initialize the slider
// const initializeSlider = () => {
//     // Show the first slide
//     showSlide(slideIndex);
//     // Set up event listeners for the dots
//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             // Call showSlide function with the index of the clicked dot
//             showSlide(index);
//         });
//     });
// }

// // Function to show a specific slide
// const showSlide = (index) => {
//     // Hide all slides
//     slides.forEach(slide => {
//         slide.classList.remove('displaySlide');
//     });
//     // Remove active class from all dots
//     dots.forEach(dot => {
//         dot.classList.remove('active');
//     });
//     // Show the slide at the specified index
//     slides[index].classList.add('displaySlide');
//     // Set the background color of the clicked dot to #717171
//     dots[index].classList.add('active');
// }

// // Function to show the next slide
// const nextSlide = () => {
//     slideIndex++;
//     // If slideIndex exceeds the number of slides, set it to 0
//     if (slideIndex >= slides.length) {
//         slideIndex = 0;
//     }
//     showSlide(slideIndex);
// }

// // Function to show the previous slide
// const prevSlide = () => {
//     slideIndex--;
//     // If slideIndex is less than 0, set it to the index of the last slide
//     if (slideIndex < 0) {
//         slideIndex = slides.length - 1;
//     }
//     showSlide(slideIndex);
// }