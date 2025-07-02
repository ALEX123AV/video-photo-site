
import './index.css';

export default function App() {
  return (
    <div className="font-sans scroll-smooth">
      <nav className="fixed w-full bg-white shadow z-10 p-4 flex justify-center gap-6">
        <a href="#home" className="hover:text-blue-600">Главная</a>
        <a href="#services" className="hover:text-blue-600">Услуги</a>
        <a href="#portfolio" className="hover:text-blue-600">Портфолио</a>
        <a href="#contacts" className="hover:text-blue-600">Контакты</a>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 pt-24">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Профессиональная видеосъёмка и фотосессии мероприятий</h1>
      </section>

      <section id="services" className="min-h-screen p-10 bg-white flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">Услуги</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Съёмка детских матчей и праздников</li>
          <li>Свадебная фотосъёмка</li>
          <li>Фотосессии для блогеров и концертов</li>
        </ul>
      </section>

      <section id="portfolio" className="min-h-screen p-10 bg-gray-100 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">Портфолио</h2>
        <p>Здесь будут примеры работ — фото и видео.</p>
      </section>

      <section id="contacts" className="min-h-screen p-10 bg-white flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">Контакты</h2>
        <form className="space-y-4 max-w-md">
          <input type="text" placeholder="Ваше имя" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email или телефон" className="w-full border p-2 rounded" />
          <textarea placeholder="Сообщение" className="w-full border p-2 rounded h-24"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Отправить</button>
        </form>
      </section>
    </div>
  );
}
