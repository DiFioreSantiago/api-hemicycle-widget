
# API de Votaciones Legislativas

Este proyecto expone una API REST sencilla para acceder a los resultados de votaciones legislativas en formato JSON.

Forma parte del ecosistema del proyecto de visualización interactiva de votaciones en hemiciclo.  
🔗 [Frontend del proyecto de visualización](https://github.com/tu-usuario/repositorio-frontend)

---

## 📦 ¿Qué hace esta API?

Sirve archivos JSON generados previamente por un script en Python que se encuentra en el [repositorio](https://github.com/DiFioreSantiago/script-hemicycle-data), incluyendo:

- Resultados voto por voto de cada legislador (diputados y senadores)
- Totales agrupados por tipo de voto y por bloque/partido político

---

## 📂 Estructura del proyecto

```
/data
├── votacionDiputados.json
├── votacionSenadores.json
└── mockResults.json

server.js
```

---

## 🚀 Cómo usar localmente

1. Instalá dependencias:

```bash
npm install
```

2. Ejecutá el servidor:

```bash
node server.js
```

3. Accedé a la API en:

- http://localhost:3001/api/mockResults
- http://localhost:3001/api/votacionDiputados
- http://localhost:3001/api/votacionSenadores

---

## 🌐 API desplegada

Esta API está desplegada en:

```plaintext
https://api-hemicycle-widget.onrender.com
```

### 🔧 Endpoints disponibles

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/mockResults` | GET | Totales por tipo de voto y por bloque/partido |
| `/api/votacionDiputados` | GET | Detalle voto por voto de diputados |
| `/api/votacionSenadores` | GET | Detalle voto por voto de senadores |
| `/data/*.json` | GET | Acceso estático a cualquier archivo dentro de `/data` (opcional) |
| `/` | GET | Devuelve texto plano con mensaje de bienvenida |

---

## 🤝 Integración con el frontend

Esta API está diseñada para ser consumida por el proyecto de visualización en React:  
🔗 [https://github.com/tu-usuario/repositorio-frontend](https://github.com/tu-usuario/repositorio-frontend)

---

## 🛡️ Licencia

Este proyecto está bajo la Licencia MIT.  
Podés usarlo, modificarlo y redistribuirlo libremente.
