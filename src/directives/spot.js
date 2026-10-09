// v-spot: lässt einen Lichtfleck dem Mauszeiger über einer Karte folgen (setzt --sx / --sy).
// Die eigentliche Optik steckt in views/webapps/spotlight.css (.wa-card::before).
export const spot = {
    mounted(el) {
        if (typeof window === 'undefined') return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const onMove = (e) => {
            const r = el.getBoundingClientRect()
            el.style.setProperty('--sx', `${e.clientX - r.left}px`)
            el.style.setProperty('--sy', `${e.clientY - r.top}px`)
        }

        el.addEventListener('pointermove', onMove, { passive: true })
        el._spotCleanup = () => el.removeEventListener('pointermove', onMove)
    },
    unmounted(el) {
        el._spotCleanup?.()
    }
}
