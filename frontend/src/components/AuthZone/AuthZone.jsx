import "./AuthZone.css";

export default function AuthZone() {
  return (
    <div className="authZoneContainer">
      {/* Este es el nuevo div para la capa rosa */}
      <div className="pinkOverlay"></div>
      <section className="titleAndOptionsContainer">
        <h1 className="title">BookHive</h1>
        <p className="titleDescription">
          Un universo literario donde las páginas te conectan con almas afines.
        </p>
        <button className="loginButton">Iniciar sesión</button>
        <a href="" className="registerDescription">
          ¿Aún no tienes una cuenta?
          <span className="registerLink"> ¡Regístrate ahora!</span>
        </a>
      </section>
      <img src="../../../src/assets/images/coverImage.jpg" alt="" />
    </div>
  );
}
