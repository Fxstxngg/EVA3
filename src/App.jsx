import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CourseList from "./components/CourseList";
import { getCourses } from "./services/courseService";
import { useLocalStorage } from "./hooks/useLocalStorage";
function App() {
 const [courses, setCourses] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const [teacherFilter, setTeacherFilter] = useState("");
 const [favorites, setFavorites] = useLocalStorage("favoriteCourses",
[]);
 const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState("");
 const loadCourses = async () => {
 try {
 setLoading(true);
 setError("");
 const data = await getCourses();
 setCourses(data);
 } catch (error) {
 setError(error.message || "Ocurrió un error inesperado.");
 } finally {
 setLoading(false);
 }
 };
 useEffect(() => {
 loadCourses();
 }, []);

useEffect(() => {
 document.documentElement.classList.toggle("dark", Boolean(darkMode));
}, [darkMode]);
 const filteredCourses = useMemo(() => {
 const normalizedSearch = searchTerm.toLowerCase().trim();
 return courses
 .filter((course) => course.title.toLowerCase().includes(normalizedSearch))
 .filter((course) => (teacherFilter ? String(course.teacherId) === String(teacherFilter) : true));
}, [courses, searchTerm, teacherFilter]);

// obtener lista de docentes únicos
const teacherIds = useMemo(() => {
 const ids = Array.from(new Set(courses.map((c) => String(c.teacherId))));
 return ids.sort((a, b) => Number(a) - Number(b));
}, [courses]);

// contador de favoritos por docente
const favoritesByTeacher = useMemo(() => {
 return favorites.reduce((acc, course) => {
 const id = String(course.teacherId ?? "N/A");
 acc[id] = (acc[id] || 0) + 1;
 return acc;
 }, {});
}, [favorites]);
 const handleToggleFavorite = (course) => {
 const exists = favorites.some((fav) => fav.id === course.id);
 if (exists) {
 const updatedFavorites = favorites.filter((fav) => fav.id !==
course.id);
 setFavorites(updatedFavorites);
 return;
 }
 setFavorites([...favorites, course]);
 };
	return (
	<main className="app">
	<Header />
	<section className="summary">
	<p>Total de cursos: {courses.length}</p>
	<p>Favoritos: {favorites.length}</p>
	</section>

	<section className="controls">
	<SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

	<div className="select-wrap">
	<label htmlFor="teacher-filter">Filtrar por docente:</label>
	<select
	id="teacher-filter"
	value={teacherFilter}
	onChange={(e) => setTeacherFilter(e.target.value)}
	>
	<option value="">Todos</option>
	{teacherIds.map((id) => (
	<option key={id} value={id}>{`Docente ${id}`}</option>
	))}
	</select>
	</div>

	<div className="dark-toggle">
	<label htmlFor="dark-mode">Modo oscuro:</label>
	<button
	id="dark-mode"
	type="button"
	className="btn"
	onClick={() => setDarkMode((v) => !v)}
	>
	{darkMode ? "Desactivar" : "Activar"}
	</button>
	</div>

	<div className="fav-counts">
	<strong>Favoritos por docente:</strong>
	<ul>
	{teacherIds.length === 0 && <li>No hay docentes aún</li>}
	{teacherIds.map((id) => (
	<li key={id}>{`Docente ${id}: ${favoritesByTeacher[id] || 0}`}</li>
	))}
	</ul>
	</div>
	</section>
 {loading && <p className="message">Cargando cursos...</p>}
 {error && (
 <div className="error">
 <p>{error}</p>
 <button type="button" onClick={loadCourses}>
 Reintentar
 </button>
 </div>
 )}
 {!loading && !error && (
 <CourseList
 courses={filteredCourses}
 favorites={favorites}
 onToggleFavorite={handleToggleFavorite}
 />
 )}
 </main>
 );
}
export default App;