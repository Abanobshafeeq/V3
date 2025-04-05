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
function toggleDropdown2015() {
    const content = document.getElementById("dropdownContent2015");
    const arrow = document.getElementById("arrow");
    content.classList.toggle("show");
    arrow.classList.toggle("rotate");
}
async function fetchImages2015() {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyC3YSj9dHhCerigBSbfSZtNB7IJMvCJ1Wn_sMTsFAeGpelLYQr-Q5I6l-dvjS2XmwuaA/exec"; // ضع رابط Web App هنا
    try {
        const response = await fetch(scriptUrl);
        const imageLinks = await response.json();

        const gallery = document.getElementById("imageGallery2015");
        imageLinks.forEach(link => {
            const img = document.createElement("img");
            img.src = link;
            gallery.appendChild(img);
        });
    } catch (error) {
        console.error("حدث خطأ أثناء تحميل الصور:", error);
    }
}

fetchImages2015();
//////////////////////////////////////////////////////////////////////////

function toggleDropdownw2015() {
    const content = document.getElementById("dropdownContentw2015");
    const arrow = document.getElementById("arrow");
    content.classList.toggle("show");
    arrow.classList.toggle("rotate");
}
async function fetchImagesw2015() {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbx9XaF0-dAbjtmjZ7FKLGn8w-c5rVj7NjwCtYXv6ioXPnjybxfTJx3aF87Malkb_HK08w/exec"; // ضع رابط Web App هنا
    try {
        const response = await fetch(scriptUrl);
        const imageLinks = await response.json();

        const gallery = document.getElementById("imageGalleryw2015");
        imageLinks.forEach(link => {
            const img = document.createElement("img");
            img.src = link;
            gallery.appendChild(img);
        });
    } catch (error) {
        console.error("حدث خطأ أثناء تحميل الصور:", error);
    }
}

fetchImagesw2015();