const buttonCategory1 = document.getElementById("categoryButton1");
const buttonCategory2 = document.getElementById("categoryButton2");
const buttonCategory3 = document.getElementById("categoryButton3");
const buttonCategory4 = document.getElementById("categoryButton4");

const ItemsContainer = document.getElementById("itemsContainer");

const items = {
    category1: [
        { name: "Item 1.1", description: "This is the first item in category 1." },
        { name: "Item 1.2", description: "This is the second item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
    ],
    category2: [
        { name: "Item 2.1", description: "This is the first item in category 2." },
        { name: "Item 2.2", description: "This is the second item in category 2." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
    ],
    category3: [
        { name: "Item 3.1", description: "This is the first item in category 3." },
        { name: "Item 3.2", description: "This is the second item in category 3." },
        { name: "Item 3.3", description: "This is the third item in category 3." },
        { name: "Item 3.4", description: "This is the fourth item in category 3." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
    ],
    category4: [
        { name: "Item 4.1", description: "This is the first item in category 4." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
        { name: "Item 1.3", description: "This is the third item in category 1." },
    ]
};

function createItems(itemsArray) {
    const fragment = document.createDocumentFragment();
    for (const itemData of itemsArray) {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        // You can now use the data from the items object. For example:
        // const nameElement = document.createElement('h3');
        // nameElement.textContent = itemData.name;
        // newItem.appendChild(nameElement);
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
