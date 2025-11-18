import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Bluey Coloring Pages | Free Printable Sheets | Drawgle",
  description:
    "Download free printable Bluey coloring pages featuring Bluey, Bingo, and the whole Heeler family. Perfect for fans of the popular children's show.",
  openGraph: {
    title: "Bluey Coloring Pages | Free Printable Sheets",
    description:
      "Download free Bluey coloring pages featuring the beloved blue heeler puppy and her family from the hit children's TV show.",
    images: [{ url: "/placeholder.svg?key=8pgnn", width: 1200, height: 630 }],
  },
}

export default function BlueyColoringPages() {
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
            <span aria-current="page">Bluey Coloring Pages</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bluey Coloring Pages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Printable coloring sheets featuring Bluey, Bingo, and the whole Heeler family
          </p>
        </div>
      </section>

      {/* Featured Coloring Pages */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Bluey Coloring Pages</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Coloring Page 1 */}
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400&query=bluey+cartoon+character"
                alt="Bluey coloring page"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Bluey</h3>
                <p className="text-gray-600 mb-4">The energetic and imaginative blue heeler puppy.</p>
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
                src="/placeholder.svg?height=400&width=400&query=bingo+bluey+cartoon"
                alt="Bingo coloring page"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Bingo</h3>
                <p className="text-gray-600 mb-4">Bluey's younger sister, the sweet and sensitive red heeler puppy.</p>
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
                src="/placeholder.svg?height=400&width=400&query=bluey+family+cartoon"
                alt="Bluey family coloring page"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Heeler Family</h3>
                <p className="text-gray-600 mb-4">The whole family: Bluey, Bingo, Bandit, and Chilli.</p>
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
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Get More Bluey Coloring Pages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Bluey */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Bluey</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              Bluey is an Australian animated television series for preschool children that premiered on ABC Kids on
              October 1, 2018. The show follows Bluey, a six-year-old Blue Heeler puppy who is characterized by her
              abundance of energy, imagination, and curiosity of the world.
            </p>
            <p className="mb-4">
              The series depicts Bluey and her younger sister Bingo engaging in imaginative play and adventures with
              their parents, Bandit and Chilli. Each episode features games that the family plays together, showcasing
              the girls' wild imaginations and their parents' loving involvement in their children's play.
            </p>
            <p>
              Bluey has received widespread critical acclaim for its realistic portrayal of family life, authentic
              dialogue, and positive parenting messages. The show has won numerous awards, including the International
              Emmy Kids Award, and has become a global phenomenon beloved by both children and parents.
            </p>
          </div>
        </div>
      </section>

      {/* Coloring Tips */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Bluey Coloring Tips</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Character Colors</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Bluey:</strong> Light blue body with darker blue patches
                </li>
                <li>
                  <strong>Bingo:</strong> Orange/red-brown body with darker patches
                </li>
                <li>
                  <strong>Bandit (Dad):</strong> Dark blue/gray with lighter patches
                </li>
                <li>
                  <strong>Chilli (Mom):</strong> Reddish-orange with lighter patches
                </li>
                <li>
                  <strong>All characters:</strong> White on the face, chest, and paws
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Coloring Techniques</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use light and dark shades of the same color for the patches</li>
                <li>Add subtle shading to give dimension to the characters</li>
                <li>Color backgrounds to match the show's bright, Australian setting</li>
                <li>Use colored pencils for better control of details</li>
                <li>Try markers for bold, vibrant colors like in the show</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Bluey Coloring Pages */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Types of Bluey Coloring Pages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Character Pages</h3>
              <p>
                Individual coloring pages featuring Bluey, Bingo, Bandit, Chilli, and other characters from the show.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Episode Scenes</h3>
              <p>
                Coloring pages based on popular episodes and games from the show, like Keepy Uppy, Grannies, and Dance
                Mode.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Bluey's Friends</h3>
              <p>Pages featuring Bluey with her friends like Coco, Snickers, Honey, Mackenzie, and Chloe.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Family Activities</h3>
              <p>The Heeler family engaged in various activities and adventures together.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Bluey's Home</h3>
              <p>Scenes from the Heeler family's Queenslander house and backyard.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Special Occasions</h3>
              <p>Bluey-themed coloring pages for holidays and special events like birthdays and Christmas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Value */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Educational Value of Bluey Coloring Pages</h2>

          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              Coloring Bluey pages offers more than just entertainment for children. It provides several developmental
              benefits:
            </p>

            <ul className="list-disc pl-5 space-y-3 mb-6">
              <li>
                <strong>Fine Motor Skills:</strong> Coloring helps children develop the small muscles in their hands,
                improving handwriting and other fine motor skills.
              </li>
              <li>
                <strong>Creativity and Self-Expression:</strong> Children can choose their own colors and styles,
                encouraging creative thinking and self-expression.
              </li>
              <li>
                <strong>Focus and Concentration:</strong> Completing a coloring page requires concentration, helping
                children develop longer attention spans.
              </li>
              <li>
                <strong>Recognition and Recall:</strong> Coloring familiar characters helps with recognition and memory
                skills.
              </li>
              <li>
                <strong>Emotional Connection:</strong> Coloring favorite characters creates an emotional connection to
                positive role models who demonstrate values like kindness, creativity, and family togetherness.
              </li>
            </ul>

            <p>
              Bluey coloring pages can also be used as a starting point for discussions about the themes in the show,
              such as imagination, family relationships, and emotional intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">What breed of dog is Bluey?</h3>
              <p>
                Bluey and her family are Blue Heelers, also known as Australian Cattle Dogs. This breed is known for its
                intelligence, energy, and herding abilities. In the show, their blue and red coloring accurately
                represents the two color varieties of Australian Cattle Dogs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Where is Bluey from?</h3>
              <p>
                Bluey is an Australian show set in Brisbane, Queensland. The show features many Australian cultural
                references, including the distinctive Queenslander-style house the family lives in.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">What age group are Bluey coloring pages suitable for?</h3>
              <p>
                Bluey coloring pages are generally suitable for children aged 2-7 years, which matches the target
                audience of the show. However, simpler designs are available for younger children, while more detailed
                pages can be enjoyed by older kids and even adults who are fans of the show.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">How can I print Bluey coloring pages for best results?</h3>
              <p>
                For best results, print Bluey coloring pages on white cardstock or heavyweight paper. This prevents
                markers from bleeding through and makes the finished artwork more durable. Make sure your printer
                settings are set to "high quality" for the clearest lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Own Bluey-Inspired Coloring Pages</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Want to create custom coloring pages inspired by Bluey? Try our AI-powered coloring page generator!
          </p>
          <Link href="/create">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
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
            headline: "Bluey Coloring Pages",
            description:
              "Download free printable Bluey coloring pages featuring Bluey, Bingo, and the whole Heeler family. Perfect for fans of the popular children's show.",
            image: "/placeholder.svg?key=njlj1",
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
