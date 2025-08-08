# Smart Grocery Inventory Manager

## 📌 Project Overview
The **Smart Grocery Inventory Manager** is a dual-version system — a **Java console application** and a **web-based interface** — designed to help users efficiently track grocery items in their household.  
It aims to reduce waste, save money, and prevent duplicate purchases by providing a simple yet effective inventory management solution.

---

## 👥 Team Members
- **Ali Shakir** – Team Lead, Proposal/Report Creator, Menu & Grocery Code Creator, Java Programming  
- **Aneesa Tariq** – Tester & Debugger  
- **Elijah Palmer** – Feature Integration Developer  
- **Berra Tekin** – CSS Designer & UI Accessibility Specialist  

---

## 📖 Introduction
The project consists of:
- **Java Version** – A console-based menu-driven application.
- **Web Version** – A responsive interface built with HTML, CSS, and JavaScript.

Both versions allow users to:
- Add items
- View inventory
- Update quantities
- Remove items

---

## ❗ Problem Description
Maintaining an organized grocery inventory can be challenging.  
Common issues include:
- Buying duplicate items
- Forgetting what’s already in stock
- Food spoilage from poor tracking
- Overspending

**Our solution** addresses these by:
- Tracking item names, quantities, and categories
- Allowing quick updates and removals
- Grouping items by category for easy reference

---

## 💻 Technology Stack

### Java Console Version
- **Language:** Java
- **Structure:** `GroceryItem` class to store item data (name, quantity, category)
- **Features:**
  - Menu-driven navigation
  - Add, view, update, and remove items
  - Items stored in an `ArrayList`
- **User Interaction:** `Scanner` for console input

### Web Version
- **Languages:** HTML, CSS, JavaScript
- **Structure:**
  - **HTML** – Main menu, grocery interface, navigation
  - **CSS** – Styled with a *Nightstalker (Destiny 2)* theme
  - **JavaScript** – Handles inventory logic
- **Features:**
  - Category grouping in inventory display
  - Clickable navigation menu
  - Responsive design for desktop & mobile

---

## 🧪 Test Cases

| Test Case           | Description                               | Input                                      | Expected Output            | Version     |
|---------------------|-------------------------------------------|---------------------------------------------|----------------------------|-------------|
| **Add Item**        | Add a new grocery item                    | Name: Milk, Qty: 2, Category: Dairy         | `Item added successfully`  | Java & Web |
| **View Empty**      | View when no items exist                   | N/A                                         | `No items in inventory`    | Java & Web |
| **Update Quantity** | Change quantity of existing item           | ID: 1, New Qty: 5                           | `Item updated`              | Java & Web |
| **Remove Item**     | Remove item from inventory                 | ID: 1, Qty: 0                               | `Item removed`              | Java & Web |
| **Invalid ID**      | Update non-existent item                   | ID: 99                                      | `Invalid ID`                | Java       |
| **Category Group**  | Group items by category                    | Milk (Dairy), Apple (Fruit)                 | Items under correct groups  | Web        |

---

## 📚 User Manual

### Java Console Version
1. Run `index.java` in your Java environment.
2. Select menu option (1–5) by number.
3. **Add Item:** Enter name, quantity, category.
4. **View Inventory:** Shows all items with IDs.
5. **Update/Remove:** Enter ID, then new quantity (0 removes).
6. **Clear Display:** Clears console output.
7. **Exit:** Ends program.

### Web Version
1. Open `index.html` in a browser.
2. Navigation menu options:
   - **Add New Grocery Item:** Opens item form.
   - **View Inventory:** Shows items grouped by category.
   - **Update/Remove:** Modify or delete existing items.
   - **Clear Display:** Clears output section.
3. Use **Go to Grocery** / **Go to Menu** buttons for navigation.

---

## 🏁 Conclusion & Future Improvements
The Smart Grocery Inventory Manager offers:
- A lightweight **Java console** version for quick use
- A **modern web version** for a more visual experience

### Potential Future Features:
- Expiration date tracking
- Automatic low-stock shopping lists
- File/database persistence
- User authentication for personal inventories
- Barcode scanning for quick entry

---
