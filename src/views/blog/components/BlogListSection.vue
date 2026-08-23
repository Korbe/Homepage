<template>
    <section class="py-24 bg-neutral-900/95 text-white">
        <div class="max-w-5xl mx-auto px-6 lg:px-12">

            <div class="grid gap-8 md:grid-cols-2">

                <router-link v-for="post in posts" :key="post.route" :to="{ name: post.route }"
                    class="group border border-neutral-800 hover:border-brand rounded-3xl bg-neutral-800/60 p-8 flex flex-col transition duration-300 hover:shadow-lg hover:shadow-brand/20">

                    <!-- Meta -->
                    <div class="flex items-center gap-3 text-sm text-neutral-400 mb-4">
                        <span class="text-brand">{{ post.category }}</span>
                        <span>&middot;</span>
                        <span>{{ post.readTime }}</span>
                    </div>

                    <!-- Title -->
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 group-hover:text-brand transition">
                        {{ post.title }}
                    </h2>

                    <!-- Excerpt -->
                    <p class="text-neutral-300 leading-relaxed mb-6">
                        {{ post.excerpt }}
                    </p>

                    <!-- Link -->
                    <span class="mt-auto text-brand text-sm font-medium">
                        Weiterlesen &rarr;
                    </span>

                </router-link>

            </div>

        </div>
    </section>
</template>

<script setup>
const posts = [
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
</script>
