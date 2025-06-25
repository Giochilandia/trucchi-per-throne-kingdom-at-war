/**
 * GiochilandiaStorage - Simple Local Storage Manager
 * Author: Giochilandia
 * License: Custom
 */

const GiochilandiaStorage = {
    /**
     * Saves a key-value pair in LocalStorage.
     * @param {string} key - The storage key.
     * @param {any} value - The value to store (will be stringified).
     */
    set(key, value) {
        if (typeof key !== 'string' || key.trim() === '') {
            console.error('[GiochilandiaStorage] Invalid storage key.');
            return;
        }
        try {
            localStorage.setItem(key, JSON.stringify(value));
            console.log(`[GiochilandiaStorage] Saved key "${key}".`);
        } catch (err) {
            console.error('[GiochilandiaStorage] Failed to save data:', err);
        }
    },

    /**
     * Retrieves a value from LocalStorage.
     * @param {string} key - The storage key.
     * @returns {any} - Parsed value or null if not found.
     */
    get(key) {
        if (typeof key !== 'string' || key.trim() === '') {
            console.error('[GiochilandiaStorage] Invalid storage key.');
            return null;
        }
        const item = localStorage.getItem(key);
        try {
            return item ? JSON.parse(item) : null;
        } catch {
            console.warn('[GiochilandiaStorage] Failed to parse stored data.');
            return null;
        }
    },

    /**
     * Removes a key from LocalStorage.
     * @param {string} key - The storage key.
     */
    remove(key) {
        if (typeof key !== 'string' || key.trim() === '') {
            console.error('[GiochilandiaStorage] Invalid storage key.');
            return;
        }
        localStorage.removeItem(key);
        console.log(`[GiochilandiaStorage] Removed key "${key}".`);
    }
};

// Example usage:
// GiochilandiaStorage.set('score', 150);
// console.log(GiochilandiaStorage.get('score')); // Output: 150
// GiochilandiaStorage.remove('score');

module.exports = GiochilandiaStorage;
