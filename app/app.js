
const btns = document.querySelectorAll(".click");


btns.forEach((el) => el.addEventListener("click", function(){

    const faqParagraph = this.nextElementSibling;

    // const arrow = document.querySelector(".icon-arrow");
    const arrow = this.childNodes[3].childNodes[0]
    
    if (faqParagraph.style.maxHeight){
        faqParagraph.style.maxHeight = null;
        arrow.src = "././images/icon-arrow-blue.svg";
        arrow.style.transform = 'rotate(0deg)';
    } else {
        arrow.src = "././images/icon-arrow-red.svg";
        arrow.style.transform = 'rotate(180deg)';
        faqParagraph.style.maxHeight = faqParagraph.scrollHeight + "px";
    }
}));
