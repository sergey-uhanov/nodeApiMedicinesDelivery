# Pharmacy API Server

Серверная часть приложения для аптечной сети, разработанная с использованием Express.js и Node.js.

## Технический стек

- Node.js
- Express.js
- Postgres

## Основные функции

1. Предоставление информации об аптеках
2. Управление каталогом лекарств
3. Обработка заказов и корзины покупок
4. Организация доставки
5. Хранение данных в базе
6. Оповещение о подтверждения заказа через e-mail

## Архитектура API

### Endpoints

- `/pharmacies` - получение списка аптек
- `/pharmacies/:id` - получение информации о конкретной аптеке
- `/medicines` - управление каталогом лекарств
- `/cart` - операции с корзиной покупок
- `/orders` - оформление и управление заказами
- `/delivery` - настройка доставки

### Модели данных

1. Pharmacy
2. Medicine
3. Cart
4. Order
5. Delivery

## Особенности реализации

- RESTful API архитектура
- Асинхронная обработка запросов
- Валидация входных данных
- Обработка ошибок и логирование


## Безопасность

- Использование HTTPS
- Защита от основных веб-уязвимостей (XSS, CSRF, SQL-инъекции)
- Ограничение частоты запросов (rate limiting)


## Требования к окружению

- Node.js v14+

## Установка и запуск

1. Клонируйте репозиторий
2. Установите зависимости: `npm install`
3. Настройте переменные окружения
4. Запустите сервер: `npm start`
