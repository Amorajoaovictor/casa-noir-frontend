var WHATSAPP_NUMBER = '558585962496';
var cart = [];

function parsePrice(priceStr) {
    if (!priceStr) return 0;
    var cleaned = priceStr.replace(/[^\d,]/g, '').replace(',', '.');
    return parseFloat(cleaned) || 0;
}

function extractFragrance(name) {
    var lower = name.toLowerCase();
    if (lower.indexOf('blanc') !== -1) return 'Blanc';
    if (lower.indexOf("l'or") !== -1 || lower.indexOf('lor ') !== -1) return "L'or";
    if (lower.indexOf('rose') !== -1) return 'Rose';
    if (lower.indexOf('vanille') !== -1) return 'Vanille';
    if (lower.indexOf('bleu') !== -1) return 'Bleu';
    if (lower.indexOf('le vert') !== -1) return 'Le Vert';
    return null;
}

function getAccentColor(fragrance) {
    var c = { 'Blanc': '#b8a88a', "L'or": '#c9a96e', 'Rose': '#c07878', 'Vanille': '#c4a880', 'Bleu': '#7898b0', 'Le Vert': '#7aaa78' };
    return c[fragrance] || '#c9a96e';
}

function getInitials(name) {
    var words = name.split(/\s+/).filter(function(w) { return w.length > 1; });
    return words.length >= 2 ? (words[0][0] + words[1][0]).toUpperCase() : name.substring(0, 2).toUpperCase();
}

function addToCart(productName) {
    var existing = cart.find(function(i) { return i.name === productName; });
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name: productName, qty: 1 });
    }
    renderCart();
}

function removeFromCart(productName) {
    cart = cart.filter(function(i) { return i.name !== productName; });
    renderCart();
}

function changeQty(productName, delta) {
    var item = cart.find(function(i) { return i.name === productName; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productName);
    } else {
        renderCart();
    }
}

function buildWhatsAppMessage() {
    var lines = ['Olá! Gostaria de fazer o seguinte pedido:', ''];
    var total = 0;
    cart.forEach(function(item) {
        var product = PRODUCTS.find(function(p) { return p.name === item.name; });
        var price = product ? parsePrice(product.price) : 0;
        var subtotal = price * item.qty;
        total += subtotal;
        lines.push('- ' + item.name + ' (x' + item.qty + ')' + (price > 0 ? ' — ' + product.price : ''));
    });
    lines.push('');
    if (total > 0) {
        lines.push('Total estimado: R$ ' + total.toFixed(2).replace('.', ','));
    }
    return encodeURIComponent(lines.join('\n'));
}

function openWhatsApp() {
    if (cart.length === 0) return;
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + buildWhatsAppMessage(), '_blank');
}

function renderCart() {
    var panel = document.getElementById('cart-items');
    var badge = document.getElementById('cart-badge');
    var totalItems = cart.reduce(function(s, i) { return s + i.qty; }, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';

    if (cart.length === 0) {
        panel.innerHTML = '<p class="cart-empty">Seu carrinho está vazio</p>';
        return;
    }

    var html = '';
    cart.forEach(function(item) {
        var product = PRODUCTS.find(function(p) { return p.name === item.name; });
        var price = product ? parsePrice(product.price) : 0;
        var subtotal = price * item.qty;
        html += '<div class="cart-item">' +
            '<div class="cart-item-info">' +
            '<span class="cart-item-name">' + item.name + '</span>' +
            (price > 0 ? '<span class="cart-item-price">' + (product.price) + '</span>' : '') +
            '</div>' +
            '<div class="cart-item-controls">' +
            '<button class="cart-qty-btn" onclick="changeQty(\'' + item.name.replace(/'/g, "\\'") + '\', -1)">−</button>' +
            '<span class="cart-qty">' + item.qty + '</span>' +
            '<button class="cart-qty-btn" onclick="changeQty(\'' + item.name.replace(/'/g, "\\'") + '\', 1)">+</button>' +
            (subtotal > 0 ? '<span class="cart-item-subtotal">R$ ' + subtotal.toFixed(2).replace('.', ',') + '</span>' : '') +
            '<button class="cart-remove-btn" onclick="removeFromCart(\'' + item.name.replace(/'/g, "\\'") + '\')">✕</button>' +
            '</div></div>';
    });
    panel.innerHTML = html;
}

function createCartUI() {
    var fab = document.createElement('button');
    fab.className = 'cart-fab';
    fab.setAttribute('aria-label', 'Abrir carrinho');
    fab.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
        '<span class="cart-fab-badge" id="cart-badge" style="display:none">0</span>';
    document.body.appendChild(fab);

    var overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    overlay.id = 'cart-overlay';
    document.body.appendChild(overlay);

    var panel = document.createElement('aside');
    panel.className = 'cart-panel';
    panel.id = 'cart-panel';
    panel.innerHTML = '<div class="cart-header">' +
        '<h2 class="cart-title">Meu Pedido</h2>' +
        '<button class="cart-close-btn" id="cart-close-btn" aria-label="Fechar carrinho">✕</button>' +
        '</div>' +
        '<div class="cart-items" id="cart-items"><p class="cart-empty">Seu carrinho está vazio</p></div>' +
        '<div class="cart-footer">' +
        '<button class="cart-send-btn" id="cart-send-btn" disabled>Enviar Pedido via WhatsApp</button>' +
        '</div>';
    document.body.appendChild(panel);

    fab.addEventListener('click', function() {
        panel.classList.add('open');
        overlay.classList.add('open');
        renderCart();
    });

    document.getElementById('cart-close-btn').addEventListener('click', function() {
        panel.classList.remove('open');
        overlay.classList.remove('open');
    });

    overlay.addEventListener('click', function() {
        panel.classList.remove('open');
        overlay.classList.remove('open');
    });

    document.getElementById('cart-send-btn').addEventListener('click', function() {
        if (cart.length > 0) openWhatsApp();
    });
}

function updateCartBtn() {
    var sendBtn = document.getElementById('cart-send-btn');
    if (sendBtn) {
        sendBtn.disabled = cart.length === 0;
    }
}

function createProductCard(product) {
    var card = document.createElement('article');
    card.className = 'product-card';
    var fragrance = extractFragrance(product.name);
    var accent = getAccentColor(fragrance);
    var desc = product.description ? product.description.replace(/\n/g, ' ').trim() : '';
    var numericPrice = parsePrice(product.price);
    var hasImage = product.image_url && product.image_url.indexOf('http') === 0;

    var fragTag = fragrance ? '<span class="product-fragrance-tag" style="border-color:' + accent + ';color:' + accent + '">' + fragrance + '</span>' : '';

    var mediaHtml;
    if (hasImage) {
        mediaHtml = '<div class="product-image-container"><img src="' + product.image_url + '" alt="" class="product-image" loading="lazy" crossorigin="anonymous" onerror="this.parentElement.classList.add(\'image-failed\')"><div class="product-image-placeholder"><span class="placeholder-letter" style="color:' + accent + '">' + getInitials(product.name) + '</span></div></div>';
    } else {
        mediaHtml = '<div class="product-image-container image-failed"><div class="product-image-placeholder"><span class="placeholder-letter" style="color:' + accent + '">' + getInitials(product.name) + '</span></div></div>';
    }

    var escapedName = product.name.replace(/'/g, "\\'");
    card.innerHTML = mediaHtml +
        '<div class="product-info">' +
        '<div class="product-tags">' + fragTag + '</div>' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        (desc ? '<p class="product-description">' + desc + '</p>' : '') +
        (numericPrice > 0 ? '<p class="product-price">' + product.price + '</p>' : '') +
        '<button class="product-add-btn" onclick="addToCart(\'' + escapedName + '\')">Adicionar ao pedido</button>' +
        '</div>';
    return card;
}

function displayProducts() {
    var grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    PRODUCTS.forEach(function(p) {
        if (p.name.indexOf('Taxa de Entrega') === -1) {
            grid.appendChild(createProductCard(p));
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
        }
    });
});

var header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    header.style.boxShadow = window.pageYOffset > 100 ? '0 2px 20px rgba(0,0,0,0.1)' : 'none';
});

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', function() {
    createCartUI();
    displayProducts();

    var animElements = document.querySelectorAll('.brand-content, .value-item, .benefit-item, .fragrance-note');
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        animElements.forEach(function(el) { el.classList.add('visible'); });
    } else {
        animElements.forEach(function(el) { observer.observe(el); });
    }

    var heroVideo = document.querySelector('.hero-video');
    var heroSection = document.getElementById('hero');
    var rafId = 0;
    if (heroVideo && heroSection) {
        heroVideo.pause();
        var videoReady = false;
        heroVideo.addEventListener('loadedmetadata', function() { videoReady = true; });
        heroVideo.addEventListener('error', function() {
            heroVideo.style.display = 'none';
            document.querySelector('.hero-fallback').style.opacity = '1';
        });
        function updateVideo() {
            if (!videoReady || heroVideo.readyState < 1 || isNaN(heroVideo.duration)) return;
            var rect = heroSection.getBoundingClientRect();
            var scrollable = heroSection.offsetHeight - window.innerHeight;
            var progress = Math.max(0, Math.min(1, -rect.top / scrollable));
            var targetTime = progress * heroVideo.duration;
            if (Math.abs(targetTime - heroVideo.currentTime) > 1 / 24) {
                heroVideo.currentTime = targetTime;
            }
        }
        if (!prefersReducedMotion) {
            window.addEventListener('scroll', function() {
                cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(updateVideo);
            }, { passive: true });
        } else {
            heroVideo.pause();
            heroVideo.currentTime = 0;
        }
    }
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    });
});