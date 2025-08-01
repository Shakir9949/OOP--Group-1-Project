import java.util.ArrayList;
import java.util.Scanner;

class GroceryItem {
    String name;
    int quantity;
    String category;

    GroceryItem(String name, int quantity, String category) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
    }
}

public class index {
    static ArrayList<GroceryItem> inventory = new ArrayList<>();
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            System.out.println("\nSmart Grocery Inventory Manager");
            System.out.println("1. Add New Grocery Item");
            System.out.println("2. View Inventory");
            System.out.println("3. Update or Remove Item");
            System.out.println("4. Clear Display");
            System.out.println("5. Exit");
            System.out.print("Choose an option: ");

            String choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    addItem();
                    break;
                case "2":
                    displayInventory();
                    break;
                case "3":
                    updateItem();
                    break;
                case "4":
                    clearDisplay();
                    break;
                case "5":
                    System.out.println("Goodbye!");
                    return;
                default:
                    System.out.println("Invalid choice.");
            }
        }
    }

    static void addItem() {
        System.out.print("Enter item name: ");
        String name = scanner.nextLine().trim();

        System.out.print("Enter quantity: ");
        int quantity = Integer.parseInt(scanner.nextLine());

        System.out.print("Enter category: ");
        String category = scanner.nextLine().trim();

        if (!name.isEmpty() && quantity > 0 && !category.isEmpty()) {
            inventory.add(new GroceryItem(name, quantity, category));
            System.out.println("Item added successfully.");
        } else {
            System.out.println("Invalid input. Item not added.");
        }
    }

    static void displayInventory() {
        if (inventory.isEmpty()) {
            System.out.println("No items in inventory.");
            return;
        }

        System.out.println("\nInventory:");
        for (int i = 0; i < inventory.size(); i++) {
            GroceryItem item = inventory.get(i);
            System.out.println("#" + (i + 1) + " - " + item.name + " (x" + item.quantity + ") [" + item.category + "]");
        }
    }

    static void updateItem() {
        displayInventory();
        if (inventory.isEmpty())
            return;

        System.out.print("Enter item ID to update/remove: ");
        int index = Integer.parseInt(scanner.nextLine()) - 1;

        if (index < 0 || index >= inventory.size()) {
            System.out.println("Invalid ID.");
            return;
        }

        System.out.print("Enter new quantity (0 to delete): ");
        int newQty = Integer.parseInt(scanner.nextLine());

        if (newQty <= 0) {
            inventory.remove(index);
            System.out.println("Item removed.");
        } else {
            inventory.get(index).quantity = newQty;
            System.out.println("Item updated.");
        }
    }

    static void clearDisplay() {
        System.out.println("Display cleared.");
    }
}