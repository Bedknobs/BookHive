import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <section className="footerNavigation">
        <a href="">
          <p>Retos literarios</p>
        </a>
        <a href="">
          <p>Buscar libros</p>
        </a>
        <a href="">
          <p>Mi perfil</p>
        </a>
        <a href="">
          <p>Privacidad</p>
        </a>
        <a href="">
          <p>Términos y condiciones</p>
        </a>
      </section>
      <section className="footerSocialMedia">
        <a href="">
          <img src="../../../src/assets/icons/instagramIcon.svg" alt="" />
        </a>
        <a href="">
          <img src="../../../src/assets/icons/twitterIcon.svg" alt="" />
        </a>
        <a href="">
          <img src="../../../src/assets/icons/facebookIcon.svg" alt="" />
        </a>
      </section>
      <section>
        <p className="footerCopyright">© 2024 BookHive Ltd.</p>
      </section>
    </div>
  );
}
