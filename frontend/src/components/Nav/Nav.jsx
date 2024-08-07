import "./Nav.css";

export default function Nav() {
  return (
    <>
      <div className="navContainer">
        <section>
          <h1 className="navLogo">BookHive</h1>
        </section>
        <section className="navOptions">
          <a href="">
            <p>Inicio</p>
          </a>
          <a href="">
            <p>Retos literarios</p>
          </a>
          <a href="">
            <p>Buscar libros</p>
          </a>
          <a href="">
            <img src="../../../src/assets/icons/userIcon.svg" alt="Perfil" />
          </a>
        </section>
      </div>
      <div className="divisorLine"></div>
    </>
  );
}
