import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Christmas Coloring Pages - Festive Holiday Printables for Kids & Adults",
  description:
    "Download free printable Christmas coloring pages featuring Santa, reindeer, ornaments, nativity scenes, and more festive holiday designs for all ages.",
  openGraph: {
    title: "Christmas Coloring Pages - Festive Holiday Printables",
    description:
      "Discover 100+ free printable Christmas coloring pages with Santa, reindeer, ornaments, and festive holiday designs for kids and adults.",
    images: [
      {
        url: "/placeholder.svg?key=kpx51",
        width: 1200,
        height: 630,
        alt: "Christmas Coloring Pages Collection",
      },
    ],
  },
}

export default function ChristmasColoringPages() {
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
            <span aria-current="page">Christmas Coloring Pages</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/80 to-green-500/80 z-10" />
          <Image
            src="/placeholder.svg?key=x458k"
            alt="Christmas Coloring Pages"
            width={1200}
            height={400}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Christmas Coloring Pages</h1>
            <p className="text-xl max-w-2xl">
              Celebrate the holiday season with our festive collection of printable Christmas coloring pages for all
              ages
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Spread Holiday Cheer with Christmas Coloring</h2>
        <p className="mb-4">
          The holiday season is the perfect time to engage in creative activities that bring the family together. Our
          collection of Christmas coloring pages features everything from traditional holiday symbols to modern festive
          designs, providing hours of entertainment for children and adults alike.
        </p>
        <p className="mb-4">
          Whether you're looking for a quiet activity during the busy holiday season, creating homemade Christmas cards,
          or planning a classroom activity, these printable coloring pages are the perfect solution.
        </p>
        <div className="bg-red-50 border border-red-100 rounded-lg p-6 my-6">
          <h3 className="text-xl font-semibold text-red-700 mb-2">Holiday Activity Tip</h3>
          <p className="text-gray-700">
            Use completed Christmas coloring pages as personalized gift tags, holiday cards, or decorations for your
            tree. Add a sprinkle of glitter to make ornaments and stars sparkle!
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Christmas Coloring Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Santa Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?key=tj993" alt="Santa Claus Coloring Pages" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Santa Claus & North Pole</h3>
              <p className="text-muted-foreground mb-4">
                Jolly St. Nick, his workshop, elves, and magical sleigh with reindeer
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700">View Santa Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Nativity Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?key=8g5cr"
                alt="Nativity Scene Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Nativity Scenes</h3>
              <p className="text-muted-foreground mb-4">Traditional religious scenes celebrating the birth of Jesus</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Nativity Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Christmas Trees Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?key=ww830"
                alt="Christmas Tree Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Christmas Trees & Ornaments</h3>
              <p className="text-muted-foreground mb-4">Decorated trees, ornaments, lights, and festive decorations</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">View Tree Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Winter Scenes Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?key=d8vrj" alt="Winter Scene Coloring Pages" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Winter Scenes</h3>
              <p className="text-muted-foreground mb-4">Snowy landscapes, cozy cabins, and winter wonderlands</p>
              <Button className="w-full bg-sky-600 hover:bg-sky-700">View Winter Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Christmas Characters Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?key=o4fra"
                alt="Christmas Character Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Christmas Characters</h3>
              <p className="text-muted-foreground mb-4">Snowmen, reindeer, gingerbread men, and holiday friends</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">View Character Coloring Pages</Button>
            </CardContent>
          </Card>

          {/* Christmas Gifts Category */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?key=o46vk"
                alt="Christmas Gifts Coloring Pages"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Christmas Gifts</h3>
              <p className="text-muted-foreground mb-4">Presents, stockings, and gift-giving scenes</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">View Gift Coloring Pages</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Coloring Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Christmas Coloring Pages</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={`/placeholder.svg?key=anv3f&height=200&width=200&query=Christmas%20coloring%20page%20${i}`}
                  alt={`Christmas Coloring Page ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm">Christmas Coloring Page {i}</h3>
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
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            View All Christmas Coloring Pages
          </Button>
        </div>
      </section>

      {/* Christmas Traditions Section */}
      <section className="mb-16 bg-green-50 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Christmas Traditions & Coloring</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">The History of Christmas Coloring</h3>
              <p className="mb-4">
                The tradition of Christmas coloring activities dates back to the early 20th century when holiday-themed
                coloring books became popular as affordable gifts for children. Today, coloring has evolved into a
                beloved activity for all ages during the holiday season.
              </p>
              <p>
                Many families incorporate coloring into their Christmas Eve traditions, creating a quiet, mindful
                activity amid the excitement of the holidays.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Educational Value</h3>
              <p className="mb-4">
                Christmas coloring pages offer more than just entertainment. They help children learn about holiday
                traditions around the world, develop fine motor skills, and express creativity during a magical time of
                year.
              </p>
              <p>
                Teachers often use themed coloring activities to teach about different cultural celebrations, historical
                traditions, and the symbolism behind common Christmas imagery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIY Christmas Cards Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Create DIY Christmas Cards</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?key=tv5am"
              alt="DIY Christmas Card"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Personalized Holiday Greetings</h3>
            <p className="mb-4">
              Transform our Christmas coloring pages into unique, heartfelt greeting cards for friends and family.
              Simply color your favorite design, fold it in half, and add your personal message inside.
            </p>
            <ol className="list-decimal pl-5 mb-6 space-y-2">
              <li>Download and print your favorite Christmas coloring page</li>
              <li>Color the design using colored pencils, markers, or crayons</li>
              <li>Add special touches like glitter, sequins, or ribbon</li>
              <li>Fold the page to create a card format</li>
              <li>Write your personal holiday message inside</li>
            </ol>
            <Button className="bg-red-600 hover:bg-red-700">Get Card Templates</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">What age are these Christmas coloring pages appropriate for?</h3>
            <p>
              Our Christmas coloring pages collection includes designs for all ages. We have simpler designs with larger
              spaces for toddlers and preschoolers, intermediate pages for elementary-aged children, and intricate
              designs for older kids and adults.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Can I use these coloring pages in my classroom?</h3>
            <p>
              Our Christmas coloring pages are perfect for classroom use. Teachers can use them as holiday activities,
              for art projects, or as part of lessons about winter celebrations around the world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">What's the best paper to print coloring pages on?</h3>
            <p>
              For best results, we recommend printing on white cardstock (65-80 lb) for durability, especially if you
              plan to display the artwork or use it for crafts. Regular printer paper works fine for everyday coloring
              activities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              How can I incorporate these into our family Christmas traditions?
            </h3>
            <p>
              Many families use Christmas coloring pages as part of their advent calendar activities, for quiet time on
              Christmas Eve, or to create homemade decorations. You can also use them to create personalized place cards
              for holiday dinners or gift tags for presents.
            </p>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Explore Related Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/winter-coloring-pages" className="group">
            <div className="border rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
              <h3 className="font-medium group-hover:text-blue-700">Winter Coloring Pages</h3>
            </div>
          </Link>
          <Link href="/holiday-coloring-pages" className="group">
            <div className="border rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
              <h3 className="font-medium group-hover:text-blue-700">Holiday Coloring Pages</h3>
            </div>
          </Link>
          <Link href="/new-years-coloring-pages" className="group">
            <div className="border rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
              <h3 className="font-medium group-hover:text-blue-700">New Year's Coloring Pages</h3>
            </div>
          </Link>
          <Link href="/religious-coloring-pages" className="group">
            <div className="border rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
              <h3 className="font-medium group-hover:text-blue-700">Religious Coloring Pages</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white rounded-xl p-8 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Coloring?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Download our free Christmas coloring pages and bring holiday joy to your home, classroom, or community!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Download Free Pages
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
            Create Custom Christmas Pages
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
            name: "Christmas Coloring Pages",
            description:
              "Download free printable Christmas coloring pages featuring Santa, reindeer, ornaments, nativity scenes, and more festive holiday designs for all ages.",
            keywords:
              "Christmas coloring pages, Santa coloring pages, holiday coloring pages, printable Christmas activities, nativity coloring pages",
            url: "https://example.com/christmas-coloring-pages",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Santa Claus Coloring Pages",
                  url: "https://example.com/christmas-coloring-pages/santa",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Nativity Scene Coloring Pages",
                  url: "https://example.com/christmas-coloring-pages/nativity",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Christmas Tree Coloring Pages",
                  url: "https://example.com/christmas-coloring-pages/trees",
                },
              ],
            },
          }),
        }}
      />
    </div>
  )
}
