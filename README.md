## Jak edytować treść stron?

Każda strona ma własny plik w folderze `/public` z rozszerzeniem `.json`, w którym znajduje się jej treść, np. `wsparcie.json`.

1. Otwórz folder `/public`.

2. Kliknij na plik z treściami, które chcesz edytować.

3. W prawym górnym rogu kliknij ikonę ołówka, by otworzyć edytor tekstowy.

4. Dokonaj edycji pliku według swojego uznania, zachowując oryginalny styl pliku (nawiasy klamrowe, cudzysłowia).

   **UWAGA:** Jeżeli chcesz użyć znaku `"` lub `\`, musisz poprzedzić je znakiem `\`, czyli zamiast `"` napisać `\"`, a zamiast `\` napisać `\\`.

   Jeżeli chcesz dodać twardą spację, zamiast spacji użyj `\u00A0;`, np. `poszli\u00A0tam`.

5. W prawym górnym rogu kliknij zielony przycisk `Commit changes...`

6. Bez wprowadzania żadnych zmian w oknie, które się pojawi, kliknąć przycisk `Propose changes`.

7. Bez wprowadzania żadnych zmian na ekranie, do którego zostaniesz przekierowany, kliknij przycisk `Create pull request`.

8. Po krótkiej chwili na ekranie pojawi się komentarz od `vercel (bot)`, gdzie możesz kliknąć przycisk `Visit Preview` i sprawdzić swoje zmiany.

9. Jeżeli zmiany Cię satysfakcjonują, kliknij na dole strony zielony przycisk `Squash and merge`. **Twoje zmiany zostały wprowadzone.**

   Jeżeli chcesz poprawić swoje zmiany, znajdź na górze strony napis:

   ```
   ... wants to merge ... commits into main from ...-patch-...
   ```

   Interesuje Cię podświetlona na niebiesko część: `...-patch-...`, może tam być np. `wnieboglosy-patch-1`.  
   Kliknij na tę część prawym przyciskiem myszki i `Otwórz link w nowej karcie`, następnie ponów kroki od 1 do 5, następnie kliknij przycisk `Commit changes` i wróc do poprzedniej karty.

## Jak edytować zdjęcia? (za wyjątkiem galerii)

Każda strona ma ścieżki do swoich zdjęć w tym samym pliku co w instrukcji `Jak edytować treść stron?`. W środku znajdują się poszczególne zdjęcia w formie linków do serwisu `https://imgbb.com/`, gdzie przetrzymujemy wszystkie zdjęcia. Wgraj zdjęcie do serwisu i zapisz swój link do niego. Zastąp poprzedni link do zdjęcia nowym, postępując zgodnie z krokami od 1 do 9 w instrukcji `Jak edytować treść stron?`.

**UWAGA:** Jeżeli chcesz, żeby zdjęcia ładowały się szybko, upewnij się, że nie są szersze lub wyższe niż 1200px oraz jest w formacie `.webp`. Jeżeli Twoje zdjęcie nie spełnia tych warunków:

1. Wejdź na stronę `https://resizing.app/features/optimize-image/`.

2. Wgraj swoje zdjęcie.

3. Ustaw szerokość/wysokość (co większe, pomoże Ci wybór filtra `Resize: by Largest Side`) na 1200px.

4. Ustaw `Save As: WEBP`.

5. Kliknij zielony przycisk `Save Image`.

## Jak dodawać zdjęcia/nagrania do galerii?

W pliku `/public/galeria.json` znajdziesz linijkę z napisem `galeria: {`. W środku znajdują się poszczególne zdjęcia w formie linków do serwisu `https://imgbb.com/`, gdzie przetrzymujemy wszystkie zdjęcia. Wgraj zdjęcie do serwisu i zapisz swój link do niego. Zastosuj się do uwag z `Jak edytować zdjęcia? (za wyjątkiem galerii)`.

### Jeżeli chcesz dodać nowy rok:

1. Dodaj nowy wiersz z numerem swojego roku pod poprzednim rokiem (w kolejności rosnącej), np. `"2024": [],`.

2. Dodaj swoje zdjęcia do kwadratowych nawiasów, np.

```
"2024: [
  "https://i.ibb.co/1",
  "https://i.ibb.co/2"
],
```

3. Postępuj zgodnie z krokami od 1 do 9 w `Jak edytować treść stron?`.

### Jeżeli chcesz dodać nowe nagranie:

1. Dodaj nowy wiersz w środku nawiasów kwadratowych, przy polu `"nagrania": [`.

2. Na początku, jeżeli chcesz dodać nagranie na samej górze.

3. Na końcu, jeżeli chcesz dodać nagranie na samym dole.

Nagranie ma format:

```
{
  "url": "<link do nagrania na yt>",
  "title": "<tytuł, który ma się pokazać na miniaturce nagrania>",
  "preview": "<link do zdjęcia, które ma być na miniaturce, wgrane do tego samego serwisu co inne zdjęcia, przetrzegaj UWAGA w "Jak edytować zdjęcia? (za wyjątkiem galerii)">"
}
```

np.

```
{
  "url": "https://www.youtube.com/watch?v=1",
  "title": "Wydarzenie 2024 Live",
  "preview": "https://i.ibb.co/1"
}
```

4. Postępuj zgodnie z krokami od 1 do 9 w `Jak edytować treść stron?`.
