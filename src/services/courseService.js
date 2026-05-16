import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/posts";
export const getCourses = async () => {
 try {
 const response = await axios.get(API_URL);
 return response.data.map((item) => ({
 id: item.id,
 title: item.title,
 description: item.body,
 teacherId: item.userId,
 }));
 } catch (error) {
 console.error("Error al obtener los cursos:", error);
 throw new Error("No fue posible cargar los cursos.");
 }
};
