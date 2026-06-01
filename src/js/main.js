// ============================================================
// MAIN.JS — Marisa Perini
// ============================================================

// ── Reveal on scroll ──────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── FAQ accordion ─────────────────────────────────────────
document.querySelectorAll('.faq-item__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(open => {
      open.classList.remove('open');
    });

    if (!isOpen) item.classList.add('open');
  });
});

// ── Carrossel de depoimentos ─────────────────────────────
const depoimentos = [
  {
    quote: '"Comecei a terapia depois de perder meu marido. A Marisa me ajudou a entender que sentir saudade não é fraqueza. Hoje volto a sair de casa, voltei a ver as amigas. Foi um divisor de águas."',
    nome: 'Helena R.',
    label: '72 anos · Caxias do Sul',
    stars: 5
  },
  {
    quote: '"Procurei pela minha mãe, que tem 78 e estava muito ansiosa. A Marisa atende em casa, o que mudou tudo pra nós. Minha mãe se sente respeitada, e a família inteira está mais tranquila."',
    nome: 'Cláudio M.',
    label: 'Filho de paciente · Caxias do Sul',
    stars: 5
  },
  {
    quote: '"Achei que terapia era pra jovem. Aos 68 descobri que era pra mim também. A Marisa não me trata como velho — ela me trata como alguém que tem muita vida ainda pra resolver e pra viver."',
    nome: 'Sérgio L.',
    label: '68 anos · Caxias do Sul',
    stars: 5
  }
];

let currentDep = 0;
const quoteEl = document.querySelector('.depoimentos__quote');
const nomeEl = document.querySelector('.depoimentos__autor-nome');
const labelEl = document.querySelector('.depoimentos__autor-label');

function updateDepoimento(idx) {
  if (!quoteEl) return;
  const d = depoimentos[idx];
  quoteEl.textContent = d.quote;
  nomeEl.textContent = d.nome;
  labelEl.textContent = d.label;
}

document.querySelector('.depoimentos__nav-btn--prev')?.addEventListener('click', () => {
  currentDep = (currentDep - 1 + depoimentos.length) % depoimentos.length;
  updateDepoimento(currentDep);
});

document.querySelector('.depoimentos__nav-btn--next')?.addEventListener('click', () => {
  currentDep = (currentDep + 1) % depoimentos.length;
  updateDepoimento(currentDep);
});
