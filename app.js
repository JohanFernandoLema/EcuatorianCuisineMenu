//get only unique categories
////iterate over categories (return buttons)
//make sure to select button when they are available

const menu = 
[
    {
        id: 1,
        title: "encebollado",
        category: "lunch",
        price:14.99,
        img: "./Assets/images/encebollado.png",
        desc: "soup with shredded fish, sliced onions, yuca, pop corn and plantain chips "
    },
    {
        id: 2,
        title: "coconut milkshake",
        category: "shakes",
        price: 6.99,
        img: "./Assets/images/coconut.jpg",
        desc: "coconut blended with milk and chocolate, additional one scoope of our homemade ice-cream"
    },
    {
        id: 3,
        title: "bolon and coffe",
        category: "breakfast",
        price: 9.99,
        img: "./Assets/images/bolon.jpg",
        desc: "cooked and smashed plantain with pork, cheese or chicharron inside of it. It will be molded like a sphere and then it will be deep-fried.Additional to it a cup of coffe"
    },
    {
        id: 4,
        title:"tigrillo",
        category: "breakfast",
        price: 12.99,
        img: "./Assets/images/tigrillo.jpg",
        desc: "Smashed plantain with scrambled eggs, pork and cheese."
    },
    {
        id: 5,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./Assets/images/oreo.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "banana split",
        category: "dessert",
        price: 8.99,
        img: "./Assets/images/bananasplit.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./Assets/images/bacon.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "fanesca",
        category: "lunch",
        price: 12.99,
        img: "./Assets/images/fanesca.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,     
    },
    {
        id: 9,
        title: "cookie protein shake",
        category: "shakes",
        price: 16.99,
        img: "./Assets/images/protein.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "lassagna",
        category: "dinner",
        price: 16.99,
        img: "./Assets/images/lasagna.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]

const sectionCenter = document.querySelector('.section-center');

const container = document.querySelector('.btn-container');

//load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuBtns();
});

function displayMenuItems(menuItems){
        // Map function in order to help us to modified our array
        let displayMenu = menuItems.map(function(item){
            return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">CAD${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>`
        });
        // We join our array after each other
        displayMenu = displayMenu.join("")
        //We retrieve our content inside our html parent element.
        sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values        
    },['all']);
    
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("")
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

    //filter items
    filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        //currentTarget in order to triger the button that is being clicked

        //dataset => the way dataset works is through a html property ("data-id") in this case. it is important that "data" has the "-" in front of it "id is just the name, it can be whatever we want to assign"
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
            return menuItem
            }
        });
        // console.log(menuCategory);
        if(category === 'all'){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    });
});
}