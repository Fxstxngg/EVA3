import { useCallback, useEffect, useState } from "react";

const isLocalStorageAvailable = () => {
 try {
 const testKey = "__local_storage_test__";
 window.localStorage.setItem(testKey, "1");
 window.localStorage.removeItem(testKey);
 return true;
 } catch {
 return false;
 }
};

const parseStoredValue = (storedValue, fallback) => {
 if (typeof storedValue !== "string") return fallback;
 try {
 return JSON.parse(storedValue);
 } catch {
 return fallback;
 }
};

export const useLocalStorage = (key, initialValue) => {
 const [value, setValue] = useState(() => {
 if (typeof key !== "string" || !isLocalStorageAvailable()) {
 return initialValue;
 }
 return parseStoredValue(window.localStorage.getItem(key), initialValue);
 });

 const setStoredValue = useCallback(
 (nextValue) => {
 setValue((currentValue) => {
 const valueToStore =
 typeof nextValue === "function"
 ? nextValue(currentValue)
 : nextValue;

 if (typeof key === "string" && isLocalStorageAvailable()) {
 try {
 window.localStorage.setItem(key, JSON.stringify(valueToStore));
 } catch (error) {
 console.error("Error guardando en localStorage:", error);
 }
 }

 return valueToStore;
 });
 },
 [key]
 );

 useEffect(() => {
 if (typeof key !== "string" || !isLocalStorageAvailable()) {
 return;
 }
 try {
 window.localStorage.setItem(key, JSON.stringify(value));
 } catch (error) {
 console.error("Error guardando en localStorage:", error);
 }
 }, [key, value]);

 return [value, setStoredValue];
};