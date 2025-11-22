# Startup-Planet

[EN]
A small example Express.js API for a list of startups, created as part of the Scrimba Express.js course.

Description
- The app exposes endpoints for searching and filtering a sample dataset of startups.
- It is a lightweight example of using Express (ES modules), routing, and simple filtering via query parameters and path parameters.

Features
- Retrieve the full list of startups: `GET /api`
- Filter using query params: `industry`, `country`, `continent`, `is_seeking_funding`, `has_mvp`
- Filter using path params: `GET /api/:field/:term` (allowed fields: `country`, `continent`, `industry`)

Requirements
- Node.js (version supporting ES modules). Recommended Node >= 14.

Installation
1. Clone the repository or copy the project files into a working directory.
2. Install dependencies (when `package.json` is present):

```powershell
npm install
```

Running
- Start the server locally with:

```powershell
node server.js
```

The server listens on port `8000` by default.

API — endpoints and examples

- **Get all data**
	- Endpoint: `GET /api`
	- Supports query params for filtering:
		- `industry` — e.g. `industry=fintech`
		- `country` — e.g. `country=poland`
		- `continent` — e.g. `continent=europe`
		- `is_seeking_funding` — `true`/`false`
		- `has_mvp` — `true`/`false`

	- Example (PowerShell):

	```powershell
	Invoke-RestMethod -Uri "http://localhost:8000/api?industry=fintech&country=poland"
	```

	- Example (curl):

	```bash
	curl "http://localhost:8000/api?industry=fintech&country=poland"
	```

- **Get by field (path params)**
	- Endpoint: `GET /api/:field/:term`
	- Allowed fields: `country`, `continent`, `industry`
	- Example: get all startups from Poland

	```powershell
	Invoke-RestMethod -Uri "http://localhost:8000/api/country/Poland"
	```

Notes about boolean values
- Query params `is_seeking_funding` and `has_mvp` expect `true` or `false`. The server parses these strings to boolean values.

Error handling
- If you use an unsupported field in `GET /api/:field/:term`, the server returns `400 Bad Request` with a message explaining allowed fields.

Possible extensions
- Add pagination
- Add sorting
- Add POST/PUT/DELETE endpoints to manage data

Contributing
- Pull requests and issues are welcome.

License
- Educational example — use as you like.


[PL]
Prosty serwer API dla listy startupów stworzonego w ramach kursu Scrimba Express.js.

Opis
-: Aplikacja udostępnia endpointy do przeszukiwania i filtrowania przykładowych danych startupów.
-: Służy jako lekki przykład użycia Express (ES modules), tras i prostego filtrowania po zapytaniach i parametrach ścieżki.

Funkcje
-: Pobieranie pełnej listy startupów: `GET /api`
-: Filtrowanie za pomocą query params: `industry`, `country`, `continent`, `is_seeking_funding`, `has_mvp`
-: Filtrowanie przez parametry ścieżki: `GET /api/:field/:term` (dozwolone pola: `country`, `continent`, `industry`)

Wymagania
-: Node.js (wersja obsługująca ES modules). Zalecane Node >= 14.

Instalacja
1. Sklonuj repozytorium lub skopiuj pliki do katalogu roboczego.
2. Zainstaluj zależności (jeśli projekt używa `package.json`):

```powershell
npm install
```

Uruchamianie
-: Uruchom serwer lokalnie poleceniem:

```powershell
# Startup-Planet

[PL]
Prosty serwer API dla listy startupów stworzonego w ramach kursu Scrimba Express.js.

Opis
- Aplikacja udostępnia endpointy do przeszukiwania i filtrowania przykładowych danych startupów.
- Służy jako lekki przykład użycia Express (ES modules), tras i prostego filtrowania po zapytaniach i parametrach ścieżki.

Funkcje
- Pobieranie pełnej listy startupów: `GET /api`
- Filtrowanie za pomocą query params: `industry`, `country`, `continent`, `is_seeking_funding`, `has_mvp`
- Filtrowanie przez parametry ścieżki: `GET /api/:field/:term` (dozwolone pola: `country`, `continent`, `industry`)

Wymagania
- Node.js (wersja obsługująca ES modules). Zalecane Node >= 14.

Instalacja
1. Sklonuj repozytorium lub skopiuj pliki do katalogu roboczego.
2. Zainstaluj zależności (jeśli projekt używa `package.json`):

```powershell
npm install
```

Uruchamianie
- Uruchom serwer lokalnie poleceniem:

```powershell
node server.js
```

Domyślnie serwer nasłuchuje na porcie `8000`.

API — endpointy i przykłady

- **Pobierz wszystkie dane**
	- Endpoint: `GET /api`
	- Obsługuje query params dla filtrowania:
		- `industry` — filtr po branży (np. `industry=fintech`)
		- `country` — filtr po kraju (np. `country=poland`)
		- `continent` — filtr po kontynencie (np. `continent=europe`)
		- `is_seeking_funding` — `true`/`false`
		- `has_mvp` — `true`/`false`

	- Przykład (PowerShell):

	```powershell
	Invoke-RestMethod -Uri "http://localhost:8000/api?industry=fintech&country=poland"
	```

	- Przykład (curl):

	```bash
	curl "http://localhost:8000/api?industry=fintech&country=poland"
	```

- **Pobierz dane po polu (path params)**
	- Endpoint: `GET /api/:field/:term`
	- Dozwolone `:field`: `country`, `continent`, `industry`
	- Przykład: pobierz wszystkie startupy z Polski

	```powershell
	Invoke-RestMethod -Uri "http://localhost:8000/api/country/Poland"
	```

Uwaga dotycząca wartości logicznych
- Query params `is_seeking_funding` i `has_mvp` powinny przyjmować wartości `true` lub `false`. Serwer parsuje te wartości do boolean.

Obsługa błędów
- Jeśli użyjesz nieobsługiwanego pola w `GET /api/:field/:term`, serwer zwróci `400 Bad Request` z informacją, że pole nie jest dozwolone.

Przykładowe rozszerzenia
- Dodać paginację
- Obsługa sortowania
- Endpoints do tworzenia/edycji/usuwania danych (POST/PUT/DELETE)

Wkład i kontakt
- Chętnie przyjmuję poprawki i sugestie — otwórz issue lub pull request.

Licencja
- Ten projekt ma charakter edukacyjny. Używaj według własnego uznania.
