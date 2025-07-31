const menuItems = [
  { id: 1, text: "Add New Grocery Item", action: "showAddForm" },
  { id: 2, text: "View Inventory", action: "displayInventory" },
  { id: 3, text: "Update or Remove Item", action: "showUpdateForm" },
  { id: 4, text: "Clear Display", action: "clearDisplay" },
];

function renderMenu() {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.text;
    li.className = "menu-item";
    li.onclick = () => handleMenuAction(item.action);
    menu.appendChild(li);
  });
}

function handleMenuAction(action) {
  switch (action) {
    case "showAddForm":
      showAddForm();
      break;
    case "displayInventory":
      displayInventory();
      break;
    case "showUpdateForm":
      showUpdateForm();
      break;
    case "clearDisplay":
      document.getElementById("output").innerHTML = "<p>Exited.</p>";
      document.getElementById("form-section").innerHTML = "";
      break;
  }
}

window.onload = renderMenu;