
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
        { name: "ArduinoMega", description: "Arduino Mega",img:"/public/electronics/arduino_mega.png" },
        { name: "ArduinoNano", description: "Arduino Nano",img:"/public/electronics/arduino_nano.png" },
        { name: "Esp32", description: "Esp32",img:"/public/electronics/esp32.png" },
    ],
    category2: [
        { name: "Capacitor", description: "Capacitor 35V",img:"/public/electronics/capacitor35v.png" },
        { name: "Capacitor-1", description: "Capacitor",img:"/public/electronics/capacitor35v1.png" },
        { name: "Capacitor-2", description: "Capacitor",img:"/public/electronics/capacitor-2.3v.png" },
        { name: "Resistor", description: "Resistor",img:"/public/electronics/resistor.png" },
        { name: "Transistor", description: "Transistor",img:"/public/electronics/transistor.png" },
        { name: "Transistor-1", description: "Transistor",img:"/public/electronics/transistor-1.png" },
        { name: "Led", description: "Led 5V",img:"/public/electronics/led.png" },
        { name: "Resistor", description: "Resistor",img:"/public/electronics/resistor-1.png" },
        { name: "Chip", description: "Chip",img:"/public/electronics/chip.png" },
        { name: "MicroChip", description: "MicroChip",img:"/public/electronics/microChip.png" },
        { name: "ATMega", description: "ATMega",img:"/public/electronics/ATmega.png" },
        { name: "Transistor-2", description: "Transistor",img:"/public/electronics/transistor-2.png" },
        { name: "JRC", description: "JRC-microControler",img:"/public/electronics/JRC.png" },
        { name: "LmTransistor", description: "LmTransistor",img:"/public/electronics/LmTransistor.png" },
    ],
    category3: [
        { name: "JoyStick", description: "Analog JoyStick",img:"/public/electronics/JoyStick.png" },
        { name: "Sensor", description: "Sensor",img:"/public/electronics/Sensor.png" },
        { name: "Transferrer", description: "Transferrer",img:"/public/electronics/Transferrer.png" },
        { name: "Wetness Detector", description: "Wetness Detector",img:"/public/electronics/Wetness-detector.png" },
        { name: "pMod-nav", description: "pMod-nav",img:"/public/electronics/pmod_nav.png" },
        { name: "Alarm", description: "Alarm",img:"/public/electronics/Alarm.png" },
    ],
    category4: [
        { name: "Item 4.1", description: "This is the first item in category 4.",img:"/public/electronics/arduino_mega.png" },
        { name: "Item 1.3", description: "This is the third item in category 1.",img:"/public/electronics/arduino_mega.png" },
        { name: "Item 1.3", description: "This is the third item in category 1.",img:"/public/electronics/arduino_mega.png" },
        { name: "Item 1.3", description: "This is the third item in category 1.",img:"/public/electronics/arduino_mega.png" },
        { name: "Item 1.3", description: "This is the third item in category 1.",img:"/public/electronics/arduino_mega.png" },
        { name: "Item 1.3", description: "This is the third item in category 1.",img:"/public/electronics/arduino_mega.png" },
        { name: "Item 1.3", description: "This is the third item in category 1.",img:"/public/electronics/arduino_mega.png" },
        { name: "Item 1.3", description: "This is the third item in category 1.",img:"/public/electronics/arduino_mega.png" },
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
        const ItemImage = document.createElement('img');

        CartImg.src = './public/cart.png';
        CartImg.alt = 'Add to cart';
        ItemImage.src = itemData.img;

        CartBtn.classList.add('cartBtn');
        Header.classList.add('itemName');
        Desc.classList.add('itemDesc');
        ItemImage.classList.add('itemImg');

        Header.textContent = itemData.name;
        Desc.textContent = itemData.description;

        newItem.appendChild(ItemImage);
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
