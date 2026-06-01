#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "== Frontend =="
cd "$ROOT_DIR/web/front"
pnpm lint
pnpm format:check
pnpm test
pnpm build

echo "== NestJS backend =="
cd "$ROOT_DIR/web/back/nest-api"
pnpm lint
pnpm test
pnpm test:e2e
pnpm build

echo "== Python backend =="
cd "$ROOT_DIR/web/back/python-api"
if [ -x ".venv/bin/python" ]; then
  PYTHON_BIN=".venv/bin/python"
else
  PYTHON_BIN="python3"
fi
"$PYTHON_BIN" -m pytest

echo "== Java backend =="
cd "$ROOT_DIR/web/back/java-api"
./mvnw test
./mvnw -DskipTests package
