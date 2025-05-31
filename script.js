document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');

  const secciones = {
    inicio: `
      <section class="section">

      <h2>Página web oficial del torneo 2025 de la Real Hermandad de Nuestro Padre Jesús Nazareno</h2>

        <img src="assets/images/cartel.jpeg" alt="Cartel 2025">
      </section>

      <section class="section">
      <h2>Nuestros equipos:</h2>
    <div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="assets/images/badge1.png" alt="Escudo 1" /></div>
    <div class="swiper-slide"><img src="assets/images/badge2.png" alt="Escudo 2" /></div>
    <div class="swiper-slide"><img src="assets/images/badge3.png" alt="Escudo 3" /></div>
    <div class="swiper-slide"><img src="assets/images/badge4.png" alt="Escudo 4" /></div>
    <div class="swiper-slide"><img src="assets/images/badge5.png" alt="Escudo 5" /></div>
    <div class="swiper-slide"><img src="assets/images/badge6.png" alt="Escudo 6" /></div>
    <div class="swiper-slide"><img src="assets/images/badge7.png" alt="Escudo 7" /></div>
    <div class="swiper-slide"><img src="assets/images/badge8.png" alt="Escudo 8" /></div>
    <div class="swiper-slide"><img src="assets/images/badge9.png" alt="Escudo 9" /></div>
    <!-- Añade más escudos si lo necesitas -->
  </div>
</div>
</section>

    <div class="minijuego-card" onclick="window.location.href='votacion.html'">
  <div class="minijuego-icono">🔮</div>
  <div class="minijuego-texto">
    <h3>Vota por tu equipo favorito</h3>
  <p>Haz clic en el botón para votar por el equipo que crees que ganará.</p>
  </div>
</div>

    <div class="minijuego-card" onclick="window.location.href='juego.html'">
  <div class="minijuego-icono">🎮</div>
  <div class="minijuego-texto">
    <h3>Juega a <em>Dribla al Demonio</em></h3>
    <p>Evita las tentaciones y recoge cruces. ¡Demuestra tu reflejo morao!</p>
  </div>
</div>

<div class="minijuego-card" onclick="window.location.href='radio.html'">
  <div class="minijuego-icono">🎵</div>
  <div class="minijuego-texto">
    <h3>Escucha nuestra música</h3>
    <p>Canciones del torneo, de Jesús y del pueblo. ¡Dale al play!</p>
  </div>
</div>

<div class="minijuego-card" onclick="window.location.href='trivial.html'">
  <div class="minijuego-icono">✅</div>
  <div class="minijuego-texto">
    <h3>Juega a nuestra versión del trivial critiana</h3>
    <p>Preguntas a cerca de Jesús, de la hermandad y del cristianismo</p>
  </div>
</div>



      <div class="patrocinadores">
  <span>Con el apoyo de:</span>
  <div class="logos-patrocinadores">
  <div class="logo-wrapper">
    <img src="assets/images/sponsor1.png" alt="Patrocinador 1">
  </div>
  <div class="logo-wrapper">
    <img src="assets/images/sponsor2.png" alt="Patrocinador 2">
  </div>
  <div class="logo-wrapper">
    <img src="assets/images/grupojoven.jpeg" alt="Patrocinador 3">
  </div>
</div>

</div>
<p></p>
<p></p>

    `,
    masculino: `
      <section class="section">

      <video autoplay loop muted playsinline style="max-width: 100%; display: block; margin: auto;">
  <source src="assets/images/jesusconstruyendo.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta de video.
</video>


        <h2>Partidos - Categoría Masculina</h2>
        <div class="partidos">
          <div class="partido">
            <p><strong>Los Tigres</strong> 2 - 1 <strong>La Peña</strong></p>
          </div>
          <div class="partido">
            <p><strong>Vecinos FC</strong> 0 - 0 <strong>Los Amigos</strong></p>
          </div>
        </div>

        <h2>Clasificación</h2>
        <table class="clasificacion">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Pts</th>
              <th>GF</th>
              <th>GC</th>
              <th>Dif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Los Tigres</td><td>3</td><td>2</td><td>1</td><td>+1</td></tr>
            <tr><td>Los Amigos</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Vecinos FC</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>La Peña</td><td>0</td><td>1</td><td>2</td><td>-1</td></tr>
          </tbody>
        </table>
      </section>
    `,
    femenino: `
      <section class="section">
        <h2>Partidos - Categoría Femenina</h2>
        <div class="partidos">
          <div class="partido">
            <p><strong>Los Tigres</strong> 2 - 1 <strong>La Peña</strong></p>
          </div>
          <div class="partido">
            <p><strong>Vecinos FC</strong> 0 - 0 <strong>Los Amigos</strong></p>
          </div>
        </div>

        <h2>Clasificación</h2>
        <table class="clasificacion">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Pts</th>
              <th>GF</th>
              <th>GC</th>
              <th>Dif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Los Tigres</td><td>3</td><td>2</td><td>1</td><td>+1</td></tr>
            <tr><td>Los Amigos</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Vecinos FC</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>La Peña</td><td>0</td><td>1</td><td>2</td><td>-1</td></tr>
          </tbody>
        </table>
      </section>
    `,
    infantil: `
      <section class="section">
        <h2>Partidos - Categoría Infantil</h2>
        <div class="partidos">
          <div class="partido">
            <p><strong>Los Tigres</strong> 2 - 1 <strong>La Peña</strong></p>
          </div>
          <div class="partido">
            <p><strong>Vecinos FC</strong> 0 - 0 <strong>Los Amigos</strong></p>
          </div>
        </div>

        <h2>Clasificación</h2>
        <table class="clasificacion">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Pts</th>
              <th>GF</th>
              <th>GC</th>
              <th>Dif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Los Tigres</td><td>3</td><td>2</td><td>1</td><td>+1</td></tr>
            <tr><td>Los Amigos</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Vecinos FC</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>La Peña</td><td>0</td><td>1</td><td>2</td><td>-1</td></tr>
          </tbody>
        </table>
      </section>
    `
  };

  // Función principal para cargar contenido y marcar como activo
function cargarSeccion(seccion) {
  document.getElementById("main-content").innerHTML =
    secciones[seccion] || `<section><h2>Sección no encontrada</h2></section>`;

  // Quitar clase activa de todos los enlaces
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.classList.remove("activo");
  });

  // Añadir clase activa al enlace correspondiente
  const enlaceActivo = document.querySelector(`.nav-links a[data-section="${seccion}"]`);
  if (enlaceActivo) {
    enlaceActivo.classList.add("activo");
  }

  // Scroll al principio
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (seccion === "inicio") {
    new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  
}

// Cuando el DOM esté cargado
window.addEventListener("DOMContentLoaded", () => {
  // Listener para los enlaces del menú
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const seccion = link.getAttribute("data-section");
      cargarSeccion(seccion);
    });
  });

  // Listener para el logo
  document.getElementById("logo-img").addEventListener("click", () => {
    cargarSeccion("inicio");
  });

  // Mostrar sección inicio por defecto
  cargarSeccion("inicio");
});




});
