import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SchemaWebPage } from "@/components/seo/schema"

export const metadata: Metadata = {
  title: "High-Quality Printable Coloring Pages | Ready to Print | Drawgle",
  description:
    "Download high-quality printable coloring pages optimized for perfect printing results. Printer-friendly designs for kids and adults with printing tips and tricks.",
  openGraph: {
    title: "High-Quality Printable Coloring Pages | Ready to Print",
    description:
      "Download high-quality printable coloring pages optimized for perfect printing results. Printer-friendly designs for kids and adults.",
    images: [
      {
        url: "/placeholder.svg?key=obus7",
        width: 1200,
        height: 630,
        alt: "Collection of printable coloring pages",
      },
    ],
  },
}

export default function PrintableColoringPages() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaWebPage
        name="Printable Coloring Pages"
        description="High-quality printable coloring pages optimized for perfect printing results. Printer-friendly designs for kids and adults with printing tips and tricks."
      />

      {/* Breadcrumbs */}
      <nav className="flex text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/coloring-pages" className="hover:text-blue-600">
          Coloring Pages
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Printable Coloring Pages</span>
      </nav>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Printable Coloring Pages</h1>
              <p className="text-lg mb-6">
                Our collection of high-quality, printer-friendly coloring pages is designed to give you perfect results
                every time. Each page is optimized for printing with clean lines and proper spacing.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="font-bold text-lg mb-2">Printing Tips:</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Use white, uncoated paper (60-80 lb weight works best)</li>
                  <li>Select "Fit to page" in your printer settings</li>
                  <li>Choose "High Quality" or "Best" print option</li>
                  <li>Print in black & white to save on colored ink</li>
                </ul>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?key=hom3c"
                alt="Child getting printable coloring pages from printer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Printable Categories */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular Printable Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PrintableCategory
            title="Printable Kids Coloring Pages"
            href="/coloring-pages-for-kids"
            image="/placeholder.svg?key=2xsyh"
            description="Easy-to-print coloring pages perfect for children of all ages. Simple designs with thick lines."
          />
          <PrintableCategory
            title="Printable Christmas Coloring Pages"
            href="/christmas-coloring-pages"
            image="/placeholder.svg?key=jrg6n"
            description="Festive holiday designs that print beautifully. Perfect for seasonal activities."
          />
          <PrintableCategory
            title="Printable Adult Coloring Pages"
            href="/adult-coloring-pages"
            image="/placeholder.svg?key=36w9q"
            description="Intricate designs for adults with fine details that print clearly for stress relief."
          />
          <PrintableCategory
            title="Printable Cute Coloring Pages"
            href="/cute-coloring-pages"
            image="/placeholder.svg?height=300&width=400&query=cute%20animals%20coloring%20pages%20printable"
            description="Adorable designs featuring cute animals and characters that print perfectly."
          />
          <PrintableCategory
            title="Printable Pokemon Coloring Pages"
            href="/pokemon-coloring-pages"
            image="/placeholder.svg?height=300&width=400&query=pokemon%20coloring%20pages%20printable"
            description="Catch 'em all with these printer-friendly Pokemon character designs."
          />
          <PrintableCategory
            title="Printable Halloween Coloring Pages"
            href="/halloween-coloring-pages"
            image="/placeholder.svg?height=300&width=400&query=halloween%20coloring%20pages%20printable"
            description="Spooky designs that print clearly for Halloween fun and festivities."
          />
        </div>
      </section>

      {/* Printing Guide */}
      <section className="mb-12 bg-gray-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ultimate Guide to Printing Coloring Pages</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Choosing the Right Paper</h3>
            <p className="mb-4">
              The paper you choose can make a big difference in your coloring experience. Here are our recommendations:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <PaperType
                name="Standard Copy Paper"
                description="Economical and works well with most coloring tools. 20-24 lb weight."
                best="Colored pencils, crayons"
              />
              <PaperType
                name="Card Stock"
                description="Thicker and more durable. Great for display or heavy coloring. 60-110 lb weight."
                best="Markers, gel pens, watercolors"
              />
              <PaperType
                name="Marker Paper"
                description="Specially designed to prevent bleeding with alcohol markers."
                best="Alcohol markers, fine liners"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Printer Settings for Perfect Results</h3>
            <p className="mb-4">Optimize your printer settings to get the best quality printable coloring pages:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Select <strong>PDF Reader's "Print"</strong> function rather than browser printing for best results
              </li>
              <li>
                Choose <strong>"Actual Size"</strong> or <strong>"100%"</strong> scaling (not "Fit to page") to maintain
                proportions
              </li>
              <li>
                Select <strong>"High Quality"</strong> or <strong>"Best"</strong> in the quality settings
              </li>
              <li>
                For ink saving, use <strong>"Draft"</strong> mode or <strong>"Grayscale"</strong> options
              </li>
              <li>
                If lines appear too light, try increasing the <strong>contrast</strong> in advanced settings
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* More Printable Collections */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">More Printable Collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/unicorn-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            Unicorn Coloring Pages
          </Link>
          <Link
            href="/hello-kitty-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            Hello Kitty Coloring Pages
          </Link>
          <Link
            href="/bluey-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            Bluey Coloring Pages
          </Link>
          <Link
            href="/sonic-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            Sonic Coloring Pages
          </Link>
          <Link
            href="/spiderman-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            Spiderman Coloring Pages
          </Link>
          <Link
            href="/free-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            Free Coloring Pages
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <FAQ
            question="How do I print coloring pages without a border?"
            answer="To print without a border, look for the 'Borderless Printing' option in your printer settings. If your printer doesn't support this, select 'Minimum Margins' instead. You can also try setting custom margins to 0 in your print dialog box."
          />
          <FAQ
            question="What's the best paper size for printing coloring pages?"
            answer="Standard Letter size (8.5 x 11 inches) or A4 (210 x 297 mm) work best for most coloring pages. Our printable designs are optimized for these common paper sizes to ensure the best printing experience."
          />
          <FAQ
            question="How can I save ink when printing coloring pages?"
            answer="To save ink, print in 'Draft' mode or use the 'Grayscale' option in your printer settings. You can also adjust the brightness to make lines lighter while still visible. Consider using the 'Ink Saver' or 'Toner Save' mode if your printer has this feature."
          />
          <FAQ
            question="Can I resize the printable coloring pages?"
            answer="Yes! You can resize our printable coloring pages by adjusting the scale percentage in your printer settings. For larger prints, use 110-150%. For smaller prints, try 75-90%. Just be aware that extreme resizing might affect line quality."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Create Your Own Printable Coloring Pages</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Want unique, personalized coloring pages? Try our AI-powered coloring page generator to create custom designs
          that are perfectly optimized for printing!
        </p>
        <Link
          href="/create"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Create Custom Printable Pages
        </Link>
      </section>
    </div>
  )
}

function PrintableCategory({
  title,
  href,
  image,
  description,
}: {
  title: string
  href: string
  image: string
  description: string
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="aspect-video relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

function PaperType({
  name,
  description,
  best,
}: {
  name: string
  description: string
  best: string
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-bold mb-1">{name}</h4>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-xs">
        <span className="font-medium">Best for:</span> {best}
      </p>
    </div>
  )
}

function FAQ({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="text-xl font-bold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
