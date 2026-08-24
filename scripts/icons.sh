#!/usr/bin/env bash
#
# Generate the full icon set from one source image.
#
#   ./scripts/icons.sh [source]
#
# source defaults to assets/img/mark.svg. An SVG is preferred; a square PNG of
# 512px or more also works. Everything else is derived, so to change the site
# icon you replace the source and re-run this -- nothing is edited by hand.
#
# Produces:
#   favicon.ico              16/32/48 multi-resolution, for the paths browsers
#                            and link-preview bots request directly
#   apple-touch-icon.png     180x180, iOS home screen (opaque: iOS does not
#                            composite transparency, it renders it black)
#   assets/img/icon-192.png  Android home screen, referenced by the manifest
#   assets/img/icon-512.png  splash / store listing size
#
# Requires: rsvg-convert (or magick) for SVG input, and magick.

set -euo pipefail

SRC="${1:-assets/img/mark.svg}"
BG="#0a0c0d"          # matches --ground in _sass/_tokens.scss

[ -f "$SRC" ] || { echo "no such source: $SRC" >&2; exit 1; }

render() {  # render <size> <out>
  local size="$1" out="$2"
  case "$SRC" in
    *.svg) rsvg-convert -w "$size" -h "$size" "$SRC" -o "$out" ;;
    *)     magick "$SRC" -resize "${size}x${size}" -background none -gravity center \
                  -extent "${size}x${size}" "$out" ;;
  esac
}

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

for s in 16 32 48 180 192 512; do render "$s" "$tmp/i-$s.png"; done

# multi-resolution .ico -- still the most widely requested single artefact
magick "$tmp/i-16.png" "$tmp/i-32.png" "$tmp/i-48.png" favicon.ico

# iOS flattens onto black if the icon has alpha, so composite the ground first
magick "$tmp/i-180.png" -background "$BG" -alpha remove -alpha off apple-touch-icon.png

cp "$tmp/i-192.png" assets/img/icon-192.png
cp "$tmp/i-512.png" assets/img/icon-512.png

echo "generated from $SRC:"
for f in favicon.ico apple-touch-icon.png assets/img/icon-192.png assets/img/icon-512.png; do
  printf "  %-28s %s\n" "$f" "$(magick identify -format '%wx%h %b' "$f" 2>/dev/null | head -1)"
done
