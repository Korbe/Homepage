// Zentrale Liste aller Blogartikel - genutzt von der Übersicht und den "Weitere Artikel" am Ende jedes Beitrags.
// Neuer Artikel: hier eintragen + Route in router/index.js anlegen.
export const posts = [
    {
        route: 'BlogSchnelleWebsiteMehrKunden',
        category: 'Performance',
        date: '23.08.2026',
        readTime: '2 Min. Lesezeit',
        title: 'Warum eine schnelle Website mehr Kunden bringt',
        excerpt: 'Ladezeit ist kein technisches Detail, sondern ein Umsatzfaktor. Warum Performance direkt über Absprungrate und Anfragen entscheidet.'
    },
    {
        route: 'BlogWebAppOderWebsite',
        category: 'Webentwicklung',
        date: '23.08.2026',
        readTime: '2 Min. Lesezeit',
        title: 'Web-App oder klassische Website? So triffst du die richtige Entscheidung',
        excerpt: 'Nicht jedes Projekt braucht eine individuelle Web-App. Ein Überblick, wann eine klassische Website reicht und wann sich eine Eigenentwicklung wirklich lohnt.'
    },
    {
        route: 'BlogExcelChaosZurWebApp',
        category: 'Digitalisierung',
        date: '23.08.2026',
        readTime: '2 Min. Lesezeit',
        title: 'Vom Excel-Chaos zur eigenen Web-App',
        excerpt: 'Viele Betriebe verwalten zentrale Prozesse noch in Excel-Tabellen. Wie eine individuelle Web-App aus verstreuten Listen ein zuverlässiges System macht.'
    },
    {
        route: 'BlogFehlerBeiWebsiteNeuentwicklung',
        category: 'Praxis',
        date: '23.08.2026',
        readTime: '2 Min. Lesezeit',
        title: 'Die häufigsten Fehler bei einer Website-Neuentwicklung',
        excerpt: 'Von fehlendem Content bis zur falschen Technologiewahl - die typischen Stolperfallen bei Website-Projekten und wie man sie vermeidet.'
    }
]

export const categories = ['Alle', ...new Set(posts.map((p) => p.category))]
