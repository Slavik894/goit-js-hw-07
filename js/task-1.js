const categories = document.querySelectorAll("#categories .item");
let counter = 0;


function displayInfo(categoriesList){
    
    categoriesList.forEach(category =>{
            counter++;
        const title = category.querySelector(".item-title");
        if(title){
            console.log(`Category: ${title.textContent}`);
        }
        const categoryItems = category.querySelector("ul");
        const countCategoryItems = categoryItems.querySelectorAll("li").length;

        
        console.log(`Elements: ${countCategoryItems}`);
    });
     console.log(`Number of categories: ${counter}`);

};

displayInfo(categories); 


const categoriesUl = document.querySelector("#categories");
categoriesUl.style.display = "flex";
categoriesUl.style.flexDirection = "column"
categoriesUl.style.gap = "24px";



