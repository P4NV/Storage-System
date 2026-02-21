
const buttonCategory1 = document.getElementById("categoryButton1");
const buttonCategory2 = document.getElementById("categoryButton2");
const buttonCategory3 = document.getElementById("categoryButton3");
const buttonCategory4 = document.getElementById("categoryButton4");

const ItemsContainer = document.getElementById("itemsContainer");
const yourCartContainer = document.getElementById('Your-cart');

// This will hold the data for the items in the user's cart
let yourCart = [];

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
document.addEventListener('DOMContentLoaded', allCategories);

function createItems(itemsArray) {
    const fragment = document.createDocumentFragment();
    for (const itemData of itemsArray) {
        const newItem = document.createElement('div');
        newItem.classList.add('item');

        const Header = document.createElement('h2');
        const Desc = document.createElement('p');
        const CartBtn = document.createElement('button');
        const CartImg = document.createElement('img');
        CartImg.src = './public/cart.png';
        CartImg.alt = 'Add to cart';

        CartBtn.classList.add('cartBtn');
        Header.classList.add('itemName');
        Desc.classList.add('itemDesc');

        Header.textContent = itemData.name;
        Desc.textContent = itemData.description;

        newItem.appendChild(Header);
        newItem.appendChild(Desc);
        newItem.appendChild(CartBtn);
        CartBtn.appendChild(CartImg);

        fragment.appendChild(newItem);
    }
    return fragment;
}

function updateItems(itemsFragment) {
    ItemsContainer.innerHTML = '';
    ItemsContainer.appendChild(itemsFragment);
}

// tu smo stali triba urediti stil i dodati jos elemenata

function renderCartItems(){
    // Clear only the elements representing cart items
    const cartItemElements = yourCartContainer.querySelectorAll('.cart-item');
    cartItemElements.forEach(el => el.remove());

    // Add each item from the yourCart array to the DOM
    yourCart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.textContent = item.name; // Display the item name
        yourCartContainer.appendChild(itemEl);
    });
}

// Event Delegation for "Add to Cart" buttons
ItemsContainer.addEventListener("click", (event) => {
    // Check if a cart button was clicked
    const cartButton = event.target.closest('.cartBtn');
    if (cartButton) {
        // Find the parent .item container
        const itemElement = cartButton.closest('.item');
        if (itemElement) {
            // Extract data from within the specific item
            const name = itemElement.querySelector('.itemName').textContent;
            const description = itemElement.querySelector('.itemDesc').textContent;

            // Create an object for the cart
            const cartItem = {
                name: name,
                description: description
            };

            // Push the data to the yourCart array
            yourCart.push(cartItem);

            // Re-render the cart items in the UI
            renderCartItems();

            // Log the cart to the console to verify
            console.log("Item added to cart:", cartItem);
            console.log("Current cart:", yourCart);
        }
    }
});
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
