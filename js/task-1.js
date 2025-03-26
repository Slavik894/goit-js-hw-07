const categories = document.querySelectorAll(".item");
const titles = document.querySelectorAll("h2");
let counter = 0;


function countCategories(categories){
    categories.forEach(category =>{
        counter++

        category.style.listStyle = "none";
        category.style.background = "#f6f6fe";
        category.style.padding = "16px";
        category.style.borderRadius = "8px";
    });  
   return `Number of categories: ${counter}`;
};
console.log(countCategories(categories));


function showTitles(titlesList){
    const result = titlesList.forEach(title => { console.log(`Category: ${title.textContent}`);
    title.style.margin = "0px";
    title.style.marginBottom = "16px";
    
    const parent = title.parentElement;
    const ul = parent.querySelector('ul');
    ul.style.listStyleType = "none";
    ul.style.padding = "0px"
  
    const items = ul.querySelectorAll('li');
    items.forEach(item =>{
        item.style.border = "1px solid #808080";
        item.style.borderRadius = " 4px";
        item.style.marginBottom = "8px";
        item.style.paddingLeft = "16px";
        item.style.paddingTop = "8px";
        item.style.paddingBottom = "8px";

    });
    const itemLength = items.length;
    console.log(`Elements: ${itemLength}`);      
});  
return result;
};
showTitles(titles);

const categoriesUl = document.querySelector("#categories");
categoriesUl.style.display = "flex";
categoriesUl.style.flexDirection = "column"
categoriesUl.style.gap = "24px";



