# Google Books Api Search

Jednostavan projekt za potrebe kolegija XML Programiranje.

## Kako pokrenuti projekt:

Projekt se može pokrenuti preko hostinga ili lokalno.

## Hosting:

Klik na [https://simple-book-api-search.vercel.app/](https://simple-book-api-search.vercel.app/)

## Lokalno:

Prvo se treba klonirati GitHub repozitorij. Nakon otvaranja terminala u folderu po želji. Pokrenite:

### `git clone https://github.com/akataleni/simple-book-api-search.git`

Nakon što se projekt klonira. Pokrenite:

### `npm install`

Zatim:

### `npm start`

Terminal bi trebao automatski otvoriti stranicu, ukoliko nije, klikom na: [http://localhost:3000](http://localhost:3000) otvoriti će se projekt lokalno.

## Funkcionalnost

Upisom ključnih riječi u input polje te klikom na pretraživanje, ispiše se prvih 10 knjiga po relevantnosti.

## Kako radi aplikacija?

Dohvat podataka se vrši sa Google Books API servisa u JSON obliku te se manipulacijom istih radi vizualni prikaz željenih podataka.
