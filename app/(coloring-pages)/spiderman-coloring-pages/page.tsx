import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Spiderman Coloring Pages | Free Printable Spider-Man Coloring Sheets",
  description:
    "Download free printable Spider-Man coloring pages featuring Peter Parker, Miles Morales, Spider-Gwen and villains from the Marvel universe.",
  openGraph: {
    title: "Spiderman Coloring Pages | Free Printable Spider-Man Coloring Sheets",
    description:
      "Download free printable Spider-Man coloring pages featuring Peter Parker, Miles Morales, Spider-Gwen and villains from the Marvel universe.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&query=Spiderman%20coloring%20pages%20collection",
        width: 1200,
        height: 630,
        alt: "Spiderman Coloring Pages",
      },
    ],
  },
}

export default function SpidermanColoringPages() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <Link href="/coloring-pages" className="hover:text-primary">
              Coloring Pages
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium" aria-current="page">
              Spiderman Coloring Pages
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="rounded-lg overflow-hidden mb-12 relative">
        <div className="bg-gradient-to-r from-red-600 to-blue-600 p-8 md:p-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Spiderman Coloring Pages</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Swing into creativity with our amazing collection of Spider-Man coloring pages
          </p>
        </div>
      </div>

      {/* Featured Coloring Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured Spider-Man Coloring Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Classic Spider-Man */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=400&width=400&query=Classic%20Spiderman%20swinging%20coloring%20page"
                alt="Classic Spider-Man Swinging Coloring Page"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Classic Spider-Man</h3>
              <p className="text-gray-600 mb-4">
                Peter Parker in his iconic red and blue suit swinging through the city
              </p>
              <Button asChild className="w-full">
                <Link href="/subscription">Download</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Miles Morales */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=400&width=400&query=Miles%20Morales%20Spider-Man%20coloring%20page"
                alt="Miles Morales Spider-Man Coloring Page"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Miles Morales</h3>
              <p className="text-gray-600 mb-4">The Brooklyn-based Spider-Man in his black and red suit</p>
              <Button asChild className="w-full">
                <Link href="/subscription">Download</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Spider-Gwen */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=400&width=400&query=Spider-Gwen%20Ghost%20Spider%20coloring%20page"
                alt="Spider-Gwen Coloring Page"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Spider-Gwen</h3>
              <p className="text-gray-600 mb-4">Gwen Stacy as the stylish Ghost-Spider</p>
              <Button asChild className="w-full">
                <Link href="/subscription">Download</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Spider-Man */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">About Spider-Man</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Spider-Man is one of Marvel's most beloved superheroes, first appearing in Amazing Fantasy #15 in 1962.
              Created by Stan Lee and Steve Ditko, Spider-Man is the alter ego of Peter Parker, a high school student
              who gained spider-like abilities after being bitten by a radioactive spider.
            </p>
            <p className="text-lg mb-4">
              With the famous motto "With great power comes great responsibility," Spider-Man uses his powers to protect
              New York City from various villains. Over the years, other characters have taken up the Spider-Man mantle,
              including Miles Morales and Gwen Stacy (as Spider-Gwen).
            </p>
            <p className="text-lg">
              Spider-Man has appeared in numerous comics, TV shows, video games, and blockbuster movies, making him one
              of the most recognizable superheroes worldwide. His colorful costume and exciting adventures make him a
              perfect subject for coloring pages.
            </p>
          </div>
          <div className="relative aspect-video md:aspect-square">
            <Image
              src="/placeholder.svg?height=500&width=500&query=Spider-Man%20characters%20group"
              alt="Spider-Man Characters"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Coloring Tips */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Spider-Man Coloring Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Character Colors</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Classic Spider-Man (Peter Parker):</span> Red and blue suit with black web
                pattern, white eyes on mask
              </li>
              <li>
                <span className="font-medium">Miles Morales:</span> Black suit with red spider symbol and red web
                pattern, white eyes on mask
              </li>
              <li>
                <span className="font-medium">Spider-Gwen:</span> White and black suit with pink/teal accents, white
                eyes with pink outline
              </li>
              <li>
                <span className="font-medium">Venom:</span> Black suit with white spider symbol, white eyes and teeth
              </li>
              <li>
                <span className="font-medium">Green Goblin:</span> Green skin/mask, purple hat and clothing
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Coloring Techniques</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use bright, vibrant reds and blues for classic Spider-Man</li>
              <li>For web patterns, use thin black lines or gray shading</li>
              <li>Add shading to show the muscular definition in the costume</li>
              <li>For action scenes, add motion lines or impact effects</li>
              <li>Consider adding city backgrounds with buildings and skyscrapers</li>
              <li>For villains, use contrasting colors to Spider-Man (greens, purples, etc.)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Spider-Verse Characters */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Spider-Verse Characters</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Venom%20symbiote%20coloring%20page"
              alt="Venom Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Venom</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Green%20Goblin%20Spider-Man%20villain%20coloring%20page"
              alt="Green Goblin Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Green Goblin</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Doctor%20Octopus%20Spider-Man%20villain%20coloring%20page"
              alt="Doctor Octopus Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Doctor Octopus</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Carnage%20symbiote%20Spider-Man%20villain%20coloring%20page"
              alt="Carnage Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Carnage</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Spider-Man%202099%20Miguel%20O'Hara%20coloring%20page"
              alt="Spider-Man 2099 Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Spider-Man 2099</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Rhino%20Spider-Man%20villain%20coloring%20page"
              alt="Rhino Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Rhino</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Mysterio%20Spider-Man%20villain%20coloring%20page"
              alt="Mysterio Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Mysterio</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Black%20Cat%20Spider-Man%20character%20coloring%20page"
              alt="Black Cat Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Black Cat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-16 bg-red-50 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Create Your Own Spider-Man Coloring Pages</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Want to create custom Spider-Man inspired coloring pages? Use our AI-powered coloring page generator to bring
          your superhero ideas to life!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/create">Create Custom Pages</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/subscription">Get Unlimited Access</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Are these Spider-Man coloring pages free?</h3>
            <p>
              We offer both free and premium Spider-Man coloring pages. The premium pages are available with our
              subscription plans, which also give you access to our AI coloring page generator and other exclusive
              content.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">How do I print Spider-Man coloring pages?</h3>
            <p>
              To print our Spider-Man coloring pages, first download the PDF by clicking the "Download" button. Open the
              file and select "Print" from your PDF viewer. For best results, use letter-sized paper and select "Fit to
              page" in your printer settings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Which Spider-Man characters do you have coloring pages for?</h3>
            <p>
              Our collection includes coloring pages for many Spider-Man characters including Peter Parker's Spider-Man,
              Miles Morales, Spider-Gwen, Venom, Green Goblin, Doctor Octopus, Carnage, and many more from both the
              comics and movies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Do you have coloring pages from the Spider-Man movies?</h3>
            <p>
              Yes, we have coloring pages featuring Spider-Man designs from various movies, including the MCU Spider-Man
              films with Tom Holland, the Spider-Verse animated movies, and the classic Spider-Man films.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Can I create my own Spider-Man coloring pages?</h3>
            <p>
              With our AI-powered coloring page generator, you can create custom Spider-Man inspired coloring pages.
              Simply describe what you want, and our AI will generate a unique coloring page for you to download and
              print.
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Explore More Superhero Coloring Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=Batman%20coloring%20pages%20collection"
                alt="Batman Coloring Pages"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-xl font-bold text-white p-4">Batman Coloring Pages</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-4">Color the Dark Knight and his rogues gallery of villains</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/coloring-pages-for-kids">View Pages</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=Avengers%20coloring%20pages%20collection"
                alt="Avengers Coloring Pages"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-xl font-bold text-white p-4">Avengers Coloring Pages</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-4">
                Color Iron Man, Captain America, Thor, Hulk and the whole Avengers team
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/coloring-pages-for-kids">View Pages</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=Sonic%20coloring%20pages%20collection"
                alt="Sonic Coloring Pages"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-xl font-bold text-white p-4">Sonic Coloring Pages</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-4">Speed into creativity with Sonic the Hedgehog coloring pages</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/sonic-coloring-pages">View Pages</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Spiderman Coloring Pages | Free Printable Spider-Man Coloring Sheets",
            description:
              "Download free printable Spider-Man coloring pages featuring Peter Parker, Miles Morales, Spider-Gwen and villains from the Marvel universe.",
            keywords:
              "Spiderman coloring pages, Spider-Man coloring sheets, printable Spider-Man coloring pages, Miles Morales coloring pages, Spider-Gwen coloring pages, free Spider-Man coloring pages",
            image: "/placeholder.svg?height=630&width=1200&query=Spiderman%20coloring%20pages%20collection",
            url: "https://drawgle.in/spiderman-coloring-pages",
            mainEntity: {
              "@type": "CreativeWork",
              name: "Spider-Man Coloring Pages Collection",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            },
          }),
        }}
      />
    </div>
  )
}
