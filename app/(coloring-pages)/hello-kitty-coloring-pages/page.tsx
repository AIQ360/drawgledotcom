import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Hello Kitty Coloring Pages | Free Printable Sheets | Drawgle",
  description:
    "Download free printable Hello Kitty coloring pages. Featuring Sanrio's beloved character in various cute scenes perfect for Hello Kitty fans of all ages.",
  openGraph: {
    title: "Hello Kitty Coloring Pages | Free Printable Sheets",
    description:
      "Download adorable Hello Kitty coloring pages featuring Sanrio's iconic character in various cute scenes and outfits.",
    images: [{ url: "/placeholder.svg?key=pfejj", width: 1200, height: 630 }],
  },
}

export default function HelloKittyColoringPages() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-2 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <ChevronRight className="h-3 w-3" />
            <Link href="/coloring-pages" className="hover:text-blue-600">
              Coloring Pages
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <ChevronRight className="h-3 w-3" />
            <span aria-current="page">Hello Kitty Coloring Pages</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-300 to-pink-500 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello Kitty Coloring Pages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Adorable printable coloring sheets featuring Sanrio's beloved character
          </p>
        </div>
      </section>

      {/* Featured Coloring Pages */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Hello Kitty Coloring Pages</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Coloring Page 1 */}
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?key=ahy7p"
                alt="Hello Kitty with bow coloring page"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Hello Kitty with Bow</h3>
                <p className="text-gray-600 mb-4">Classic Hello Kitty pose with her signature red bow.</p>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coloring Page 2 */}
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?key=mikor"
                alt="Hello Kitty with friends coloring page"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Hello Kitty & Friends</h3>
                <p className="text-gray-600 mb-4">Hello Kitty with her friends Dear Daniel and My Melody.</p>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coloring Page 3 */}
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?key=islid"
                alt="Hello Kitty birthday coloring page"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Birthday Hello Kitty</h3>
                <p className="text-gray-600 mb-4">Hello Kitty celebrating with a birthday cake and balloons.</p>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/subscription">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
                Get More Hello Kitty Coloring Pages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Hello Kitty */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Hello Kitty</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              Hello Kitty (Japanese: ハローキティ, Hepburn: Harō Kiti), also known by her full name Kitty White, is a
              fictional character created by Yuko Shimizu and currently designed by Yuko Yamaguchi. Produced by the
              Japanese company Sanrio, Hello Kitty first appeared on a vinyl coin purse in Japan in 1974 and was brought
              to the United States in 1976.
            </p>
            <p className="mb-4">
              The character is portrayed as a female white Japanese Bobtail cat with a red bow and no visible mouth.
              According to her backstory, she was born in the suburbs of London, England, and weighs the same as three
              apples. She is five apples tall.
            </p>
            <p>
              Hello Kitty has become one of the most successful marketing brands in the world, with the character
              appearing on various products globally and generating billions in revenue. Hello Kitty coloring pages are
              a popular way for fans to engage with the character through creative expression.
            </p>
          </div>
        </div>
      </section>

      {/* Coloring Tips */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Hello Kitty Coloring Tips</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Color Schemes</h3>
              <p className="mb-3">Hello Kitty is traditionally colored with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>White body and face</li>
                <li>Red or pink bow</li>
                <li>Yellow nose</li>
                <li>Black whiskers and eyes</li>
                <li>Blue overalls or pink dress (depending on the design)</li>
              </ul>
              <p className="mt-3">Feel free to get creative with background elements and accessories!</p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Coloring Techniques</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use light pink for shading on Hello Kitty's white areas</li>
                <li>Try different shades of red and pink for her bow</li>
                <li>Add patterns to her clothes for a unique look</li>
                <li>Use glitter or metallic markers for special occasions</li>
                <li>Try pastel colors for a soft, kawaii aesthetic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Hello Kitty Coloring Pages */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Types of Hello Kitty Coloring Pages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Classic Hello Kitty</h3>
              <p>
                Traditional poses featuring Hello Kitty with her iconic bow, perfect for beginners and young children.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hello Kitty and Friends</h3>
              <p>Pages featuring Hello Kitty with other Sanrio characters like My Melody, Keroppi, and Badtz-Maru.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Seasonal Hello Kitty</h3>
              <p>Hello Kitty dressed for holidays and seasons, including Christmas, Halloween, and summer themes.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hello Kitty Activities</h3>
              <p>Pages showing Hello Kitty engaged in various activities like baking, gardening, or playing sports.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hello Kitty Fashion</h3>
              <p>Hello Kitty wearing different outfits and accessories, perfect for fashion-loving colorists.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hello Kitty Scenes</h3>
              <p>Detailed scenes featuring Hello Kitty in her house, at school, or in other environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Is Hello Kitty a cat?</h3>
              <p>
                Yes, Hello Kitty is a cat character, specifically a Japanese Bobtail cat. There was some confusion when
                a Sanrio representative once stated she was a little girl, but this was later clarified to mean she has
                human-like characteristics in her fictional world.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Why doesn't Hello Kitty have a mouth?</h3>
              <p>
                Hello Kitty was designed without a mouth so that people could project their feelings onto her. According
                to Sanrio, this allows her to be happy or sad depending on how the viewer is feeling, making her more
                relatable.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What's the best way to print Hello Kitty coloring pages?</h3>
              <p>
                For best results, print Hello Kitty coloring pages on white cardstock or heavyweight paper. This
                prevents markers or watercolors from bleeding through and makes the finished artwork more durable.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Are Hello Kitty coloring pages suitable for all ages?</h3>
              <p>
                Yes! Hello Kitty coloring pages come in various complexity levels. Simpler designs are perfect for young
                children, while more detailed pages can be enjoyable for older kids and adults who appreciate the
                character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-pink-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Own Hello Kitty Coloring Pages</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Want to create custom Hello Kitty-inspired coloring pages? Try our AI-powered coloring page generator!
          </p>
          <Link href="/create">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              Create Custom Coloring Pages
            </Button>
          </Link>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hello Kitty Coloring Pages",
            description:
              "Download free printable Hello Kitty coloring pages featuring Sanrio's beloved character in various cute scenes perfect for Hello Kitty fans of all ages.",
            image: "/placeholder.svg?key=rda15",
            author: {
              "@type": "Organization",
              name: "Drawgle",
            },
            publisher: {
              "@type": "Organization",
              name: "Drawgle",
              logo: {
                "@type": "ImageObject",
                url: "https://drawgle.com/logo.png",
              },
            },
            datePublished: "2023-01-01T00:00:00Z",
          }),
        }}
      />
    </>
  )
}
