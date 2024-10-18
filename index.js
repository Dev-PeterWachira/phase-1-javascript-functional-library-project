// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    // Convert collection to an array if it's an object
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    
    // Iterate through the collection
    for (let i = 0; i < items.length; i++) {
        callback(items[i], i, collection);
    }
    
    return collection; // Return the original collection
}

function myMap(collection, callback) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    
    for (let i = 0; i < items.length; i++) {
        result.push(callback(items[i], i, collection)); // Store transformed value
    }
    
    return result; // Return new array
}

function myReduce(collection, callback, acc) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc !== undefined ? acc : items[0];
    const startIndex = acc !== undefined ? 0 : 1;

    for (let i = startIndex; i < items.length; i++) {
        accumulator = callback(accumulator, items[i], collection); // Update accumulator
    }

    return accumulator; // Return the single value
}

function myFind(collection, predicate) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    
    for (let i = 0; i < items.length; i++) {
        if (predicate(items[i], i, collection)) {
            return items[i]; // Return first match
        }
    }
    
    return undefined; // Return undefined if no match found
}

function myFilter(collection, predicate) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    
    for (let i = 0; i < items.length; i++) {
        if (predicate(items[i], i, collection)) {
            result.push(items[i]); // Store matching value
        }
    }
    
    return result; // Return array of matches
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length; // Return size
}

// Array Functions
function myFirst(array, n) {
    return n ? array.slice(0, n) : array[0]; // Return first n elements or first element
}

function myLast(array, n) {
    return n ? array.slice(-n) : array[array.length - 1]; // Return last n elements or last element
}

// Object Functions
function myKeys(object) {
    return Object.keys(object); // Return array of keys
}

function myValues(object) {
    return Object.values(object); // Return array of values
}

// Bonus Functions
function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const valA = callback(a);
        const valB = callback(b);
        return valA < valB ? -1 : valA > valB ? 1 : 0; // Custom compare function
    });
}

function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (Array.isArray(item)) {
            if (shallow) {
                newArr.push(...item); // Flatten one level
            } else {
                myFlatten(item, false, newArr); // Recursively flatten
            }
        } else {
            newArr.push(item); // Add non-array item
        }
    }
    return newArr; // Return flattened array
}
