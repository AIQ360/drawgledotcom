import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Coloring Pages for Kids - Free Printable Children's Coloring Sheets | Drawgle",
  description:
    "Discover hundreds of free printable coloring pages for kids of all ages. Fun, educational coloring sheets featuring animals, cartoons, and more for children.",
  openGraph: {
    title: "Coloring Pages for Kids - Free Printable Children's Coloring Sheets",
    description:
      "Discover hundreds of free printable coloring pages for kids of all ages. Fun, educational coloring sheets featuring animals, cartoons, and more.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&query=children%20coloring%20pages%20with%20crayons",
        width: 1200,
        height: 630,
        alt: "Children coloring pages with crayons",
      },
    ],
  },
}

export default function KidsColoringPages() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/coloring-pages" className="hover:underline">
              Coloring Pages
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <span aria-current="page">Coloring Pages for Kids</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 mb-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Coloring Pages for Kids</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Discover hundreds of free printable coloring pages designed especially for children. From simple designs for
            toddlers to more detailed pages for older kids, we have coloring fun for all ages!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="#toddler-coloring"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Toddler Pages
            </Link>
            <Link
              href="#preschool-coloring"
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Preschool Pages
            </Link>
            <Link
              href="#elementary-coloring"
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Elementary Pages
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits of Coloring for Kids */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Coloring is Great for Kids</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Developmental Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5">
                  1
                </div>
                <div>
                  <span className="font-bold">Fine Motor Skills:</span> Coloring helps children develop the small
                  muscles in their hands and improves hand-eye coordination.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5">
                  2
                </div>
                <div>
                  <span className="font-bold">Concentration:</span> Regular coloring helps children practice focus and
                  attention to detail.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5">
                  3
                </div>
                <div>
                  <span className="font-bold">Color Recognition:</span> Coloring helps toddlers and preschoolers learn
                  to identify and name colors.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5">
                  4
                </div>
                <div>
                  <span className="font-bold">Spatial Awareness:</span> Coloring within lines helps children understand
                  boundaries and spatial relationships.
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Emotional & Social Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                  1
                </div>
                <div>
                  <span className="font-bold">Self-Expression:</span> Coloring gives children a way to express their
                  feelings and creativity.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                  2
                </div>
                <div>
                  <span className="font-bold">Confidence Building:</span> Completing a coloring page gives children a
                  sense of accomplishment.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                  3
                </div>
                <div>
                  <span className="font-bold">Stress Relief:</span> Coloring has a calming effect that can help children
                  manage emotions.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                  4
                </div>
                <div>
                  <span className="font-bold">Social Activity:</span> Coloring together promotes sharing, conversation,
                  and bonding.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Toddler Coloring Pages (Ages 1-3) */}
      <section id="toddler-coloring" className="mb-16 scroll-mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Toddler Coloring Pages (Ages 1-3)</h2>
          <Link href="/toddler-coloring-pages" className="text-blue-600 hover:text-blue-800 font-medium">
            View All →
          </Link>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Simple, bold designs with thick lines perfect for little hands just learning to color. These pages feature
          basic shapes, large animals, and familiar objects.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src={`/placeholder.svg?height=200&width=200&query=simple%20toddler%20coloring%20page%20${i}`}
                  alt={`Simple toddler coloring page ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm">Simple Shape {i}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preschool Coloring Pages (Ages 3-5) */}
      <section id="preschool-coloring" className="mb-16 scroll-mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Preschool Coloring Pages (Ages 3-5)</h2>
          <Link href="/preschool-coloring-pages" className="text-blue-600 hover:text-blue-800 font-medium">
            View All →
          </Link>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Slightly more detailed designs perfect for preschoolers developing their coloring skills. These pages feature
          favorite characters, animals, and scenes with educational elements.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src={`/placeholder.svg?height=200&width=200&query=preschool%20coloring%20page%20${i}`}
                  alt={`Preschool coloring page ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm">Preschool Fun {i}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Elementary Coloring Pages (Ages 6-10) */}
      <section id="elementary-coloring" className="mb-16 scroll-mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Elementary Coloring Pages (Ages 6-10)</h2>
          <Link href="/elementary-coloring-pages" className="text-blue-600 hover:text-blue-800 font-medium">
            View All →
          </Link>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          More detailed designs for school-age children with developed motor skills. These pages include popular
          characters, complex scenes, and educational themes.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src={`/placeholder.svg?height=200&width=200&query=elementary%20school%20coloring%20page%20${i}`}
                  alt={`Elementary school coloring page ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm">School Age Fun {i}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Coloring Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Educational Coloring Pages</h2>
        <p className="text-lg text-gray-700 mb-6">
          Make learning fun with our educational coloring pages that teach while entertaining. These pages cover
          subjects like alphabet, numbers, science, history, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Alphabet & Numbers</h3>
            <p className="mb-4">Learn letters and counting with fun coloring activities.</p>
            <Link href="/educational-coloring-pages/alphabet" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Alphabet Pages →
            </Link>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Science & Nature</h3>
            <p className="mb-4">Explore the natural world through educational coloring pages.</p>
            <Link
              href="/educational-coloring-pages/science"
              className="text-green-600 hover:text-green-800 font-medium"
            >
              Explore Science Pages →
            </Link>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">History & Geography</h3>
            <p className="mb-4">Learn about different cultures, landmarks, and historical events.</p>
            <Link
              href="/educational-coloring-pages/history"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Explore History Pages →
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Coloring Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Seasonal Coloring Pages for Kids</h2>
        <p className="text-lg text-gray-700 mb-6">
          Celebrate every season and holiday with our themed coloring pages. From Christmas to Halloween, spring flowers
          to summer fun, we have seasonal coloring pages for every occasion.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/christmas-coloring-pages" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300&query=christmas%20coloring%20page%20for%20children"
                  alt="Christmas coloring pages for kids"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-bold group-hover:text-blue-600 transition">Christmas</h3>
              </div>
            </div>
          </Link>
          <Link href="/halloween-coloring-pages" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300&query=halloween%20coloring%20page%20for%20children"
                  alt="Halloween coloring pages for kids"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-bold group-hover:text-blue-600 transition">Halloween</h3>
              </div>
            </div>
          </Link>
          <Link href="/spring-coloring-pages" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300&query=spring%20flowers%20coloring%20page%20for%20children"
                  alt="Spring coloring pages for kids"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-bold group-hover:text-blue-600 transition">Spring</h3>
              </div>
            </div>
          </Link>
          <Link href="/summer-coloring-pages" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300&query=summer%20beach%20coloring%20page%20for%20children"
                  alt="Summer coloring pages for kids"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-bold group-hover:text-blue-600 transition">Summer</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="mb-16 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Tips for Parents & Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Getting the Most Out of Coloring Time</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Create a dedicated space</span> for coloring with good lighting and a
                  comfortable surface.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Offer a variety of coloring tools</span> like crayons, colored pencils,
                  and washable markers.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Ask open-ended questions</span> about their color choices and what they're
                  creating.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Display finished artwork</span> to build confidence and show you value
                  their creativity.
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Extending the Learning</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Use coloring pages as conversation starters</span> about the subject
                  matter.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Create stories</span> about the characters or scenes they're coloring.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Combine coloring with other activities</span> like reading related books
                  or watching educational videos.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Turn coloring pages into crafts</span> by cutting them out or adding
                  additional materials.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <FaqItem
            question="What age are these coloring pages appropriate for?"
            answer="Our kids' coloring pages are categorized by age group: toddlers (ages 1-3), preschoolers (ages 3-5), and elementary school children (ages 6-10). Each category features designs with appropriate complexity and themes for that age range."
          />
          <FaqItem
            question="How do I download and print these coloring pages?"
            answer="Simply click on the coloring page you want, then click the download or print button. For best results, print on white paper at 100% scale. Make sure your printer is connected and has ink!"
          />
          <FaqItem
            question="Are these coloring pages educational?"
            answer="Yes! Many of our coloring pages incorporate educational elements like letters, numbers, science concepts, and historical themes. Our educational section specifically focuses on learning through coloring."
          />
          <FaqItem
            question="Can I use these coloring pages in my classroom or daycare?"
            answer="Our free coloring pages can be used in educational settings. Many teachers use our seasonal and educational coloring pages as part of their curriculum or as fun activities."
          />
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Coloring Pages for Kids - Free Printable Children's Coloring Sheets",
            description:
              "Discover hundreds of free printable coloring pages for kids of all ages. Fun, educational coloring sheets featuring animals, cartoons, and more for children.",
            url: "https://drawgle.com/coloring-pages-for-kids",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://drawgle.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Coloring Pages",
                  item: "https://drawgle.com/coloring-pages",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Coloring Pages for Kids",
                  item: "https://drawgle.com/coloring-pages-for-kids",
                },
              ],
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://drawgle.com/toddler-coloring-pages",
                  name: "Toddler Coloring Pages",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://drawgle.com/preschool-coloring-pages",
                  name: "Preschool Coloring Pages",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  url: "https://drawgle.com/elementary-coloring-pages",
                  name: "Elementary Coloring Pages",
                },
              ],
            },
          }),
        }}
      />
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
