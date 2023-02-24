const tabs = document.querySelectorAll("button");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", (e)=>{
        tabs.forEach((tab) => {tab.classList.remove("text-indigo-800")});
        tab.classList.add("text-indigo-800");

        let line = document.querySelector(".line");

        line.style.width = e.target.offsetWidth + 'px';
        line.style.left = e.target.offsetLeft + 'px'; 
    })
})