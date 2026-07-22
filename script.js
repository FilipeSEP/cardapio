/* =========================================================
   CONFIGURAÇÃO — edite aqui
   ========================================================= */

// Número de WhatsApp que recebe os pedidos.
// Formato: código do país + DDD + número, só dígitos (sem +, espaço ou traço).
// Exemplo: 55 11 91234-5678  =>  '5511912345678'
const WHATSAPP_NUMBER = '5511964128261'; // <-- TROCAR pelo número real

// Endereço do site do cardápio, pra mandar junto na mensagem do WhatsApp.
// Se publicar no GitHub Pages, normalmente fica: https://<seu-usuario>.github.io/cardapio/
const SITE_URL = 'https://filipesep.github.io/cardapio/'; // <-- confirme/troque se for diferente

// Quantidade mínima e o incremento (passo) para os bolos vendidos por kg.
const KG_MIN = 1;
const KG_STEP = 0.5;
const KG_QUICK_OPTIONS = [1, 1.5, 2, 3];

/* =========================================================
   DADOS DO CARDÁPIO
   Para adicionar fotos a um item, inclua um campo "photos":
   photos: ['img/produtos/bolo-cenoura-1.jpg', 'img/produtos/bolo-cenoura-2.jpg']
   O ícone de câmera só aparece nos itens que tiverem fotos, e elas
   entram automaticamente no carrossel (lightbox) ao clicar.
   ========================================================= */
const menuData = [
  { name: 'Pão simples', category: 'Pães caseiros', price: 20.00, photos: ['img/produtos/pao1.png'] },
  { name: 'Fatia Húngaras', category: 'Pães caseiros', price: 6.00, flavors: ['Chocolate granulado', 'Coco'], photos: ['img/produtos/fatia.jpg'] },
  { name: 'Pão recheado', category: 'Pães caseiros', price: 40.00, description: 'Delicioso pão caseiro recheado', flavors: ['Calabresa', 'Bauru'], photos: ['img/produtos/pao2.png'] },
  { name: 'Bolo de Milho', category: 'Bolos simples', price: 50.00, portions: 16, photos: ['img/produtos/bolo-milho-1.jpg', 'img/produtos/bolo-milho-2.jpg'] },
  { name: 'Bolo de Fubá', category: 'Bolos simples', price: 50.00, portions: 16, photos: ['img/produtos/bolo-fuba-1.jpg', 'img/produtos/bolo-fuba-2.jpg'] },
  { name: 'Bolo Fubá c/ goiabada', category: 'Bolos simples', price: 60.00, portions: 16, photos: ['img/produtos/bolo-fuba-goiabada-1.jpg', 'img/produtos/bolo-fuba-goiabada-2.jpg'] },
  { name: 'Bolo Cocada invertida', category: 'Bolos simples', price: 60.00, portions: 16, photos: ['img/produtos/bolo-cocada-invertida-1.jpg', 'img/produtos/bolo-cocada-invertida-2.jpg'] },
  { name: 'Bolo de Chocolate', category: 'Bolos simples', price: 60.00, portions: 16, photos: ['img/produtos/bolo-chocolate-1.jpg', 'img/produtos/bolo-chocolate-2.jpg'] },
  { name: 'Bolo de Cenoura com Chocolate Crocante', category: 'Bolos simples', price: 60.00, portions: 24, photos: ['img/produtos/bolo-cenoura-chocolate-1.jpg', 'img/produtos/bolo-cenoura-chocolate-2.jpg'] },
  { name: 'Bolo Mesclado', category: 'Bolos simples', price: 60.00, portions: 16, photos: ['img/produtos/bolo-mesclado-1.jpg', 'img/produtos/bolo-mesclado-2.jpg'] },
  { name: 'Bolo Formigueiro', category: 'Bolos simples', price: 55.00, portions: 16, photos: ['img/produtos/bolo-formigueiro-1.jpg', 'img/produtos/bolo-formigueiro-2.jpg'] },
  { name: 'Bolo Laranja c/ casca', category: 'Bolos simples', price: 60.00, portions: 16, photos: ['img/produtos/bololaranja.png'] },
  { name: 'Bolo Queijadinha', category: 'Bolos simples', price: 65.00, portions: 16, photos: ['img/produtos/bolo-queijadinha-1.jpg', 'img/produtos/bolo-queijadinha-2.jpg'] },
  { name: 'Bolo Fubá Cremoso', category: 'Bolos simples', price: 60.00, portions: 16 },
  { name: 'Bolo Cenoura Vulcão', category: 'Bolos vulcão', price: 75.00 },
  { name: 'Torta de Frango G', category: 'Tortas salgadas', price: 95.00 },
  { name: 'Torta Bauru', category: 'Tortas salgadas', price: 110.00 },
  { name: 'Torta de morango', category: 'Tortas doces', price: 100.00, portions: 10 },
  { name: 'Torta de limão', category: 'Tortas doces', price: 85.00, portions: 10, photos: ['img/produtos/tortalimao.png'] },
  { name: 'Torta Maracolate', category: 'Tortas doces', price: 110.00, portions: 10 },
  { name: 'Torta holandesa', category: 'Tortas doces', price: 120.00, portions: 10 },
  { name: 'Torta banoffe', category: 'Tortas doces', price: 120.00, portions: 10 },
  { name: 'Doce de leite', category: 'Bolos recheados', price: 85.00, per_kg: true, photos: ['img/produtos/bolo1.png','img/produtos/bolo2.png','img/produtos/bolo3.png','img/produtos/bolo4.png','img/produtos/bolo5.png','img/produtos/bolo6.png','img/produtos/bolo7.png','img/produtos/bolo8.png','img/produtos/bolo9.png'] },
  { name: 'Doce de leite c/ coco', category: 'Bolos recheados', price: 90.00, per_kg: true },
  { name: 'Doce de leite c/ ameixa', category: 'Bolos recheados', price: 100.00, per_kg: true },
  { name: 'Creme com abacaxi', category: 'Bolos recheados', price: 90.00, per_kg: true },
  { name: 'Creme com pêssego', category: 'Bolos recheados', price: 90.00, per_kg: true },
  { name: 'Mousse de maracujá', category: 'Bolos recheados', price: 100.00, per_kg: true },
  { name: 'Mousse de chocolate', category: 'Bolos recheados', price: 105.00, per_kg: true },
  { name: 'Ninho com morangos', category: 'Bolos recheados', price: 110.00, per_kg: true },
  { name: 'Ninho com abacaxi', category: 'Bolos recheados', price: 105.00, per_kg: true },
  { name: 'Merengue', category: 'Bolos recheados', price: 95.00, per_kg: true },
  { name: 'Brigadeiro', category: 'Bolos recheados', price: 90.00, per_kg: true },
  { name: 'Prestígio', category: 'Bolos recheados', price: 90.00, per_kg: true },
  { name: 'Dois amores', category: 'Bolos recheados', price: 120.00, per_kg: true, photos: [] },
  { name: 'Massa branca a partir', category: 'Bolos recheados', price: 85.00, per_kg: true },
  { name: 'Massa de chocolate', category: 'Bolos recheados', price: 90.00, per_kg: true },
  { name: 'Pudim G', category: 'Outros', price: 90.00 },
  { name: 'Pudim M', category: 'Outros', price: 50.00 },
  { name: 'Sonhos', category: 'Outros', price: 8.00, photos: ['img/produtos/sonhos.jpg'] },
  { name: 'Pão de mel', category: 'Outros', price: 9.00 },
  { name: 'Esfiha Carne - M', category: 'Esfiha', price: 5.00 },
  { name: 'Esfiha Carne c/ Muçarela - M', category: 'Esfiha', price: 6.00 },
  { name: 'Esfiha Calabresa c/ Cheddar - M', category: 'Esfiha', price: 6.00 },
  { name: 'Cuscuz Paulista - G', category: 'Cuscuz', price: 160.00, portions: 10, flavors: ['Sardinha'] },
  { name: 'Cuscuz Paulista - M', category: 'Cuscuz', price: 100.00, portions: 6, flavors: ['Sardinha'] },
];

// id estável para cada item (usado pra achar o input de kg / quantidade / fotos de cada card)
menuData.forEach((item, i) => { item.id = i; });

const catClass = {
  'Pães caseiros': 'cat-paes',
  'Bolos simples': 'cat-bsimples',
  'Bolos vulcão': 'cat-bvulcao',
  'Tortas salgadas': 'cat-tsalgadas',
  'Tortas doces': 'cat-tdoces',
  'Bolos recheados': 'cat-brecheados',
  'Outros': 'cat-outros',
  'Esfiha': 'cat-esfiha',
  'Cuscuz': 'cat-cuscuz',
};

const categories = ['Todos', ...new Set(menuData.map(i => i.category))];
let active = 'Todos';

const filtersEl = document.getElementById('filters');
const gridEl = document.getElementById('grid');

/* =========================================================
   FILTROS
   ========================================================= */
function renderFilters() {
  filtersEl.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === active ? ' active' : '');
    btn.textContent = cat;
    btn.setAttribute('aria-pressed', cat === active);
    btn.addEventListener('click', () => {
      active = cat;
      renderFilters();
      renderGrid();
    });
    filtersEl.appendChild(btn);
  });
}

/* =========================================================
   FORMATAÇÃO
   ========================================================= */
function fmt(n) { return 'R$ ' + n.toFixed(2).replace('.', ','); }
function fmtKg(n) { return n.toString().replace('.', ','); }

/* =========================================================
   WHATSAPP
   ========================================================= */
const WHATSAPP_ICON = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.19c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.18-.28.37-.24.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.68-.17 1.36z"/></svg>`;
const CART_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`;

function buildWhatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.getElementById('heroWhatsapp').addEventListener('click', (e) => {
  e.preventDefault();
  window.open(buildWhatsappLink(`Olá, Eva! Vim pelo cardápio da Corujinha e gostaria de fazer um pedido 🦉\n${SITE_URL}`), '_blank');
});

/* =========================================================
   CARRINHO — permite juntar vários itens num pedido só
   ========================================================= */
let cart = []; // cada item: { id, name, qty, unitPrice, per_kg, portions }

function findCartLine(id) { return cart.find(l => l.id === id); }
function cartLineTotal(line) { return line.unitPrice * line.qty; }
function cartGrandTotal() { return cart.reduce((sum, l) => sum + cartLineTotal(l), 0); }

function addToCartFixed(item, qty) {
  const existing = findCartLine(item.id);
  if (existing) existing.qty += qty;
  else cart.push({ id: item.id, name: item.name, qty, unitPrice: item.price, per_kg: false, portions: item.portions });
  renderCart();
}

function addToCartKg(item, kg) {
  const existing = findCartLine(item.id);
  if (existing) existing.qty += kg;
  else cart.push({ id: item.id, name: item.name, qty: kg, unitPrice: item.price, per_kg: true });
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(l => l.id !== id);
  renderCart();
}

function cartLineLabel(line) {
  const qtyTxt = line.per_kg ? `${fmtKg(line.qty)}kg` : `${line.qty}x`;
  const portionsTxt = line.portions ? ` (${line.portions} pedaços)` : '';
  return `${qtyTxt} ${line.name}${portionsTxt}`;
}

function buildCartMessage() {
  const lines = cart.map(line => `• ${cartLineLabel(line)} — ${fmt(cartLineTotal(line))}`).join('\n');
  return `Olá, Eva! Vim pelo cardápio da Corujinha e gostaria de pedir:\n\n${lines}\n\n*Total: ${fmt(cartGrandTotal())}*\n\n${SITE_URL}`;
}

const cartFab = document.getElementById('cartFab');
const cartPanel = document.getElementById('cartPanel');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCheckoutBtn = document.getElementById('cartCheckout');
cartCheckoutBtn.innerHTML = `${WHATSAPP_ICON} Finalizar pedido no WhatsApp`;
cartFab.innerHTML = `${CART_ICON}<span class="cart-badge" id="cartBadge">0</span>`;

function openCartPanel() { cartPanel.classList.add('open'); cartBackdrop.classList.add('open'); }
function closeCartPanel() { cartPanel.classList.remove('open'); cartBackdrop.classList.remove('open'); }

function renderCart() {
  const badge = document.getElementById('cartBadge');
  const count = cart.length;
  badge.textContent = count;
  badge.classList.toggle('show', count > 0);

  if (!cart.length) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Seu pedido ainda está vazio.<br>Adicione itens do cardápio.</p>';
  } else {
    cartItemsEl.innerHTML = cart.map(line => `
      <div class="cart-item-row">
        <div>
          <p class="cart-item-name">${cartLineLabel(line)}</p>
          <p class="cart-item-sub">${fmt(cartLineTotal(line))}</p>
        </div>
        <button class="cart-item-remove" data-remove="${line.id}" aria-label="Remover ${line.name}">✕</button>
      </div>`).join('');
  }
  cartTotalEl.textContent = fmt(cartGrandTotal());
  cartCheckoutBtn.disabled = cart.length === 0;
}

cartFab.addEventListener('click', openCartPanel);
document.getElementById('cartClose').addEventListener('click', closeCartPanel);
cartBackdrop.addEventListener('click', closeCartPanel);

cartItemsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-remove]');
  if (btn) removeFromCart(parseInt(btn.dataset.remove, 10));
});

document.getElementById('cartClear').addEventListener('click', () => {
  cart = [];
  renderCart();
});

cartCheckoutBtn.addEventListener('click', () => {
  if (!cart.length) return;
  window.open(buildWhatsappLink(buildCartMessage()), '_blank');
  cart = [];
  renderCart();
  closeCartPanel();
});

function flashAdded(btn) {
  const original = btn.dataset.originalText || btn.textContent.trim();
  btn.dataset.originalText = original;
  btn.textContent = '✓ Adicionado ao pedido';
  btn.classList.add('added');
  clearTimeout(btn._flashTimer);
  btn._flashTimer = setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove('added');
  }, 1300);
  openCartPanel();
  clearTimeout(cartPanel._autoCloseTimer);
  cartPanel._autoCloseTimer = setTimeout(closeCartPanel, 2200);
}

/* =========================================================
   RENDER DOS CARDS
   ========================================================= */
function cardFooterNormal(item) {
  const metaHtml = item.portions ? `<span class="meta-tag">${item.portions} pedaços</span>` : '';
  return `
    <div class="card-footer">
      <p class="price" data-qty-total="${item.id}"><span>R$</span>${item.price.toFixed(2).replace('.', ',')}</p>
      <div class="card-meta">${metaHtml}</div>
    </div>
    <div class="qty-row" data-qty-calc="${item.id}">
      <label for="qty-input-${item.id}">Quantidade</label>
      <div class="qty-stepper">
        <button type="button" class="qty-btn" data-qty-dec="${item.id}" aria-label="Diminuir quantidade">−</button>
        <input type="number" id="qty-input-${item.id}" class="qty-input" data-qty-input="${item.id}" min="1" step="1" value="1">
        <button type="button" class="qty-btn" data-qty-inc="${item.id}" aria-label="Aumentar quantidade">+</button>
      </div>
    </div>
    <button class="add-cart-btn" data-add-fixed="${item.id}">
      + Adicionar ao pedido
    </button>`;
}

function cardFooterKg(item) {
  const chips = KG_QUICK_OPTIONS.map(v =>
    `<button type="button" class="kg-chip${v === KG_MIN ? ' active' : ''}" data-kg-chip="${v}">${fmtKg(v)}kg</button>`
  ).join('');
  return `
    <div class="kg-calc" data-kg-calc="${item.id}">
      <p class="kg-hint">A partir de ${fmt(item.price)}/kg · mínimo ${fmtKg(KG_MIN)}kg</p>
      <div class="kg-chips">${chips}</div>
      <div class="kg-input-row">
        <label for="kg-input-${item.id}">Peso exato:</label>
        <input type="number" id="kg-input-${item.id}" class="kg-input" data-kg-input="${item.id}"
          min="${KG_MIN}" step="any" value="${KG_MIN}">
        <span>kg</span>
      </div>
      <div class="kg-total-row">
        <p class="kg-total" data-kg-total="${item.id}"><span>R$</span>${(item.price * KG_MIN).toFixed(2).replace('.', ',')}</p>
      </div>
    </div>
    <button class="add-cart-btn" data-add-kg="${item.id}">
      + Adicionar ao pedido
    </button>`;
}

function renderGrid() {
  const items = active === 'Todos' ? menuData : menuData.filter(i => i.category === active);
  if (!items.length) {
    gridEl.innerHTML = '<p class="empty">Nenhum item encontrado.</p>';
    return;
  }

  gridEl.innerHTML = items.map(item => {
    const cls = catClass[item.category] || '';
    const flavorsHtml = item.flavors?.length
      ? `<div class="flavors">${item.flavors.map(f => `<span class="flavor-pill">${f}</span>`).join('')}</div>`
      : '';
    const photoBtn = item.photos?.length
      ? `<button class="photo-btn" data-photos-for="${item.id}" aria-label="Ver fotos de ${item.name}">📷</button>`
      : '';
    const footer = item.per_kg ? cardFooterKg(item) : cardFooterNormal(item);

    return `
      <article class="card ${cls}">
        ${photoBtn}
        <div>
          <p class="card-cat">${item.category}</p>
          <h3 class="card-name">${item.name}</h3>
          ${item.description ? `<p class="card-desc">${item.description}</p>` : ''}
          ${flavorsHtml}
        </div>
        ${footer}
      </article>`;
  }).join('');
}

/* =========================================================
   CALCULADORA DE KG (delegação de eventos)
   ========================================================= */
function getKgState(id) {
  const input = gridEl.querySelector(`[data-kg-input="${id}"]`);
  return input ? parseFloat(input.value) || KG_MIN : KG_MIN;
}

function setKgState(id, kg, opts = {}) {
  const snapToStep = opts.snapToStep !== false; // chips continuam "arredondando" pro passo (0,5 em 0,5)
  kg = snapToStep
    ? Math.max(KG_MIN, Math.round(kg / KG_STEP) * KG_STEP)
    : Math.max(KG_MIN, kg);
  const input = gridEl.querySelector(`[data-kg-input="${id}"]`);
  const total = gridEl.querySelector(`[data-kg-total="${id}"]`);
  const item = menuData.find(i => i.id === id);
  if (input) input.value = kg;
  if (total) total.innerHTML = `<span>R$</span>${(item.price * kg).toFixed(2).replace('.', ',')}`;
  gridEl.querySelectorAll(`[data-kg-calc="${id}"] .kg-chip`).forEach(chip => {
    chip.classList.toggle('active', parseFloat(chip.dataset.kgChip) === kg);
  });
}

function updateKgTotal(id, kg) {
  const total = gridEl.querySelector(`[data-kg-total="${id}"]`);
  const item = menuData.find(i => i.id === id);
  if (total) total.innerHTML = `<span>R$</span>${(item.price * kg).toFixed(2).replace('.', ',')}`;
  gridEl.querySelectorAll(`[data-kg-calc="${id}"] .kg-chip`).forEach(chip => {
    chip.classList.toggle('active', parseFloat(chip.dataset.kgChip) === kg);
  });
}

/* =========================================================
   SELETOR DE QUANTIDADE (itens por unidade)
   ========================================================= */
function getQtyState(id) {
  const input = gridEl.querySelector(`[data-qty-input="${id}"]`);
  return input ? Math.max(1, parseInt(input.value, 10) || 1) : 1;
}

function setQtyState(id, qty) {
  qty = Math.max(1, Math.round(qty));
  const input = gridEl.querySelector(`[data-qty-input="${id}"]`);
  const totalEl = gridEl.querySelector(`[data-qty-total="${id}"]`);
  const item = menuData.find(i => i.id === id);
  if (input) input.value = qty;
  if (totalEl) totalEl.innerHTML = `<span>R$</span>${(item.price * qty).toFixed(2).replace('.', ',')}`;
}

gridEl.addEventListener('click', (e) => {
  const qtyDec = e.target.closest('[data-qty-dec]');
  if (qtyDec) {
    const id = parseInt(qtyDec.dataset.qtyDec, 10);
    setQtyState(id, getQtyState(id) - 1);
    return;
  }

  const qtyInc = e.target.closest('[data-qty-inc]');
  if (qtyInc) {
    const id = parseInt(qtyInc.dataset.qtyInc, 10);
    setQtyState(id, getQtyState(id) + 1);
    return;
  }

  const chip = e.target.closest('[data-kg-chip]');
  if (chip) {
    const id = parseInt(chip.closest('[data-kg-calc]').dataset.kgCalc, 10);
    setKgState(id, parseFloat(chip.dataset.kgChip));
    return;
  }

  const addFixedBtn = e.target.closest('[data-add-fixed]');
  if (addFixedBtn) {
    const id = parseInt(addFixedBtn.dataset.addFixed, 10);
    const item = menuData.find(i => i.id === id);
    const qty = getQtyState(id);
    addToCartFixed(item, qty);
    flashAdded(addFixedBtn);
    return;
  }

  const addKgBtn = e.target.closest('[data-add-kg]');
  if (addKgBtn) {
    const id = parseInt(addKgBtn.dataset.addKg, 10);
    const item = menuData.find(i => i.id === id);
    const kg = getKgState(id);
    addToCartKg(item, kg);
    flashAdded(addKgBtn);
    return;
  }

  const photoBtn = e.target.closest('[data-photos-for]');
  if (photoBtn) {
    const item = menuData.find(i => i.id === parseInt(photoBtn.dataset.photosFor, 10));
    openLightbox(item);
  }
});

gridEl.addEventListener('input', (e) => {
  const kgInput = e.target.closest('[data-kg-input]');
  if (kgInput) {
    const id = parseInt(kgInput.dataset.kgInput, 10);
    const raw = parseFloat(kgInput.value);
    const val = isNaN(raw) ? KG_MIN : Math.max(KG_MIN, raw);
    // não reescreve o input aqui: deixa a pessoa terminar de digitar (ex: "1,843" ou "1.8")
    updateKgTotal(id, val);
    return;
  }

  const qtyInput = e.target.closest('[data-qty-input]');
  if (qtyInput) {
    const id = parseInt(qtyInput.dataset.qtyInput, 10);
    const val = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    setQtyState(id, val);
  }
});

// Ao sair do campo de peso, corrige valores inválidos (vazio, negativo, abaixo do mínimo)
gridEl.addEventListener('blur', (e) => {
  const kgInput = e.target.closest('[data-kg-input]');
  if (!kgInput) return;
  const id = parseInt(kgInput.dataset.kgInput, 10);
  const raw = parseFloat(kgInput.value);
  const val = isNaN(raw) || raw < KG_MIN ? KG_MIN : raw;
  kgInput.value = val;
  updateKgTotal(id, val);
}, true);

/* =========================================================
   GALERIA DE FOTOS (carrossel / lightbox)
   Abre em tela cheia, navega com setas, teclado (← →) ou
   swipe no celular. Passa a funcionar sozinho assim que o
   item tiver um array "photos" com 1+ imagens.
   ========================================================= */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCounter = document.getElementById('lightboxCounter');
let lightboxPhotos = [];
let lightboxIndex = 0;
let lightboxItemName = '';

function openLightbox(item) {
  lightboxPhotos = item.photos;
  lightboxItemName = item.name;
  lightboxIndex = 0;
  updateLightbox();
  lightbox.classList.add('open');
}

function closeLightbox() { lightbox.classList.remove('open'); }

function updateLightbox() {
  lightboxImg.src = lightboxPhotos[lightboxIndex];
  lightboxImg.alt = `${lightboxItemName} - foto ${lightboxIndex + 1}`;
  lightboxCaption.textContent = lightboxItemName;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxPhotos.length}`;
}

function nextPhoto() { lightboxIndex = (lightboxIndex + 1) % lightboxPhotos.length; updateLightbox(); }
function prevPhoto() { lightboxIndex = (lightboxIndex - 1 + lightboxPhotos.length) % lightboxPhotos.length; updateLightbox(); }

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', nextPhoto);
document.getElementById('lightboxPrev').addEventListener('click', prevPhoto);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextPhoto();
  if (e.key === 'ArrowLeft') prevPhoto();
});

// swipe no celular
let touchStartX = 0;
lightbox.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
lightbox.addEventListener('touchend', (e) => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 40) diff > 0 ? prevPhoto() : nextPhoto();
});

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */
renderFilters();
renderGrid();
renderCart();