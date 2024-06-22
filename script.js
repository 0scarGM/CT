window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("scrolled")
        document.getElementById("nav").classList.add("nav-scroll")
        document.getElementById("img").classList.add("imgL")
        document.getElementById("header").classList.add("header")
    } else {
        document.getElementById("navbar").classList.remove("scrolled")
        document.getElementById("nav").classList.remove("nav-scroll")
        document.getElementById("img").classList.remove("imgL")
        document.getElementById("header").classList.remove("header")
    }
}