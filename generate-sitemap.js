const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const { Readable } = require('stream')

// List of routes for your site
const routes = [
  { url: '/', changefreq: 'daily', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.5 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  // Add more routes here
]

// Create a stream to write to
const stream = new SitemapStream({
  hostname: 'https://buildpatch.com',
})

// You can adjust the path according to your build process and where you want to output the sitemap
const outputPath = './build/sitemap.xml'

// Generate sitemap
streamToPromise(Readable.from(routes).pipe(stream)).then((data) =>
  createWriteStream(outputPath).write(data)
)

console.log(`Sitemap generated at ${outputPath}`)
