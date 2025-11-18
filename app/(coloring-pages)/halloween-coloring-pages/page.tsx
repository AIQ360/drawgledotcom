import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Halloween Coloring Pages - Spooky & Fun Printables for All Ages",
  description:
    "Download free printable Halloween coloring pages featuring pumpkins, friendly ghosts, witches, and more spooky-fun designs for kids and adults.",
  openGraph: {
    title: "Halloween Coloring Pages - Spooky & Fun Printables",
    description:
      "Discover 100+ free printable Halloween coloring pages with pumpkins, ghosts, witches, and spooky-fun designs for all ages.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&query=Halloween%20coloring%20pages%20with%20pumpkins%20and%20friendly%20ghosts",
        width: 1200,
        height: 630,
        alt: "Halloween Coloring Pages Collection",
      },
    ],
  },
}

export default function HalloweenColoringPages() {
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
            <span aria-current="page">Halloween Coloring Pages</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-orange-500/80 z-10" />
          <Image
            src="/placeholder.svg?height=400&width=1200&query=Halloween%20scene%20with%20pumpkins%20and%20friendly%20ghosts"
            alt="Halloween Coloring Pages"
            width={1200}
            height={400}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Halloween Coloring Pages</h1>
            <p className="text-xl max-w-2xl">
              Spooky fun for everyone with our collection of printable Halloween coloring pages
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Halloween Fun with Coloring Pages</h2>
        <p className="mb-4">
          Halloween is the perfect time to get creative with spooky-themed coloring activities. Our collection of
          Halloween coloring pages ranges from cute and friendly designs for younger children to more detailed, spooky
          scenes for older kids and adults.
        </p>
        <p className="mb-4">
          These printable pages are perfect for Halloween parties, classroom activities, or quiet time at home during
          the spooky season. They're also a great alternative to screen time while still celebrating the Halloween
          spirit!
        </p>
        <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 my-6">
          <h3 className="text-xl font-semibold text-orange-700 mb-2">Halloween Activity Tip</h3>
          <p className="text-gray-700">
            Use completed Halloween coloring pages as decorations for your home or classroom! Hang them on walls,
            windows, or string them together to create festive Halloween bunting.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Halloween Coloring Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Friendly Ghosts Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400&query=Friendly%20ghost%20Halloween%20coloring%20page"
                alt="Friendly Ghosts Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Friendly Ghosts & Monsters</h3>
              <p className="text-muted-foreground mb-4">
                Cute, non-scary ghosts and friendly monsters for younger children
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">View Ghost Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Pumpkins Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400&query=Jack-o-lantern%20pumpkin%20Halloween%20coloring%20page"
                alt="Pumpkin Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Pumpkins & Jack-o-lanterns</h3>
              <p className="text-muted-foreground mb-4">Pumpkins with various carved faces and expressions</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">View Pumpkin Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Witches Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400&query=Witch%20with%20cauldron%20Halloween%20coloring%20page"
                alt="Witches Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Witches & Wizards</h3>
              <p className="text-muted-foreground mb-4">Magical characters with broomsticks, cauldrons, and spells</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">View Witch Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Halloween Costumes Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400&query=Kids%20in%20Halloween%20costumes%20coloring%20page"
                alt="Halloween Costumes Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Halloween Costumes</h3>
              <p className="text-muted-foreground mb-4">Children dressed up in various Halloween costumes</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Costume Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Haunted Houses Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400&query=Haunted%20house%20with%20bats%20Halloween%20coloring%20page"
                alt="Haunted Houses Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Haunted Houses</h3>
              <p className="text-muted-foreground mb-4">Spooky mansions, haunted houses, and eerie scenes</p>
              <Button className="w-full bg-gray-600 hover:bg-gray-700">View Haunted House Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Halloween Animals Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400&query=Black%20cat%20and%20bats%20Halloween%20coloring%20page"
                alt="Halloween Animals Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Halloween Animals</h3>
              <p className="text-muted-foreground mb-4">Black cats, bats, spiders, and other Halloween creatures</p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">View Halloween Animals Coloring Pages</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Coloring Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Halloween Coloring Pages</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={`/placeholder.svg?height=200&width=200&query=Halloween%20coloring%20page%20${i}`}
                  alt={`Halloween Coloring Page ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm">Halloween Coloring Page {i}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-muted-foreground">Free</span>
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            View All Halloween Coloring Pages
          </Button>
        </div>
      </section>

      {/* Halloween History Section */}
      <section className="mb-16 bg-purple-50 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Halloween History & Traditions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">The Origins of Halloween</h3>
              <p className="mb-4">
                Halloween traces its roots to the ancient Celtic festival of Samhain, when people would light bonfires
                and wear costumes to ward off ghosts. Over time, it evolved into a day of activities like
                trick-or-treating, carving pumpkins, and celebrating the supernatural.
              </p>
              <p>
                Learning about Halloween traditions through coloring activities helps children understand cultural
                history in an engaging way.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Educational Value</h3>
              <p className="mb-4">
                Halloween coloring pages offer educational opportunities beyond just fun. They help children learn about
                symbols and traditions, develop fine motor skills, and express creativity in a seasonal context.
              </p>
              <p>
                Teachers and parents can use these pages to discuss topics like harvest traditions, cultural
                celebrations, and even the science behind why leaves change color in fall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Halloween Party Activities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Halloween Party Activities</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600&query=Halloween%20party%20with%20coloring%20activities"
              alt="Halloween Party Activities"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Spooky Fun for Everyone</h3>
            <p className="mb-4">
              Make your Halloween party memorable with coloring activities that guests of all ages will enjoy. Set up a
              coloring station with our printable pages and a variety of art supplies.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Create a coloring contest with small prizes for different age groups</li>
              <li>Use completed coloring pages as Halloween party decorations</li>
              <li>Make Halloween masks by coloring, cutting out, and attaching string</li>
              <li>Create a collaborative Halloween mural with multiple coloring sheets</li>
              <li>Use coloring pages as placemats for Halloween treats</li>
            </ul>
            <Button className="bg-orange-600 hover:bg-orange-700">Get Party Activity Ideas</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Are these Halloween coloring pages scary?</h3>
            <p>
              Our Halloween coloring pages range from cute and friendly to mildly spooky. We clearly label our pages by
              age appropriateness, so you can choose designs that won't frighten younger children while still offering
              more detailed options for older kids and adults.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Can I use these coloring pages for a school Halloween party?</h3>
            <p>
              Our Halloween coloring pages are perfect for classroom parties and school events. Teachers can select
              age-appropriate designs that align with their school's Halloween celebration policies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">What coloring supplies work best for these pages?</h3>
            <p>
              For best results, colored pencils, crayons, or markers all work well. For a special effect, consider
              metallic markers or gel pens to add shimmer to certain elements like spider webs or witch cauldrons.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">How can I make these coloring activities more educational?</h3>
            <p>
              Pair coloring activities with age-appropriate discussions about Halloween history, harvest traditions, or
              the science of autumn. For younger children, use the coloring time to practice vocabulary related to
              Halloween symbols and colors.
            </p>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Explore Related Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/fall-coloring-pages" className="group">
            <div className="border rounded-lg p-4 text-center hover:bg-orange-50 transition-colors">
              <h3 className="font-medium group-hover:text-orange-700">Fall Coloring Pages</h3>
            </div>
          </Link>
          <Link href="/monster-coloring-pages" className="group">
            <div className="border rounded-lg p-4 text-center hover:bg-orange-50 transition-colors">
              <h3 className="font-medium group-hover:text-orange-700">Monster Coloring Pages</h3>
            </div>
          </Link>
          <Link href="/witch-coloring-pages" className="group">
            <div className="border rounded-lg p-4 text-center hover:bg-orange-50 transition-colors">
              <h3 className="font-medium group-hover:text-orange-700">Witch Coloring Pages</h3>
            </div>
          </Link>
          <Link href="/pumpkin-coloring-pages" className="group">
            <div className="border rounded-lg p-4 text-center hover:bg-orange-50 transition-colors">
              <h3 className="font-medium group-hover:text-orange-700">Pumpkin Coloring Pages</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-xl p-8 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready for Halloween Fun?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Download our free Halloween coloring pages and add some creative spooky fun to your celebration!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Download Free Pages
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
            Create Custom Halloween Pages
          </Button>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Halloween Coloring Pages",
            description:
              "Download free printable Halloween coloring pages featuring pumpkins, friendly ghosts, witches, and more spooky-fun designs for kids and adults.",
            keywords:
              "Halloween coloring pages, pumpkin coloring pages, ghost coloring pages, witch coloring pages, printable Halloween activities",
            url: "https://example.com/halloween-coloring-pages",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Friendly Ghost Coloring Pages",
                  url: "https://example.com/halloween-coloring-pages/ghosts",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Pumpkin Coloring Pages",
                  url: "https://example.com/halloween-coloring-pages/pumpkins",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Witch Coloring Pages",
                  url: "https://example.com/halloween-coloring-pages/witches",
                },
              ],
            },
          }),
        }}
      />
    </div>
  )
}
