// ===== Фирменные блюда =====
// Чтобы добавить фото, положите файл в img/dishes/ с именем <slug>.webp
// (например, img/dishes/draniki.webp) — карточка подхватит его сама.
const DISHES = [
    {
        slug: 'draniki',
        name: 'Драники со сметаной',
        weight: '250/50 г',
        price: 14,
        text: 'Хрусткие по краям и нежные внутри — тёртый картофель, обжаренный до золотистой корочки. Подаём горячими, с густой сметаной.'
    },
    {
        slug: 'machanka',
        name: 'Мачанка с драниками',
        weight: '530 г',
        price: 25,
        text: 'Томлёное мясо в густой сметанной подливке. Драники полагается макать — для этого мачанку и придумали.'
    },
    {
        slug: 'kolduny',
        name: 'Колдуны с мясом',
        weight: '400 г',
        price: 19,
        text: 'Румяные картофельные колдуны с сочной мясной начинкой внутри. Сытно, по‑домашнему, как в деревне на выходных.'
    },
    {
        slug: 'borsch',
        name: 'Панский борщ',
        weight: '320/180/30 г',
        price: 17,
        text: 'Наваристый, густой, рубиновый. Рядом — тёмный хлеб, сало и сметана: всё, как подавали к панскому столу.'
    },
    {
        slug: 'rulka',
        name: 'Рулька в пиве',
        weight: '1300 г · на двоих',
        price: 48,
        text: 'Свиная рулька, томлённая в пиве до тающей мякоти. Большое блюдо для компании — возьмите к нему квашеной капусты и хрена.'
    },
    {
        slug: 'duck',
        name: 'Утиная ножка с пюре',
        weight: '380 г',
        price: 34,
        text: 'Утиная ножка с золотистой корочкой и мягким мясом, которое само отходит от кости. К ней — шелковистое картофельное пюре.'
    },
    {
        slug: 'holodnik',
        name: 'Холодник',
        weight: '320/100 г',
        price: 14,
        text: 'Летняя классика: прохладный свекольный суп нежно‑розового цвета, свежий и бодрящий. Лучшее спасение в жаркий день.'
    },
    {
        slug: 'pie',
        name: 'Ягодный пирог',
        weight: '150 г',
        price: 12,
        text: 'Сладкие ягоды с лёгкой кислинкой и рассыпчатое тесто — как у бабушки на даче. Идеально к чаю после сытного обеда.'
    }
];

// ===== Полное меню (по menu1/menu2) =====
const MENU = [
    {
        title: 'Закуски',
        items: [
            ['Бутерброды с сельдью', '100', 7],
            ['Бутерброды с салом', '100', 7],
            ['Соленья домашние', '400', 18],
            ['Ассорти свежих овощей', '350', 15],
            ['Маринованные грибы с луком', '200', 17],
            ['Мясная тарелка', '500', 27, 'Полендвица, колбаса с/к, сало, грудинка, ребро с/к, сальтисон, соленья, хрен, гренки'],
            ['Сырная тарелка', '300', 24],
            ['Сельдь с луком', '200', 12],
            ['Сет «6 соток»', '300/350', 57, '6 настоек, полендвица, колбаса с/к, сало, грудинка, сельдь, сальтисон, хлеб, лук, огурец, хрен'],
            ['Рулетики из свеклы', '170', 12]
        ]
    },
    {
        title: 'Горячие закуски',
        items: [
            ['Шампиньоны, запечённые с сыром', '200', 17],
            ['Запечённые улитки (6 шт)', '110', 28],
            ['Запечённый картофель', '180', 8]
        ]
    },
    {
        title: 'Салаты',
        items: [
            ['Оливье', '220', 14, 'Колбаса, зелёный горошек, картофель, морковь, яйцо, лук, майонез'],
            ['Сельдь под шубой', '220', 14, 'Сельдь, свекла, картофель, морковь, яйцо, лук, майонез'],
            ['Салат с говяжьим языком', '230', 18, 'Говяжий язык, фасоль, перец болгарский, лук, ореховая заправка'],
            ['Салат с курицей', '220', 16, 'Филе куриное, листья салата, томат, огурец, перец болгарский, лук, фирменная заправка'],
            ['Салат со свеклой', '150', 14, 'Свекла, шпинат, сыр фета, грецкий орех, фирменная заправка']
        ]
    },
    {
        title: 'Супы',
        items: [
            ['Панский борщ', '320/180/30', 17],
            ['Холодник', '320/100', 14],
            ['Поливка грибная', '350/170', 15]
        ]
    },
    {
        title: 'Горячие блюда',
        items: [
            ['Драники со сметаной', '250/50', 14],
            ['Домашняя колбаска с картофельным пюре', '390', 17],
            ['Рулька в пиве (блюдо на двоих)', '1300', 48],
            ['Мачанка с драниками', '530', 25],
            ['Мачанка с блинами', '510', 25],
            ['Колдуны с мясом', '400', 19],
            ['Говяжьи щёчки с картофелем', '400', 33],
            ['Крылья с хреном', '260', 18],
            ['Сковорода деревенская', '450', 29],
            ['Утиная ножка с картофельным пюре', '380', 34],
            ['Свинина с картофелем, запечённые в горшочке', '400', 19],
            ['Грузди в сметане с запечённым картофелем', '210', 28]
        ]
    },
    {
        title: 'Дополнительно',
        items: [
            ['Хлеб', '80', 3],
            ['Сало', '30', 4],
            ['Грудинка', '30', 4],
            ['Капуста квашеная', '100', 6],
            ['Хрен', '50', 3],
            ['Горчица', '50', 3]
        ]
    },
    {
        title: 'Десерты',
        items: [
            ['Ягодный пирог', '150', 12],
            ['Шоколадная колбаса', '150', 12],
            ['Мороженое', '160', 12]
        ]
    },
    {
        title: 'Бар 18+',
        bar: true,
        images: ['./img/bar-1.jpg', './img/bar-2.jpg']
    }
];

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

// ===== Шапка и бургер =====
const header = document.getElementById('header');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

const onScroll = () => header.classList.toggle('header--solid', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const setMenuOpen = (open) => {
    document.body.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
};

burger.addEventListener('click', () => setMenuOpen(!document.body.classList.contains('nav-open')));
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));

// ===== Карточки блюд =====
const dishesGrid = document.getElementById('dishes-grid');

dishesGrid.innerHTML = DISHES.map((d) => `
    <article class="dish reveal">
        <div class="dish__cover">
            <div class="dish__placeholder">
                <span class="dish__letter">${escapeHtml(d.name[0])}</span>
            </div>
            <img src="./img/dishes/${d.slug}.webp" alt="${escapeHtml(d.name)}" loading="lazy">
        </div>
        <div class="dish__body">
            <h3>${escapeHtml(d.name)}</h3>
            <p>${escapeHtml(d.text)}</p>
            <div class="dish__meta">
                <span>${escapeHtml(d.weight)}</span>
                <strong>${d.price} BYN</strong>
            </div>
        </div>
    </article>
`).join('');

// Нет фото — остаётся обложка с орнаментом
dishesGrid.querySelectorAll('.dish__cover img').forEach((img) => {
    const markLoaded = () => img.closest('.dish__cover').classList.add('dish__cover--photo');
    if (img.complete && img.naturalWidth) markLoaded();
    img.addEventListener('load', markLoaded);
    img.addEventListener('error', () => img.remove());
});

// ===== Меню с вкладками =====
const tabs = document.getElementById('menu-tabs');
const panel = document.getElementById('menu-panel');

let isAdult = false;
try { isAdult = sessionStorage.getItem('bely-gus-adult') === '1'; } catch (e) { /* хранилище недоступно */ }

const renderCategory = (index) => {
    const cat = MENU[index];

    tabs.querySelectorAll('.menu__tab').forEach((tab, i) => {
        tab.classList.toggle('is-active', i === index);
        tab.setAttribute('aria-selected', String(i === index));
    });

    if (cat.bar) {
        panel.innerHTML = isAdult
            ? `<div class="menu__bar">${cat.images.map((src, i) => `
                <button class="menu__bar-page" data-src="${src}">
                    <img src="${src}" alt="Барная карта, страница ${i + 1}" loading="lazy">
                </button>`).join('')}</div>`
            : `<div class="menu__locked">
                <p>Барная карта доступна гостям старше 18 лет.</p>
                <button class="btn btn--red" id="bar-unlock">Открыть барную карту</button>
               </div>`;
        return;
    }

    panel.innerHTML = `
        <div class="menu__head"><span>Блюдо</span><span>Гр</span><span>BYN</span></div>
        <ul class="menu__list">
            ${cat.items.map(([name, weight, price, desc]) => `
                <li class="menu__row">
                    <div class="menu__name">
                        <span>${escapeHtml(name)}</span>
                        ${desc ? `<small>${escapeHtml(desc)}</small>` : ''}
                    </div>
                    <span class="menu__weight">${escapeHtml(weight)}</span>
                    <span class="menu__price">${price}</span>
                </li>`).join('')}
        </ul>`;
};

tabs.innerHTML = MENU.map((cat, i) => `
    <button class="menu__tab${cat.bar ? ' menu__tab--bar' : ''}" role="tab" data-index="${i}">${escapeHtml(cat.title)}</button>
`).join('');

tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.menu__tab');
    if (!tab) return;
    const index = Number(tab.dataset.index);
    if (MENU[index].bar && !isAdult) {
        openAgeModal(index);
        return;
    }
    renderCategory(index);
});

panel.addEventListener('click', (e) => {
    if (e.target.closest('#bar-unlock')) {
        openAgeModal(MENU.findIndex((c) => c.bar));
        return;
    }
    const page = e.target.closest('.menu__bar-page');
    if (page) {
        const bar = MENU.find((c) => c.bar);
        openLightbox(bar.images.map((src) => ({ src, alt: 'Барная карта' })), bar.images.indexOf(page.dataset.src));
    }
});

renderCategory(0);

// ===== Проверка 18+ =====
const ageModal = document.getElementById('age-modal');
let pendingBarIndex = null;

function openAgeModal(index) {
    pendingBarIndex = index;
    ageModal.hidden = false;
    document.body.classList.add('no-scroll');
    document.getElementById('age-yes').focus();
}

function closeAgeModal() {
    ageModal.hidden = true;
    document.body.classList.remove('no-scroll');
}

document.getElementById('age-yes').addEventListener('click', () => {
    isAdult = true;
    try { sessionStorage.setItem('bely-gus-adult', '1'); } catch (e) { /* хранилище недоступно */ }
    closeAgeModal();
    renderCategory(pendingBarIndex);
});

document.getElementById('age-no').addEventListener('click', () => {
    closeAgeModal();
    renderCategory(0);
});

ageModal.addEventListener('click', (e) => {
    if (e.target === ageModal) closeAgeModal();
});

// ===== Лайтбокс =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let lbItems = [];
let lbIndex = 0;

const showLightboxItem = () => {
    const item = lbItems[lbIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightbox.classList.toggle('lightbox--single', lbItems.length < 2);
};

function openLightbox(items, index = 0) {
    lbItems = items;
    lbIndex = Math.max(0, index);
    showLightboxItem();
    lightbox.hidden = false;
    document.body.classList.add('no-scroll');
}

const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove('no-scroll');
};

const stepLightbox = (dir) => {
    lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
    showLightboxItem();
};

lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox__arrow--prev').addEventListener('click', () => stepLightbox(-1));
lightbox.querySelector('.lightbox__arrow--next').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

let touchStartX = null;
lightbox.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
    touchStartX = null;
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.hidden) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') stepLightbox(-1);
        if (e.key === 'ArrowRight') stepLightbox(1);
    } else if (!ageModal.hidden && e.key === 'Escape') {
        closeAgeModal();
    }
});

// Лента «Атмосфера»
const feedButtons = [...document.querySelectorAll('#feed button.feed__item')];
const feedItems = feedButtons.map((btn) => {
    const img = btn.querySelector('img');
    return { src: img.getAttribute('src'), alt: img.alt };
});
feedButtons.forEach((btn, i) => btn.addEventListener('click', () => openLightbox(feedItems, i)));

// ===== Хайлайты =====
document.querySelectorAll('.highlight').forEach((btn) => {
    btn.addEventListener('click', () => {
        const target = document.querySelector(btn.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        if (btn.dataset.photo !== undefined) {
            setTimeout(() => openLightbox(feedItems, Number(btn.dataset.photo)), 600);
        }
    });
});

// ===== Плавное появление при прокрутке =====
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => observer.observe(el));
} else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
}
