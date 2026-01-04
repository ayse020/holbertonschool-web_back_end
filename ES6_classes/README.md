# ES6 Classes

This directory contains solutions for the ES6 Classes module in the Holberton School Web Back End curriculum.

## Tasks

### 0. ClassRoom
Implement a class named `ClassRoom`:
- Prototype: `export default class ClassRoom`
- Accepts one attribute named `maxStudentsSize` (Number)
- Assigned to `_maxStudentsSize`

### 1. Initialize Rooms
Implement a function named `initializeRooms`:
- Returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34

### 2. Holberton Course
Implement a class named `HolbertonCourse`:
- Attributes: `name` (String), `length` (Number), `students` (Array of Strings)
- Each attribute has getter and setter with type validation

### 3. Currency
Implement a class named `Currency`:
- Attributes: `code` (String), `name` (String)
- Method: `displayFullCurrency()` returns "name (code)"

### 4. Pricing
Implement a class named `Pricing`:
- Attributes: `amount` (Number), `currency` (Currency instance)
- Method: `displayFullPrice()` returns "amount currency_name (currency_code)"
- Static method: `convertPrice(amount, conversionRate)`

### 5. Building
Implement a class named `Building`:
- Attribute: `sqft` (Number)
- Abstract class: requires extending classes to implement `evacuationWarningMessage()`

### 6. Sky High Building
Implement a class named `SkyHighBuilding` extending `Building`:
- Additional attribute: `floors` (Number)
- Override `evacuationWarningMessage()` method

### 7. Airport
Implement a class named `Airport`:
- Attributes: `name` (String), `code` (String)
- Default string description returns `[object CODE]`

### 8. Holberton Class
Implement a class named `HolbertonClass`:
- Attributes: `size` (Number), `location` (String)
- Number coercion returns `size`
- String coercion returns `location`

### 9. Hoisting
Fix hoisting issues in provided code

### 10. Car
Implement a class named `Car`:
- Attributes: `brand`, `motor`, `color`
- Method: `cloneCar()` returns a new object of the same class

## Usage

```javascript
// Example for Task 0
import ClassRoom from './0-classroom.js';
const room = new ClassRoom(10);
console.log(room._maxStudentsSize); // 10
