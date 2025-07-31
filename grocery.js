let inventory = [];

function showAddForm() {
  const formSection = document.getElementById("form-section");
  formSection.innerHTML = `
    <h2>Add Grocery Item</h2>
    <form id="add-form">
      <input type="text" id="name" placeholder="Item Name" required />
      <input type="number" id="quantity" placeholder="Quantity" min="1" required />
      <input type="text" id="category" placeholder="Category" required />
      <button type="submit">Add Item</button>
    </form>
  `;
  document.getElementById("add-form").onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const quantity = parseInt(document.getElementById("quantity").value);
    const category = document.getElementById("category").value.trim();
    
    if (name && quantity > 0 && category) {
      inventory.push({ name, quantity, category });
      formSection.innerHTML = "<p>Item added successfully.</p>";
      displayInventory();
    }
  };
}

function displayInventory() {
  const output = document.getElementById("output");
  if (inventory.length === 0) {
    output.innerHTML = "<p>No items in inventory.</p>";
    return;
  }

  const grouped = {};
  inventory.forEach((item, index) => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push({ ...item, index });
  });

  output.innerHTML = "<h2>Inventory</h2>";
  for (const category in grouped) {
    const section = document.createElement("div");
    section.className = "category-section";
    section.innerHTML = `<h3>${category}</h3>`;
    grouped[category].forEach(item => {
      section.innerHTML += `<p>#${item.index + 1} - ${item.name} (x${item.quantity})</p>`;
    });
    output.appendChild(section);
  }
}

function showUpdateForm() {
  const formSection = document.getElementById("form-section");
  formSection.innerHTML = `
    <h2>Update or Remove Item</h2>
    <form id="update-form">
      <input type="number" id="item-id" placeholder="Item ID #" min="1" required />
      <input type="number" id="new-quantity" placeholder="New Quantity (0 to delete)" required />
      <button type="submit">Update</button>
    </form>
  `;
  document.getElementById("update-form").onsubmit = (e) => {
    e.preventDefault();
    const index = parseInt(document.getElementById("item-id").value) - 1;
    const newQty = parseInt(document.getElementById("new-quantity").value);

    if (inventory[index]) {
      if (newQty <= 0) {
        inventory.splice(index, 1);
      } else {
        inventory[index].quantity = newQty;
      }
      displayInventory();
      formSection.innerHTML = "<p>Item updated.</p>";
    }
  };
}
