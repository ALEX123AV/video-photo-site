import './style.css';

const publicKey = 'https://disk.yandex.ru/d/b-Dv09HySVT-6A';
const imageFiles = ['photo1.jpg','photo2.jpg','photo3.jpg'];

async function getHref(path) {
  const api = `https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=${encodeURIComponent(publicKey)}&path=/${path}`;
  const res = await fetch(api);
  const json = await res.json();
  return json.href;
}

async function init() {
  // ждём прямые ссылки на все файлы
  const imageLinks = await Promise.all(imageFiles.map(f => getHref(f)));
  const videoLinks = await Promise.all(videoFiles.map(f => getHref(f)));

  document.querySelector('#app').innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <h1>Профессиональная видеосъёмка и фотосессии</h1>
        <p>Мероприятия • Матчи • Свадьбы • Блоги</p>
        <a href="#services" class="cta-button">Заказать съёмку</a>
      </div>
    </section>

    <section id="services" class="services">
      <h2>Наши услуги</h2>
      <div class="cards">
        <div class="card">
          <h3>Фотосъёмка мероприятий</h3>
          <p>Профессиональные фото на детских праздниках, свадьбах и концертах.</p>
        </div>
        <div class="card">
          <h3>Видеосъёмка блогов</h3>
          <p>Снимаем и монтируем яркие видео для YouTube, Instagram, TikTok.</p>
        </div>
        <div class="card">
          <h3>Фотосессии</h3>
          <p>Индивидуальные, семейные, уличные — с выбором локаций и образов.</p>
        </div>
        <div class="card">
          <h3>Съёмка матчей и турниров</h3>
          <p>Качественная съёмка детских матчей и спортивных мероприятий.</p>
        </div>
      </div>
    </section>

    <section id="portfolio" class="portfolio">
      <h2>Наши работы</h2>
      <div class="gallery">
        ${imageLinks.map((href,i) => `<img src="${href}" alt="Фото ${i+1}">`).join('')}
        ${videoLinks.map((href,i) => `<video src="${href}" controls></video>`).join('')}
      </div>
    </section>

    <section id="contacts" class="services">
      <h2>Контакты</h2>
      <form class="cards">
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Email или телефон" />
        <textarea placeholder="Сообщение"></textarea>
        <button type="submit" class="cta-button">Отправить</button>
      </form>
    </section>
  `;
}

init();
