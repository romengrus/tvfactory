# tvfactory.ru

## Установка на комп

1. Установить [nodejs](https://nodejs.org/)
2. Скачать исходники 
    1. Клонировать репозиторий: 
    
    ```bash
    git clone https://github.com/romengrus/tvfactory.git
    ```
    2. или скачать zip архив c https://github.com/romengrus/tvfactory
3. Установить зависимости
    ```bash
    npm install
    ```

## Структура директорий

```
assets/             <-- Ресурсные файлы
    css/            <---- Стили
    fonts/          <---- Шрифты
    images/         <---- Изображения
    js/             <---- JS скрипты
layouts/            <-- Шаблоны
    main.html
partials/           <-- Общие части на страницах
    footer.html
    header-1.html
    header-2.html
about.html          <-- Страница "О нас"
contacts.html       <-- Страница "Контакты"
index.html          <-- Страница "Основная"
partners.html       <-- Страница "Партнеры"
services.html       <-- Страница "Сервисы"
work.html           <-- Страница "Вакансии"
```

## Доступные команды 

После [установки](#установка-на-комп):

1. **Запустить локальный сервер**. При редактировании файлов - изменения на сайте будут отображаться автоматически.
    ```bash
    npm run start
    ```
2. **Скомпилировать сайт**. Результаты будут находиться в директории **public**. Содержимое этой директории можно загружать на хостинг.
    ```bash
    npm run build
    ```

## Изменение данных

Поменять номер телефона, email и почтовый индекс можно в файле **gulpfile.js** в функции **getDataForTemplates**. 