Tehtävä 1 — Tietojen tallennus LocalStorageen
Käyttäjä syöttää matkakohteen, saapumispäivän ja valitsee palvelut (kuten internet, sauna jne.).
Kun “Tallenna LocalStorageen” -painiketta painetaan:
JavaScript lukee kenttien arvot.
Ne tallennetaan selaimen LocalStorageen avaimella bookingData JSON-muodossa.
Käyttäjä saa ilmoituksen tallennuksesta.

Tehtävä 2 — Tallennetun datan lataaminen
Sivu lataa tallennetut tiedot automaattisesti, kun se avataan (onload).
Jos tietoa löytyy LocalStoragesta, ne näytetään <div id="sessionData"> -alueella.
Jos ei, näkyy teksti “Ei tallennettua dataa.”

Tehtävä 3 — SessionStorage vs LocalStorage
Toinen lomake toimii täsmälleen samalla tavalla, mutta käyttää sessionStoragea.
Tiedot säilyvät vain, kun selain on auki.
Kun selain suljetaan, tiedot katoavat.
Tallennus tapahtuu avaimella sessionBooking.

Tehtävä 4 — Käyttö projektityössä
LocalStoragea voisin hyödyntää projektityössäni esimerkiksi tehtävälistoissa, muistiinpanoissa tai lomakkeissa:
Tallennan käyttäjän tekemät muutokset selaimen välimuistiin.
Tiedot säilyvät myös selaimen sulkemisen jälkeen.
Käyttö tapahtuu samaan tapaan: localStorage.setItem() ja localStorage.getItem().