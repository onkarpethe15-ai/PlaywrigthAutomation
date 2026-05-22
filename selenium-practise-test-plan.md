# Selenium Practise Website Test Plan

## Application Overview

This test plan covers the functionality of the Selenium Practise website, focusing on the shopping cart, product search, and checkout process.

## Test Scenarios

### 1. Shopping Cart Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Add Items to Cart

**File:** `tests/shopping-cart/add-to-cart.spec.ts`

**Steps:**
  1. Navigate to the website
    - expect: The homepage should load successfully.
  2. Search for a product (e.g., 'Brocolli')
    - expect: The product list should filter to show relevant results.
  3. Click the 'ADD TO CART' button for a product
    - expect: The product should be added to the cart.
    - expect: The cart icon should update to reflect the new item count.

#### 1.2. Remove Items from Cart

**File:** `tests/shopping-cart/remove-from-cart.spec.ts`

**Steps:**
  1. Add an item to the cart
    - expect: The item should appear in the cart.
  2. Open the cart preview
    - expect: The cart preview should display the added item.
  3. Click the 'Remove' button for the item
    - expect: The item should be removed from the cart.
    - expect: The cart icon should update to reflect the new item count.

#### 1.3. Update Item Quantity

**File:** `tests/shopping-cart/update-quantity.spec.ts`

**Steps:**
  1. Add an item to the cart
    - expect: The item should appear in the cart.
  2. Increase the quantity using the '+' button
    - expect: The quantity should increase.
    - expect: The total price should update accordingly.
  3. Decrease the quantity using the '-' button
    - expect: The quantity should decrease.
    - expect: The total price should update accordingly.

### 2. Checkout Process

**Seed:** `tests/seed.spec.ts`

#### 2.1. Complete Checkout

**File:** `tests/checkout/checkout.spec.ts`

**Steps:**
  1. Add items to the cart
    - expect: The items should appear in the cart.
  2. Click the 'PROCEED TO CHECKOUT' button
    - expect: The checkout page should load.
  3. Select a country from the dropdown
    - expect: The selected country should be displayed.
  4. Click the 'Place Order' button
    - expect: An order confirmation message should appear.

### 3. Search Functionality

**Seed:** `tests/seed.spec.ts`

#### 3.1. Search for Products

**File:** `tests/search/search-products.spec.ts`

**Steps:**
  1. Enter a product name in the search bar (e.g., 'Tomato')
    - expect: The product list should filter to show relevant results.
  2. Clear the search bar
    - expect: The product list should reset to show all products.
