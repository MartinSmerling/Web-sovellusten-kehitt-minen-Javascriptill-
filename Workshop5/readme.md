Harjoitus 1: Yhteystieto-lomake
Tavoite:
Käyttäjä täyttää lomakkeen, jossa on nimi-, sähköposti- ja kommenttikentät.
Ohjelma tarkistaa, että kaikki kentät ovat kunnossa ennen lähettämistä ja tallentaa tiedot selaimen LocalStorageen.
Tarkistukset:
Nimi ei saa olla tyhjä.
Sähköpostin täytyy olla oikeassa muodossa.
Kommenttikenttä ei saa olla tyhjä, eikä sen pituus saa ylittää 150 merkkiä.
Toiminnallisuus:
Jos kentässä on virhe, se korostetaan punaisella reunuksella ja sen viereen ilmestyy virheilmoitus.
Kun kaikki tiedot ovat oikein, lomake tallennetaan localStorageen avaimella contactData.
Tiedot pysyvät tallessa, vaikka sivu päivitetään tai selain suljetaan.

Harjoitus 2: Jäsenyyslaskuri
Tavoite:
Käyttäjä voi laskea kuntosalin jäsenyyden kokonaishinnan valitsemalla jäsenyyden tyypin ja sen keston vuosina.
Toiminta:
Käyttäjä valitsee jäsenyyden (Basic, Premium, Gold tai Platinum).
Käyttäjä syöttää haluamansa vuosimäärän.
Kun lomake lähetetään, ohjelma laskee hinnan ja näyttää sen kentässä “Hinta”.
Alennukset:
Yli 2 vuoden jäsenyydestä saa 20 % alennuksen.
Yli 5 vuoden jäsenyydestä saa 20 % alennuksen + 5 € lisäalennuksen.
Käyttäjälle näytetään alennuksesta viesti sivulla tekstinä.

Harjoitus 3: Datan tallentaminen LocalStorageen
Tavoite:
Tallentaa yhteystietolomakkeen (Harjoitus 1) syötetyt tiedot selaimen LocalStorageen, jotta ne voidaan myöhemmin hakea ja näyttää uudelleen.
Toteutus:
Kun lomake hyväksytään, tiedot tallennetaan LocalStorageen avaimella contactData.
Tiedot tallennetaan JSON-muodossa:
{ 
  name: "Etunimi Sukunimi", 
  email: "esimerkki@posti.fi", 
  comment: "Kommenttisi tähän" 
}
Käyttäjä saa ilmoituksen (alert) tallennuksen onnistumisesta.

Harjoitus 4: Datan lataaminen LocalStoragesta
Tavoite:
Näyttää tallennetut yhteystiedot selaimesta sivulla olevaan div-elementtiin.
Toteutus:
Sivulla on painike “Lataa tallennettu data”, joka hakee ja näyttää LocalStorageen tallennetut tiedot.
Tiedot ladataan myös automaattisesti heti, kun sivu avataan.
Jos tallennettua dataa ei ole, käyttäjälle näytetään viesti “Ei tallennettua dataa.”