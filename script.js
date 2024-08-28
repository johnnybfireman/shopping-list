const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input'); 
const itemList = document.getElementById('item-list');

<<<<<<< HEAD
=======
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  // trim the input value to remove whitespace - disallowing duplicate items due to white space in the process
  const newItem = itemInput.value.trim();

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Check for edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');

    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert(`The item "${newItem}" already exists!`);
      return;
    }
  }

  // Create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  checkUI();

  itemInput.value = '';
}

function addItemToDOM(item) {
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
>>>>>>> 53b3713456823022ce864c80793206c2cc75096a




<<<<<<< HEAD
// Functions
=======
function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else if (e.target.closest('li')) {
    setItemToEdit(e.target);
  }
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();
  return itemsFromStorage.includes(item);
}
>>>>>>> 53b3713456823022ce864c80793206c2cc75096a

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

<<<<<<< HEAD
    //validate Input
    if(newItem === ''){
        alert("Please enter an item");
        return;
=======
  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
  formBtn.style.backgroundColor = '#228B22';
  itemInput.value = item.textContent;
}

function removeItem(item) {
  if (
    confirm(`Are you sure you want to remove the item "${item.textContent}"?`)
  ) {
    // Remove item from DOM
    item.remove();

    // Remove item from storage
    removeItemFromStorage(item.textContent);

    checkUI();
  }
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  // Re-set to localstorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Clear from localStorage
  localStorage.removeItem('items');

  checkUI();
}

function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
>>>>>>> 53b3713456823022ce864c80793206c2cc75096a
    }
    //create list items from scratch
    const li = document.createElement('li');
    //append text node to list item
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    itemInput.value = '';


    //create button element with classes passed to function
    // call create button function with three class names as passed values
    const button = createButton('remove-item btn-link text-red'); 
    li.appendChild(button);
    console.log(li);

    function createButton(classes){
        const button = document.createElement('button'); //creates variable to represesent createElement method
        button.className = classes;
        // run the icon function with passed class properties
        const icon = createIcon('fa-solid fa-xmark')
        // append the icon within the button element
        button.appendChild(icon);
        
        return button;

    }
    //create function to create icon that well be embedded into the list item field
    function createIcon(classes){
        const icon = document.createElement('i');
        icon.className = classes;
        return icon;
    }
}
// EventListeners
itemForm.addEventListener('submit', addItem);