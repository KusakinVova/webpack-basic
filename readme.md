# Commands

## Установить пакеты

```>
npm i
```

Собрать билд

```>
npm run build
```

Запустить проект

```>
npm start
```

## Команды запуска

Для сборки проекта

```>
npm run build
```

Для просмотра webpack-dev-server

```>
npm run start
```

СМОТРИ http://localhost:9000/

Команды прописаны в файле package.json -> scripts

## Что есть в сборке

- webpack
- webpack-cli
- webpack-dev-server

- html-loader
- html-webpack-plugin

- css-loader
- style-loader
- sass
- sass-loader
- sass-resources-loader

```>
npm i --save-dev webpack webpack-cli webpack-dev-server
npm i --save-dev html-loader html-webpack-plugin
npm i --save-dev css-loader style-loader sass sass-loader sass-resources-loader
```

## Что не вошло в сборку

```>
npm i --save-dev javascript-obfuscator webpack-obfuscator  
```

чтобы добавить в код всякого
