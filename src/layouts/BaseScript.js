const mainNav = document.querySelector(".main-nav")
const scrollToTop = document.querySelector(".scroll-to-top")

const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    if(entries[0].isIntersecting){
        scrollToTop.classList.remove("active")
        return
    }
    scrollToTop.classList.add("active")
})

observer.observe(mainNav)

scrollToTop.addEventListener("click", () => {
    window.scrollTo(0, 0)
})