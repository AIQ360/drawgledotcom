import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Printer, Download, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Pokemon Coloring Pages | Free Printable Pokemon Characters",
  description:
    "Download free printable Pokemon coloring pages featuring Pikachu, Charizard, Eevee and more. Perfect for Pokemon fans of all ages.",
  openGraph: {
    title: "Pokemon Coloring Pages | Free Printable Pokemon Characters",
    description: "Download free printable Pokemon coloring pages featuring Pikachu, Charizard, Eevee and more.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&query=pokemon%20coloring%20pages%20collection%20with%20pikachu",
        width: 1200,
        height: 630,
        alt: "Pokemon coloring pages collection",
      },
    ],
  },
}

export default function PokemonColoringPages() {
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
            <span className="font-medium text-gray-900">Pokemon Coloring Pages</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="mb-12 bg-gradient-to-r from-yellow-100 to-red-100 rounded-2xl overflow-hidden">
        <div className="py-12 px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">Pokemon Coloring Pages</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Gotta color 'em all! Discover printable Pokemon coloring pages featuring your favorite characters from the
            popular franchise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#printable-pokemon"
              className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition flex items-center gap-2"
            >
              <Printer size={18} />
              <span>Printable Designs</span>
            </Link>
            <Link
              href="#download"
              className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition flex items-center gap-2"
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
          <h2 className="text-3xl font-bold mb-6 text-center">Pokemon Coloring Adventures</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Since its debut in 1996, Pokemon has captured the hearts of millions around the world. These pocket
              monsters with their unique abilities and charming personalities make perfect subjects for coloring pages.
              Whether you're a long-time fan or new to the world of Pokemon, our collection of coloring pages offers a
              fun way to engage with these beloved characters.
            </p>
            <p>
              Coloring Pokemon is not just entertaining but also educational. It helps children develop fine motor
              skills, learn about different characters and their types, and encourages creativity as they decide how to
              color each Pokemon. From the iconic Pikachu to legendary Pokemon like Mewtwo, our collection features a
              wide range of characters to color.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Pokemon Coloring Pages */}
      <section id="printable-pokemon" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Pokemon Coloring Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pokemonData.map((pokemon, index) => (
            <ColoringPageCard
              key={index}
              title={pokemon.name}
              description={pokemon.description}
              imageUrl={`/placeholder.svg?height=400&width=400&query=${encodeURIComponent(
                pokemon.name + " pokemon coloring page line art",
              )}`}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="#download"
            className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition inline-flex items-center gap-2"
          >
            <Download size={18} />
            <span>Download All Pokemon Pages</span>
          </Link>
        </div>
      </section>

      {/* Pokemon Coloring Tips */}
      <section className="mb-16 bg-yellow-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Pokemon Coloring Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Color Schemes for Pokemon</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Authentic Colors:</strong> Reference the official Pokemon artwork to color characters accurately
              </li>
              <li>
                <strong>Type-Based Colors:</strong> Use colors that match the Pokemon's type (blue for Water, red for
                Fire, etc.)
              </li>
              <li>
                <strong>Shiny Variants:</strong> Try coloring the "shiny" variant of Pokemon for a unique twist
              </li>
              <li>
                <strong>Custom Creations:</strong> Create your own color combinations for a personalized Pokemon
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Coloring Techniques</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Shading:</strong> Add depth to your Pokemon by using lighter and darker shades of the same color
              </li>
              <li>
                <strong>Backgrounds:</strong> Create environments that match the Pokemon's habitat (forests, oceans,
                mountains)
              </li>
              <li>
                <strong>Special Effects:</strong> Add lightning effects for Electric types, flame effects for Fire
                types, etc.
              </li>
              <li>
                <strong>Battle Scenes:</strong> Color multiple Pokemon together in an action-packed battle scene
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Different Types of Pokemon */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pokemon Types to Color</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <TypeCard
            title="Fire Type"
            description="Charizard, Charmander, Vulpix, and other fire-breathing Pokemon."
            imageUrl="/placeholder.svg?height=300&width=300&query=fire%20type%20pokemon%20coloring%20page"
            color="bg-red-100"
          />
          <TypeCard
            title="Water Type"
            description="Squirtle, Gyarados, Vaporeon, and other aquatic Pokemon."
            imageUrl="/placeholder.svg?height=300&width=300&query=water%20type%20pokemon%20coloring%20page"
            color="bg-blue-100"
          />
          <TypeCard
            title="Grass Type"
            description="Bulbasaur, Celebi, Leafeon, and other plant-based Pokemon."
            imageUrl="/placeholder.svg?height=300&width=300&query=grass%20type%20pokemon%20coloring%20page"
            color="bg-green-100"
          />
          <TypeCard
            title="Electric Type"
            description="Pikachu, Raichu, Electabuzz, and other electricity-powered Pokemon."
            imageUrl="/placeholder.svg?height=300&width=300&query=electric%20type%20pokemon%20coloring%20page"
            color="bg-yellow-100"
          />
          <TypeCard
            title="Psychic Type"
            description="Mewtwo, Abra, Espeon, and other psychic-powered Pokemon."
            imageUrl="/placeholder.svg?height=300&width=300&query=psychic%20type%20pokemon%20coloring%20page"
            color="bg-purple-100"
          />
          <TypeCard
            title="Dragon Type"
            description="Dragonite, Salamence, Rayquaza, and other dragon Pokemon."
            imageUrl="/placeholder.svg?height=300&width=300&query=dragon%20type%20pokemon%20coloring%20page"
            color="bg-indigo-100"
          />
          <TypeCard
            title="Ghost Type"
            description="Gengar, Haunter, Mimikyu, and other spooky Pokemon."
            imageUrl="/placeholder.svg?height=300&width=300&query=ghost%20type%20pokemon%20coloring%20page"
            color="bg-purple-200"
          />
          <TypeCard
            title="Normal Type"
            description="Eevee, Snorlax, Jigglypuff, and other normal Pokemon."
            imageUrl="/placeholder.svg?height=300&width=300&query=normal%20type%20pokemon%20coloring%20page"
            color="bg-gray-100"
          />
        </div>
      </section>

      {/* Educational Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Learn About Pokemon</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="prose prose-lg max-w-none">
            <p>
              Pokemon, short for "Pocket Monsters," originated in Japan as a video game in 1996 and quickly grew into a
              global phenomenon spanning games, trading cards, TV shows, movies, and more. The world of Pokemon centers
              around creatures with special powers that humans called Trainers can catch and train for battles.
            </p>
            <h3>Pokemon Facts for Kids</h3>
            <ul>
              <li>There are over 900 different species of Pokemon across all generations</li>
              <li>Pokemon are categorized into 18 different types, including Fire, Water, Grass, Electric, and more</li>
              <li>
                Most Pokemon can evolve into stronger forms, like Pikachu evolving into Raichu or Charmander evolving
                into Charmeleon and then Charizard
              </li>
              <li>
                The Pokemon world includes various regions based on real-world locations, such as Kanto (based on the
                Kanto region of Japan) and Alola (based on Hawaii)
              </li>
            </ul>
            <p>
              Coloring Pokemon pictures is a great way to learn about these fascinating creatures while having fun.
              Children can learn about different Pokemon types, their evolutions, and special abilities as they bring
              these characters to life with colors.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="mb-16">
        <div className="bg-gradient-to-r from-red-100 to-yellow-100 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Download All Pokemon Coloring Pages</h2>
          <p className="text-lg mb-6">
            Get our complete collection of 50 premium Pokemon coloring pages in high-resolution PDF format.
          </p>
          <div className="flex justify-center">
            <Link
              href="/subscription"
              className="px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition text-lg font-medium"
            >
              Get Premium Access
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Already a member?{" "}
            <Link href="/sign-in" className="text-red-600 hover:underline">
              Sign in
            </Link>{" "}
            to download.
          </p>
        </div>
      </section>

      {/* Share Section */}
      <section className="mb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Share These Pokemon Coloring Pages</h2>
          <p className="mb-6">Know a Pokemon fan? Share these coloring pages with them!</p>
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
            question="Are these Pokemon coloring pages official?"
            answer="Our Pokemon coloring pages are fan-made and inspired by the Pokemon franchise. They are not official Nintendo or Pokemon Company products but are created for fans to enjoy."
          />
          <FaqItem
            question="Can I use these Pokemon coloring pages in my classroom?"
            answer="Yes! Our free Pokemon coloring pages can be used in educational settings. They're great for art activities, rewards, or even learning about different animal types and habitats through Pokemon characters."
          />
          <FaqItem
            question="Do you have coloring pages for newer generation Pokemon?"
            answer="Yes, we regularly update our collection to include Pokemon from all generations, including the latest releases. Our premium collection includes Pokemon from all regions and generations."
          />
          <FaqItem
            question="What's the best way to color Pokemon characters?"
            answer="You can color Pokemon according to their official colors or get creative with your own color schemes. Many Pokemon fans enjoy creating 'shiny' variants with alternative color schemes. Use colored pencils for detailed work or markers for bold colors."
          />
        </div>
      </section>

      {/* Related Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RelatedPageCard
            title="Sonic Coloring Pages"
            href="/sonic-coloring-pages"
            imageUrl="/placeholder.svg?height=300&width=300&query=sonic%20the%20hedgehog%20coloring%20page"
          />
          <RelatedPageCard
            title="Minecraft Coloring Pages"
            href="/minecraft-coloring-pages"
            imageUrl="/placeholder.svg?height=300&width=300&query=minecraft%20coloring%20page"
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
            name: "Pokemon Coloring Pages",
            description:
              "Download free printable Pokemon coloring pages featuring Pikachu, Charizard, Eevee and more. Perfect for Pokemon fans of all ages.",
            url: "https://drawgle.com/pokemon-coloring-pages",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://drawgle.com/pokemon-coloring-pages#printable-pokemon",
                  name: "Printable Pokemon Coloring Pages",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://drawgle.com/pokemon-coloring-pages#download",
                  name: "Download Pokemon Coloring Pages",
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
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <div className="flex gap-2">
            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition" aria-label="Print coloring page">
              <Printer size={20} className="text-red-700" />
            </button>
            <button
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition"
              aria-label="Download coloring page"
            >
              <Download size={20} className="text-red-700" />
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

function TypeCard({
  title,
  description,
  imageUrl,
  color,
}: {
  title: string
  description: string
  imageUrl: string
  color: string
}) {
  return (
    <div className={`${color} border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition`}>
      <div className="aspect-square relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
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
          <h3 className="text-lg font-bold group-hover:text-red-600 transition">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

// Pokemon data for the featured coloring pages
const pokemonData = [
  {
    name: "Pikachu",
    description: "The iconic Electric-type Pokemon and mascot of the franchise.",
  },
  {
    name: "Charizard",
    description: "A powerful Fire/Flying-type Pokemon and fan favorite.",
  },
  {
    name: "Bulbasaur",
    description: "A Grass/Poison-type Pokemon and one of the original starters.",
  },
  {
    name: "Squirtle",
    description: "A Water-type Pokemon and popular starter choice.",
  },
  {
    name: "Eevee",
    description: "A Normal-type Pokemon known for its multiple evolution possibilities.",
  },
  {
    name: "Mewtwo",
    description: "A legendary Psychic-type Pokemon with immense power.",
  },
]
