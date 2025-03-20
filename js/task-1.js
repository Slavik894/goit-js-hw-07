const categories = document.querySelectorAll(".item");
const titles = document.querySelectorAll("h2");
let counter = 0;


// counts categories
function countCategories(categories){
    categories.forEach(category =>
    counter++);
   return `Number of categories: ${counter}`;
};
console.log(countCategories(categories));


// shows titles 
function showTitles(titlesList){
    const result = titlesList.forEach(title => { console.log(`The category is ${title.textContent}`);
    const parent = title.parentElement;
    const ul = parent.querySelector('ul');
    const itemLength = ul.querySelectorAll('li').length
    console.log(`The amount is: ${itemLength}`);      
});  
return result;
};
showTitles(titles);




