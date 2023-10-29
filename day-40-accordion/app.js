const acc = document.querySelectorAll(".accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const desc = this.nextElementSibling;
        // console.log(desc);
        // console.log(desc.scrollHeight);
        if (desc.style.maxHeight) {
            desc.style.maxHeight = null;
        } else {
            desc.style.maxHeight = desc.scrollHeight + "px";
        }

    });
}

