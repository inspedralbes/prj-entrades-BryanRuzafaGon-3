# Manual d'Instal·lació i Configuració

Aquest document detalla els passos necessaris per desplegar el projecte "Teatre Regalia" en un entorn de desenvolupament local.

## Requisits Previs
- **PHP** >= 8.2
- **Composer**
- **Node.js** >= 18.x
- **SQLite** (inclòs per defecte en PHP/Laravel)

---

## 1. Backend (Laravel API)
El backend gestiona la persistència de dades i els pagaments.

1. Entra a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Instal·la les dependències:
   ```bash
   composer install
   ```
3. Configura l'entorn:
   ```bash
   copy .env.example .env
   php artisan key:generate
   ```
4. Prepara la base de dades:
   ```bash
   touch database/database.sqlite
   php artisan migrate:fresh --seed
   ```
5. Inicia el servidor:
   ```bash
   php artisan serve --port=8000
   ```

---

## 2. Servidor de Temps Real (Node.js)
Motor de sincronització de butaques i concurrència.

1. Entra a la carpeta realtime:
   ```bash
   cd realtime
   ```
2. Instal·la les dependències:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   node index.js
   ```
   *El servidor escoltarà al port 3001.*

---

## 3. Frontend (Nuxt.js)
Interfície d'usuari reactiva.

1. Entra a la carpeta frontend:
   ```bash
   cd frontend
   ```
2. Instal·la les dependències:
   ```bash
   npm install
   ```
3. Inicia l'aplicació en mode desenvolupament:
   ```bash
   npm run dev
   ```
4. Accedeix a l'aplicació:
   [http://localhost:3000](http://localhost:3000)

---

## Notes Adicionals
- **Accés Admin:** Pots accedir al panell de control a `/admin`.
- **Base de dades:** S'utilitza SQLite per simplificar la correcció del tribunal. No cal configurar MySQL.
- **CORS:** El backend està configurat per acceptar peticions des de `localhost:3000`.
