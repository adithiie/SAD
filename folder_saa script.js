document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    // Fetch the APOD RSS feed
    const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

    // Fetch the data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check the structure of the data
            displayAPODImages(data);
        })
        .catch(error => console.log("Error fetching data: ", error));

    // Function to display images in the gallery
    function displayAPODImages(data) {
        data.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("gallery-item");

            const img = document.createElement("img");
            img.src = item.url;
            img.alt = item.title;

            const title = document.createElement("h3");
            title.textContent = item.title;

            div.appendChild(img);
            div.appendChild(title);

            gallery.appendChild(div);
        });
    }
});
