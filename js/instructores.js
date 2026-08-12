// Instructor photos + semblanzas shown in the modal on proyecto-investigacion pages.
// Entries with img/bio set to null render a placeholder until the material is available.
var INSTRUCTORES = {
  "Andrei A. González Galeano": {
    img: null,
    bio: null
  },
  "Imelda Trejo Lorenzo": {
    img: "assets/IMELDA.png",
    bio: [
      "Es doctora en Matemáticas por la Universidad de Texas y cuenta con formación en Matemáticas Aplicadas en el CIMAT y en la Universidad Autónoma del Estado de Hidalgo. Ha realizado estancias posdoctorales en instituciones internacionales de alto prestigio, como el Fred Hutchinson Cancer Research Center, los Centros para el Control y la Prevención de Enfermedades (CDC) y el Laboratorio Nacional de Los Álamos, donde participó en proyectos de investigación sobre enfermedades infecciosas, entre ellas COVID-19, el virus respiratorio sincitial (VRS) y el dengue.",
      "Actualmente es profesora-investigadora en el Centro de Ciencias Matemáticas (CCM) de la UNAM. Su investigación se centra en el desarrollo y aplicación de modelos cuantitativos para el estudio de enfermedades respiratorias y dinámicas celulares, integrando diversos tipos de datos con énfasis en la estimación de parámetros y la evaluación de intervenciones bajo condiciones de incertidumbre. Asimismo, colabora en proyectos de modelación matemática aplicados al análisis de la influenza estacional en México.",
      "Le apasiona crear oportunidades que permitan a los estudiantes acceder a experiencias académicas y científicas de excelencia, impulsando el desarrollo de su potencial y fomentando una visión interdisciplinaria de las matemáticas."
    ]
  },
  "Lilia Leticia Ramírez Ramírez": {
    img: null,
    bio: null
  },
  "Martha Carnalla Cortés": {
    img: "assets/MARTHA.png",
    bio: [
      "Estudió Medicina en la Universidad Autónoma de México, obtuvo una maestría en Ciencias Quimicobiológicas por el Instituto Politécnico Nacional y doctorado en Ciencias en Epidemiología por la Escuela Nacional de Salud Pública del Instituto Nacional de Salud Pública (INSP). Actualmente, es investigadora en Ciencias Médicas C en el Centro de Investigación en Salud Poblacional del INSP. Su principal interés es la investigación interdisciplinaria en Salud Pública. Colabora en la Encuesta Nacional de Salud y Nutrición y con diferentes grupos de investigación incluyendo obesidad, diabetes, uso de sustancias, y enfermedades infecciosas prevenibles por vacunación."
    ]
  },
  "Gerardo Chowell Puente": {
    img: "assets/gerardo.png",
    bio: [
      "Gerardo Chowell, Ph.D., es profesor en el Departamento de Ciencias de la Salud Poblacional en la Escuela de Salud Pública de Georgia State University y becario del programa Second Century Initiative (2CI). Obtuvo su doctorado en Biometría en la Universidad de Cornell en 2005 y completó una beca postdoctoral financiada por la Dirección en el Laboratorio Nacional de Los Álamos, enfocada en el modelado de enfermedades infecciosas. Su investigación se centra en el modelado de la dinámica de transmisión y el control de enfermedades infecciosas mediante métodos matemáticos y estadísticos basados en datos epidemiológicos. Su trabajo ha sido financiado por los Institutos Nacionales de Salud (NIH), la Fundación Nacional de Ciencias (NSF) y el Centro Internacional Fogarty. El Dr. Chowell forma parte de los comités editoriales de las revistas Epidemics, Emerging Infectious Diseases y Infectious Disease Modeling."
    ]
  },
  "Nichola Hengartner": {
    img: "assets/NICOLAS.png",
    bio: [
      "Nicolas (Nick) Hengartner obtuvo la licenciatura en Matemáticas por la Université Laval (Canadá), la maestría en Estadística por la University of Waterloo y el doctorado en Estadística por la University of California, Berkeley. Tras completar su doctorado, fue profesor en el Departamento de Estadística de Yale University y, desde 2002, es investigador consolidado en el Laboratorio Nacional de Los Álamos, donde forma parte del prestigioso grupo Theoretical Biology and Biophysics.",
      "Este grupo se especializa en la modelación matemática y el análisis computacional de sistemas biológicos a nivel molecular y celular, abordando problemas complejos como la dinámica y tratamiento de enfermedades virales (VIH, influenza, hepatitis), el modelado del sistema inmunológico, la interacción receptor-ligando y la señalización celular. Además, contribuye a bases de datos internacionales clave para virus como influenza, VIH y HCV.",
      "Nick ha publicado más de 100 artículos, con un impacto académico destacado —más de 15,000 citas y un índice h superior a 40—. Su trabajo se centra en la aplicación de la estadística, el modelado matemático y la ciencia de datos para resolver desafíos en biología, epidemiología y salud pública.",
      "Asimismo, aplica sus habilidades en estadística y modelado a otras áreas multidisciplinarias, incluyendo el transporte de partículas, la metagenómica y el modelado del consumo eléctrico, demostrando un enfoque transdisciplinario para resolver problemas complejos en diversas ciencias. Nick es un entusiasta de la educación y la investigación, apoyando a estudiantes posdoctorales en su consolidación profesional y fortaleciendo redes internacionales de colaboración."
    ]
  },
  "Nelly Selém Mojica": {
    img: "assets/NELLY.png",
    bio: [
      "Matemática por la Universidad de Guanajuato, maestra en matemáticas en CIMAT y doctora en Biología integrativa en Langebio-Cinvestav. Ganó la Beca L'Oréal a mujeres en la ciencia 2021 por desarrollos en bioinformática y genómica. Colabora en comunidades de práctica de bioinformática que fomentan la ciencia abierta. Cree en el trabajo en equipo, es miembro del Consorcio Mexicano de Vigilancia Genómica, y participa en el Museo Virtual de Matemáticas. Es emprendedora, Wikipedista, y Profesora Investigadora en el Centro de Ciencias Matemáticas de la UNAM. Participó de estudiante en la Olimpíada Matemática Mexicana y fue deportista de alto rendimiento."
    ]
  },
  "A. Haydeé Contreras Peruyero": {
    img: "assets/haydee.png",
    bio: [
      "Es doctora en Ciencias por el Instituto de Matemáticas de la UNAM. Actualmente realiza su tercer posdoctorado en el Centro de Ciencias Matemáticas de la UNAM. Su investigación se desarrolla en la intersección entre las matemáticas y la biología, con énfasis en teoría geométrica de grupos, topología aplicada y análisis de datos biológicos. Ha trabajado en temas como invariantes de cuasi-isometrías, transferencia horizontal de genes usando análisis topológico de datos y modelos de predicción de resistencia a antibióticos. También ha participado activamente en la organización de eventos que promueven la participación de mujeres en matemáticas y ciencia de datos.",
      "<a href=\"https://haydeeperuyero.github.io/\" target=\"_blank\" rel=\"noopener\">haydeeperuyero.github.io</a>"
    ]
  },
  "Shaday Guerrero Flores": {
    img: null,
    bio: null
  },
  "Eugenio Azpeitia Espinosa": {
    img: "assets/azpeitia.png",
    bio: [
      "Se formó como biólogo en la Facultad de Ciencias de la UNAM y es doctor en Ciencias por el Instituto de Ecología de la misma universidad. Realizó estancias posdoctorales en el INRIA (Montpellier, Francia), donde también trabajó como asistente de investigación, y en la Universidad de Zúrich (Suiza). Ha participado en diversos proyectos de biología teórica, empleando herramientas matemáticas y computacionales para analizar y comprender procesos biológicos. Su investigación se centra en el estudio de la dinámica de procesos que ocurren en distintas escalas espaciales y temporales, incluyendo procesos moleculares (como la regulación de la expresión genética), evolutivos y macroscópicos (como el desarrollo morfológico de organismos y las interacciones entre ellos). Actualmente es investigador de tiempo completo en el Centro de Ciencias Matemáticas de la UNAM Morelia."
    ]
  },
  "José Antonio Sánchez Villanueva": {
    img: "assets/JANTONIO.png",
    bio: [
      "José Antonio Sánchez es investigador científico en el campo de la Biología Computacional. Obtuvo su grado de Doctor en Ciencias, en el Área de Biología Celular y Molecular, en la Universidad Autónoma del Estado de Morelos (UAEM) en México. Ha desarrollado su investigación científica en diversas instituciones de prestigio internacional en Cuba, México y Francia.",
      "Su meta profesional actual es desarrollar proyectos de investigación que integren herramientas experimentales y computacionales para estudiar la interacción entre los factores transcripcionales, los mecanismos epigenéticos y la señalización celular a nivel molecular y celular; y cómo esto afecta al destino celular."
    ]
  },
  "Cisteil Xinum Pérez": {
    img: "assets/cisteil.png",
    bio: [
      "La profesora Cisteil Pérez estudió Biología y se especializó en Biodiversidad, Ecología y Conservación, con particular énfasis en el análisis de los patrones biológicos de los insectos y los procesos que los subyacen."
    ]
  },
  "Felipe Mendoza": {
    img: "assets/luis-felipe.png",
    bio: [
      "El profesor Mendoza estudió Biología y se ha especializado en el estudio de la Ecología de la Conducta de múltiples grupos de animales, con un enfoque particular en estudiar las ventajas adaptativas de la variación morfofuncional y las presiones selectivas que la modelan."
    ]
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var modalEl = document.getElementById('instructorModal');
  if (!modalEl || typeof bootstrap === 'undefined') return;

  var modal = new bootstrap.Modal(modalEl);
  var titleEl = modalEl.querySelector('.modal-title');
  var photoEl = modalEl.querySelector('.instructor-modal-photo');
  var initialsEl = modalEl.querySelector('.instructor-modal-initials');
  var bioEl = modalEl.querySelector('.instructor-modal-bio');

  function initialsOf(name) {
    var words = name.replace(/^A\.\s*/, '').split(' ').filter(Boolean);
    return ((words[0] || '')[0] || '') + ((words[1] || '')[0] || '');
  }

  document.querySelectorAll('.instructor-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var name = link.dataset.name;
      var data = INSTRUCTORES[name] || {};

      titleEl.textContent = name;

      if (data.img) {
        photoEl.src = data.img;
        photoEl.alt = name;
        photoEl.style.display = '';
        initialsEl.style.display = 'none';
      } else {
        photoEl.style.display = 'none';
        initialsEl.style.display = '';
        initialsEl.textContent = initialsOf(name).toUpperCase();
      }

      if (data.bio) {
        bioEl.innerHTML = data.bio.map(function (p) { return '<p>' + p + '</p>'; }).join('');
      } else {
        bioEl.innerHTML = '<p>Semblanza próximamente.</p>';
      }

      modal.show();
    });
  });
});
