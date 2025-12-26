// Данные товаров (добавлено больше для "огромности", с реальными изображениями)
let products = [
    { id: 1, name: 'Смартфон Samsung', price: 15000, category: 'electronics', image: 'https://media.wired.com/photos/684368b03c448a9bc4a5dc90/master/w_1600%2Cc_limit/Galaxy%2520A36%2520SOURCE%2520Julian%2520Chokkattu.png', description: 'Мощный смартфон с камерой 108MP.', rating: 4.5, reviews: [] },
    { id: 2, name: 'Футболка Nike', price: 1000, category: 'clothing', image: 'https://m.media-amazon.com/images/I/618ahoq1jOL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg', description: 'Хлопковая футболка.', rating: 4.0, reviews: [] },
    { id: 3, name: 'Книга "JS для профи"', price: 500, category: 'books', image: 'https://www.codewithfaraz.com/img/10+%20Free%20JavaScript%20Books%20in%20PDF%20for%20Beginners%20and%20Pros.webp', description: 'Книга по JavaScript.', rating: 5.0, reviews: [] },
    { id: 4, name: 'Ноутбук Lenovo', price: 50000, category: 'electronics', image: 'https://cdn.mos.cms.futurecdn.net/5XuViMuAFdViYGdAX8QG3d.jpg', description: 'Игровой ноутбук.', rating: 4.8, reviews: [] },
    { id: 5, name: 'Джинсы Levi\'s', price: 2000, category: 'clothing', image: 'https://media.gettyimages.com/id/458535957/photo/levi-strauss-label-on-a-pair-of-blue-jeans.jpg?s=612x612&w=gi&k=20&c=5KXulijnKX2H0dluSx25nLQ0WAt7IGDtiVarFY0c-5Q=', description: 'Классические джинсы.', rating: 4.2, reviews: [] },
    { id: 6, name: 'Наушники Sony', price: 3000, category: 'electronics', image: 'https://cdn.mos.cms.futurecdn.net/skBVreU5KroYycebb5Kqa9.jpg', description: 'Беспроводные наушники.', rating: 4.7, reviews: [] },
    { id: 7, name: 'Куртка Adidas', price: 4000, category: 'clothing', image: 'https://assets.adidas.com/images/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/w_600,f_auto,q_auto/fee1b0b61e594a30bfe7afc30098c0fc_9366/Adicolor_Classics_SST_Track_Jacket_Black_IM4545_01_laydown.jpg', description: 'Зимняя куртка.', rating: 4.3, reviews: [] },
    { id: 8, name: 'Книга "Python Basics"', price: 600, category: 'books', image: 'https://files.realpython.com/media/python-basics-3d-transparent-centered.1600697390a8.png', description: 'Основы Python.', rating: 4.6, reviews: [] },
    { id: 9, name: 'Монитор LG', price: 10000, category: 'electronics', image: 'https://media.us.lg.com/transform/85f655bf-050e-4416-94e5-acdf0cf98951/2025_MS_Preorder-6k-Monitor_MB_M_900x600', description: '4K монитор.', rating: 4.9, reviews: [] },
    { id: 10, name: 'Кроссовки Puma', price: 2500, category: 'clothing', image: 'https://i.ebayimg.com/images/g/KyAAAOSwX2Bk0u2V/s-l1200.jpg', description: 'Спортивные кроссовки.', rating: 4.4, reviews: [] },
    { id: 11, name: 'Книга "AI Revolution"', price: 700, category: 'books', image: 'https://m.media-amazon.com/images/I/71wrewFA5iL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg', description: 'Книга об ИИ.', rating: 4.8, reviews: [] },
    { id: 12, name: 'Планшет iPad', price: 20000, category: 'electronics', image: 'https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-IPAD-2048px-air-m3-no-case.jpg?auto=webp&quality=75&width=1024', description: 'Планшет с Retina.', rating: 4.7, reviews: [] },
    { id: 13, name: 'Шорты Under Armour', price: 1500, category: 'clothing', image: 'https://i.ebayimg.com/images/g/6uYAAOSw19dlmw-p/s-l400.jpg', description: 'Спортивные шорты.', rating: 4.1, reviews: [] },
    { id: 14, name: 'Книга "Web Design"', price: 550, category: 'books', image: 'https://m.media-amazon.com/images/I/61tSY6XyT5S.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg', description: 'Дизайн веб-сайтов.', rating: 4.5, reviews: [] },
    { id: 15, name: 'Камера Canon', price: 25000, category: 'electronics', image: 'https://i.rtings.com/assets/pages/v8gZHziO/best-canon-medium.jpg?format=auto', description: 'Зеркальная камера.', rating: 4.6, reviews: [] },
    { id: 16, name: 'Платье Zara', price: 3000, category: 'clothing', image: 'https://i.ebayimg.com/images/g/4nwAAOSwWhdmxAQI/s-l1200.jpg', description: 'Летнее платье.', rating: 4.2, reviews: [] },
    { id: 17, name: 'Книга "Data Science"', price: 800, category: 'books', image: 'https://www.passionned.com/wp/wp-content/uploads/data-science-book.png', description: 'Data Science для начинающих.', rating: 4.9, reviews: [] },
    { id: 18, name: 'Мышь Logitech', price: 1000, category: 'electronics', image: 'https://us.maxgaming.com/bilder/artiklar/zoom/22269_1.jpg?m=1661864590', description: 'Беспроводная мышь.', rating: 4.3, reviews: [] },
    { id: 19, name: 'Шапка New Era', price: 800, category: 'clothing', image: 'https://railriders.milbstore.com/cdn/shop/files/70331909_59FIFTY_AC_NEYYAN_OTC_3QR_3750x.jpg?v=1683665275', description: 'Бейсболка.', rating: 4.0, reviews: [] },
    { id: 20, name: 'Книга "Machine Learning"', price: 900, category: 'books', image: 'https://m.media-amazon.com/images/I/71rbZNFHLTL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg', description: 'Машинное обучение.', rating: 4.7, reviews: [] },
    // Добавь ещё больше, если нужно
];

let cart = [];
let currentUser = null;
let isAdmin = false;
let currentCategory = null; // Для сортировки в категориях

// Отображение товаров
function displayProducts(list, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    list.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} руб.</p>
            <p>Рейтинг: ${product.rating}</p>
            <button onclick="viewProduct(${product.id})">Подробнее</button>
            <button onclick="addToCart(${product.id})">В корзину</button>
        `;
        container.appendChild(card);
    });
}

// Инициализация
window.onload = () => {
    displayProducts(products, 'product-list');
    updateCartCount();
    startSlider();
    checkLogin();
};

// Слайдер (исправлено на плавный слайд)
let slideIndex = 0;
function startSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }, 3000);
}

// Добавление в корзину (теперь проверка на дубликаты, добавляет количество)
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
    alert('Товар добавлен в корзину!');
}

// Обновление счетчика корзины
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.getElementById('cart-count').innerText = totalItems;
}

// Показ корзины (с количеством)
function showCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
    const items = document.getElementById('cart-items');
    items.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * (item.quantity || 1);
        items.innerHTML += `
            <div>
                <p>${item.name} x${item.quantity || 1} - ${itemTotal} руб.</p>
                <button onclick="removeFromCart(${index})">Удалить</button>
            </div>
        `;
        total += itemTotal;
    });
    document.getElementById('total-price').innerText = total;
}

// Закрытие корзины
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Удаление из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
    updateCartCount();
}

// Оформление заказа
function checkout() {
    if (cart.length === 0) return alert('Корзина пуста!');
    alert('Заказ оформлен! Сумма: ' + document.getElementById('total-price').innerText + ' руб.');
    cart = [];
    updateCartCount();
    closeCart();
}

// Поиск
function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered, 'product-list');
}

// Фильтр по категории
function filterCategory(category) {
    currentCategory = category;
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered, 'filtered-products');
    document.getElementById('sort-select').value = 'none'; // Сброс сортировки
}

// Сортировка
function sortProducts(type) {
    if (!currentCategory) return;
    let filtered = products.filter(p => p.category === currentCategory);
    if (type === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (type === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (type === 'rating-desc') {
        filtered.sort((a, b) => b.rating - a.rating);
    }
    displayProducts(filtered, 'filtered-products');
}

// Просмотр товара
function viewProduct(id) {
    const product = products.find(p => p.id === id);
    const modal = document.getElementById('product-modal');
    const details = document.getElementById('product-details');
    details.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Цена: ${product.price} руб.</p>
        <p>Рейтинг: ${product.rating}</p>
        <button onclick="addToCart(${product.id})">В корзину</button>
    `;
    const reviewsDiv = document.getElementById('reviews');
    reviewsDiv.innerHTML = '<h3>Отзывы</h3>';
    product.reviews.forEach(review => {
        reviewsDiv.innerHTML += `<div class="review"><p>${review}</p></div>`;
    });
    modal.style.display = 'block';
    window.currentProductId = id;
}


function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}


function addReview() {
    if (!currentUser) return alert('Войдите, чтобы оставить отзыв!');
    const textarea = document.querySelector('#review-form textarea');
    const review = textarea.value.trim();
    if (review) {
        const product = products.find(p => p.id === window.currentProductId);
        product.reviews.push(`${currentUser}: ${review}`);
        viewProduct(window.currentProductId);
        textarea.value = '';
    } else {
        alert('Отзыв не может быть пустым!');
    }
}


function showLogin() {
    document.getElementById('login-modal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('login-modal').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
        currentUser = username;
        isAdmin = true;
        showAdminPanel();
    } else if (username && password) {
        currentUser = username;
    } else {
        return alert('Неверные данные!');
    }
    localStorage.setItem('user', currentUser);
    localStorage.setItem('isAdmin', isAdmin);
    updateAuthLink();
    closeLogin();
    alert('Вход выполнен!');
}

function register() {
    login(); // Симуляция, в реальности добавь проверку уникальности
}

function checkLogin() {
    currentUser = localStorage.getItem('user');
    isAdmin = localStorage.getItem('isAdmin') === 'true';
    updateAuthLink();
    if (isAdmin) showAdminPanel();
}

function updateAuthLink() {
    const link = document.getElementById('auth-link');
    if (currentUser) {
        link.innerHTML = `<a href="#" onclick="logout()">Выйти (${currentUser})</a>`;
    } else {
        link.innerHTML = `<a href="#login" onclick="showLogin()">Войти</a>`;
    }
}

function logout() {
    currentUser = null;
    isAdmin = false;
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    updateAuthLink();
    document.getElementById('admin-panel').style.display = 'none';
}


function showAdminPanel() {
    const panel = document.getElementById('admin-panel');
    panel.style.display = 'block';
    displayAdminProducts();
}

function displayAdminProducts() {
    const container = document.getElementById('admin-products');
    container.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price} руб.</p>
            <button onclick="editProduct(${product.id})">Редактировать</button>
            <button onclick="deleteProduct(${product.id})">Удалить</button>
        `;
        container.appendChild(card);
    });
}

function addProduct() {
    const name = document.getElementById('new-name').value.trim();
    const price = parseInt(document.getElementById('new-price').value);
    const category = document.getElementById('new-category').value.trim();
    const image = document.getElementById('new-image').value.trim();
    const description = document.getElementById('new-description').value.trim();
    if (name && !isNaN(price) && category && image) {
        const newId = products.length + 1;
        products.push({ id: newId, name, price, category, image, description, rating: 0, reviews: [] });
        displayProducts(products, 'product-list');
        displayAdminProducts();
        alert('Товар добавлен!');
    } else {
        alert('Заполните все поля правильно!');
    }
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    displayProducts(products, 'product-list');
    displayAdminProducts();
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    const newName = prompt('Новое название:', product.name);
    const newPrice = parseInt(prompt('Новая цена:', product.price));
    if (newName && !isNaN(newPrice)) {
        product.name = newName;
        product.price = newPrice;
        displayProducts(products, 'product-list');
        displayAdminProducts();
        alert('Товар обновлён!');
    }
}


window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};