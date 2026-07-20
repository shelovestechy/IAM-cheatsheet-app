# IAM-opas

IAM-opas on suomenkielinen Microsoft Entra- ja SC-300-opiskelun MVP. Käyttäjä voi
kirjoittaa IAM-kysymyksen ja saa vaiheistetun esimerkkiratkaisun sekä lähteet.

## Käynnistäminen

Sovellus ei vaadi riippuvuuksien asentamista. Avaa `index.html` selaimessa tai
käynnistä hakemistossa paikallinen HTTP-palvelin:

```powershell
python -m http.server 8080
```

Sovellus avautuu osoitteessa `http://localhost:8080`.

## MVP:n sisältö

- responsiivinen kysymysnäkymä
- kuusi paikallista IAM-ratkaisupolkua
- virallisten ja yhteisölähteiden erottelu
- SC-300-aihekortit
- vaalea ja tumma teema
- näppäimistötuki (`Ctrl + Enter`)

## Seuraava vaihe

Nykyinen versio käyttää tarkoituksella paikallista esimerkkisisältöä. Seuraava
versio tarvitsee taustapalvelun, joka hakee ajantasaiset Microsoft Learn
-dokumentit, arvioi lähteiden luotettavuuden ja muodostaa lähteistetyn vastauksen.
Reddit-sisältö tulee esittää yhteisökokemuksena, ei virallisena ohjeena.
