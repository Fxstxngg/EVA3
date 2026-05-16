import { sanitizeText } from "../utils/sanitize";

const CourseCard = ({ course, isFavorite, onToggleFavorite }) => {
 const {
 title = "Título no disponible",
 description = "Descripción no disponible",
 teacherId = "N/A",
 } = course || {};

 const safeTitle = sanitizeText(title);
 const safeDescription = sanitizeText(description);
 const safeTeacherId = sanitizeText(String(teacherId));

 return (
 <article className="course-card">
 <h2>{safeTitle}</h2>
 <p>{safeDescription}</p>
 <small>Docente ID: {safeTeacherId}</small>
 <button
 type="button"
 aria-pressed={isFavorite}
 onClick={() => onToggleFavorite(course)}
 className={isFavorite ? "btn favorite" : "btn"}
 >
 {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
 </button>
 </article>
 );
};

export default CourseCard;
