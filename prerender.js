import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

const routes = [
    '/',
    '/webapps',
    '/about',
    '/portfolio',
    '/it-hilfe',
    '/pc-builds',
    '/contact',
    '/impressum',
    '/terms',
    '/datenschutz',
    '/blog',
    '/blog/web-app-oder-klassische-website',
    '/blog/excel-chaos-zur-web-app',
    '/blog/schnelle-website-mehr-kunden',
    '/blog/fehler-bei-website-neuentwicklung'
]

const baseUrl = 'http://localhost:4000'
const distPath = './dist'

const run = async () => {
    const browser = await puppeteer.launch()

    for (const route of routes) {
        const page = await browser.newPage()
        await page.goto(baseUrl + route, { waitUntil: 'networkidle0' })

        const html = await page.content()

        const filePath =
            route === '/'
                ? `${distPath}/index.html`
                : `${distPath}${route}/index.html`

        fs.mkdirSync(path.dirname(filePath), { recursive: true })
        fs.writeFileSync(filePath, html)

        console.log(`✔ prerendered ${route}`)
    }

    await browser.close()
}

run()