# Crear una kata

## Instalación de Jest

```
    npm init
    npm i jest
    npm install --save-dev @babel/core
```

Crea un archivo de configuración de Babel llamado .babelrc en la raíz de tu proyecto y agrega la siguiente configuración:

```json
{
  "presets": ["@babel/preset-env"]
}
```

Modifica tu archivo package.json para incluir una configuración de Jest que use Babel para transpilar tu código. Actualiza el campo "scripts" y agrega un campo "jest":

```json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.js$": "babel-jest"
    }
  }
}
```

## Pasar los tests

```
npm run test
```

## Subir a GitHub

Antes de subir el repositorio, crear un archivo .gitignore y añadir la ruta a node_modules

```
/node_modules
```
