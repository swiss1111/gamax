# Gamax frontend interjú feladat

A feladat során a jól ismert stackoverflow.com fejlesztőknek szóló Q&A fórum API-jának segítségével
kell elkészíteni egy egyszerű, 2 képernyős utánzatot.

A feladathoz bármilyen technológiát felhasználhatsz, de javasoljuk a Vue és React alapú megoldásokat,
hiszen alapvetően ezekkel dolgoznánk együtt. CSS és/vagy component framework bármi lehet, de
javasoljuk a Tailwind alapú megoldásokat.

A két képernyő, melyet (legalább) le kéne gyártani a következők:

## Keresés:
Komponensek:
- Textbox, amibe a keresési kulcsszavakat írhatjuk
- Submit gomb
- Találatok táblázata, ennek elrendezése, megjelenítése a feladat fő része

Felhasználható API endpointok:
- Legalább: [Search endpoint a dokumentációból](https://api.stackexchange.com/docs/search)
- Opcionálisan:
  - [Tags](https://pages.github.com/)
  - [Advanced search](https://pages.github.com/)
  - [Answers](https://pages.github.com/)
  - [Users](https://pages.github.com/)

## Felhasználói profil
Ennek a képernyőnek a megvalósítását a jelentkezőre bízzuk, javasoljuk, hogy az extra munka ebbe a képernyőbe menjen.
Javasolt komponensek:
- Felhasználó neve
- Felhasználó avatarja
- Felhasználó badge-it megjelenítő dobozok
- Felhasználó top tagjei
- Felhasználó kérdései
- Felhasználó válaszai

Javasolt API:
- [StackExchange API](https://api.stackexchange.com/docs)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```