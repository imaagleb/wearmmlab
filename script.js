(function () {
  'use strict';

  var projects = [
    {
      title: 'DESK LAMP 01',
      text: 'A desk lamp milled from a single aluminum profile, weighted with an oak base. Warm 2700K LED, USB-C powered, dimmable by touch. Built for late-night soldering sessions.',
      meta: 'STATUS — IN USE · 2025',
      fig: 'FIG. 01 — DESK LAMP · ALUMINUM / OAK'
    },
    {
      title: 'WORKBENCH 02',
      text: 'A compact electronics bench in birch plywood and steel profile. Fold-away soldering station, DIN rail for power, and a drawer for the tools that never leave the desk.',
      meta: 'STATUS — IN USE · 2025',
      fig: 'FIG. 02 — WORKBENCH · BIRCH PLY / STEEL'
    },
    {
      title: 'FUME EXTRACTOR 03',
      text: 'A 3D-printed fume extractor for the soldering iron. 120 mm fan, activated carbon filter, magnetic mount — clips onto the bench edge and disappears when idle.',
      meta: 'STATUS — PROTOTYPE · 2026',
      fig: 'FIG. 03 — FUME EXTRACTOR · PETG / 120 MM'
    },
    {
      title: 'CABLE CADDY 04',
      text: 'A parametric cable caddy for the workshop. PETG, printed flat, holds spools up to 500 g. One bolt clamps it to any table up to 40 mm thick.',
      meta: 'STATUS — REV. B · 2026',
      fig: 'FIG. 04 — CABLE CADDY · PETG / PARAMETRIC'
    }
  ];

  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  var drawings = Array.prototype.slice.call(document.querySelectorAll('.drawing'));
  var titleEl = document.getElementById('project-title');
  var textEl = document.getElementById('project-text');
  var metaEl = document.getElementById('project-meta');
  var figEl = document.getElementById('figcaption');

  function selectProject(index) {
    var project = projects[index];
    if (!project) return;

    cards.forEach(function (card, i) {
      card.classList.toggle('is-active', i === index);
    });

    drawings.forEach(function (drawing, i) {
      drawing.classList.toggle('is-active', i === index);
    });

    titleEl.textContent = project.title;
    textEl.textContent = project.text;
    metaEl.textContent = project.meta;
    figEl.textContent = project.fig;
  }

  cards.forEach(function (card, i) {
    card.addEventListener('change', function () {
      selectProject(i);
    });
  });

  var signup = document.getElementById('signup');
  signup.addEventListener('submit', function (event) {
    event.preventDefault();
    var button = signup.querySelector('button');
    var input = signup.querySelector('input');
    button.textContent = 'DONE ✓';
    input.value = '';
    window.setTimeout(function () {
      button.textContent = 'JOIN →';
    }, 2400);
  });
})();
