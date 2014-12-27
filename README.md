# Статичная верстка макета [Solitude](http://www.templateworld.com/free_templates.html)

Проект для создания статичной верстки psd-макета Solitude с использованием полного стэка БЭМ-технологий.

Проект основан на [`project-stub`](https://github.com/bem/project-stub/tree/enb-merged-config)

## Локальный запуск

```bash
 $ git clone https://github.com/oozywaters/solitude.git

 $ npm i

 $ ./node_modules/.bin/bem server

```
Страница `index` доступна по адресу http://localhost:8080/desktop.bundles/index/index.html

## Сборка статичной верстки

Для сборки статичной версии верстки нужно установить cssrb

```
$ npm i cssrb
```

Потом запустить скрипт `production_script.sh`:

```
$ sh production_script.sh
```

Верстка будет собрана в папке `desktop.bundles/merged/build`:

* папка `css`
* папка `js`
* папка `img` для картинок контента
* папка `templates` для картинок из css
* файлы `html` страниц