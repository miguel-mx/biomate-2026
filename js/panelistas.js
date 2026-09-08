// Panelista data + semblanza shown in the modal on index.html.
var PANELISTAS = {
  pedro: {
    name: "Pedro Márquez-Zacarías",
    org: "Wolfram Institute",
    img: "assets/pedro-marquez.png",
    resumen: [
      "Pedro Márquez-Zacarías es un científico Purépecha, interesado en el origen y evolución de la complejidad biológica. Pedro estudió Investigación Biomédica Básica en la Facultad de Medicina de la Universidad Nacional Autónoma de México, y después realizó un doctorado en Biología Cuantitativa en el Georgia Institute of Technology (Atlanta, USA). Terminando sus estudios realizó una estancia en el Santa Fe Institute (Santa Fe, USA) para estudiar complejidad biológica y la lingüística del Purépecha.",
      "Actualmente Pedro es investigador en el Wolfram Institute, estudiando fundamentos de la biología teórica y complejidad biológica."
    ]
  },
  nicolas: {
    name: "Nicolas Hengartner",
    org: "Los Alamos National Laboratory (LANL)",
    img: "assets/NICOLAS.png"
  },
  leticia: {
    name: "Lilia Leticia Ramírez Ramírez",
    org: "CIMAT",
    img: "assets/leticia-ramirez.png",
    resumen: [
      "La Dra. Lilia Leticia Ramírez Ramírez es investigadora Titular A en el Centro de Investigación en Matemáticas (CIMAT), donde forma parte del Área de Probabilidad y Estadística. Obtuvo la licenciatura en Ciencias por la Universidad Nacional Autónoma de México, la maestría en Estadística por la Universidad de Guanajuato y el CIMAT, y el doctorado en Estadística por la University of Waterloo, Canadá, con una tesis centrada en la dinámica de enfermedades infecciosas en poblaciones no homogéneas.",
      "Su investigación se enfoca en el desarrollo y aplicación de modelos estadísticos y computacionales para el estudio de fenómenos complejos, con especial interés en modelos epidémicos, redes complejas y aleatorias, problemas de clasificación y estadística computacional. Asimismo, ha trabajado en aplicaciones de la estadística a problemas de salud, medio ambiente y fenómenos sociales, contribuyendo al análisis cuantitativo de sistemas biológicos y epidemiológicos.",
      "La Dra. Ramírez Ramírez cuenta con más de 20 publicaciones científicas, un índice h superior a 10 y más de 460 citas. Es integrante del Sistema Nacional de Investigadoras e Investigadores (SNII), con nivel II, y actualmente es President-Elect de The International Environmetrics Society (TIES). Su trayectoria destaca por la integración de la estadística, la modelación matemática y la computación para abordar problemas interdisciplinarios en epidemiología, salud y ciencias ambientales."
    ]
  },
  eugenio: {
    name: "Eugenio Azpeitia",
    org: "UNAM",
    img: "assets/azpeitia.png"
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var modalEl = document.getElementById('panelistaModal');
  if (!modalEl || typeof bootstrap === 'undefined') return;

  var modal = new bootstrap.Modal(modalEl);
  var titleEl = modalEl.querySelector('.modal-title');
  var photoEl = modalEl.querySelector('.plenaria-modal-photo');
  var nameEl = modalEl.querySelector('.plenaria-modal-name');
  var orgEl = modalEl.querySelector('.plenaria-modal-org');
  var resumenEl = modalEl.querySelector('.plenaria-modal-resumen');

  document.querySelectorAll('.panelista .plenaria-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var data = PANELISTAS[card.dataset.key];
      if (!data) return;

      titleEl.textContent = data.name;
      photoEl.src = data.img;
      photoEl.alt = data.name;
      nameEl.textContent = data.name;
      orgEl.textContent = data.org;

      if (data.resumen) {
        resumenEl.innerHTML = data.resumen.map(function (p) { return '<p>' + p + '</p>'; }).join('');
      } else {
        resumenEl.innerHTML = '<p>Semblanza próximamente.</p>';
      }

      modal.show();
    });
  });
});
