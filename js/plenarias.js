// Plenaria talk data + resumen shown in the modal on index.html.
var PLENARIAS = {
  clementina: {
    title: "¿Cómo se forman las nuevas especies? El papel del canto y la coloración del plumaje en la especiación en aves",
    name: "Clementina González Zaragoza",
    org: "Instituto de Investigaciones sobre los Recursos Naturales, UMSNH",
    img: "assets/clementina.png",
    resumen: [
      "El estudio de los patrones de divergencia genética entre poblaciones de distintos organismos es importante para evaluar hipótesis acerca de los mecanismos evolutivos que promueven y mantienen la diversidad biológica. Existen tanto factores neutrales (e.g. barreras geográficas, cambios climáticos históricos a través de la deriva genética) como selectivos (e.g. selección natural o sexual) que pueden conducir a la divergencia genética entre poblaciones y eventualmente a la formación de nuevas especies.",
      "Es así que especies con poblaciones diferenciadas pueden representar estados tempranos del proceso de especiación donde la deriva y la selección pueden causar una rápida divergencia de rasgos morfológicos (como la coloración del plumaje) o conductuales (como el canto) involucrados en la elección de pareja. En esta plática hablaré de cuatro estudios genéticos en aves de México donde se analizan caracteres acústicos y/o de coloración del plumaje que nos sugieren un papel de la selección natural y/o sexual en promover o mantener la divergencia genética en las siguientes especies: Colibrí garganta amatista (Lampornis amethystinus, especie de montaña), Colibrí fandanguero mexicano (Pampa curvipennis, especie de montaña y tierras bajas), Saltapared sinaloense (Thryophilus sinaloa) y Saltapared feliz (Pheugopedius felix), especies de tierras bajas.",
      "Entender como se genera y mantiene la diversidad genética de distintas especies puede ayudar a promover la conservación y mantenimiento a largo plazo de ecosistemas diversos y amenazados."
    ]
  },
  miramontes: {
    title: "El origen del orden espacial",
    name: "Pedro Eduardo Miramontes Vidal",
    org: "Facultad de Ciencias, UNAM",
    img: "assets/miramontes.png",
    resumen: [
      "Uno de los temas más antiguos y controversiales de la ciencia es la cuestión del origen de las formas en la naturaleza y, en particular, en la biología. Los patrones en las pieles de los animales, la estructura de los vegetales y la forma de las colonias bacterianas, son ejemplos de la gran riqueza dinámica de la naturaleza; sin embargo, su origen aún está lejos de comprenderse por completo.",
      "Esta presentación pretende hacer un recorrido histórico por las ideas que estos problemas han planteado y mostrar que las respuestas a estos cuestionamientos son imposibles de obtener sin el concurso de las matemáticas y la física."
    ]
  },
  jesus: {
    title: "Una apreciación de los sistemas dinámicos en años recientes",
    name: "Jesús Muciño Raymundo",
    org: "Centro de Ciencias Matemáticas, UNAM",
    img: "assets/jesus.png",
    resumen: [
      "Las ecuaciones diferenciales y en diferencias nacieron originalmente de problemas de modelación. Presentaremos una perspectiva de como ha cambiado la teoría y sus limitaciones actuales."
    ]
  },
  jorge: {
    title: "Memoria inmunitaria en invertebrados: un nuevo cambio de paradigma en biología",
    name: "Jorge Contreras Garduño",
    org: "Escuela Nacional de Estudios Superiores, Unidad Morelia, UNAM",
    img: "assets/Jorge-Contreras-Garduno.png",
    resumen: [
      "Por más de 100 años, la memoria inmunitaria se consideró una característica exclusiva de los vertebrados. Esta perspectiva comenzó a cambiar a partir del estudio de Kurtz y Franz (2003, Nature), en el que se demostró que los desafíos secundarios homólogos incrementaban la supervivencia del hospedero y la eliminación del parásito en comparación con los desafíos heterólogos, aportando evidencia de especificidad en la protección inmunitaria de los invertebrados. Aunque esta interpretación fue recibida inicialmente con escepticismo, actualmente existe evidencia considerable que respalda la existencia de memoria inmunitaria en los invertebrados, e incluso en plantas (Kurtz et al., 2025, eLife).",
      "No obstante, los resultados pueden ser inconsistentes entre estudios, y se ha propuesto que la virulencia del parásito podría ser uno de los factores que limitan el desarrollo o la eficacia de la memoria inmunitaria. En nuestro laboratorio investigamos esta hipótesis utilizando insectos como modelos experimentales. Nuestros hallazgos indican que los resultados de la memoria inmunitaria varían tanto dentro de una misma generación como entre generaciones, así como en función de la especie o cepa del parásito. La protección se observó de manera más consistente frente a parásitos menos virulentos, mientras que los parásitos altamente virulentos indujeron con frecuencia una memoria inmunitaria escasa o carente de eficacia.",
      "Actualmente, investigamos la memoria inmunitaria en abejas melíferas frente a sus enfermedades infecciosas, considerando las limitaciones impuestas por la virulencia de los parásitos y los costos metabólicos asociados con el desarrollo y mantenimiento de dicha protección. Finalmente, mencionaré que para entender la evolución de la memoria inmunitaria, no solamente es necesaria la acumulación de los trabajos empíricos, sino también, de los modelos matemáticos."
    ]
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var modalEl = document.getElementById('plenariaModal');
  if (!modalEl || typeof bootstrap === 'undefined') return;

  var modal = new bootstrap.Modal(modalEl);
  var titleEl = modalEl.querySelector('.modal-title');
  var photoEl = modalEl.querySelector('.plenaria-modal-photo');
  var nameEl = modalEl.querySelector('.plenaria-modal-name');
  var orgEl = modalEl.querySelector('.plenaria-modal-org');
  var resumenEl = modalEl.querySelector('.plenaria-modal-resumen');

  document.querySelectorAll('.plenaria-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var data = PLENARIAS[card.dataset.key];
      if (!data) return;

      titleEl.textContent = data.title;
      photoEl.src = data.img;
      photoEl.alt = data.name;
      nameEl.textContent = data.name;
      orgEl.textContent = data.org;

      if (data.resumen) {
        resumenEl.innerHTML = data.resumen.map(function (p) { return '<p>' + p + '</p>'; }).join('');
      } else {
        resumenEl.innerHTML = '<p>Resumen próximamente.</p>';
      }

      modal.show();
    });
  });
});
