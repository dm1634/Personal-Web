const imageElement = document.querySelector('#random-image');
const updateButton = document.querySelector('#update-image-button');

async function fetchRandomCatImage() {
    try {
        // Fetch data from the API
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        // Parse the JSON data
        const data = await response.json();
        // Extract the image URL
        const imageUrl = data[0].url;
        // Update the "src" attribute of the image element
        imageElement.src = imageUrl;
    } catch (error) {
        console.error('Error fetching the image:', error);
    }
 }
 
updateButton.addEventListener('click', fetchRandomCatImage);