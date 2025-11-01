Tämä projekti sisältää neljä JavaScript-harjoitusta, joissa tutustutaan AJAX-tekniikkaan ja XML-datan käsittelyyn. Harjoitukset suoritetaan `index.html`-tiedostolla, joka sisältää kaiken tarvittavan HTML- ja JavaScript-koodin.

Tehtävä 1: XML-datan jäsentäminen (Parsing XML)
- Luotiin JavaScript-funktio, joka etsii XML-elementtejä kuten `<quote>` ja `<author>`
- Jäsennettiin XML joka tulostaa sen sisällön sivulle luettavassa muodossa

Tehtävä 2: AJAX-kutsu XML-tiedostoon
- Tehtiin AJAX-pyyntö ulkoiseen XML-tiedostoon (`famous-quotes.xml`)
- Haetaan ja näyttää raakamuotoinen XML-sisältö sivulla
- Korjataan ongelmatilanteet (esim. puuttuva tiedosto) käyttämällä tarvittaessa varasisältöä

Tehtävä 3: AJAX + XML → Taulukkonäkymä
- Haetaan tiedosto AJAX-kutsulla
- Jäsennetään XML ja poimitaan halutut kentät (kuten quote ja author)
- Esitetään data HTML-taulukkona
- Lisätään CSS-styling, jotta taulukko näyttää selkeältä

Tehtävä 4: Aito uutissyöte (RSS)
- Tehdä AJAX-kutsu uutissyötteeseen (esim. RSS/XML-muotoinen data)
- Poimia uutisten otsikot ja linkit
- Esittää uutislista sivulla