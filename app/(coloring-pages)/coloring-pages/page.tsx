import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Printable Coloring Pages for Kids and Adults | Drawgle",
  description:
    "Discover thousands of free printable coloring pages for all ages. Browse by category including Disney, animals, holidays, and more. Print and color today!",
  openGraph: {
    title: "Free Printable Coloring Pages for Kids and Adults",
    description:
      "Discover thousands of free printable coloring pages for all ages. Browse by category including Disney, animals, holidays, and more.",
    images: [
      {
        url: "/placeholder.svg?key=5wd7b",
        width: 1200,
        height: 630,
        alt: "Colorful drawing pages for kids",
      },
    ],
  },
}

export default function ColoringPagesHub() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Printable Coloring Pages</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Discover thousands of free printable coloring pages for kids and adults. From Disney characters to animals,
            find the perfect page to color today!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/coloring-pages-for-kids"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Kids Coloring Pages
            </Link>
            <Link
              href="/adult-coloring-pages"
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Adult Coloring Pages
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard
            title="Christmas Coloring Pages"
            href="/christmas-coloring-pages"
            imageUrl="/placeholder.svg?key=58qbs"
            description="Festive coloring pages featuring Santa, reindeer, and holiday scenes."
          />
          <CategoryCard
            title="Unicorn Coloring Pages"
            href="/unicorn-coloring-pages"
            imageUrl="/placeholder.svg?key=ggvc5"
            description="Magical unicorn coloring pages for fantasy lovers of all ages."
          />
          <CategoryCard
            title="Dinosaur Coloring Pages"
            href="/dinosaur-coloring-pages"
            imageUrl="/placeholder.svg?key=tfkax"
            description="Prehistoric fun with T-Rex, Triceratops, and more dinosaur friends."
          />
          <CategoryCard
            title="Hello Kitty Coloring Pages"
            href="/hello-kitty-coloring-pages"
            imageUrl="/placeholder.svg?key=szzie"
            description="Adorable Hello Kitty and friends coloring pages for Sanrio fans."
          />
          <CategoryCard
            title="Pokemon Coloring Pages"
            href="/pokemon-coloring-pages"
            imageUrl="/placeholder.svg?height=300&width=400&query=pokemon%20pikachu%20coloring%20page"
            description="Gotta color 'em all! Featuring Pikachu, Charizard, and more."
          />
          <CategoryCard
            title="Adult Coloring Pages"
            href="/adult-coloring-pages"
            imageUrl="/placeholder.svg?height=300&width=400&query=intricate%20mandala%20adult%20coloring%20page"
            description="Complex and relaxing designs perfect for stress relief and mindfulness."
          />
        </div>
      </section>

      {/* Benefits of Coloring */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Benefits of Coloring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard
            title="Reduces Stress & Anxiety"
            description="Coloring has a calming effect similar to meditation, helping to reduce stress and anxiety."
          />
          <BenefitCard
            title="Improves Focus"
            description="Regular coloring helps improve concentration and focus in both children and adults."
          />
          <BenefitCard
            title="Enhances Fine Motor Skills"
            description="Coloring helps children develop better control over their hand movements and coordination."
          />
          <BenefitCard
            title="Stimulates Creativity"
            description="Choosing colors and bringing pictures to life stimulates creative thinking and self-expression."
          />
          <BenefitCard
            title="Educational Value"
            description="Themed coloring pages can teach children about animals, nature, history, and more."
          />
          <BenefitCard
            title="Screen-Free Activity"
            description="Provides a healthy alternative to screen time for both children and adults."
          />
        </div>
      </section>

      {/* Latest Additions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Coloring Pages</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src={`/placeholder.svg?height=300&width=300&query=coloring%20page%20example%20${i}`}
                  alt={`Coloring page example ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium">Coloring Page {i}</h3>
                <p className="text-sm text-gray-600">Added recently</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/free-coloring-pages"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            View All Free Coloring Pages
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <FaqItem
            question="How do I print these coloring pages?"
            answer="Simply click on the coloring page you want, then click the print button. Make sure your printer is connected and has paper. For best results, use white paper and print at 100% scale."
          />
          <FaqItem
            question="Are these coloring pages really free?"
            answer="Yes! All coloring pages in our free section are completely free to download and print. We also offer premium coloring pages with our subscription plans that provide access to exclusive designs."
          />
          <FaqItem
            question="What age are these coloring pages for?"
            answer="We have coloring pages for all ages! Our collection includes simple designs for toddlers, fun characters for kids, and complex patterns for adults. Each category page specifies the recommended age range."
          />
          <FaqItem
            question="Can I use these coloring pages in my classroom?"
            answer="Our free coloring pages can be used in educational settings. Teachers love our seasonal and educational coloring pages for classroom activities."
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
            name: "Free Printable Coloring Pages",
            description:
              "Discover thousands of free printable coloring pages for kids and adults. Browse by category including Disney, animals, holidays, and more.",
            url: "https://drawgle.com/coloring-pages",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://drawgle.com/coloring-pages-for-kids",
                  name: "Coloring Pages for Kids",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://drawgle.com/christmas-coloring-pages",
                  name: "Christmas Coloring Pages",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  url: "https://drawgle.com/unicorn-coloring-pages",
                  name: "Unicorn Coloring Pages",
                },
              ],
            },
          }),
        }}
      />
    </div>
  )
}

function CategoryCard({
  title,
  href,
  imageUrl,
  description,
}: {
  title: string
  href: string
  imageUrl: string
  description: string
}) {
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
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
