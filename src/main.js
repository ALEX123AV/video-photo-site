
import './style.css'

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
`;
