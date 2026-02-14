
const links = document.querySelectorAll("a[href='#']");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Navigating to:", this.textContent.trim());
    });
});

document.querySelector(".nav-search").addEventListener("submit", function(e){
    e.preventDefault();
    const value = document.querySelector(".search-input").value.trim();

    if(value !== ""){
        console.log("Searching for:", value);
    }
});

document.querySelector(".foot-panel1").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
