const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const reveal = {
    mounted(el, binding) {
        if (prefersReducedMotion()) return

        const delay = binding.value?.delay ?? 0
        el.style.transitionDelay = `${delay}ms`
        el.classList.add('reveal-init')

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('reveal-visible')
                    observer.unobserve(el)
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        )

        observer.observe(el)
        el._revealObserver = observer
    },
    unmounted(el) {
        el._revealObserver?.disconnect()
    }
}
