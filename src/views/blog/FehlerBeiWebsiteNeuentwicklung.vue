<template>
    <Layout>
        <ArticleLayout category="Praxis" date="23.08.2026" read-time="2 Min. Lesezeit"
            title="Die häufigsten Fehler bei einer Website-Neuentwicklung"
            description="Von fehlendem Content bis zur falschen Technologiewahl - die typischen Stolperfallen bei Website-Projekten und wie man sie vermeidet.">

            <p>
                Eine neue Website ist für viele Betriebe ein größeres Projekt - entsprechend ärgerlich sind
                vermeidbare Fehler, die den Prozess unnötig verzögern oder das Ergebnis schwächen. Die folgenden
                Punkte tauchen in der Praxis immer wieder auf.
            </p>

            <h2 class="text-2xl font-semibold text-white">1. Inhalte werden zu spät bereitgestellt</h2>
            <p>
                Texte, Bilder und Logos sind oft der größte Zeitfresser in einem Projekt. Wer erst nach dem
                Designentwurf mit der Content-Erstellung beginnt, verzögert den gesamten Zeitplan spürbar.
            </p>

            <h2 class="text-2xl font-semibold text-white">2. Die Zielgruppe wird nicht klar definiert</h2>
            <p>
                Eine Website, die "alle irgendwie ansprechen" soll, spricht am Ende niemanden richtig an. Klare
                Zielgruppen und ein klares Ziel der Seite - Anfragen, Verkäufe, Information - sind die Grundlage für
                jede gute Struktur.
            </p>

            <h2 class="text-2xl font-semibold text-white">3. Die Technologie passt nicht zum Vorhaben</h2>
            <p>
                Nicht jedes Projekt braucht ein Baukasten-System, aber auch nicht jedes Projekt braucht eine
                komplett individuelle Web-App. Die falsche Wahl führt entweder zu unnötigen Kosten oder zu einem
                System, das schnell an seine Grenzen stößt.
            </p>

            <h2 class="text-2xl font-semibold text-white">4. Performance und SEO werden nachträglich gedacht</h2>
            <p>
                Ladezeit, mobile Darstellung und Grundlagen der Suchmaschinenoptimierung sollten von Beginn an
                mitgeplant werden - eine nachträgliche Optimierung ist meist aufwendiger als eine solide
                Ausgangsbasis.
            </p>

            <h2 class="text-2xl font-semibold text-white">5. Es gibt keinen Plan für die Zeit nach dem Launch</h2>
            <p>
                Eine Website ist selten "fertig". Ohne Plan für Wartung, Updates und kleinere Anpassungen verliert
                sie mit der Zeit an Aktualität und Sicherheit.
            </p>

            <h2 class="text-2xl font-semibold text-white">Fazit</h2>
            <p>
                Die meisten dieser Fehler lassen sich vermeiden, wenn Inhalte, Ziel und Technologie schon vor dem
                ersten Entwurf klar durchdacht sind. Eine offene Kommunikation zwischen Auftraggeber und Entwickler
                ist dabei der wichtigste Faktor für ein reibungsloses Projekt.
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
    title: 'Die häufigsten Fehler bei einer Website-Neuentwicklung - Blog | Ing. Lukas Korbitsch',
    meta: [
        {
            name: 'description',
            content: 'Von fehlendem Content bis zur falschen Technologiewahl - die typischen Stolperfallen bei Website-Projekten und wie man sie vermeidet.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Die häufigsten Fehler bei einer Website-Neuentwicklung'
        },
        {
            property: 'og:description',
            content: 'Die typischen Stolperfallen bei Website-Projekten und wie man sie vermeidet.'
        },
        {
            property: 'og:image',
            content: 'https://korbitsch.at/images/logo.png'
        },
        {
            property: 'og:url',
            content: 'https://korbitsch.at/blog/fehler-bei-website-neuentwicklung'
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
            href: 'https://korbitsch.at/blog/fehler-bei-website-neuentwicklung'
        }
    ]
})
</script>
