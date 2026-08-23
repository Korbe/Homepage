<template>
    <Layout>
        <ArticleLayout category="Webentwicklung" date="23.08.2026" read-time="2 Min. Lesezeit"
            title="Web-App oder klassische Website? So triffst du die richtige Entscheidung"
            description="Nicht jedes Projekt braucht eine individuelle Web-App. Ein Überblick, wann eine klassische Website reicht und wann sich eine Eigenentwicklung wirklich lohnt.">

            <p>
                Eine der ersten Fragen bei jedem neuen Projekt: Reicht eine klassische Website oder brauche ich eine
                individuelle Web-App? Die Antwort hängt weniger vom Budget ab als davon, was dein Betrieb damit
                erreichen will.
            </p>

            <h2 class="text-2xl font-semibold text-white">Wann eine klassische Website reicht</h2>
            <p>
                Geht es in erster Linie darum, Informationen zu präsentieren - Leistungen, Referenzen, Kontaktdaten -
                ist eine klassische Website meist die schnellere und günstigere Lösung. Sie eignet sich für
                Visitenkarten-Auftritte, Portfolios und die meisten Business-Websites.
            </p>

            <h2 class="text-2xl font-semibold text-white">Wann sich eine Web-App lohnt</h2>
            <p>
                Sobald Nutzer aktiv mit dem System arbeiten sollen - Daten eingeben, Prozesse steuern, Termine
                verwalten oder individuelle Funktionen nutzen - stößt eine klassische Website an ihre Grenzen. Hier
                setzt eine individuelle Web-App an, die genau auf den Ablauf im Betrieb zugeschnitten ist.
            </p>

            <h2 class="text-2xl font-semibold text-white">Typische Anzeichen für eine Web-App</h2>
            <ul class="list-disc list-inside space-y-2">
                <li>Wiederkehrende manuelle Prozesse, die viel Zeit kosten</li>
                <li>Mehrere Personen arbeiten an denselben Daten</li>
                <li>Bestehende Tools (z. B. Excel) stoßen an ihre Grenzen</li>
                <li>Kunden oder Mitarbeiter sollen eigene Bereiche nutzen können</li>
            </ul>

            <h2 class="text-2xl font-semibold text-white">Fazit</h2>
            <p>
                Es gibt keine pauschal richtige Antwort - nur die passende Lösung für den jeweiligen Anwendungsfall.
                Wer unsicher ist, sollte den eigenen Prozess offen beschreiben, statt bereits eine Technologie
                vorzugeben. So lässt sich am besten einschätzen, ob eine Website ausreicht oder eine Web-App den
                größeren Mehrwert bringt.
            </p>

        </ArticleLayout>
        <Cta />
        <SocialSection />
    </Layout>
</template>

<script setup>
import Layout from '@/components/layout/Layout.vue'
import ArticleLayout from './components/ArticleLayout.vue'
import Cta from './components/Cta.vue'
import SocialSection from '@/components/SocialSection.vue'
import { useHead } from '@unhead/vue'

useHead({
    title: 'Web-App oder klassische Website? - Blog | Ing. Lukas Korbitsch',
    meta: [
        {
            name: 'description',
            content: 'Nicht jedes Projekt braucht eine individuelle Web-App. Ein Überblick, wann eine klassische Website reicht und wann sich eine Eigenentwicklung wirklich lohnt.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Web-App oder klassische Website? So triffst du die richtige Entscheidung'
        },
        {
            property: 'og:description',
            content: 'Ein Überblick, wann eine klassische Website reicht und wann sich eine individuelle Web-App lohnt.'
        },
        {
            property: 'og:image',
            content: 'https://korbitsch.at/images/logo.png'
        },
        {
            property: 'og:url',
            content: 'https://korbitsch.at/blog/web-app-oder-klassische-website'
        },
        {
            property: 'og:type',
            content: 'article'
        },

        // SEO Basics
        {
            name: 'robots',
            content: 'index, follow'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://korbitsch.at/blog/web-app-oder-klassische-website'
        }
    ]
})
</script>
