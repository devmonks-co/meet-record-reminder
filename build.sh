#!/bin/sh
# Packages only the files the extension needs into dist/ for the Chrome Web Store.
set -e
cd "$(dirname "$0")"
version=$(grep '"version"' manifest.json | sed 's/[^0-9.]//g')
mkdir -p dist
rm -f "dist/meet-record-reminder-$version.zip"
zip -qr "dist/meet-record-reminder-$version.zip" manifest.json content.js content.css icons
echo "dist/meet-record-reminder-$version.zip"
