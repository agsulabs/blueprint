#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="${TMPDIR:-/tmp}/blueprint-java-snake"

mkdir -p "$BUILD_DIR"

javac -encoding UTF-8 -d "$BUILD_DIR" "$SCRIPT_DIR/src/Main.java"
java -cp "$BUILD_DIR" Main
