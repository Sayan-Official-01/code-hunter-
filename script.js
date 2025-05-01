// --- Data (Menu Items & Time Slots - No Changes) ---
{/* Changed Button */}
const menuItems = [
    // ... (keep the existing menuItems array) ...
    { id: 1, name: "Full-Rice", price: 15, category: "veg", description: "A full plate of steamed rice.", ingredients: ["Rice", "Water"], calories: 300, image: "https://tse1.mm.bing.net/th?id=OIP.TERyfiVkh-Ox-wW2RU9qrAHaFj&pid=Api&P=0&h=220" },
    { id: 2, name: "Half-Rice", price: 8, category: "veg", description: "A half plate of steamed rice.", ingredients: ["Rice", "Water"], calories: 150, image: "https://thumbs.dreamstime.com/b/half-bowl-rice-half-bowl-rice-bamboo-mat-143220576.jpg" },
    { id: 3, name: "Dal", price: 10, category: "veg", description: "Lentil soup, a staple side dish.", ingredients: ["Lentils", "Spices", "Water"], calories: 120, image: "https://tse4.mm.bing.net/th?id=OIP.Sp4x4MkQNmRSLJdCDPjBLgHaFj&pid=Api&P=0&h=220" },
    { id: 4, name: "Vegitable", price: 15, category: "veg", description: "Mixed vegetable curry.", ingredients: ["Assorted Vegetables", "Spices"], calories: 180, image: "https://tse4.mm.bing.net/th?id=OIP.f5rgOx1WCQYZtzPvv8Z5nwHaD0&pid=Api&P=0&h=220" },
    { id: 5, name: "Sweet-Doi", price: 20, category: "veg", description: "Sweetened yogurt dessert.", ingredients: ["Milk", "Sugar", "Yogurt Culture"], calories: 250, image: "https://c8.alamy.com/comp/FG111X/indian-sweet-mishti-doi-bengali-mithai-in-earthen-pot-on-white-background-FG111X.jpg" },
    { id: 6, name: "Chicken Burger", price: 55, category: "non-veg", description: "Juicy chicken patty in a soft bun.", ingredients: ["Bun", "Chicken Patty", "Lettuce", "Mayo"], calories: 550, image: "https://tse4.mm.bing.net/th?id=OIP.m93SV6ox1swkqRaBnEzbHgHaHa&pid=Api&P=0&h=220" },
    { id: 7, name: "Paneer Sandwich", price: 45, category: "veg", description: "Grilled sandwich with spiced paneer filling.", ingredients: ["Bread", "Paneer", "Spices", "Onion"], calories: 350, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/paneer-sandwich-recipe.jpg" },
    { id: 8, name: "Veg Noodles", price: 40, category: "veg", description: "Stir-fried noodles with vegetables.", ingredients: ["Noodles", "Carrot", "Cabbage", "Soy Sauce"], calories: 400, image: "https://tse1.mm.bing.net/th?id=OIP.xLKv9KEnCsFIvJKdcmlHygHaE8&pid=Api&P=0&h=220" },
    { id: 9, name: "Samosa (2 pcs)", price: 20, category: "snack", description: "Crispy pastry filled with spiced potatoes.", ingredients: ["Flour", "Potato", "Peas", "Spices"], calories: 250, image: "https://tse3.mm.bing.net/th?id=OIP.QWmPYQ0zarlBaILQla69twHaHa&pid=Api&P=0&h=220" },
    { id: 10, name: "Vegitable Chop (5 pcs)", price: 20, category: "snack", description: "Breaded vegetable cutlets.", ingredients: ["Vegetables", "Breadcrumbs", "Spices"], calories: 250, image: "https://tse1.mm.bing.net/th?id=OIP.6dfGb3ARb_FxsfdnWmnqdwHaEK&pid=Api&P=0&h=220" },
    { id: 11, name: "Patties", price: 30, category: "snack", description: "Flaky puff pastry with filling (veg/non-veg option).", ingredients: ["Puff Pastry", "Filling"], calories: 300, image: "https://tse2.mm.bing.net/th?id=OIP.RxIpStSwzd0vgB-QHNobaQHaE7&pid=Api&P=0&h=220" },
    { id: 12, name: "Orange Juice", price: 25, category: "drink", description: "Freshly squeezed orange juice.", ingredients: ["Orange"], calories: 120, image: "https://tse2.mm.bing.net/th?id=OIP.Cn1zad0znilCIOXp-KCS3AHaHa&pid=Api&P=0&h=220" },
    { id: 13, name: "Mango Juice", price: 25, category: "drink", description: "Refreshing mango juice.", ingredients: ["Mango Pulp", "Water"], calories: 140, image: "https://tse4.mm.bing.net/th?id=OIP.gykRBguiSn6PXtjY0_Sb6gHaHa&pid=Api&P=0&h=220" },
    { id: 14, name: "Apple Juice", price: 25, category: "drink", description: "Sweet apple juice.", ingredients: ["Apple Concentrate", "Water"], calories: 130, image: "https://tse4.mm.bing.net/th?id=OIP.liLjI07V_otatCkXR4lkFwHaEK&pid=Api&P=0&h=220" },
    { id: 15, name: "Masala Dosa", price: 35, category: "veg", description: "South Indian crepe with potato filling.", ingredients: ["Rice", "Lentils", "Potato"], calories: 380, image: "https://tse1.mm.bing.net/th?id=OIP.Df0V1RgHsnhrxZ1ZrDZQfwHaE8&pid=Api&P=0&h=220" },
    { id: 16, name: "Chicken carry(2 pcs)", price: 45, category: "non-veg", description: "Homestyle chicken curry pieces.", ingredients: ["Chicken", "Spices", "Onion", "Tomato"], calories: 400, image: "https://tse3.mm.bing.net/th?id=OIP.zp70T7WAYADAaWU4_bhSZQHaEK&pid=Api&P=0&h=220" },
    { id: 17, name: "Fish carry", price: 35, category: "non-veg", description: "Fish curry in traditional spices.", ingredients: ["Fish", "Spices", "Coconut Milk"], calories: 350, image: "https://tse4.mm.bing.net/th?id=OIP.LHbsvSjI-nPalcjKqJL0xAHaJQ&pid=Api&P=0&h=220" },
    { id: 18, name: "Chiken Egg carry", price: 35, category: "non-veg", description: "Egg curry with chicken pieces.", ingredients: ["Egg", "Chicken", "Spices"], calories: 380, image: "https://tse1.mm.bing.net/th?id=OIP.XnxkzBBsiSsubD6A2S5ZcAHaFj&pid=Api&P=0&h=220" },
    // Note: ID 18 is duplicated, correcting the second one to 19
    { id: 19, name: "Duck Egg carry", price: 35, category: "non-veg", description: "Duck egg curry.", ingredients: ["Duck Egg", "Spices", "Onion"], calories: 400, image: "https://tse1.mm.bing.net/th?id=OIP.14PCt1hbZ9BQS1sipO81dAAAAA&pid=Api&P=0&h=220" },
];

const timeSlots = ["12:00 PM - 12:15 PM", "12:15 PM - 12:30 PM", "12:30 PM - 12:45 PM", "12:45 PM - 01:00 PM", "01:00 PM - 01:15 PM", "01:15 PM - 01:30 PM"];

// --- Order State ---
let currentOrder = []; // Array to hold { id, name, price, quantity }

// --- DOM Elements ---
let menuList, orderTimeSlotSelect, feedbackFoodSelect, orderMessage, feedbackMessage, loginMessage, starRatingContainer, feedbackRatingInput, queueHeatmap, recommendationText, allergyAlert, currentOrderItemsContainer, orderTotalElement, cartCountElement;

function initializeDOMElements() {
    menuList = document.getElementById("menu-items");
    orderTimeSlotSelect = document.getElementById("order-timeslot");
    feedbackFoodSelect = document.getElementById("feedback-food");
    orderMessage = document.getElementById("order-message");
    feedbackMessage = document.getElementById("feedback-message");
    loginMessage = document.getElementById("login-message");
    starRatingContainer = document.getElementById("star-rating");
    feedbackRatingInput = document.getElementById("feedback-rating");
    queueHeatmap = document.getElementById('queue-heatmap');
    recommendationText = document.getElementById('recommendation-text');
    allergyAlert = document.getElementById('allergy-alert');
    currentOrderItemsContainer = document.getElementById('current-order-items');
    orderTotalElement = document.getElementById('order-total');
    cartCountElement = document.getElementById('cart-count');

    // Event Delegation for dynamically added cart buttons
    if (currentOrderItemsContainer) {
        currentOrderItemsContainer.addEventListener('click', handleCartActions);
    }
}

// --- Functions ---

// Render Menu Items (Modified Button)
function renderMenu(filter = 'all') {
    if (!menuList) return;
    menuList.innerHTML = ""; // Clear existing items

    const filteredItems = menuItems.filter(item => filter === 'all' || item.category === filter);

    if (filteredItems.length === 0) {
        menuList.innerHTML = `<p class="text-center text-gray-500 col-span-full">No items found for this category.</p>`;
        return;
    }

    filteredItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-200 hover:shadow-xl transition-shadow duration-300";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
            <div class="p-4 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold mb-2 text-green-700">${item.name}</h3>
                <p class="text-gray-600 text-sm mb-3 flex-grow">${item.description}</p>
                <p class="text-sm text-gray-500 mb-1">Category: ${item.category}</p>
                <p class="text-sm text-gray-500 mb-3">Calories: ~${item.calories}</p>
                <div class="flex justify-between items-center mt-auto">
                    <p class="text-lg font-bold text-green-600">₹${item.price}</p>
                    <button onclick="addItemToOrder(${item.id}, this)" class="bg-green-500 text-white py-1 px-3 rounded-full hover:bg-green-600 text-sm transition duration-300">Add +</button> 
                </div>
            </div>
        `;
        menuList.appendChild(div);
    });

    // Highlight active filter button (No changes needed here)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-green-500', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    const activeButton = document.querySelector(`.filter-btn[onclick="renderMenu('${filter}')"]`);
    if (activeButton) {
        activeButton.classList.remove('bg-gray-200', 'text-gray-700');
        activeButton.classList.add('bg-green-500', 'text-white');
    }
}

// Populate Dropdowns (Only Feedback Food and Timeslots needed)
function populateDropdowns() {
    if (!feedbackFoodSelect || !orderTimeSlotSelect) return;

    // Feedback Form Food Select
    feedbackFoodSelect.innerHTML = '<option value="">-- Select Food Item You Had --</option>'; // Reset
    menuItems.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = `${item.name} - ₹${item.price}`;
        feedbackFoodSelect.appendChild(option);
    });

     // Order Form Time Slots
     orderTimeSlotSelect.innerHTML = '<option value="">-- Select Pickup Time --</option>'; // Reset
     timeSlots.forEach(slot => {
         const option = document.createElement("option");
         option.value = slot;
         option.textContent = slot;
         orderTimeSlotSelect.appendChild(option);
     });
}

// Add Item to the currentOrder array
function addItemToOrder(itemId, buttonElement) {
    const selectedItem = menuItems.find(item => item.id === itemId);
    if (!selectedItem) return;

    const existingItemIndex = currentOrder.findIndex(item => item.id === itemId);

    if (existingItemIndex > -1) {
        // Item already in cart, increment quantity
        currentOrder[existingItemIndex].quantity++;
    } else {
        // Add new item to cart
        currentOrder.push({
            id: selectedItem.id,
            name: selectedItem.name,
            price: selectedItem.price,
            quantity: 1
        });
    }

    // Visual feedback on the button
    if (buttonElement) {
        buttonElement.textContent = 'Added ✓';
        buttonElement.classList.add('bg-blue-500'); // Change color briefly
        setTimeout(() => {
            buttonElement.textContent = 'Add +';
            buttonElement.classList.remove('bg-blue-500');
             // Add pulse animation to the cart item if visible
             const cartItemElement = document.querySelector(`.cart-item[data-id="${itemId}"]`);
             if(cartItemElement) {
                cartItemElement.classList.add('item-added');
                setTimeout(() => cartItemElement.classList.remove('item-added'), 300);
             }

        }, 800); // Reset after 0.8 seconds
    }


    renderCurrentOrder(); // Update the cart display
    // Optionally scroll to the order section
    // document.getElementById('order').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Render the items currently in the order cart
function renderCurrentOrder() {
    if (!currentOrderItemsContainer || !orderTotalElement || !cartCountElement) return;

    currentOrderItemsContainer.innerHTML = ""; // Clear previous items
    let total = 0;
    let itemCount = 0;

    if (currentOrder.length === 0) {
        currentOrderItemsContainer.innerHTML = `<p class="text-gray-500 text-center">Your cart is empty. Add items from the menu.</p>`;
    } else {
        currentOrder.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            itemCount += item.quantity;

            const itemDiv = document.createElement("div");
            itemDiv.className = "cart-item flex justify-between items-center border-b pb-2 gap-2";
            itemDiv.dataset.id = item.id; // Add data-id for easier selection
            itemDiv.innerHTML = `
                <div class="flex-grow">
                    <p class="font-semibold text-sm md:text-base">${item.name}</p>
                    <p class="text-xs text-gray-500">₹${item.price.toFixed(2)} each</p>
                </div>
                <div class="flex items-center gap-1 md:gap-2">
                    <button data-action="decrease" data-id="${item.id}" class="bg-gray-200 px-2 py-0.5 rounded text-lg hover:bg-gray-300">-</button>
                    <span class="font-medium w-6 text-center">${item.quantity}</span>
                    <button data-action="increase" data-id="${item.id}" class="bg-gray-200 px-2 py-0.5 rounded text-lg hover:bg-gray-300">+</button>
                </div>
                <p class="font-semibold w-16 text-right text-sm md:text-base">₹${itemTotal.toFixed(2)}</p>
                <button data-action="remove" data-id="${item.id}" class="text-red-500 hover:text-red-700 text-xl font-bold ml-2">×</button>
            `;
            currentOrderItemsContainer.appendChild(itemDiv);
        });
    }

    orderTotalElement.textContent = `₹${total.toFixed(2)}`;
    cartCountElement.textContent = currentOrder.length; // Update cart count in header (number of unique items)
    // Alternatively, show total quantity: cartCountElement.textContent = itemCount;

    checkAllergiesForCart(); // Check allergies whenever the cart changes
}

// Handle clicks within the cart (using event delegation)
function handleCartActions(event) {
    const target = event.target;
    const action = target.dataset.action;
    const itemId = parseInt(target.dataset.id); // Get item ID

    if (!action || !itemId) return; // Exit if not a relevant button

    switch (action) {
        case 'increase':
            updateOrderItemQuantity(itemId, 1);
            break;
        case 'decrease':
            updateOrderItemQuantity(itemId, -1);
            break;
        case 'remove':
            removeOrderItem(itemId);
            break;
    }
}


// Update quantity of an item in the cart
function updateOrderItemQuantity(itemId, change) {
    const itemIndex = currentOrder.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        currentOrder[itemIndex].quantity += change;
        if (currentOrder[itemIndex].quantity <= 0) {
            // Remove item if quantity drops to 0 or less
            currentOrder.splice(itemIndex, 1);
        }
        renderCurrentOrder();
    }
}

// Remove an item completely from the cart
function removeOrderItem(itemId) {
    currentOrder = currentOrder.filter(item => item.id !== itemId);
    renderCurrentOrder();
}

// Submit Order (Processes the entire currentOrder)
function submitOrder() {
    if (!orderMessage) return;

    const nameInput = document.getElementById("order-name");
    const timeSlotSelect = document.getElementById("order-timeslot");
    const paymentSelect = document.getElementById("order-payment");

    const name = nameInput ? nameInput.value.trim() : "";
    const timeSlot = timeSlotSelect ? timeSlotSelect.value : "";
    const paymentMethod = paymentSelect ? paymentSelect.value : "pay-at-counter";

    orderMessage.textContent = "";
    orderMessage.classList.remove('text-red-600', 'text-green-600');

    if (currentOrder.length === 0) {
        orderMessage.textContent = "⚠️ Your cart is empty. Please add items first.";
        orderMessage.classList.add('text-red-600');
        return;
    }

    if (name === "" || timeSlot === "") {
        orderMessage.textContent = "⚠️ Please provide your Name/ID and select a Pickup Time.";
        orderMessage.classList.add('text-red-600');
        return;
    }

    // Construct the order summary message
    const total = currentOrder.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemSummary = currentOrder.map(item => `${item.quantity} x ${item.name}`).join(', ');

    orderMessage.textContent = `✅ Order placed for ${name}! Items: ${itemSummary}. Total: ₹${total.toFixed(2)}. Pickup: ${timeSlot}. Payment: ${paymentMethod.replace('-', ' ')}.`;
    orderMessage.classList.add('text-green-600');

    console.log("Simulated Order:", {
        name,
        timeSlot,
        paymentMethod,
        items: currentOrder, // Send the whole cart array
        totalPrice: total
     });

     // Clear the cart and form after successful order
     currentOrder = [];
     renderCurrentOrder(); // Update UI to show empty cart
     if (nameInput) nameInput.value = "";
     if (timeSlotSelect) timeSlotSelect.value = "";
     if (paymentSelect) paymentSelect.value = "pay-at-counter";
     if (allergyAlert) allergyAlert.classList.add('hidden');

     // In a real app, send this data to the backend here.
}

// Submit Feedback (No functional changes needed, but ensure dropdown is populated)
function submitFeedback() {
    if (!feedbackMessage || !feedbackRatingInput) return;

    const foodSelect = document.getElementById("feedback-food");
    const commentArea = document.getElementById("feedback-comment");
    const photoInput = document.getElementById("feedback-photo");

    const foodId = foodSelect ? foodSelect.value : "";
    const rating = feedbackRatingInput.value;
    const comment = commentArea ? commentArea.value.trim() : "";
    const photoFile = photoInput ? photoInput.files[0] : null;

    feedbackMessage.textContent = "";
    feedbackMessage.classList.remove('text-red-600', 'text-green-600');

    if (foodId === "" || rating === "0") {
        feedbackMessage.textContent = "⚠️ Please select a food item and provide a rating.";
        feedbackMessage.classList.add('text-red-600');
        return;
    }

     const selectedFood = menuItems.find(item => item.id == foodId);
     if (!selectedFood) {
         feedbackMessage.textContent = "⚠️ Invalid food item selected.";
         feedbackMessage.classList.add('text-red-600');
         return;
     }

    feedbackMessage.textContent = `✅ Thank you for your feedback on ${selectedFood.name}! Rating: ${rating} stars.`;
     feedbackMessage.classList.add('text-green-600');
    console.log("Simulated Feedback:", { foodId: selectedFood.id, foodName: selectedFood.name, rating, comment, photo: photoFile ? photoFile.name : 'No photo' });

    // Optional: Clear form
    // ... (clearing logic as before) ...
}

// Handle Star Rating Interaction (No changes needed)
function setupStarRating() {
     if (!starRatingContainer || !feedbackRatingInput) return;
    starRatingContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN' && e.target.dataset.value) {
            const ratingValue = e.target.dataset.value;
            feedbackRatingInput.value = ratingValue;
            const stars = starRatingContainer.querySelectorAll('span');
            stars.forEach(star => {
                star.classList.remove('selected');
                if (parseInt(star.dataset.value) <= parseInt(ratingValue)) {
                    star.classList.add('selected');
                }
            });
        }
    });
}

// Login (No changes needed)
function login() {
    // ... (login logic as before) ...
     if (!loginMessage) return; // Ensure element exists

    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("login-password");

    const username = usernameInput ? usernameInput.value : "";
    const password = passwordInput ? passwordInput.value : "";

    loginMessage.textContent = ""; // Clear previous message
    loginMessage.classList.remove('text-red-600', 'text-green-600');

    // **VERY IMPORTANT**: This is NOT secure. Use a backend for real authentication.
    if (username === "admin" && password === "password") {
        loginMessage.textContent = "✅ Login successful! (Redirecting in a real app...)";
        loginMessage.classList.add('text-green-600');
        // In a real app: window.location.href = "admin_dashboard.html";
    } else if (username === "staff" && password === "staffpass") {
         loginMessage.textContent = "✅ Staff login successful! (Redirecting...)";
         loginMessage.classList.add('text-green-600');
         // In a real app: window.location.href = "staff_dashboard.html";
    } else {
        loginMessage.textContent = "❌ Invalid credentials.";
         loginMessage.classList.add('text-red-600');
    }
}

// Update Queue Status (No changes needed)
function updateQueueStatus() {
    // ... (queue status logic as before) ...
    if (!queueHeatmap) return; // Ensure element exists

     const hour = new Date().getHours();
     let statusText = 'Low';
     let statusClass = 'heatmap-green';

     // Simple time-based simulation
     if (hour >= 12 && hour < 14) { // Peak time: 12 PM to 2 PM
         statusText = 'Crowded';
         statusClass = 'heatmap-red';
     } else if (hour === 11 || hour === 14 || (hour >=17 && hour <= 19)) { // Moderate times
         statusText = 'Moderate';
         statusClass = 'heatmap-yellow';
     }

     queueHeatmap.textContent = statusText;
     // Reset classes carefully to avoid removing base styles if needed
     queueHeatmap.className = 'p-4 rounded-md text-lg font-bold transition-colors duration-500';
     queueHeatmap.classList.add(statusClass);
}

// Show AI Recommendation (No changes needed)
function showRecommendation() {
     // ... (recommendation logic as before) ...
      if (!recommendationText) return; // Ensure element exists

     if (menuItems.length > 0) {
         // Simple: Recommend a random item not currently in the cart
         const itemsNotInCart = menuItems.filter(menuItem => !currentOrder.some(orderItem => orderItem.id === menuItem.id));
         const pool = itemsNotInCart.length > 0 ? itemsNotInCart : menuItems; // Fallback to all items if cart has everything
         const randomIndex = Math.floor(Math.random() * pool.length);
         const recommendedItem = pool[randomIndex];
         recommendationText.innerHTML = `Based on popular choices, you might enjoy the <strong class="text-blue-800">${recommendedItem.name}</strong> today!`;
     } else {
         recommendationText.textContent = "Loading recommendations...";
     }
}

// Update Sustainability Stats (No changes needed)
function updateSustainabilityStats() {
    // ... (sustainability stats logic as before) ...
    const foodSavedEl = document.getElementById('food-saved');
    const topStudentEl = document.getElementById('top-student');

    if (foodSavedEl) {
        // Simulate based on number of pre-ordered items maybe?
        const estimatedSavings = currentOrder.reduce((sum, item) => sum + item.quantity * 0.05, 0); // 50g saved per item?
        foodSavedEl.textContent = `${(Math.random() * 5 + estimatedSavings + 2).toFixed(1)} kg`; // Base + order bonus
    }
    if (topStudentEl) {
        const students = ["Amit S.", "Priya K.", "Rahul V.", "Sneha M."];
        topStudentEl.textContent = students[Math.floor(Math.random() * students.length)];
    }
}

 // Allergy Check for the entire Cart
 function checkAllergiesForCart() {
    if (!allergyAlert) return;

    // **SIMULATION**: Replace with actual user allergy data
    const userAllergies = ['nuts', 'gluten']; // Hardcoded for demo

    let allergyWarnings = [];

    currentOrder.forEach(orderItem => {
        const menuItem = menuItems.find(item => item.id === orderItem.id);
        if (!menuItem) return;

        // **SIMULATION**: Define potential allergens per item (example)
        let itemPotentialAllergens = [];
        const nameLower = menuItem.name.toLowerCase();
        if (nameLower.includes("burger") || nameLower.includes("sandwich")) itemPotentialAllergens.push('gluten'); // Assume buns/bread
        if (nameLower.includes("noodles")) itemPotentialAllergens.push('gluten');
        if (nameLower.includes("samosa") || nameLower.includes("patties")) itemPotentialAllergens.push('gluten'); // Assume pastry
        if (nameLower.includes("paneer") || nameLower.includes("doi")) itemPotentialAllergens.push('dairy');
        // Add more specific checks based on your menu items
        // if (menuItem.ingredients.includes("Peanuts")) itemPotentialAllergens.push('nuts');

        const conflicts = userAllergies.filter(allergy => itemPotentialAllergens.includes(allergy));

        if (conflicts.length > 0) {
            allergyWarnings.push(`${menuItem.name} (possible: ${conflicts.join(', ')})`);
        }
    });

    if (allergyWarnings.length > 0) {
         allergyAlert.textContent = `⚠️ Allergy Alert: Your cart contains items that might conflict with your sensitivities: ${allergyWarnings.join('; ')}. Please double-check.`;
         allergyAlert.classList.remove('hidden');
    } else {
         allergyAlert.classList.add('hidden');
    }
 }

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    initializeDOMElements();

    // Initial setup calls
    renderMenu('all');
    populateDropdowns(); // Populates feedback food and timeslots
    renderCurrentOrder(); // Render the initial empty cart state
    updateQueueStatus();
    showRecommendation();
    updateSustainabilityStats();
    setupStarRating();

    // Set up periodic updates
    setInterval(updateQueueStatus, 60000); // 1 min
    setInterval(showRecommendation, 300000); // 5 mins
    setInterval(updateSustainabilityStats, 600000); // 10 mins

    // Expose functions needed by inline onclick handlers to the global scope
    window.renderMenu = renderMenu;
    window.addItemToOrder = addItemToOrder; // Changed from addItemToOrderForm
    window.submitOrder = submitOrder;
    window.submitFeedback = submitFeedback;
    window.login = login;
    // Note: Cart action handlers (increase, decrease, remove) are managed by event delegation
    // in initializeDOMElements, so they don't need to be global.
});
