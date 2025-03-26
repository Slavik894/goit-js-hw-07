const categories = document.querySelectorAll("#categories .item");



function displayInfo(categoriesList){
    console.log(`Number of categories: ${categoriesList.length}`);
    categoriesList.forEach(category =>{
            
        const title = category.querySelector(".item-title");
        if(title){
            console.log(`Category: ${title.textContent}`);
        }
        const categoryItems = category.querySelector("ul");
        const countCategoryItems = categoryItems.querySelectorAll("li").length;

        
        console.log(`Elements: ${countCategoryItems}`);
    });

};

displayInfo(categories); 


const categoriesUl = document.querySelector("#categories");
categoriesUl.style.display = "flex";
categoriesUl.style.flexDirection = "column"
categoriesUl.style.gap = "24px";



