import './style.css';

const imageLinks = [
  'DIRECT_IMAGE_URL_1', // замените на прямую ссылку из поля href для photo1.jpg
  'DIRECT_IMAGE_URL_2', // для photo2.jpg
  'DIRECT_IMAGE_URL_3',
  'DIRECT_IMAGE_URL_4',
  'DIRECT_IMAGE_URL_5',
  'DIRECT_IMAGE_URL_6'
];

const videoLinks = [
  'DIRECT_VIDEO_URL_1', // замените на href для video1.mp4
  'DIRECT_VIDEO_URL_2',
  'DIRECT_VIDEO_URL_3',
  'DIRECT_VIDEO_URL_4'
];

function render() {
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
        ${imageLinks.map((url, i) =>
          `<img src="${url}" alt="Фото ${i+1}">`
        ).join('')}
        ${videoLinks.map((url, i) =>
          `<video src="${url}" controls type="video/mp4"></video>`
        ).join('')}
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

render();
