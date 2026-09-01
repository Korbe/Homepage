import { ref } from 'vue'

const STORAGE_KEY = 'cookie-consent'
const GA_ID = 'G-162ZVL3ZBV'

const isClient = typeof window !== 'undefined'

const consent = ref(isClient ? localStorage.getItem(STORAGE_KEY) : null)

function initAnalytics() {
    if (window.gtag) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []

    function gtag() {
        window.dataLayer.push(arguments)
    }

    window.gtag = gtag

    gtag('js', new Date())

    gtag('config', GA_ID, {
        anonymize_ip: true,
        send_page_view: false
    })
}

if (isClient && consent.value === 'accepted') {
    initAnalytics()
}

function accept() {
    consent.value = 'accepted'
    localStorage.setItem(STORAGE_KEY, 'accepted')
    initAnalytics()
}

function reject() {
    consent.value = 'rejected'
    localStorage.setItem(STORAGE_KEY, 'rejected')
}

function reset() {
    consent.value = null
    localStorage.removeItem(STORAGE_KEY)
}

export function useCookieConsent() {
    return { consent, accept, reject, reset }
}
