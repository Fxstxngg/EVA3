export const sanitizeText = (text) => {
 if (typeof text !== "string") return "";
 return text
 .replace(/</g, "&lt;")
 .replace(/>/g, "&gt;")
 .trim();
};
