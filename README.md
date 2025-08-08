# Glassmotion — React + Node/Express

Современный интерактивный сайт с дизайном в стиле Glassmorphism, анимациями (Framer Motion),
мини‑игрой/3D‑сценой (Three.js), темной/светлой темой и динамическими виджетами (погода, новости, цитата дня).
Форма обратной связи валидируется на фронте и отправляется на бэкенд (эмуляция БД в памяти).

## 🚀 Быстрый старт

```bash
npm install
npm run dev
```

- Клиент: http://localhost:5173
- Сервер: http://localhost:3001

> Порт сервера можно изменить через `.env`.

## ⚙️ Технологии
- **Frontend:** React 18, Vite, React Router, Tailwind CSS, SCSS, Framer Motion, Three.js
- **Backend:** Node.js, Express, CORS, dotenv, nodemon

## 🧩 Фишки
- Glassmorphism UI (полупрозрачные карточки, blur, подсветка, hover‑эффекты)
- Анимации появления при скролле и интерактивные hover‑эффекты
- Автоматическое определение темы (prefers-color-scheme) + toggle
- Виджеты:
  - Погода (Open‑Meteo, без ключа)
  - Новости (Hacker News Algolia API)
  - Цитата дня (Quotable)
- Мини‑сцена Three.js: стеклянный вращающийся тор
- Форма обратной связи: фронт‑валидация + Express API, хранение в памяти

## 🔧 Команды (корень)
- `npm run dev` — параллельный запуск клиента и сервера
- `npm run dev:client` / `npm run dev:server` — запуск по отдельности

## 🛠️ Переменные окружения
Создайте `.env` в корне или используйте `.env.example`:

```
PORT=3001
NEWS_API_BASE=https://hn.algolia.com/api/v1
WEATHER_API_BASE=https://api.open-meteo.com/v1
QUOTE_API_BASE=https://api.quotable.io
```

## 🧪 Тест отправки формы
Перейдите на страницу **Playground**, заполните форму и отправьте. Ответ придет с сервера; запись сохраняется в памяти (эмуляция БД).

## 📜 Лицензия
MIT
