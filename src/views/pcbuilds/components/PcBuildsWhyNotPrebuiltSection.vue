<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow Background -->
        <div class="pointer-events-none absolute inset-0 z-0">
            <div
                class="absolute -top-[300px] -right-[300px] h-[700px] w-[700px] rounded-full bg-brand opacity-20 blur-[160px]">
            </div>
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Headline -->
            <div class="mx-auto text-center max-w-2xl mb-16">
                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Warum kein Fertig-PC?
                </p>

                <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-6">
                    Fertig-PCs sparen Zeit – kosten dich Performance
                </h2>

                <p class="text-neutral-300 text-lg">
                    Viele Systeme sehen gut aus, sind aber technisch schlecht abgestimmt. Genau hier liegt der
                    Unterschied.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-2 gap-8">

                <!-- ❌ Fertig-PC -->
                <div class="hover:bg-neutral-900/50 hover:border-brand bg-neutral-900 border border-neutral-800 rounded-2xl p-8 backdrop-blur">
                    <p class="text-red-400 text-sm uppercase tracking-wide mb-4">
                        ❌ Typische Probleme bei Fertig-PCs
                    </p>

                    <ul class="space-y-3 text-neutral-300">
                        <li>• Schlechte Abstimmung der Komponenten</li>
                        <li>• Überteuerte Marketing-Hardware</li>
                        <li>• Bottlenecks im System</li>
                        <li>• Billige Netzteile & Kühlung</li>
                        <li>• Kaum Upgrade-Möglichkeiten</li>
                    </ul>
                </div>

                <!-- ✅ Custom Build -->
                <div class="hover:bg-neutral-900/50 hover:border-brand bg-neutral-900 border border-neutral-800 rounded-2xl p-8 backdrop-blur">
                    <p class="text-green-400 text-sm uppercase tracking-wide mb-4">
                        ✔ Dein Vorteil mit Custom Build
                    </p>

                    <ul class="space-y-3 text-neutral-300">
                        <li>• Perfekte Balance aus CPU, GPU & RAM</li>
                        <li>• Maximale Performance pro Euro</li>
                        <li>• Keine Bottlenecks</li>
                        <li>• Hochwertige & getestete Komponenten</li>
                        <li>• Sauber aufgebaut & langfristig erweiterbar</li>
                    </ul>
                </div>

            </div>

        </div>
    </section>
</template>