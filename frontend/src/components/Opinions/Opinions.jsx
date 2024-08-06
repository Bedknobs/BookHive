import "./Opinions.css";

export default function Opinions() {
  return (
    <div className="opinionsContainer">
      <section className="individualOpinionContainer">
        <div className="starRating"></div>
        <p>
          &quot;BookHive es una herramienta increíble. Gracias a sus
          recomendaciones, he descubierto libros que se han convertido en mis
          favoritos. La comunidad es acogedora. ¡Recomendado 100%!&quot;
        </p>
        <p>Ana M.</p>
      </section>
      <div className="verticalDivider"></div>
      <section className="individualOpinionContainer">
        <div className="starRating"></div>
        <p>
          &quot;Las recomendaciones son siempre acertadas y me han permitido
          expandir mis horizontes literarios. Además, la interfaz es intuitiva y
          fácil de usar. ¡No puedo pedir más!&quot;
        </p>
        <p>Pedro L.</p>
      </section>
    </div>
  );
}
