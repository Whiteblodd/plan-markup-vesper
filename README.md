# Форма разметки планировок VESPER

Статическая форма на 67 квартир. Один файл `index.html`, картинки планов в `plans/`. Сервер, база и сборка не нужны.

## Как встроить

**Вариант 1. iframe (рекомендуем).** Форма живёт на своей странице, стили и скрипты сайта её не задевают:

```html
<iframe src="https://whiteblodd.github.io/plan-markup-vesper/" style="width:100%;height:100vh;border:0" title="Разметка планировок VESPER"></iframe>
```

**Вариант 2. Загрузчик для конструктора сайта (Webflow).** Подключить `https://cdn.jsdelivr.net/gh/Whiteblodd/plan-markup-vesper@main/vesper/embed.css` и `https://cdn.jsdelivr.net/gh/Whiteblodd/plan-markup-vesper@main/vesper/embed.js`, а на странице поставить `<div id="vesper-markup-form"></div>` там, где должна быть форма.

**Вариант 3. Прямая ссылка:** https://whiteblodd.github.io/plan-markup-vesper/

## Ответы

Эксперт отвечает по каждой квартире, ответы сохраняются в его браузере автоматически и переживают перезагрузку. В конце он нажимает «Выгрузить ответы» и присылает файл. На сервер ответы не уходят.
