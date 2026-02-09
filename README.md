# API — Danruk Games

Backend API для проекта **Danruk Games**.  
Отвечает за предоставление данных для Telegram-бота, админки ведущего и экрана показа,
а также за агрегацию и чтение данных из базы.

---

## Назначение API

API используется для:

- админки ведущего (подготовка игр, вопросов, раундов)
- обработки данных, полученных от Telegram-бота
- экрана показа (read-only представление состояния игры)
- получения агрегированных и подготовленных данных
- изоляции бизнес-логики чтения от фронтенда

API **не является владельцем состояния игры**.

---

## Архитектурные принципы

- Слоистая архитектура
- Чёткое разделение ответственности
- Отсутствие бизнес-логики в HTTP-слое
- Отсутствие прямого доступа к БД из API-эндпоинтов
- Подготовка к serverless-деплою

---

## Стек технологий

- Node.js
- Nitro (h3)
- TypeScript
- Supabase
- @supabase/supabase-js
- vitest для тестирования
- eslint для линтинга
- prettier для форматирования
---

## Структура проекта

```
server/
├─ api/                     # HTTP слой (Nitro endpoints)
│  ├─ users/
│  │  └─ [telegramId].get.ts
│  │
│  ├─ categories/
│  │  ├─ index.get.ts
│  │  └─ [id].get.ts
│  │
│  ├─ questions/
│  │  ├─ index.get.ts
│  │  └─ [id].get.ts
│  │
│  └─ hello.get.ts
│
├─ services/                # Бизнес-логика
│  └─ users.service.ts
│
├─ db/                      # Слой доступа к данным
│  ├─ supabase.ts
│  │
│  ├─ users/
│  │  └─ users.repo.ts
│  │
│  ├─ categories/
│  │  └─ categories.repo.ts
│  │
│  └─ questions/
│     └─ questions.repo.ts
│
├─ domain/                  # Доменные типы и контракты
│  ├─ user.ts
│  ├─ category.ts
│  └─ question.ts
│
test/
├─ unit/                    # Unit-тесты
│  ├─ db/
│  │  └─ categories.repo.spec.ts
│  │
│  └─ init.spec.ts
│
├─ .gitignore
├─ .prettierrc              # Конфигурация Prettier
├─ eslint.config.ts         # Конфигурация ESLint
├─ nitro.config.ts          # Конфигурация Nitro
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.json            # Конфигурация TypeScript
└─ vitest.config.ts         # Конфигурация Vitest
```

## Слои приложения

### API (`server/api`)
- HTTP-эндпоинты
- Парсинг параметров и тела запроса
- Валидация входных данных
- Маппинг ошибок в HTTP-ответы

### Services (`server/services`)
- Бизнес-логика
- Правила и сценарии
- Оркестрация репозиториев
- Не зависят от HTTP

### DB / Repository (`server/db`)
- Доступ к Supabase
- CRUD-операции
- Без бизнес-логики

### Domain (`server/domain`)
- Типы и интерфейсы
- Контракты предметной области
- Не зависят от инфраструктуры

---

## Переменные окружения

Файл `.env.example` содержит список обязательных переменных:

```
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_PUBLIC_ROLE_KEY=
```
Файл `.env.test` содержит список переменных для тестов:

```
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_PUBLIC_ROLE_KEY=
```
---

## Локальный запуск

```bash
npm install
npm run dev
```

---

## Сборка проекта

```bash
npm run build

npm run preview # предпросмотр собранного проекта

```

Собранный проект хранится в `./.output`

---

## Линтинг и форматирование

```bash
npm run lint # Запуск eslint

npm run lint:fix # Запуск eslint с флагом --fix

npm run prettier # Запуск prettier

npm run prettier:fix # Запуск prettier с форматированием

```

---

## Тестирование

```bash

npm run test # Однократный запуск Vitest

npm run test:watch # Запуск Vitest в watch-режиме с автоматическим перезапуском тестов

npm run test:ui # Запуск Vitest в watch-режиме с UI

```

---

## Взаимодействие с другими сервисами

- Telegram-бот работает с базой данных через API
- Общая точка истины — база данных

---

## Статус проекта

Проект находится в активной разработке.
