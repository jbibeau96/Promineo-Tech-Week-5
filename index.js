class Restaurant {
    constructor(name) {
        this.name = name;
        this.foods = [];
    }
}

class Menu {
    constructor() {
        this.restaurants = [];
        this.selectedRestaurants = null;
    }

    run() {
        let input = this.showMainMenuOptions();

        while (input != 0) {
            switch (input) {
                case "1": 
                    this.createRestaurant();
                    break;
                case "2":
                    this.viewRestaurant();
                    break;
                case "3":
                    this.deleteRestaurant();
                    break;
                default: 
                    input = 0;
            }
            input = this.showMainMenuOptions();
        }
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create Restaurant
            2) view Restaurant
            3) delete Restaurant
            `);
        }

        showRestaurantMenuOptions(restaurantInfo) {
            return prompt(`
                0) Back
                ----------------------
                ${restaurantInfo}
                `)
        }
    createRestaurant() {
        let name = prompt("What Restaurant?:");
        this.restaurants.push(new Restaurant(name));
    }

    viewRestaurant() {
        let index = prompt("Enter the index (starting with 0) of the restaurant you wish to view:");
        if (index > -1 && index < this.restaurants.length) {
            this.selectedRestaurant = this.restaurants[index];
            let description = "Restaurant Name: " + this.selectedRestaurant.name + "\n";
            
            this.showRestaurantMenuOptions(description);
            
        }
    }
    deleteRestaurant() {
        let index = prompt('Enter the index of the restaurant you wish to delete:');
        (index > -1 && index < this.restaurants.length); {
            this.restaurants.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.run();