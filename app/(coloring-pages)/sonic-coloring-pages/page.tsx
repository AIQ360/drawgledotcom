import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sonic Coloring Pages | Free Printable Sonic the Hedgehog Coloring Sheets",
  description:
    "Download free printable Sonic the Hedgehog coloring pages. Features Sonic, Tails, Knuckles, Shadow and more characters from the popular video game series.",
  openGraph: {
    title: "Sonic Coloring Pages | Free Printable Sonic the Hedgehog Coloring Sheets",
    description:
      "Download free printable Sonic the Hedgehog coloring pages. Features Sonic, Tails, Knuckles, Shadow and more characters from the popular video game series.",
    images: [
      {
        url: "/placeholder.svg?key=47naj",
        width: 1200,
        height: 630,
        alt: "Sonic Coloring Pages",
      },
    ],
  },
}

export default function SonicColoringPages() {
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
              Sonic Coloring Pages
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="rounded-lg overflow-hidden mb-12 relative">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-8 md:p-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Sonic Coloring Pages</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Speed into creativity with our collection of printable Sonic the Hedgehog coloring pages
          </p>
        </div>
      </div>

      {/* Featured Coloring Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured Sonic Coloring Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sonic */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?key=y4dce"
                alt="Sonic the Hedgehog Running Coloring Page"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sonic Running</h3>
              <p className="text-gray-600 mb-4">Classic Sonic the Hedgehog in his iconic running pose</p>
              <Button asChild className="w-full">
                <Link href="/subscription">Download</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Tails */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/placeholder.svg?key=yl3p4" alt="Tails Fox Coloring Page" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Tails</h3>
              <p className="text-gray-600 mb-4">Sonic's loyal friend Miles "Tails" Prower</p>
              <Button asChild className="w-full">
                <Link href="/subscription">Download</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Knuckles */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?key=a1r5y"
                alt="Knuckles the Echidna Coloring Page"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Knuckles</h3>
              <p className="text-gray-600 mb-4">The powerful Knuckles the Echidna</p>
              <Button asChild className="w-full">
                <Link href="/subscription">Download</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Sonic */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">About Sonic the Hedgehog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Sonic the Hedgehog is one of the most iconic video game characters of all time. Created by Sega in 1991,
              Sonic is known for his super speed, blue spikes, and attitude. He races through levels to stop the evil
              Dr. Robotnik (also known as Dr. Eggman) from taking over the world.
            </p>
            <p className="text-lg mb-4">
              Over the years, Sonic has appeared in numerous video games, TV shows, comics, and even feature films. His
              friends include Tails, Knuckles, Amy Rose, and many others who join him on his adventures.
            </p>
            <p className="text-lg">
              Coloring Sonic and his friends is a great way for fans of all ages to engage with these beloved characters
              while developing creativity and fine motor skills.
            </p>
          </div>
          <div className="relative aspect-video md:aspect-square">
            <Image src="/placeholder.svg?key=339c1" alt="Sonic and Friends" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Coloring Tips */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Sonic Coloring Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Character Colors</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Sonic:</span> Blue body, peach/tan muzzle and arms, white gloves, red
                shoes with white stripes
              </li>
              <li>
                <span className="font-medium">Tails:</span> Orange/yellow fur, white muzzle and chest, white-tipped
                tails
              </li>
              <li>
                <span className="font-medium">Knuckles:</span> Red body, white crescent on chest, green eyes
              </li>
              <li>
                <span className="font-medium">Amy Rose:</span> Pink fur, red dress, red headband, red boots
              </li>
              <li>
                <span className="font-medium">Shadow:</span> Black fur with red stripes, white chest fur, red eyes
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Coloring Techniques</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use bright, vibrant colors to match the energetic nature of Sonic characters</li>
              <li>Try adding motion lines around Sonic to emphasize his speed</li>
              <li>For metallic characters like Metal Sonic, use silver and blue with highlights</li>
              <li>Add shading to give your characters more dimension</li>
              <li>
                Consider the background - Sonic games feature various environments from Green Hill Zone to Chemical
                Plant
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Character Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sonic Character Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Shadow%20the%20Hedgehog%20coloring%20page"
              alt="Shadow the Hedgehog Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Shadow</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Amy%20Rose%20Sonic%20coloring%20page"
              alt="Amy Rose Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Amy Rose</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Dr%20Eggman%20Robotnik%20coloring%20page"
              alt="Dr. Eggman Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Dr. Eggman</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Metal%20Sonic%20robot%20coloring%20page"
              alt="Metal Sonic Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Metal Sonic</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Cream%20the%20Rabbit%20and%20Cheese%20coloring%20page"
              alt="Cream the Rabbit Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Cream & Cheese</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Rouge%20the%20Bat%20Sonic%20coloring%20page"
              alt="Rouge the Bat Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Rouge the Bat</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Blaze%20the%20Cat%20Sonic%20coloring%20page"
              alt="Blaze the Cat Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Blaze the Cat</p>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&query=Silver%20the%20Hedgehog%20coloring%20page"
              alt="Silver the Hedgehog Coloring Page"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
              <p className="text-center font-medium">Silver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Create Your Own Sonic Coloring Pages</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Want to create custom Sonic-inspired coloring pages? Use our AI-powered coloring page generator to bring your
          ideas to life!
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
            <h3 className="text-xl font-semibold mb-2">How do I print Sonic coloring pages?</h3>
            <p>
              To print our Sonic coloring pages, first download the PDF by clicking the "Download" button. Open the file
              and select "Print" from your PDF viewer. For best results, use letter-sized paper and select "Fit to page"
              in your printer settings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Are these Sonic coloring pages free?</h3>
            <p>
              We offer both free and premium Sonic coloring pages. The premium pages are available with our subscription
              plans, which also give you access to our AI coloring page generator and other exclusive content.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">What age group are these Sonic coloring pages suitable for?</h3>
            <p>
              Our Sonic coloring pages are designed for various age groups. We have simpler designs for younger children
              (ages 3-6) and more detailed pages for older kids and adults. The character's popularity spans
              generations, making these coloring pages enjoyable for fans of all ages.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Can I share my colored Sonic pages online?</h3>
            <p>
              We encourage you to share your colored creations on social media. Tag us in your posts so we can see and
              possibly feature your artwork. Remember that while you can share your colored versions, the original line
              art is for personal use only.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Do you have coloring pages from the Sonic movies?</h3>
            <p>
              Yes, we have coloring pages featuring Sonic's design from both the 2020 and 2022 movies, including
              characters like movie Sonic, Tails, Knuckles, and Dr. Robotnik as portrayed by Jim Carrey.
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Explore More Coloring Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=Pokemon%20coloring%20pages%20collection"
                alt="Pokemon Coloring Pages"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-xl font-bold text-white p-4">Pokemon Coloring Pages</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-4">
                Explore coloring pages featuring Pikachu and other Pokemon characters
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/pokemon-coloring-pages">View Pages</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=Mario%20coloring%20pages%20collection"
                alt="Mario Coloring Pages"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-xl font-bold text-white p-4">Mario Coloring Pages</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-4">
                Color Mario, Luigi, Princess Peach and other characters from the Mushroom Kingdom
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/coloring-pages-for-kids">View Pages</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=Spiderman%20coloring%20pages%20collection"
                alt="Spiderman Coloring Pages"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-xl font-bold text-white p-4">Spiderman Coloring Pages</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-4">
                Swing into action with Spider-Man coloring pages featuring the web-slinging superhero
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/spiderman-coloring-pages">View Pages</Link>
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
            name: "Sonic Coloring Pages | Free Printable Sonic the Hedgehog Coloring Sheets",
            description:
              "Download free printable Sonic the Hedgehog coloring pages. Features Sonic, Tails, Knuckles, Shadow and more characters from the popular video game series.",
            keywords:
              "Sonic coloring pages, Sonic the Hedgehog coloring sheets, printable Sonic coloring pages, Tails coloring pages, Knuckles coloring pages, free Sonic coloring pages",
            image: "/placeholder.svg?key=8lnmx",
            url: "https://drawgle.in/sonic-coloring-pages",
            mainEntity: {
              "@type": "CreativeWork",
              name: "Sonic Coloring Pages Collection",
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
