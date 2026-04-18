#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Uso: ./push_to_github.sh https://github.com/USUARIO/REPO.git"
  exit 1
fi

REMOTE_URL="$1"

if [ ! -d .git ]; then
  git init
fi

git add .
git commit -m "Initial reading tests repo" || true
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_URL"
git push -u origin main
