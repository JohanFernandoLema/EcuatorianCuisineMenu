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
        title: "bacon overflow",
        category: "shake",
        price: 8.99,
        img: "./Assets/images/fanesca.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./Assets/images/fanesca.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "fanesca",
        category: "lunch",
        price: 12.99,
        img: "./Assets/images/fanesca.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,     
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./Assets/images/fanesca.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
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