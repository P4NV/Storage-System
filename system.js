
const buttonCategory1 = document.getElementById("categoryButton1");
const buttonCategory2 = document.getElementById("categoryButton2");
const buttonCategory3 = document.getElementById("categoryButton3");
const buttonCategory4 = document.getElementById("categoryButton4");

const ItemsContainer = document.getElementById("itemsContainer");
const ShoppingCart = document.querySelector("#cartBtn");

const items = {
    category1: [
        { name: "Item 1.1", description: "This is the first item in category 1.", },
        { name: "Item 1.2", description: "This is the second item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
    ],
    category2: [
        { name: "Item 2.1", description: "This is the first item in category 2." },
        { name: "Item 2.2", description: "This is the second item in category 2.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
    ],
    category3: [
        { name: "Item 3.1", description: "This is the first item in category 3.", },
        { name: "Item 3.2", description: "This is the second item in category 3.", },
        { name: "Item 3.3", description: "This is the third item in category 3.", },
        { name: "Item 3.4", description: "This is the fourth item in category 3.", },
    ],
    category4: [
        { name: "Item 4.1", description: "This is the first item in category 4.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
        { name: "Item 1.3", description: "This is the third item in category 1.", },
    ]
};

const allCategories = () => {
    const allItems = [items.category1, items.category2, items.category3,items.category4]
        .flat()
        .sort(() => Math.random() - 0.5)
    const fragment = createItems(allItems)
    document.getElementById("itemsContainer").appendChild(fragment);
}
    document.addEventListener('DOMContentLoaded', allCategories); //OnLoad rendering all categories

function createItems(itemsArray) {
    const fragment = document.createDocumentFragment();
    for (const itemData of itemsArray) {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        // You can now use the data from the items object. For example:
        const Header = document.createElement('h2');
        const Desc = document.createElement('p');
        const CartBtn = document.createElement('button');
        const CartImg = document.createElement('img');
              CartImg.src = './public/cart.png';
              CartImg.alt = 'Add to cart';

        CartBtn.classList.add ('cartBtn');

        Header.textContent = itemData.name;
        Desc.textContent = itemData.description;


        newItem.appendChild(Header);
        newItem.appendChild(Desc);
        newItem.appendChild(CartBtn); //shoping cart img
        CartBtn.appendChild(CartImg);

        fragment.appendChild(newItem);
    }
    return fragment;
}

function updateItems(itemsFragment) {
    // Clear the existing items from the container
    ItemsContainer.innerHTML = '';
    // Append the new items
    ItemsContainer.appendChild(itemsFragment);
}

buttonCategory1.addEventListener("click", () => {
    const newItems = createItems(items.category1);
    updateItems(newItems);
});

buttonCategory2.addEventListener("click", () => {
    const newItems = createItems(items.category2);
    updateItems(newItems);
});

buttonCategory3.addEventListener("click", () => {
    const newItems = createItems(items.category3);
    updateItems(newItems);
});

buttonCategory4.addEventListener("click", () => {
    const newItems = createItems(items.category4);
    updateItems(newItems);
});
