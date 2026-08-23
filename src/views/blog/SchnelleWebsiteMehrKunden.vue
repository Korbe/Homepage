<template>
    <Layout>
        <ArticleLayout category="Performance" date="23.08.2026" read-time="2 Min. Lesezeit"
            title="Warum eine schnelle Website mehr Kunden bringt"
            description="Ladezeit ist kein technisches Detail, sondern ein Umsatzfaktor. Warum Performance direkt über Absprungrate und Anfragen entscheidet.">

            <p>
                Nutzer entscheiden innerhalb weniger Sekunden, ob sie auf einer Website bleiben oder wieder
                verschwinden. Eine langsame Ladezeit kostet damit nicht nur Geduld, sondern bares Geld - in Form von
                Absprüngen und verpassten Anfragen.
            </p>

            <h2 class="text-2xl font-semibold text-white">Ladezeit als Umsatzfaktor</h2>
            <p>
                Laut einer Studie von Google und SOASTA springen Handy-Nutzer schon bei drei statt einer Sekunde
                Ladezeit um 32 % häufiger ab.
                <span class="text-neutral-500 text-sm">(Quelle:
                    <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/"
                        target="_blank" rel="noopener" class="text-brand hover:underline">Think with Google, "The
                        Need for Mobile Speed"</a>)</span>
                Das gilt besonders auf mobilen Geräten, wo Nutzer ohnehin ungeduldiger sind und oft mit schwächerer
                Verbindung unterwegs sind.
            </p>

            <p>
                Auch beim Umsatz macht Tempo etwas aus: Laut einer großen Studie von Google und Deloitte bringen
                schon 0,1 Sekunden schnellere Ladezeit im Schnitt 8,4 % mehr Verkäufe.
                <span class="text-neutral-500 text-sm">(Quelle:
                    <a href="https://www.thinkwithgoogle.com/_qs/documents/9757/Milliseconds_Make_Millions_report_hQYAbZJ.pdf"
                        target="_blank" rel="noopener" class="text-brand hover:underline">Deloitte / Google,
                        "Milliseconds Make Millions", 2020</a>)</span>
            </p>

            <h2 class="text-2xl font-semibold text-white">Warum viele Websites langsam sind</h2>
            <ul class="list-disc list-inside space-y-2">
                <li>Baukasten-Systeme mit viel unnötigem Code im Hintergrund</li>
                <li>Unoptimierte oder zu große Bilder</li>
                <li>Zu viele externe Skripte und Plugins</li>
                <li>Fehlendes Caching und schlechte Serverkonfiguration</li>
            </ul>

            <h2 class="text-2xl font-semibold text-white">Wie eine performante Website entsteht</h2>
            <p>
                Performance ist kein nachträglicher Feinschliff, sondern ein Grundprinzip, das von Anfang an
                mitgedacht werden sollte - schlanker Code, optimierte Bilder, durchdachtes Hosting und der Verzicht
                auf überflüssige Baukasten-Systeme. Das Ergebnis: eine Website, die spürbar schneller lädt und
                dadurch mehr Besucher tatsächlich zu Kunden macht.
            </p>

            <h2 class="text-2xl font-semibold text-white">Fazit</h2>
            <p>
                Schnelligkeit ist kein Nice-to-have, sondern ein direkter Wettbewerbsvorteil. Wer in eine
                performante Website investiert, investiert unmittelbar in mehr Anfragen und zufriedenere Besucher.
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
    title: 'Warum eine schnelle Website mehr Kunden bringt - Blog | Ing. Lukas Korbitsch',
    meta: [
        {
            name: 'description',
            content: 'Ladezeit ist kein technisches Detail, sondern ein Umsatzfaktor. Warum Performance direkt über Absprungrate und Anfragen entscheidet.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Warum eine schnelle Website mehr Kunden bringt'
        },
        {
            property: 'og:description',
            content: 'Warum Performance direkt über Absprungrate und Anfragen entscheidet.'
        },
        {
            property: 'og:image',
            content: 'https://korbitsch.at/images/logo.png'
        },
        {
            property: 'og:url',
            content: 'https://korbitsch.at/blog/schnelle-website-mehr-kunden'
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
            href: 'https://korbitsch.at/blog/schnelle-website-mehr-kunden'
        }
    ]
})
</script>
