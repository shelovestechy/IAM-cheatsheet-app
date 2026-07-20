const solutions = {
  pim: {
    title: "Ota PIM-rooliaktivointi hallitusti käyttöön",
    summary:
      "Microsoft Entra Privileged Identity Managementilla pysyvä roolijäsenyys voidaan korvata määräaikaisella, valvotulla aktivoinnilla.",
    steps: [
      ["Tarkista edellytykset", "Varmista tarvittava Microsoft Entra ID Governance- tai P2-lisensointi sekä vähintään Privileged Role Administrator -rooli."],
      ["Määritä käyttäjä eligible-jäseneksi", "Avaa Identity governance → Privileged Identity Management → Microsoft Entra roles ja lisää roolimääritys määräaikaisena."],
      ["Aseta aktivointiehdot", "Edellytä MFA:ta, perustelua ja tarvittaessa hyväksyntää. Rajaa aktivoinnin enimmäiskesto organisaation riskitason mukaan."],
      ["Testaa ja valvo", "Aktivoi rooli testikäyttäjällä, varmista käyttöoikeus ja tarkista PIM:n audit history sekä ilmoitukset."]
    ],
    note: "Säilytä vähintään kaksi pilvipohjaista emergency access -tiliä PIM- ja Conditional Access -käytäntöjen ulkopuolella.",
    sources: [
      ["official", "Microsoft Learn", "What is Microsoft Entra PIM?", "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure"],
      ["official", "Microsoft Learn", "Configure role settings in PIM", "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings"],
      ["community", "Yhteisökokemus", "Käyttöönoton käytännön havaintoja — varmista erikseen", "https://www.reddit.com/r/AZURE/"]
    ]
  },
  legacy: {
    title: "Estä vanhat tunnistautumisprotokollat",
    summary:
      "Luo Conditional Access -käytäntö, joka estää legacy authentication -asiakasohjelmat. Ota käytäntö ensin käyttöön report-only-tilassa ja varmista vaikutukset kirjautumislokeista.",
    steps: [
      ["Tunnista nykyinen käyttö", "Suodata Microsoft Entra sign-in logs -näkymässä Client app -kentän legacy authentication -arvot ja selvitä riippuvuudet."],
      ["Luo Conditional Access -käytäntö", "Kohdista käytäntö kaikkiin käyttäjiin ja valitse Target resources -kohdassa All resources."],
      ["Valitse vanhat asiakasohjelmat", "Avaa Conditions → Client apps ja valitse Exchange ActiveSync clients sekä Other clients."],
      ["Estä käyttö ja validoi", "Valitse Grant → Block access. Käynnistä report-only-tilassa, tarkista tulokset ja ota käytäntö hallitusti käyttöön."]
    ],
    note: "Sulje emergency access -tilit käytännön ulkopuolelle. Varmista myös palvelutilien ja vanhojen laitteiden riippuvuudet ennen estämistä.",
    sources: [
      ["official", "Microsoft Learn", "Block legacy authentication with Conditional Access", "https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-block-legacy-authentication"],
      ["official", "Microsoft Learn", "Analyze Conditional Access policies with report-only mode", "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-report-only"],
      ["community", "Yhteisökokemus", "Legacy auth -käyttöönoton havaintoja — varmista erikseen", "https://www.reddit.com/r/AZURE/"]
    ]
  },
  review: {
    title: "Rakenna vieraskäyttäjien access review",
    summary:
      "Säännöllinen access review varmistaa, että ulkoisilla käyttäjillä on pääsy vain niin kauan kuin liiketoimintatarve on voimassa.",
    steps: [
      ["Rajaa tarkastettava joukko", "Valitse Microsoft 365 -ryhmä, Teams-tiimi, sovellus tai entitlement management -paketti, jossa vieraskäyttäjien pääsyä hallitaan."],
      ["Valitse arvioijat", "Käytä resurssin omistajia tai käyttäjän sponsoria. Itsearviointia kannattaa käyttää vain perustelluissa tilanteissa."],
      ["Määritä toistuvuus ja toiminto", "Aseta esimerkiksi neljännesvuosittainen tarkastus ja määritä evätyn tai tarkastamatta jääneen käyttöoikeuden automaattinen poisto."],
      ["Seuraa tuloksia", "Tarkista päätökset, perustelut ja review history. Dokumentoi poikkeukset ja prosessin omistaja."]
    ],
    note: "Automaattinen poisto kannattaa pilotoida rajatulla ryhmällä. Tarkista lisenssivaatimukset ennen laajaa käyttöönottoa.",
    sources: [
      ["official", "Microsoft Learn", "What are Microsoft Entra access reviews?", "https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview"],
      ["official", "Microsoft Learn", "Create an access review of groups and applications", "https://learn.microsoft.com/en-us/entra/id-governance/create-access-review"],
      ["community", "Yhteisökokemus", "Guest governance -keskusteluja — varmista erikseen", "https://www.reddit.com/r/AZURE/"]
    ]
  },
  monitor: {
    title: "Valvo riskialttiita kirjautumisia",
    summary:
      "Yhdistä Identity Protectionin riskihavainnot, kirjautumislokit ja Conditional Access -käytännöt, jotta riskialttiit tapahtumat havaitaan ja käsitellään nopeasti.",
    steps: [
      ["Avaa riskiraportit", "Tarkista Protection → Identity Protection -näkymän Risky users-, Risky sign-ins- ja Risk detections -raportit."],
      ["Tutki tapahtuma", "Varmista käyttäjä, sijainti, laite, sovellus, tunnistautumistapa ja havaittu riskityyppi ennen korjaavaa toimintoa."],
      ["Automatisoi riskivaste", "Luo Conditional Access -käytäntö, joka edellyttää vahvaa tunnistautumista tai turvallista salasanan vaihtoa sovitulla riskitasolla."],
      ["Liitä keskitettyyn valvontaan", "Ohjaa lokit Log Analyticsiin tai SIEM-järjestelmään, määritä hälytykset ja dokumentoi käsittelyprosessi."]
    ],
    note: "Riskikäytännön vaikutus riippuu lisensseistä ja tunnistautumismenetelmistä. Testaa käytäntö report-only-tilassa.",
    sources: [
      ["official", "Microsoft Learn", "What is Microsoft Entra ID Protection?", "https://learn.microsoft.com/en-us/entra/id-protection/overview-identity-protection"],
      ["official", "Microsoft Learn", "Configure and enable risk policies", "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-configure-risk-policies"],
      ["community", "Yhteisökokemus", "Identity Protection -havaintoja — varmista erikseen", "https://www.reddit.com/r/AZURE/"]
    ]
  },
  identity: {
    title: "Hallitse käyttäjiä ja ryhmiä tehokkaasti",
    summary:
      "Hyödynnä ryhmäpohjaista käyttöoikeushallintaa, dynaamisia jäsenyyksiä ja hallinnollisia yksiköitä yksittäisten käyttäjäkohtaisten määritysten sijaan.",
    steps: [
      ["Määritä identiteetin elinkaari", "Tunnista identiteetin lähde, omistaja sekä liittymis-, muutos- ja poistumisprosessit."],
      ["Suosi ryhmäpohjaisia määrityksiä", "Kohdista sovellukset, lisenssit ja käyttöoikeudet hallittuihin ryhmiin. Nimeä ryhmille omistajat."],
      ["Automatisoi jäsenyys harkiten", "Käytä dynaamisia ryhmiä luotettaviin käyttäjäattribuutteihin perustuen ja testaa sääntö ennen tuotantokäyttöä."],
      ["Delegoi vähimmillä oikeuksilla", "Käytä hallinnollisia yksiköitä ja rajattuja rooleja paikallisen hallinnan delegointiin."]
    ],
    note: "Vältä yksittäisiä suoria käyttöoikeusmäärityksiä, koska niiden omistajuus ja elinkaari jäävät helposti epäselviksi.",
    sources: [
      ["official", "Microsoft Learn", "Manage Microsoft Entra groups and group membership", "https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups"],
      ["official", "Microsoft Learn", "Administrative units in Microsoft Entra ID", "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units"],
      ["community", "Yhteisökokemus", "Entra-hallinnan käytäntöjä — varmista erikseen", "https://www.reddit.com/r/AZURE/"]
    ]
  },
  conditional: {
    title: "Suunnittele turvallinen Conditional Access -käyttöönotto",
    summary:
      "Rakenna käytännöt vaiheittain, suojaa hallintatilit ensin ja validoi jokainen muutos report-only-tilassa ennen pakottamista.",
    steps: [
      ["Määritä perustaso", "Dokumentoi käyttäjäryhmät, resurssit, laitteet, sijainnit ja hyväksytyt tunnistautumismenetelmät."],
      ["Suojaa ylläpitäjät", "Luo erillinen käytäntö hallintarooleille ja edellytä phishing-resistant MFA:ta siellä missä mahdollista."],
      ["Rakenna rajattu pilotti", "Kohdista käytäntö pilottiryhmään ja käytä report-only-tilaa vaikutusten arviointiin."],
      ["Laajenna ja valvo", "Tarkista sign-in logs- ja policy impact -tiedot, käsittele poikkeukset ja laajenna kohdistusta asteittain."]
    ],
    note: "Varmista emergency access -tilit ja vältä kaikkien käytäntöjen muuttamista samanaikaisesti.",
    sources: [
      ["official", "Microsoft Learn", "Conditional Access deployment plan", "https://learn.microsoft.com/en-us/entra/identity/conditional-access/plan-conditional-access"],
      ["official", "Microsoft Learn", "Conditional Access policy templates", "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-policy-common"],
      ["community", "Yhteisökokemus", "Conditional Access -havaintoja — varmista erikseen", "https://www.reddit.com/r/AZURE/"]
    ]
  }
};

const form = document.querySelector("#question-form");
const input = document.querySelector("#question");
const result = document.querySelector("#result");

function selectSolution(question) {
  const value = question.toLowerCase();
  if (value.includes("pim") || value.includes("rooliaktiv")) return solutions.pim;
  if (value.includes("legacy") || value.includes("vanh") || value.includes("protokoll")) return solutions.legacy;
  if (value.includes("review") || value.includes("vieras")) return solutions.review;
  if (value.includes("riski") || value.includes("valvo") || value.includes("loki")) return solutions.monitor;
  if (value.includes("conditional") || value.includes("mfa") || value.includes("todenn")) return solutions.conditional;
  return solutions.identity;
}

function showSolution(question) {
  const solution = selectSolution(question);
  document.querySelector("#result-title").textContent = solution.title;
  document.querySelector("#result-summary").textContent = solution.summary;
  document.querySelector("#result-note").textContent = solution.note;
  document.querySelector("#result-steps").innerHTML = solution.steps
    .map(([title, text]) => `<li><strong>${title}</strong><p>${text}</p></li>`)
    .join("");
  document.querySelector("#result-sources").innerHTML = solution.sources
    .map(([type, label, title, url]) => `
      <a class="source-link" href="${url}" target="_blank" rel="noreferrer">
        <small><i class="${type}"></i>${label}</small>
        <strong>${title} ↗</strong>
      </a>`)
    .join("");
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showSolution(input.value);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
    form.requestSubmit();
  }
});

document.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => {
    input.value = button.dataset.question;
    showSolution(input.value);
  });
});

document.querySelector("#daily-question").addEventListener("click", () => {
  input.value = "Miten suunnittelen turvallisen Conditional Access -käyttöönoton?";
  showSolution(input.value);
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("iam-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("iam-theme") === "dark") {
  document.body.classList.add("dark");
}
