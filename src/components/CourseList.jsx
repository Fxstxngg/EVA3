import CourseCard from "./CourseCard";

const CourseList = ({ courses, favorites, onToggleFavorite }) => {
 if (courses.length === 0) {
 return <p className="message">No se encontraron cursos.</p>;
 }

 const favoriteIds = new Set(favorites.map((fav) => fav.id));

 return (
 <section className="course-list">
 {courses.map((course) => {
 const isFavorite = favoriteIds.has(course.id);
 return (
 <CourseCard
 key={course.id}
 course={course}
 isFavorite={isFavorite}
 onToggleFavorite={onToggleFavorite}
 />
 );
 })}
 </section>
 );
};

export default CourseList;
