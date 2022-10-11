const tab = [
    {
        img: "./../images/illustration-features-tab-1.svg",
        h2: "Bookmark in one click",
        p: "Organize your bookmarks however you like. Our simple drag-and-dropinterface gives you complete control over how you manage your favourite sites.",
    },


    {
        img: "./../images/illustration-features-tab-2.svg",
        h2: "Intelligent search",
        p: "Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks."    
    },

    {
        img: "./../images/illustration-features-tab-3.svg",
        h2: "Share your bookmarks",
        p: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    }
]


const tabs = document.querySelectorAll('[data-tab]');
const tabClick = document.querySelectorAll('[data-click]');
const btnTab = document.querySelectorAll('.btn--tab');
const tabHeader = document.querySelector('[data-tab-header]');
const tabPara = document.querySelector('[data-tab-para]');
const tabImage = document.querySelector('[data-image]');
const btnTabOne = document.querySelector('.btn--tab-1');
const btnTabTwo = document.querySelector('.btn--tab-2');
const btnTabThree = document.querySelector('.btn--tab-3');

const btnTabSimple = document.querySelector('.btn--tab-span-1');
const btnTabSpeedy = document.querySelector('.btn--tab-span-2');
const btnTabEasy = document.querySelector('.btn--tab-span-3');








btnTabOne.addEventListener("click", function(e){
    e.preventDefault();
    tabHeader.innerText = tab[0].h2;
    tabPara.innerText = tab[0].p;
    tabImage.src = tab[0].img

    btnTabEasy.style.opacity = '0';
    btnTabSimple.style.opacity = '1';
    btnTabSpeedy.style.opacity = '0';

    btnTabThree.style.color = '#9194a1';
    btnTabTwo.style.color = '#9194a1';
    btnTabOne.style.color = '#fa5757';
})


btnTabTwo.addEventListener("click", function(e){
    e.preventDefault();
    tabHeader.innerText = tab[1].h2;
    tabPara.innerText = tab[1].p;
    tabImage.src = tab[1].img

    btnTabEasy.style.opacity = '0';
    btnTabSimple.style.opacity = '0';
    btnTabSpeedy.style.opacity = '1';


    btnTabThree.style.color = '#9194a1';
    btnTabOne.style.color = '#9194a1';
    btnTabTwo.style.color = '#fa5757';



})





tabClick.forEach((el) => el.addEventListener("click", function(e){
    
}));



btnTabThree.addEventListener("click", function(e){
    e.preventDefault();
    tabHeader.innerText = tab[2].h2;
    tabPara.innerText = tab[2].p;
    tabImage.src = tab[2].img
    
    btnTabEasy.style.opacity = '1';
    btnTabSimple.style.opacity = '0';
    btnTabSpeedy.style.opacity = '0';


    btnTabTwo.style.color = '#9194a1';
    btnTabOne.style.color = '#9194a1';
    btnTabThree.style.color = '#fa5757';

})



