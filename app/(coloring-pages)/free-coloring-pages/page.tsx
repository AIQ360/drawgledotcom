import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SchemaWebPage } from "@/components/seo/schema"

export const metadata: Metadata = {
  title: "100% Free Coloring Pages to Download and Print | Drawgle",
  description:
    "Browse our collection of completely free coloring pages for kids and adults. No registration, no payment required - just download, print and enjoy!",
  openGraph: {
    title: "100% Free Coloring Pages to Download and Print",
    description:
      "Browse our collection of completely free coloring pages for kids and adults. No registration, no payment required - just download, print and enjoy!",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&query=collection%20of%20free%20coloring%20pages%20for%20download",
        width: 1200,
        height: 630,
        alt: "Collection of free coloring pages",
      },
    ],
  },
}

export default function FreeColoringPages() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaWebPage
        name="Free Coloring Pages"
        description="Browse our collection of completely free coloring pages for kids and adults. No registration, no payment required - just download, print and enjoy!"
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
        <span className="text-gray-900">Free Coloring Pages</span>
      </nav>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Free Coloring Pages</h1>
              <p className="text-lg mb-6">
                Enjoy our extensive collection of 100% free coloring pages for all ages. No registration, no payment, no
                email required - just download, print, and start coloring!
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="font-bold text-lg mb-2">Why Our Free Pages?</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>High-quality designs with clean lines</li>
                  <li>Regularly updated with new free content</li>
                  <li>Diverse themes for all interests and ages</li>
                  <li>No watermarks or restrictions</li>
                </ul>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&query=happy%20children%20coloring%20free%20coloring%20pages"
                alt="Children enjoying free coloring pages"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Free Collections */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular Free Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FreeCategory
            title="Free Kids Coloring Pages"
            href="/coloring-pages-for-kids"
            image="/placeholder.svg?height=300&width=400&query=free%20kids%20coloring%20pages%20collection"
            description="Fun and educational free coloring pages perfect for children of all ages."
            count="50+"
          />
          <FreeCategory
            title="Free Christmas Coloring Pages"
            href="/christmas-coloring-pages"
            image="/placeholder.svg?height=300&width=400&query=free%20christmas%20coloring%20pages%20collection"
            description="Celebrate the holidays with our free festive coloring designs."
            count="25+"
          />
          <FreeCategory
            title="Free Halloween Coloring Pages"
            href="/halloween-coloring-pages"
            image="/placeholder.svg?height=300&width=400&query=free%20halloween%20coloring%20pages%20collection"
            description="Spooky and fun Halloween designs available at no cost."
            count="20+"
          />
          <FreeCategory
            title="Free Unicorn Coloring Pages"
            href="/unicorn-coloring-pages"
            image="/placeholder.svg?height=300&width=400&query=free%20unicorn%20coloring%20pages%20collection"
            description="Magical unicorn designs that are completely free to download."
            count="15+"
          />
          <FreeCategory
            title="Free Pokemon Coloring Pages"
            href="/pokemon-coloring-pages"
            image="/placeholder.svg?height=300&width=400&query=free%20pokemon%20coloring%20pages%20collection"
            description="Catch your favorite Pokemon characters with these free coloring sheets."
            count="30+"
          />
          <FreeCategory
            title="Free Adult Coloring Pages"
            href="/adult-coloring-pages"
            image="/placeholder.svg?height=300&width=400&query=free%20adult%20coloring%20pages%20collection"
            description="Complex designs for adults that won't cost you a penny."
            count="20+"
          />
        </div>
      </section>

      {/* Latest Free Additions */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Latest Free Additions</h2>
        <p className="mb-6 text-gray-700">
          We regularly add new free coloring pages to our collection. Check out our latest additions that you can
          download and enjoy right now!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition group"
            >
              <div className="aspect-square relative">
                <Image
                  src={`/placeholder.svg?height=200&width=200&query=free%20coloring%20page%20example%20${i}`}
                  alt={`Free coloring page example ${i}`}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  FREE
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-medium truncate">Free Coloring Page {i}</h3>
                <p className="text-xs text-gray-500">Added recently</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Coloring */}
      <section className="mb-12 bg-gray-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Benefits of Free Coloring Activities</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard
            title="Budget-Friendly Entertainment"
            description="Free coloring pages provide hours of entertainment without spending money on expensive activity books or supplies."
          />
          <BenefitCard
            title="Accessible to Everyone"
            description="Our free resources ensure that creative activities are accessible to all families regardless of financial situation."
          />
          <BenefitCard
            title="Try Before You Buy"
            description="Sample different styles and themes for free before investing in premium coloring books or subscriptions."
          />
          <BenefitCard
            title="Classroom Resources"
            description="Teachers can access free coloring pages for classroom activities without budget constraints."
          />
          <BenefitCard
            title="Unlimited Variety"
            description="Access a wide range of free designs so children never get bored with the same coloring books."
          />
          <BenefitCard
            title="Instant Gratification"
            description="Download and print immediately - no waiting for shipping or store visits required."
          />
        </div>
      </section>

      {/* More Free Categories */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">More Free Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/cute-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            <span className="block">Cute Coloring Pages</span>
            <span className="text-green-600 text-sm">Free Collection</span>
          </Link>
          <Link
            href="/hello-kitty-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            <span className="block">Hello Kitty Pages</span>
            <span className="text-green-600 text-sm">Free Collection</span>
          </Link>
          <Link
            href="/bluey-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            <span className="block">Bluey Coloring Pages</span>
            <span className="text-green-600 text-sm">Free Collection</span>
          </Link>
          <Link
            href="/sonic-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            <span className="block">Sonic Coloring Pages</span>
            <span className="text-green-600 text-sm">Free Collection</span>
          </Link>
          <Link
            href="/spiderman-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            <span className="block">Spiderman Pages</span>
            <span className="text-green-600 text-sm">Free Collection</span>
          </Link>
          <Link
            href="/printable-coloring-pages"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            <span className="block">Printable Pages</span>
            <span className="text-green-600 text-sm">Free Collection</span>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <FAQ
            question="Are these coloring pages really 100% free?"
            answer="Yes! All coloring pages in our free collection are completely free to download and print. There are no hidden fees, no registration requirements, and no email sign-ups needed. We believe in providing accessible creative resources for everyone."
          />
          <FAQ
            question="How often do you add new free coloring pages?"
            answer="We add new free coloring pages weekly. Our team is constantly creating new designs and seasonal content to keep our free collection fresh and exciting. Check back regularly to see what's new!"
          />
          <FAQ
            question="Can I use these free coloring pages for my classroom or group?"
            answer="Our free coloring pages are perfect for educational settings, community groups, therapy sessions, and more. Teachers and group leaders are welcome to print multiple copies for their students or participants."
          />
          <FAQ
            question="What's the difference between free and premium coloring pages?"
            answer="Our free coloring pages offer high-quality designs at no cost. Premium coloring pages (available with our subscription) include exclusive designs, higher resolution options, customization features, and the ability to create personalized coloring books."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 rounded-xl p-6 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Create Your Own Custom Coloring Pages</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Enjoyed our free collection? Take your coloring experience to the next level with our AI-powered coloring page
          generator. Create unlimited custom designs based on your own ideas!
        </p>
        <Link
          href="/create"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Try Our Custom Generator
        </Link>
      </section>
    </div>
  )
}

function FreeCategory({
  title,
  href,
  image,
  description,
  count,
}: {
  title: string
  href: string
  image: string
  description: string
  count: string
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
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            {count} Free Pages
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

function BenefitCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
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
