import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Printer, Download, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Unicorn Coloring Pages | Free Printable Magical Unicorn Designs",
  description:
    "Download free printable unicorn coloring pages for kids and adults. Magical unicorn designs featuring rainbows, stars, and fantasy scenes perfect for unicorn lovers.",
  openGraph: {
    title: "Unicorn Coloring Pages | Free Printable Magical Unicorn Designs",
    description:
      "Download free printable unicorn coloring pages featuring magical unicorns, rainbows, and fantasy scenes.",
    images: [
      {
        url: "/placeholder.svg?key=tiwxv",
        width: 1200,
        height: 630,
        alt: "Magical unicorn coloring pages collection",
      },
    ],
  },
}

export default function UnicornColoringPages() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <Link href="/coloring-pages" className="hover:text-blue-600">
              Coloring Pages
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-900">Unicorn Coloring Pages</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="mb-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl overflow-hidden">
        <div className="py-12 px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800">Unicorn Coloring Pages</h1>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto mb-8">
            Discover magical unicorn coloring pages for kids and adults. Bring these mythical creatures to life with
            your favorite colors!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#printable-unicorns"
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition flex items-center gap-2"
            >
              <Printer size={18} />
              <span>Printable Designs</span>
            </Link>
            <Link
              href="#download"
              className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition flex items-center gap-2"
            >
              <Download size={18} />
              <span>Download All</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Magical Unicorn Coloring Fun</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Unicorns have captured the imagination of children and adults alike for centuries. These mythical
              creatures with their flowing manes, spiraled horns, and association with rainbows and magic make perfect
              subjects for coloring pages. Whether you're looking for simple unicorn designs for toddlers or intricate
              patterns for adults, our collection has something for everyone.
            </p>
            <p>
              Coloring unicorns is not just fun but also beneficial for development. It helps improve fine motor skills,
              encourages creativity, and provides a calming activity that can reduce stress and anxiety. Plus, the
              magical theme of unicorns inspires imagination and storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Unicorn Coloring Pages */}
      <section id="printable-unicorns" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Unicorn Coloring Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ColoringPageCard
              key={i}
              title={`Magical Unicorn ${i}`}
              description={getUnicornDescription(i)}
              imageUrl={`/placeholder.svg?height=400&width=400&query=unicorn%20coloring%20page%20${i}%20line%20art`}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="#download"
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition inline-flex items-center gap-2"
          >
            <Download size={18} />
            <span>Download All Unicorn Pages</span>
          </Link>
        </div>
      </section>

      {/* Unicorn Coloring Tips */}
      <section className="mb-16 bg-purple-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Unicorn Coloring Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Color Schemes for Magical Unicorns</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Rainbow Theme:</strong> Use all colors of the rainbow for the mane and tail for a classic
                magical unicorn look
              </li>
              <li>
                <strong>Pastel Paradise:</strong> Soft pinks, lavenders, mint greens, and baby blues create a dreamy
                unicorn
              </li>
              <li>
                <strong>Fantasy Colors:</strong> Try unusual colors like teal, purple, or even black for a unique twist
              </li>
              <li>
                <strong>Metallic Magic:</strong> Add gold or silver accents to the horn and hooves for extra sparkle
                (using gel pens or metallic markers)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Coloring Techniques</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Gradient Effect:</strong> Create a gradient in the mane by blending colors from light to dark
              </li>
              <li>
                <strong>Texture:</strong> Add texture to the unicorn's coat with small strokes or dots
              </li>
              <li>
                <strong>Background Magic:</strong> Don't forget the background! Add rainbows, clouds, stars, or a
                magical forest
              </li>
              <li>
                <strong>Mixed Media:</strong> Combine colored pencils with glitter, stickers, or even small sequins for
                a 3D effect
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Different Types of Unicorn Coloring Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Types of Unicorn Coloring Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TypeCard
            title="Baby Unicorns"
            description="Adorable baby unicorn designs perfect for younger children with simpler lines and cute features."
            imageUrl="/placeholder.svg?key=injmh"
          />
          <TypeCard
            title="Unicorns with Rainbows"
            description="Magical scenes featuring unicorns with rainbows, perfect for colorful creativity."
            imageUrl="/placeholder.svg?key=xf1ue"
          />
          <TypeCard
            title="Unicorn Mandalas"
            description="Intricate unicorn-themed mandalas for older kids and adults who enjoy detailed coloring."
            imageUrl="/placeholder.svg?key=bcee5"
          />
          <TypeCard
            title="Flying Unicorns"
            description="Majestic unicorns with wings (sometimes called alicorns) soaring through magical skies."
            imageUrl="/placeholder.svg?key=snwuw"
          />
          <TypeCard
            title="Unicorn Scenes"
            description="Complete scenes with unicorns in enchanted forests, castles, or with fairy friends."
            imageUrl="/placeholder.svg?height=300&width=300&query=unicorn%20in%20enchanted%20forest%20coloring%20page"
          />
          <TypeCard
            title="Cartoon Unicorns"
            description="Fun cartoon-style unicorns with expressive faces and playful poses."
            imageUrl="/placeholder.svg?height=300&width=300&query=cartoon%20unicorn%20coloring%20page"
          />
        </div>
      </section>

      {/* Educational Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">The Magic of Unicorns</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="prose prose-lg max-w-none">
            <p>
              Unicorns have been part of human mythology for thousands of years. These magical creatures appear in
              ancient Greek writings, where they were described as fierce, wild woodland creatures with a single horn.
              Over time, unicorns evolved in our collective imagination to become the gentle, magical creatures we know
              today.
            </p>
            <h3>Unicorn Facts for Kids</h3>
            <ul>
              <li>The word "unicorn" comes from Latin "uni" (one) and "cornu" (horn)</li>
              <li>
                In medieval times, unicorn horns (actually narwhal tusks) were believed to have magical healing powers
              </li>
              <li>The unicorn is Scotland's national animal</li>
              <li>
                Modern unicorns are often depicted with rainbow colors, though traditional unicorns were usually white
              </li>
            </ul>
            <p>
              Coloring unicorn pictures is a wonderful way to learn about these mythical creatures while engaging in a
              fun, creative activity. As children color, you can share these fascinating unicorn facts and spark their
              imagination about these magical beings.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="mb-16">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Download All Unicorn Coloring Pages</h2>
          <p className="text-lg mb-6">
            Get our complete collection of 20 premium unicorn coloring pages in high-resolution PDF format.
          </p>
          <div className="flex justify-center">
            <Link
              href="/subscription"
              className="px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-medium"
            >
              Get Premium Access
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Already a member?{" "}
            <Link href="/sign-in" className="text-purple-600 hover:underline">
              Sign in
            </Link>{" "}
            to download.
          </p>
        </div>
      </section>

      {/* Share Section */}
      <section className="mb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Share These Unicorn Coloring Pages</h2>
          <p className="mb-6">Know someone who loves unicorns? Share these magical coloring pages with them!</p>
          <div className="flex justify-center gap-4">
            <button
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              aria-label="Share on Facebook"
            >
              <Share2 size={20} />
            </button>
            <button
              className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
              aria-label="Share on Pinterest"
            >
              <Share2 size={20} />
            </button>
            <button
              className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition"
              aria-label="Share on Twitter"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <FaqItem
            question="How do I print these unicorn coloring pages?"
            answer="Click on the unicorn coloring page you want, then click the 'Print' button. Make sure your printer is connected and has paper. For best results, use white cardstock paper for a sturdier coloring page."
          />
          <FaqItem
            question="Are these unicorn coloring pages free?"
            answer="We offer both free and premium unicorn coloring pages. The ones displayed on this page are free to download and print. For our complete collection of 20 premium designs, you'll need to sign up for our subscription."
          />
          <FaqItem
            question="What age are these unicorn coloring pages appropriate for?"
            answer="Our unicorn coloring pages range from simple designs suitable for preschoolers (ages 3-5) to more detailed patterns for older children and adults. Each coloring page indicates the recommended age range."
          />
          <FaqItem
            question="What's the best way to color unicorns?"
            answer="Unicorns can be colored in many ways! Traditional unicorns are white with a colorful horn, but modern interpretations often feature rainbow manes and tails. Feel free to use your imagination - there's no wrong way to color a magical unicorn!"
          />
        </div>
      </section>

      {/* Related Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RelatedPageCard
            title="Princess Coloring Pages"
            href="/princess-coloring-pages"
            imageUrl="/placeholder.svg?height=300&width=300&query=princess%20coloring%20page"
          />
          <RelatedPageCard
            title="Fairy Coloring Pages"
            href="/fairy-coloring-pages"
            imageUrl="/placeholder.svg?height=300&width=300&query=fairy%20coloring%20page"
          />
          <RelatedPageCard
            title="Dragon Coloring Pages"
            href="/dragon-coloring-pages"
            imageUrl="/placeholder.svg?height=300&width=300&query=dragon%20coloring%20page"
          />
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Unicorn Coloring Pages",
            description:
              "Download free printable unicorn coloring pages for kids and adults. Magical unicorn designs featuring rainbows, stars, and fantasy scenes perfect for unicorn lovers.",
            url: "https://drawgle.com/unicorn-coloring-pages",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://drawgle.com/unicorn-coloring-pages#printable-unicorns",
                  name: "Printable Unicorn Coloring Pages",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://drawgle.com/unicorn-coloring-pages#download",
                  name: "Download Unicorn Coloring Pages",
                },
              ],
            },
          }),
        }}
      />
    </div>
  )
}

function ColoringPageCard({
  title,
  description,
  imageUrl,
}: {
  title: string
  description: string
  imageUrl: string
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition group">
      <div className="aspect-square relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-contain p-2" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <div className="flex gap-2">
            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition" aria-label="Print coloring page">
              <Printer size={20} className="text-purple-700" />
            </button>
            <button
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition"
              aria-label="Download coloring page"
            >
              <Download size={20} className="text-purple-700" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function TypeCard({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
      <div className="aspect-square relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="text-xl font-bold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}

function RelatedPageCard({ title, href, imageUrl }: { title: string; href: string; imageUrl: string }) {
  return (
    <Link href={href} className="group">
      <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="aspect-video relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold group-hover:text-purple-600 transition">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

// Helper function to generate different descriptions for unicorn coloring pages
function getUnicornDescription(index: number): string {
  const descriptions = [
    "A majestic unicorn with flowing mane and tail, perfect for rainbow colors.",
    "Cute baby unicorn with stars and hearts, ideal for younger children.",
    "Unicorn with rainbow and clouds in a magical sky scene.",
    "Detailed unicorn design with intricate patterns, great for older kids and adults.",
    "Unicorn in an enchanted forest with flowers and butterflies.",
    "Cartoon-style unicorn with a playful expression, easy to color for beginners.",
  ]
  return descriptions[index - 1] || "Beautiful unicorn coloring page for all ages."
}
