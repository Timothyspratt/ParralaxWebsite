// // work on notes
const menu = document.getElementById("menu");

// Array.from(document.getElementsByClassName("menu-item"))
// .forEach((item, index) => {
//     item.onmouseover = () => {
//         menu.dataset.activeIndex = index;
//     }
// });

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.style.setProperty("--active-index", index)
        }
    });

    //still working on more notes. 