import "./Features.css";

export default function Features() {
  return (
    <div className="featuresContainer">
      <section className="communityDescription">
        <h4>Únete a nuestra comunidad</h4>
        <p>
          En BookHive, no solo encuentras libros, sino también una comunidad
          vibrante de lectores apasionados. Únete a foros de discusión,
          participa en grupos de lectura y comparte tus experiencias literarias
          con otros miembros. Nuestra comunidad es el lugar perfecto para
          conectar con personas que comparten tu amor por los libros. ¡Ven y sé
          parte de nuestras charlas literarias!
        </p>
      </section>
      <section className="characteristicsContainer">
        <div>
          <img
            src="../../../src/assets/icons/listIcon.svg"
            alt="Icono de lista de lectura"
          />
          <h6 className="characteristicsDescription">Listas de Lectura</h6>
        </div>
        <div>
          <img
            src="../../../src/assets/icons/recommendationsIcon.svg"
            alt="Icono de recomendaciones personalizadas"
          />
          <h6 className="characteristicsDescription">Recomendaciones Personalizadas</h6>
        </div>
        <div>
          <img
            src="../../../src/assets/icons/reviewsIcon.svg"
            alt="Icono de reseña de usuarios"
          />
          <h6 className="characteristicsDescription">Reseñas de Usuarios</h6>
        </div>
      </section>
    </div>
  );
}
