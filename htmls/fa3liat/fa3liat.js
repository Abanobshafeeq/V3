function toggleDropdown() {
    const content = document.getElementById("dropdownContent");
    const arrow = document.getElementById("arrow");
    content.classList.toggle("show");
    arrow.classList.toggle("rotate");
}
async function fetchImages() {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyNIbDpPZn5DIyIvM45Q_OU4hst_GNoGevzqE4Q6ZBzNiBt0o2vLBYr7wEdxudj9hlFzA/exec"; // ضع رابط Web App هنا
    try {
        const response = await fetch(scriptUrl);
        const imageLinks = await response.json();

        const gallery = document.getElementById("imageGallery");
        imageLinks.forEach(link => {
            const img = document.createElement("img");
            img.src = link;
            gallery.appendChild(img);
        });
    } catch (error) {
        console.error("حدث خطأ أثناء تحميل الصور:", error);
    }
}

fetchImages();