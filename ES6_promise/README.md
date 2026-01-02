# ES6 Promises

This project contains solutions for ES6 Promises tasks from Holberton School.

## Tasks

### 0. Keep every promise you make
**File:** `ES6_promise/0-promise.js`  
Function: `getResponseFromAPI()` - Returns a Promise.

### 1. Don't make a promise...if you know you can't keep it
**File:** `ES6_promise/1-promise.js`  
Function: `getFullResponseFromAPI(success)` - Returns a promise that resolves or rejects based on the success parameter.

### 2. Catch me if you can!
**File:** `ES6_promise/2-then.js`  
Function: `handleResponseFromAPI(promise)` - Handles promise resolution and rejection.

### 3. Handle multiple successful promises
**File:** `ES6_promise/3-all.js`  
Function: `handleProfileSignup()` - Uses Promise.all() to handle multiple promises.

### 4. Simple promise
**File:** `ES6_promise/4-user-promise.js`  
Function: `signUpUser(firstName, lastName)` - Returns a resolved promise.

### 5. Reject the promises
**File:** `ES6_promise/5-photo-reject.js`  
Function: `uploadPhoto(filename)` - Returns a rejected promise.

### 6. Handle multiple promises
**File:** `ES6_promise/6-final-user.js`  
Function: `handleProfileSignup(firstName, lastName, fileName)` - Uses Promise.allSettled().

### 7. Load balancer
**File:** `ES6_promise/7-load_balancer.js`  
Function: `loadBalancer(chinaDownload, USDownload)` - Uses Promise.race().

### 8. Throw error / try catch
**File:** `ES6_promise/8-try.js`  
Function: `divideFunction(numerator, denominator)` - Throws error for division by zero.

### 9. Throw an error
**File:** `ES6_promise/9-try.js`  
Function: `guardrail(mathFunction)` - Catches errors and returns results.

## Usage
```bash
cd ES6_promise
node 0-main.js  # Test task 0
