const categories = document.querySelectorAll(".item");
const titles = document.querySelectorAll("h2");
let counter = 0;
let itemTitle;

// counts categories
function countCategories(categories){
    categories.forEach((category) =>
    counter++);
   return `Number of categories: ${counter}`;
};
console.log(countCategories(categories));


// shows titles but doesn't work yet
function showTitles(titles){
    titles.forEach((title) => {
        itemTitle = title.textContent;
    return `The category is ${itemTitle}`
    });
    
}
console.log(showTitles(titles));




