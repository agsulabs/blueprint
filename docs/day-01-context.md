# Blueprint — Day 1 Full Context For New Chat

Date: 2026-06-02  
Project path: `/Users/gaddar/Blueprint`  
GitHub repo: `https://github.com/agsulabs/blueprint`  
Branch: `main`

This file is context for continuing the project in a new Codex chat inside the project folder.

## User Goal

The user is learning programming by building a real product step by step.

The product idea is an Admin Platform foundation. Day 1 is not about full business features yet. It is about setting up a clean technical base:

- frontend
- backends
- database connection check
- project structure
- tests
- docs
- git hygiene

The user prefers practical, commercial best practices, but does not want unnecessary tools too early.

Tone/style for future assistant:

- Answer in Russian.
- Be informal and supportive.
- Explain what is being done and why.
- Do not just generate code; also help the user understand the architecture.
- When the user asks to make changes, implement them in `/Users/gaddar/Blueprint`.
- Keep best practices, but avoid overengineering.

## Current Repository State

Local project:

```bash
/Users/gaddar/Blueprint
```

GitHub:

```text
https://github.com/agsulabs/blueprint
```

Latest known commits:

```text
dcd3442 Add backend environment examples
b91591e Remove unused Java user repository injection
e41f9f5 Document testing and learning progress
1280ec6 Add project tests and check script
f4554d1 Configure linting formatting and frontend aliases
8992b02 Introduce backend module architecture
e800658 Add Maven wrapper for Java backend
beb3a9a Clean up day 1 project foundation
```

Latest known status:

```text
main is synced with origin/main
working tree was clean after the last push
```

Before continuing, run:

```bash
cd /Users/gaddar/Blueprint
git status --short --branch
```

## Project Structure

Main folders:

```text
web/front                 React + TypeScript + Vite frontend
web/back/nest-api         NestJS backend
web/back/python-api       Python FastAPI backend
web/back/java-api         Java Spring Boot backend
python-snake              first Python core exercise
java-snake                first Java core exercise
docs/tag-01               Day 1 documentation
PROGRESS.md               progress diary
README.md                 project start/check instructions
scripts/check.sh          one-command project check
```

## What Was Built On Day 1

### Cleanup

The repo was cleaned from local/generated artifacts:

- `.venv`
- `__pycache__`
- `target`
- `.class`
- `.env`

A root `.gitignore` was added.

Important rule:

```text
.gitignore       should be committed
.env             should not be committed
.env.example     should be committed
node_modules     should not be committed
.venv            should not be committed
target           should not be committed
```

### Frontend

Frontend stack:

```text
React
TypeScript
Vite
SCSS
```

The frontend shows backend status cards.

Frontend important files:

```text
web/front/src/app/App.tsx
web/front/src/pages/home/ui/HomePage.tsx
web/front/src/widgets/status-card/ui/StatusCard.tsx
web/front/src/shared/api/backendStatusApi.ts
web/front/src/shared/config/backends.ts
web/front/src/shared/types/backendStatus.ts
web/front/src/app/styles/app.scss
```

Configured frontend import alias:

```ts
import { HomePage } from '@/pages/home/ui/HomePage';
```

Alias points to:

```text
web/front/src
```

SCSS note:

The project currently writes mostly normal CSS inside `.scss` files. This is OK. SCSS is a superset of CSS. Use SCSS features only when useful:

- small nesting is OK
- deep nesting is bad
- variables/mixins only when they reduce real duplication

### Backends

There are three backend implementations:

```text
NestJS
Python FastAPI
Java Spring Boot
```

All three currently expose the same active endpoint:

```text
/api/status
```

The endpoint returns:

```text
backend name
greeting
status
database.connected
database.message
```

The database check uses:

```sql
SELECT 1
```

There are no database tables yet.

### Backend Architecture

All backends follow the same foundation:

```text
Controller / Router
  -> Service
    -> Repository / Database Service
      -> Database
```

Meaning:

- Controller/Router receives HTTP requests.
- Service contains business logic.
- Repository/Database Service talks to the database.

Active module:

```text
status
```

Prepared placeholder modules:

```text
users
auth
public-page / public_page / publicpage
```

These placeholders exist for future features, but most are intentionally empty now.

Important Java warning fix:

`UserService` originally injected `UserRepository` but did not use it. That caused an IDE warning:

```text
The value of the field UserService.userRepository is not used
```

Fix:

The unused field and constructor were removed from:

```text
web/back/java-api/src/main/java/com/example/javaapi/users/UserService.java
```

The `UserRepository` placeholder still exists.

### Maven Wrapper

Maven wrapper was added for Java backend:

```bash
cd web/back/java-api
./mvnw spring-boot:run
```

This avoids relying on Homebrew Maven.

If IDE shows:

```text
The build file has been changed and may need reload to make it effective.
```

It is not a code error. Reload Maven project in IDE.

For VS Code:

```text
Cmd + Shift + P
Java: Update Project Configuration
```

If needed:

```text
Java: Clean Java Language Server Workspace
```

For IntelliJ / WebStorm / PyCharm Ultimate:

```text
Load Maven Changes
or Maven panel -> Reload All Maven Projects
```

## Env Files

Real `.env` files must not be committed.

Example env/config files are committed.

### Python

Existing example:

```text
web/back/python-api/.env.example
```

Local setup:

```bash
cd web/back/python-api
cp .env.example .env
```

### NestJS

Added:

```text
web/back/nest-api/.env.example
```

Content:

```env
PORT=3001
FRONTEND_ORIGIN=http://localhost:5173
DATABASE_URL=postgresql://admin_panel_user:admin_panel_password@localhost:5432/admin_panel_dev
```

Local setup:

```bash
cd web/back/nest-api
cp .env.example .env
pnpm start:dev
```

### Java

Java uses Spring Boot `application.properties`.

Main config:

```text
web/back/java-api/src/main/resources/application.properties
```

It now reads environment variables with safe defaults:

```properties
server.port=${SERVER_PORT:8081}
app.frontend-origin=${FRONTEND_ORIGIN:http://localhost:5173}

spring.datasource.url=${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/admin_panel_dev}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME:admin_panel_user}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD:admin_panel_password}
spring.datasource.driver-class-name=org.postgresql.Driver
```

Added local Java override example:

```text
web/back/java-api/application-local.example.properties
```

Local setup:

```bash
cd web/back/java-api
cp application-local.example.properties application-local.properties
./mvnw spring-boot:run -Dspring-boot.run.profiles=local
```

Ignored local Java config:

```text
web/back/java-api/application-local.properties
web/back/java-api/src/main/resources/application-local.properties
```

## Tests And Checks

Tests were added for frontend and all three backends.

### Frontend Tests

Stack:

```text
Vitest
Testing Library
jest-dom
jsdom
```

Added files:

```text
web/front/src/shared/api/backendStatusApi.test.ts
web/front/src/widgets/status-card/ui/StatusCard.test.tsx
web/front/src/pages/home/ui/HomePage.test.tsx
web/front/src/test/setup.ts
```

Tests cover:

- API client calls `/api/status`.
- API client throws useful error for HTTP errors.
- StatusCard shows loading state.
- StatusCard shows error state.
- StatusCard shows success/database state.
- HomePage renders backend cards and handles success/error results.

Frontend commands:

```bash
cd web/front
pnpm lint
pnpm format:check
pnpm test
pnpm build
```

### NestJS Tests

Added/updated:

```text
web/back/nest-api/src/modules/status/status.service.spec.ts
web/back/nest-api/test/app.e2e-spec.ts
```

The old default e2e test expected `/` -> `Hello World!`.
It was fixed to test:

```text
GET /api/status
```

NestJS commands:

```bash
cd web/back/nest-api
pnpm lint
pnpm test
pnpm test:e2e
pnpm build
```

### Python Tests

Added:

```text
web/back/python-api/requirements-dev.txt
web/back/python-api/pytest.ini
web/back/python-api/tests/test_status_api.py
web/back/python-api/tests/test_database_service.py
```

Used:

```text
pytest
httpx2
```

Note:

`httpx2` was used because current Starlette/FastAPI TestClient warns that old `httpx` fallback is deprecated.

Python commands:

```bash
cd web/back/python-api
source .venv/bin/activate
python -m pip install -r requirements-dev.txt
python -m pytest
```

Tests cover:

- `/api/status` returns expected JSON.
- Database service returns connected state when query succeeds.
- Database service returns error state when query fails.

The tests do not require a real PostgreSQL database.

### Java Tests

Added dependency:

```xml
spring-boot-starter-test
```

Added tests:

```text
web/back/java-api/src/test/java/com/example/javaapi/database/DatabaseServiceTest.java
web/back/java-api/src/test/java/com/example/javaapi/status/StatusServiceTest.java
```

Mockito was intentionally avoided in Java tests to avoid Java 25 / ByteBuddy warning.
Fake classes are used instead.

Java commands:

```bash
cd web/back/java-api
./mvnw test
./mvnw -DskipTests package
```

Tests cover:

- `DatabaseService` success path.
- `DatabaseService` failure path.
- `StatusService` response shape.

### One Command Check

Added:

```text
scripts/check.sh
```

Run everything:

```bash
cd /Users/gaddar/Blueprint
bash scripts/check.sh
```

This runs:

- frontend lint
- frontend prettier check
- frontend tests
- frontend build
- NestJS lint
- NestJS unit tests
- NestJS e2e tests
- NestJS build
- Python pytest
- Java tests
- Java package

Last known full check passed.

## Documentation Updated

Updated:

```text
README.md
PROGRESS.md
docs/tag-01/theorie.md
docs/tag-01/testprotokoll.md
```

README contains:

- project structure
- backend architecture
- startup commands
- test/check commands
- env copy commands

PROGRESS.md contains:

- completed checklist
- what was learned
- next day direction

docs/tag-01/theorie.md contains:

- frontend/backend basics
- architecture
- error handling
- tests
- code quality

docs/tag-01/testprotokoll.md contains:

- manual tests
- automatic tests
- what each test verifies

## What The User Learned

Main learning points:

- A product needs structure, tests and documentation, not only code.
- Frontend displays data; backend provides data.
- `/api/status` is an API contract between frontend and backend.
- Try/Catch belongs mostly at system boundaries:
  - HTTP
  - database
  - external APIs
  - env/config
- Tests should verify important behavior, not blindly test every line.
- Database can be mocked/faked in unit/API tests.
- ESLint catches code problems and bad patterns.
- Prettier keeps formatting consistent.
- Git commits are understandable checkpoints.
- `.env.example` is committed; real `.env` is not.
- Python FastAPI feels lighter because it has less ceremony.
- Java Spring Boot is heavier but common in enterprise.
- React + TypeScript + Java/Spring or NestJS is more attractive for jobs than only FastAPI.

## Current Tech Level Assessment

Current project level:

```text
Junior / Junior Fullstack foundation
```

Reason:

- The product is still small.
- But the engineering foundation is commercial-style:
  - typed frontend
  - API contract
  - layered backend architecture
  - tests
  - linting/formatting
  - Git hygiene
  - docs
  - env examples

Learning path discussed:

```text
React + TypeScript
Backend: NestJS or Java Spring Boot
Database: PostgreSQL
Tests: Vitest / Jest / Pytest / JUnit
Git + Docker + REST API
```

Python can be used as the easiest backend to learn logic, API and tests.
For jobs, React + TypeScript plus Java/Spring Boot or NestJS is usually stronger.

## Tooling Decisions

Discussed whether to add:

- Husky
- Docker
- Prisma
- CI/CD

Best-practice decision:

Add soon:

```text
GitHub Actions CI
Docker Compose for PostgreSQL
```

Do not add yet:

```text
Prisma
Husky
full Docker for all services
```

Reason:

- CI is useful now because `scripts/check.sh` already exists.
- Docker Compose for PostgreSQL will make local DB setup easier.
- Prisma should wait until the main backend is chosen.
- Husky can wait because full checks may be slow in a monorepo.

Suggested future order:

```text
1. GitHub Actions CI
2. Docker Compose for PostgreSQL
3. Real database migrations/tables
4. Choose main backend
5. If NestJS -> Prisma
6. If Java -> JPA/Hibernate/Flyway
7. If Python -> SQLAlchemy/Alembic
8. Husky for fast pre-commit checks
```

## Important Warnings / Notes For Future Chat

### Sandbox / Path

The actual project is outside the default Codex workspace:

```text
/Users/gaddar/Blueprint
```

In previous work, writing there required elevated permissions.

When using tools, workdir should be:

```text
/Users/gaddar/Blueprint
```

### Do Not Revert User Work

There may be local changes from the user.
Always check:

```bash
git status --short --branch
```

Do not reset or revert unrelated changes.

### Do Not Commit Secrets

Do not commit:

```text
.env
application-local.properties
node_modules
.venv
target
dist
coverage
```

### Java IDE Warning

If user sees Maven warning:

```text
The build file has been changed and may need reload to make it effective.
```

Tell them to reload Maven project in IDE. It is not a code error.

### PostgreSQL

The database exists locally according to user, but tables do not exist yet.
This is OK for Day 1.

Current backends only check connection with:

```sql
SELECT 1
```

No tables are required yet.

### Backend Choice

Do not assume the final backend yet.

Current project intentionally has three backend variants:

```text
NestJS
FastAPI
Spring Boot
```

For future commercial direction, likely choose one main backend later.

## Suggested Next Steps

Good next steps for Day 2:

```text
1. Add GitHub Actions CI using scripts/check.sh
2. Add Docker Compose for PostgreSQL
3. Improve frontend layout/responsive UI
4. Add real database schema plan
5. Decide whether users/auth starts in NestJS, Java, or Python
```

Avoid doing all tools at once.

## Quick Commands

Check project:

```bash
cd /Users/gaddar/Blueprint
bash scripts/check.sh
```

Frontend:

```bash
cd /Users/gaddar/Blueprint/web/front
pnpm install
pnpm dev
pnpm test
pnpm build
```

NestJS:

```bash
cd /Users/gaddar/Blueprint/web/back/nest-api
pnpm install
cp .env.example .env
pnpm start:dev
pnpm test
pnpm test:e2e
```

Python:

```bash
cd /Users/gaddar/Blueprint/web/back/python-api
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements-dev.txt
cp .env.example .env
python -m uvicorn src.main:app --reload --port 8001
python -m pytest
```

Java:

```bash
cd /Users/gaddar/Blueprint/web/back/java-api
./mvnw spring-boot:run
./mvnw test
./mvnw -DskipTests package
```

Java local profile:

```bash
cd /Users/gaddar/Blueprint/web/back/java-api
cp application-local.example.properties application-local.properties
./mvnw spring-boot:run -Dspring-boot.run.profiles=local
```

Git:

```bash
cd /Users/gaddar/Blueprint
git status --short --branch
git log --oneline --decorate -8
```

## One-Message Context For A New Chat

If starting a new Codex chat inside `/Users/gaddar/Blueprint`, paste:

```text
Работаем в проекте /Users/gaddar/Blueprint, GitHub repo agsulabs/blueprint, branch main.
Прочитай README.md, PROGRESS.md, docs/tag-01/theorie.md, docs/tag-01/testprotokoll.md и этот context-файл.

Проект Day 1: Admin Platform foundation.
Есть frontend React+TS+Vite, backend variants NestJS/FastAPI/Spring Boot, endpoint /api/status, PostgreSQL connection check via SELECT 1.
Есть ESLint/Prettier, tests for frontend/Nest/Python/Java, scripts/check.sh.

Сначала проверь git status. Не откатывай чужие изменения.
Не коммить .env, .venv, node_modules, target, dist.
Работаем по best practices, но без overengineering.
Следующий логичный шаг: GitHub Actions CI или Docker Compose for PostgreSQL.
```
