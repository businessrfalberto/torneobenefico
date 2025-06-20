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
    <div class="swiper-slide"><img src="assets/images/badge_1.png" alt="Escudo 1" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_2.png" alt="Escudo 2" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_3.png" alt="Escudo 3" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_4.png" alt="Escudo 4" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_5.png" alt="Escudo 5" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_6.png" alt="Escudo 6" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_7.png" alt="Escudo 7" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_8.png" alt="Escudo 8" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_9.png" alt="Escudo 9" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_10.png" alt="Escudo 10" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_11.png" alt="Escudo 11" /></div>
    <div class="swiper-slide"><img src="assets/images/badge_12.png" alt="Escudo 12" /></div>
    <!-- Añade más escudos si lo necesitas -->
  </div>
</div>
</section>


<div class="minijuego-card" onclick="window.location.href='formato.html'">
  <div class="minijuego-icono">
    <img src="assets/images/perro.jpg" alt="Formato" class="icono-img">
  </div>
  <div class="minijuego-texto">
    <h3>Formato del torneo 2025</h3>
    <p>Descubre el funcionamiento del torneo de los moraos 2025</p>
  </div>
</div>


<div class="minijuego-card" onclick="window.location.href='noticias.html'">
  <div class="minijuego-icono">📰</div>
  <div class="minijuego-texto">
    <h3>Torneo Morao - Últimas Noticias</h3>
    <p>No te quedes atrás y descubre las últimas noticias y novedades.</p>
  </div>
</div>


    <div class="minijuego-card" onclick="window.location.href='votosEquipacion.html'">
  <div class="minijuego-icono">📝</div>
  <div class="minijuego-texto">
    <h3>Vota por tu equipación favorita</h3>
  <p>Haz clic en el botón para votar por la equipación que más te ha gustado.</p>
  </div>
</div>

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

<div class="minijuego-card" onclick="window.location.href='equipos.html'">
  <div class="minijuego-icono">👥</div>
  <div class="minijuego-texto">
    <h3>Conoce a los equipos</h3>
    <p>Descubre quiénes son los jugadores que forman parte del torneo.</p>
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
    <img src="assets/images/grupojoven.jpeg" alt="Patrocinador 3">
  </div>
</div>

</div>
<p></p>
<p></p>

    `,
    masculino: `
    
      <main class="section">
        <h2>Partidos - Categoría Masculina<br></h2>

        <h3>Grupo A</h3>
        <div id="partidos-GrupoA"></div>
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
            <tbody id="tabla-GrupoA"></tbody>
        </table>

        <h3>Grupo B</h3>
        <div id="partidos-GrupoB"></div>
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
            <tbody id="tabla-GrupoB"></tbody>
        </table>

        <h2>Eliminatorias</h2>
        <div class="eliminatorias-bracket">
            <div class="fase"><strong>Semifinal 1</strong>
                <p id="Semifinal1">Cargando...</p>
            </div>
            <div class="fase"><strong>Semifinal 2</strong>
                <p id="Semifinal2">Cargando...</p>
            </div>
            <div class="final"><strong>Final</strong>
                <p id="Final">Cargando...</p>
            </div>
        </div>

        <div id="celebracion" style="display:none;">
  <canvas id="fireworksCanvas"></canvas>
  <div id="ganadorFinal" class="ganador-animado"></div>
</div>

    </main>
    
    `,
    femenino: `
  <section class="section">
    <h2>Final - Categoría Femenina<br></h2>

    <div class="partido">
      <p>Partido de ida:<br> <span id="res_ida">Cargando...</span><br>Hora: <span id="hora_ida">Cargando...</span></p>
    </div>
    <div class="partido">
      <p>Partido de vuelta:<br> <span id="res_vuelta">Cargando...</span><br>Hora: <span id="hora_vuelta">Cargando...</span></p>
    </div>

    <div class="ganador" id="ganador" style="display: none; text-align: center; margin-top: 40px;">
      <div class="cohetes" style="font-size: 2rem; animation: bounce 1s infinite alternate;">🎆 🎉 🎆</div>
      <h3></h3>
      <div class="cohetes" style="font-size: 2rem; animation: bounce 1s infinite alternate;">🎆 🎉 🎆</div>
    </div>
  </section>
  <div id="celebracion" style="display:none;">
  <canvas id="fireworksCanvas"></canvas>
  <div id="ganadorFinal" class="ganador-animado"></div>
</div>
`,
    infantil: `
       <section class="section">
    <h2>Final - Categoría Infantil<br></h2>

    <div class="partido">
      <p id="ida">Partido de ida: Cargando...</p>
      <p id="hora_ida">Hora: Cargando...</p>
    </div>
    <div class="partido">
      <p id="vuelta">Partido de vuelta: Cargando...</p>
      <p id="hora_vuelta">Hora: Cargando...</p>
    </div>

    <div class="ganador" id="ganador" style="display: none; text-align: center; margin-top: 40px;">
      <div class="cohetes" style="font-size: 2rem; animation: bounce 1s infinite alternate;">🎆 🎉 🎆</div>
      <h3></h3>
      <div class="cohetes" style="font-size: 2rem; animation: bounce 1s infinite alternate;">🎆 🎉 🎆</div>
    </div>
  </section>

  <div id="celebracion" style="display:none;">
    <canvas id="fireworksCanvas"></canvas>
    <div id="ganadorFinal" class="ganador-animado"></div>
  </div>
    `
  };

  // Función principal para cargar contenido y marcar como activo
  function cargarSeccion(seccion) {
    // Ocultar celebración si cambiamos de sección
    const celebracion = document.getElementById("celebracion");
    if (celebracion) celebracion.style.display = "none";

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

    if (seccion === "masculino") {
      import("https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js").then(({ initializeApp }) => {
        import("https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js").then(({ getDatabase, ref, onValue }) => {
          const firebaseConfig = {
            apiKey: "AIzaSyCCF4BVOoud_Tg_SE0WiUAbtBSAPzCx-1k",
            authDomain: "torneo-moraos.firebaseapp.com",
            databaseURL: "https://torneo-moraos-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "torneo-moraos",
            storageBucket: "torneo-moraos.appspot.com",
            messagingSenderId: "1097042355622",
            appId: "1:1097042355622:web:2d3e0a270f8a84bdbddb67"
          };

          const app = initializeApp(firebaseConfig);
          const db = getDatabase(app);
          const grupos = ["GrupoA", "GrupoB"];

          function calcularClasificacion(partidos) {
            const equipos = {};
            const detalles = [];

            for (const key in partidos) {
              const p = partidos[key];
              const equipo1 = p.equipo1;
              const equipo2 = p.equipo2;
              const g1 = parseInt(p.goles1);
              const g2 = parseInt(p.goles2);

              if (g1 === -1 && g2 === -1) {
                detalles.push(`<div class="partido"><p><strong>${equipo1}</strong> vs <strong>${equipo2}</strong> (Pendiente)<br>Hora: ${p.hora || 'Por confirmar'}</p></div>`);
                continue;
              }

              if (!equipos[equipo1]) equipos[equipo1] = { pts: 0, gf: 0, gc: 0 };
              if (!equipos[equipo2]) equipos[equipo2] = { pts: 0, gf: 0, gc: 0 };

              // Ahora sí: sumar goles y puntos
              equipos[equipo1].gf += g1;
              equipos[equipo1].gc += g2;
              equipos[equipo2].gf += g2;
              equipos[equipo2].gc += g1;

              if (g1 > g2) equipos[equipo1].pts += 3;
              else if (g1 < g2) equipos[equipo2].pts += 3;
              else {
                equipos[equipo1].pts += 1;
                equipos[equipo2].pts += 1;
              }

              detalles.push(`<div class="partido"><p><strong>${equipo1}</strong> ${g1} - ${g2} <strong>${equipo2}</strong><br>Hora: ${p.hora || 'Por confirmar'}</p></div>`);

            }

            const clasificacion = Object.entries(equipos).map(([nombre, stats]) => ({
              nombre,
              ...stats,
              dif: stats.gf - stats.gc
            })).sort((a, b) => b.pts - a.pts || b.gf - a.gf);

            return { clasificacion, detalles };
          }

          grupos.forEach(grupo => {
            const refGrupo = ref(db, `ResultadosMasculino/${grupo}/partidos`);
            onValue(refGrupo, snapshot => {
              if (snapshot.exists()) {
                const partidos = snapshot.val();
                const { clasificacion, detalles } = calcularClasificacion(partidos);

                const tabla = document.getElementById(`tabla-${grupo}`);
                if (tabla) {
                  tabla.innerHTML = clasificacion.map(eq => `
                <tr>
                  <td>${eq.nombre}</td>
                  <td>${eq.pts}</td>
                  <td>${eq.gf}</td>
                  <td>${eq.gc}</td>
                  <td>${eq.dif > 0 ? '+' : ''}${eq.dif}</td>
                </tr>`).join('');
                }

                const partidosDiv = document.getElementById(`partidos-${grupo}`);
                if (partidosDiv) {
                  partidosDiv.innerHTML = detalles.join('');
                }
              }
            });
          });

          const elimRef = ref(db, "ResultadosMasculino/Eliminatoria");
          onValue(elimRef, snap => {
            if (snap.exists()) {
              const datos = snap.val();
              for (const key in datos) {
                const celda = document.getElementById(key);
                const partido = datos[key];
                if (celda && partido.equipo1 && partido.equipo2) {
                  const g1 = parseInt(partido.goles1);
                  const g2 = parseInt(partido.goles2);
                  if (g1 === -1 && g2 === -1) {
                    celda.innerHTML = `<strong>${partido.equipo1}</strong> vs <strong>${partido.equipo2}</strong> (Pendiente)<br>Hora: ${partido.hora || '??:??h'}`;
                  } else {
                    celda.innerHTML = `<strong>${partido.equipo1}</strong> ${g1} - ${g2} <strong>${partido.equipo2}</strong><br>Hora: ${partido.hora || '??:??h'}`;

                    if (key === "Final") {
                      const celebracion = document.getElementById("celebracion");
                      const ganadorFinal = document.getElementById("ganadorFinal");
                      if (celebracion && ganadorFinal) {
                        const equipoGanador = g1 > g2 ? partido.equipo1 : partido.equipo2;
                        celebracion.style.display = "block";
                        ganadorFinal.textContent = `🏆 ${equipoGanador}`;

                        lanzarFuegosArtificiales();
                      }

                    }
                  }
                }
              }
            }
          });

        });
      });
    }
    if (seccion === "femenino") {
      import("https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js").then(({ initializeApp }) => {
        import("https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js").then(({ getDatabase, ref, onValue }) => {
          const firebaseConfig = {
            apiKey: "AIzaSyCCF4BVOoud_Tg_SE0WiUAbtBSAPzCx-1k",
            authDomain: "torneo-moraos.firebaseapp.com",
            databaseURL: "https://torneo-moraos-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "torneo-moraos",
            storageBucket: "torneo-moraos.appspot.com",
            messagingSenderId: "1097042355622",
            appId: "1:1097042355622:web:2d3e0a270f8a84bdbddb67"
          };

          const app = initializeApp(firebaseConfig);
          const db = getDatabase(app);

          const resIda = document.getElementById("res_ida");
          const resVuelta = document.getElementById("res_vuelta");
          const horaIda = document.getElementById("hora_ida");
          const horaVuelta = document.getElementById("hora_vuelta");
          const ganadorDiv = document.getElementById("ganador");

          let resultadoIda = null;
          let resultadoVuelta = null;

          onValue(ref(db, "ResultadosFemenino/ida"), (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              if (esPendiente(data.resultado)) {
                resIda.textContent = "Pendiente";
              } else {
                resIda.textContent = data.resultado;
                resultadoIda = data.resultado;
              }
              horaIda.textContent = data.hora || "Por confirmar";
              setTimeout(verificarGanador, 200);

            }
          });

          onValue(ref(db, "ResultadosFemenino/vuelta"), (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              if (esPendiente(data.resultado)) {
                resVuelta.textContent = "Pendiente";
              } else {
                resVuelta.textContent = data.resultado;
                resultadoVuelta = data.resultado;
              }
              horaVuelta.textContent = data.hora || "Por confirmar";
              setTimeout(verificarGanador, 200);

            }
          });

          function esPendiente(res) {
            return res.includes(" -1 - -1 ");
          }

          function verificarGanador() {
            if (resultadoIda && resultadoVuelta) {
              const total = calcularGanador(resultadoIda, resultadoVuelta);
              ganadorDiv.querySelector("h3").textContent = `🏆 ¡${total.ganador} gana la final!`;
              ganadorDiv.style.display = "block";

              if (total.ganador !== "Empate") {
                const celebracion = document.getElementById("celebracion");
                const ganadorFinal = document.getElementById("ganadorFinal");
                if (celebracion && ganadorFinal) {
                  celebracion.style.display = "block";
                  ganadorFinal.textContent = `🏆 ${total.ganador}`;
                  lanzarFuegosArtificiales();
                }
              }
            }
          }


          function calcularGanador(res1, res2) {
            const [equipoA1, golesA1, golesB1, equipoB1] = parseResultado(res1);
            const [equipoA2, golesA2, golesB2, equipoB2] = parseResultado(res2);




            // Verificamos si los equipos son los mismos en ida y vuelta
            let golesEquipo1, golesEquipo2, equipo1, equipo2;

            if (equipoA1 === equipoA2) {
              equipo1 = equipoA1;
              equipo2 = equipoB1;
              golesEquipo1 = parseInt(golesA1) + parseInt(golesA2);
              golesEquipo2 = parseInt(golesB1) + parseInt(golesB2);
            } else {
              equipo1 = equipoA1;
              equipo2 = equipoB1;
              golesEquipo1 = parseInt(golesA1) + parseInt(golesB2);
              golesEquipo2 = parseInt(golesB1) + parseInt(golesA2);
            }

            const ganador = golesEquipo1 > golesEquipo2
              ? equipo1
              : golesEquipo2 > golesEquipo1
                ? equipo2
                : "Empate";

            return { ganador, golesEquipo1, golesEquipo2 };
          }


          function parseResultado(resultado) {
            const partes = resultado.match(/^(.+?) (\d+) - (\d+) (.+)$/);

            return [partes[1], partes[2], partes[3], partes[4]]; // equipoA, golesA, golesB, equipoB
          }


        });
      });
    }

    if (seccion === "infantil") {
      import("https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js").then(({ initializeApp }) => {
        import("https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js").then(({ getDatabase, ref, onValue }) => {
          const firebaseConfig = {
            apiKey: "AIzaSyCCF4BVOoud_Tg_SE0WiUAbtBSAPzCx-1k",
            authDomain: "torneo-moraos.firebaseapp.com",
            databaseURL: "https://torneo-moraos-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "torneo-moraos",
            storageBucket: "torneo-moraos.appspot.com",
            messagingSenderId: "1097042355622",
            appId: "1:1097042355622:web:2d3e0a270f8a84bdbddb67"
          };

          const app = initializeApp(firebaseConfig);
          const db = getDatabase(app);

          const partidoIda = document.getElementById("ida");
          const horaIda = document.getElementById("hora_ida");
          const partidoVuelta = document.getElementById("vuelta");
          const horaVuelta = document.getElementById("hora_vuelta");
          const ganadorDiv = document.getElementById("ganador");

          let resultadoIda = null;
          let resultadoVuelta = null;

          onValue(ref(db, "ResultadosInfantil/ida"), (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              if (data.resultado.includes("-1")) {
                partidoIda.textContent = "Partido de ida: Pendiente";
              } else {
                partidoIda.textContent = `Partido de ida: ${data.resultado}`;
                resultadoIda = data.resultado;
              }
              horaIda.textContent = `Hora: ${data.hora || "Por confirmar"}`;
              verificarGanador();
            }
          });

          onValue(ref(db, "ResultadosInfantil/vuelta"), (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              if (data.resultado.includes("-1")) {
                partidoVuelta.textContent = "Partido de vuelta: Pendiente";
              } else {
                partidoVuelta.textContent = `Partido de vuelta: ${data.resultado}`;
                resultadoVuelta = data.resultado;
              }
              horaVuelta.textContent = `Hora: ${data.hora || "Por confirmar"}`;
              verificarGanador();
            }
          });

          function verificarGanador() {
            if (resultadoIda && resultadoVuelta) {
              if (resultadoIda.includes("X") || resultadoVuelta.includes("X")) {
                ganadorDiv.style.display = "none";
                return;
              }

              const total = calcularGanador(resultadoIda, resultadoVuelta);
              ganadorDiv.querySelector("h3").textContent = `🏆 ¡${total.ganador} gana la final!`;
              ganadorDiv.style.display = "block";

              if (total.ganador !== "Empate") {
                const celebracion = document.getElementById("celebracion");
                const ganadorFinal = document.getElementById("ganadorFinal");
                if (celebracion && ganadorFinal) {
                  celebracion.style.display = "block";
                  ganadorFinal.textContent = `🏆 ${total.ganador}`;
                  lanzarFuegosArtificiales();
                }
              }
            }
          }

          function calcularGanador(res1, res2) {
            const [equipoA1, golesA1, equipoB1, golesB1] = parseResultado(res1);
            const [equipoA2, golesB2, equipoB2, golesA2] = parseResultado(res2);
            const golesEquipo1 = parseInt(golesA1) + parseInt(golesA2);
            const golesEquipo2 = parseInt(golesB1) + parseInt(golesB2);
            const ganador = golesEquipo1 > golesEquipo2 ? equipoA1 : golesEquipo2 > golesEquipo1 ? equipoB1 : "Empate";
            return { ganador, golesEquipo1, golesEquipo2 };
          }

          function parseResultado(resultado) {
            const partes = resultado.match(/(.+?) (\d+) - (\d+) (.+)/);

            return [partes[1], partes[2], partes[4], partes[3]];
          }
        });
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

function toggleLegal() {
  const content = document.getElementById("legalContent");
  if (content) {
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
}

function lanzarFuegosArtificiales() {
  setTimeout(() => {
    const canvas = document.getElementById("fireworksCanvas");
    if (!canvas) {
      console.error("No se encontró el canvas de fuegos artificiales.");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("No se pudo obtener el contexto 2D del canvas.");
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];

    function crearParticula(x, y, color) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 5 + 2;
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color,
      };
    }

    function crearFuego() {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height / 2;
      const color = `hsl(${Math.random() * 360}, 100%, 70%)`;
      for (let i = 0; i < 50; i++) {
        fireworks.push(crearParticula(x, y, color));
      }
    }

    function animar() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.01;
        if (p.alpha <= 0) {
          fireworks.splice(i, 1);
        } else {
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animar);
    }

    setInterval(crearFuego, 500);
    animar();
  }, 100); // Espera 100 ms para asegurar que el canvas está en el DOM
}

