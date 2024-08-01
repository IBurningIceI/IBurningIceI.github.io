/*
Name: William Dawson
Filename: main.js
Date: July/31st/2024
Assignment 4 - Part 2
 */
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

const imageAlts = ["An image depicting someones eye.", "An image depicting a rock.", "An image depicting a set of flowers.", "An image depicting a rock.",
"An image depiction ancient egypt.", "An image depiction a butterfly."]

/* Declaring the alternative text for each image file */

/* Looping through images */
for(const image of imageFilenames){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', imageAlts[image])
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', newImage.getAttribute('src'))
        displayedImage.setAttribute('alt', newImage.getAttribute('alt'))
    })
    thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
