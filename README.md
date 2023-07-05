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
  },
  "dependencies": {
    "jest": "^29.6.0"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "babel-jest": "^27.0.0"
  }
}
```

para que funcione el comando de test, añadir lo siguiente:

```json
"scripts": {
  "test": "jest"
}
```

Para pasar los tests

```
npm run test
```
