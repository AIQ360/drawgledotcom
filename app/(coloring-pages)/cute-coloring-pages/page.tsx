import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Cute Coloring Pages | Adorable Printable Designs for All Ages",
  description:
    "Download free cute coloring pages featuring adorable animals, kawaii characters, and sweet designs. Perfect for kids and anyone who loves charming, heartwarming art.",
  openGraph: {
    title: "Cute Coloring Pages | Adorable Printable Designs",
    description:
      "Download free cute coloring pages featuring adorable animals, kawaii characters, and sweet designs. Perfect for kids and anyone who loves charming art.",
    images: [
      {
        url: "/cute-coloring-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cute coloring pages preview",
      },
    ],
  },
}

export default function CuteColoringPages() {
  return (
    <>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-primary font-medium">Cute Coloring Pages</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="rounded-xl bg-gradient-to-r from-pink-300 to-purple-300 p-8 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cute Coloring Pages</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Adorable designs that bring joy and smiles to coloring enthusiasts of all ages
          </p>
        </div>

        {/* Featured Cute Coloring Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Featured Cute Coloring Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cute Animal */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                <Image
                  src="/placeholder.svg?key=ed1j5"
                  alt="Cute kitten coloring page"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Adorable Kitten</h3>
                <p className="text-gray-600 mb-4">A sweet kitten with big eyes and a playful pose.</p>
                <Link
                  href="/subscription"
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm"
                >
                  Download
                </Link>
              </div>
            </div>

            {/* Kawaii Food */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                <Image
                  src="/placeholder.svg?key=j5b2k"
                  alt="Kawaii ice cream coloring page"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Kawaii Ice Cream</h3>
                <p className="text-gray-600 mb-4">A smiling ice cream cone with adorable face and sprinkles.</p>
                <Link
                  href="/subscription"
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm"
                >
                  Download
                </Link>
              </div>
            </div>

            {/* Cute Fantasy */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                <Image
                  src="/placeholder.svg?key=pm1dr"
                  alt="Cute fairy coloring page"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Little Fairy</h3>
                <p className="text-gray-600 mb-4">A tiny fairy with butterfly wings and a magic wand.</p>
                <Link
                  href="/subscription"
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Adorable Designs for Everyone</h2>
          <div className="prose max-w-none">
            <p>
              Cute coloring pages offer a delightful way to express creativity while enjoying charming, heartwarming
              designs. Our collection features a wide variety of adorable subjects that appeal to coloring enthusiasts
              of all ages, from young children to adults who appreciate whimsical art.
            </p>
            <p>These pages are perfect for:</p>
            <ul>
              <li>Children developing fine motor skills</li>
              <li>Family bonding activities</li>
              <li>Stress relief and relaxation</li>
              <li>Decorating rooms, lockers, or notebooks</li>
              <li>Gifts for friends who love cute things</li>
            </ul>
          </div>
        </section>

        {/* Types of Cute Coloring Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Types of Cute Coloring Pages</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Kawaii Characters</h3>
              <p className="mb-4">
                Kawaii (meaning "cute" in Japanese) coloring pages feature adorable characters with simplified features,
                large heads, and big eyes. These pages often include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Smiling food items like cupcakes and fruit</li>
                <li>Everyday objects with faces</li>
                <li>Cute animals with exaggerated features</li>
                <li>Sweet expressions and rosy cheeks</li>
              </ul>
              <p>
                Kawaii coloring pages are perfect for adding bright, cheerful colors and creating a whimsical
                atmosphere.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Adorable Animals</h3>
              <p className="mb-4">
                Our cute animal coloring pages feature lovable creatures with endearing expressions and poses:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Playful kittens and puppies</li>
                <li>Baby woodland creatures</li>
                <li>Sleepy sloths and pandas</li>
                <li>Friendly farm animals</li>
                <li>Charming sea creatures</li>
              </ul>
              <p>
                These pages allow colorists to practice shading techniques while creating adorable animal portraits.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Fantasy & Magical</h3>
              <p className="mb-4">Cute fantasy coloring pages transport colorists to enchanted worlds filled with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Tiny fairies and friendly dragons</li>
                <li>Unicorns with flowing manes</li>
                <li>Mermaids with playful sea friends</li>
                <li>Magical castles and rainbow landscapes</li>
              </ul>
              <p>
                These pages encourage imagination and are perfect for experimenting with vibrant color combinations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Sweet Treats & Food</h3>
              <p className="mb-4">Food-themed cute coloring pages feature delicious treats with charming details:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Smiling donuts and cupcakes</li>
                <li>Ice cream sundaes with cherries on top</li>
                <li>Fruit characters with playful expressions</li>
                <li>Candy and chocolate designs</li>
              </ul>
              <p>These pages are perfect for practicing color blending and creating mouth-watering designs.</p>
            </div>
          </div>
        </section>

        {/* Coloring Tips */}
        <section className="mb-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Tips for Coloring Cute Designs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Choose Cheerful Colors</h3>
              <p className="mb-4">Cute coloring pages come alive with bright, happy colors. Consider using:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>Pastels for a soft, dreamy look</li>
                <li>Vibrant primaries for a playful feel</li>
                <li>Complementary colors for visual interest</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Add Special Details</h3>
              <p className="mb-4">Enhance the cuteness factor with special touches:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>Add rosy cheeks with pink pencils</li>
                <li>Create sparkles with white gel pens</li>
                <li>Use glitter markers for magical elements</li>
                <li>Add tiny hearts or stars in the background</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Create Dimension</h3>
              <p className="mb-4">Make your cute characters pop with simple shading:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>Add light shading under chins or paws</li>
                <li>Use slightly darker tones for subtle shadows</li>
                <li>Keep highlights bright for that "kawaii" look</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">4. Background Ideas</h3>
              <p className="mb-4">Complete your cute coloring page with these background ideas:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>Rainbow gradients</li>
                <li>Pastel color blocks</li>
                <li>Simple patterns like polka dots or stripes</li>
                <li>Soft clouds or bubbles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Create Your Own */}
        <section className="mb-16 bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Create Your Own Cute Coloring Pages</h2>
            <p className="max-w-3xl mx-auto">
              Want to design custom cute coloring pages with your own ideas? Our AI-powered coloring page generator can
              transform your descriptions into adorable coloring pages in seconds!
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/create"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium text-lg"
            >
              Try Our Coloring Page Creator
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">What makes a coloring page "cute"?</h3>
              <p>
                Cute coloring pages typically feature characters with large heads, big eyes, simplified features, and
                endearing expressions. They often include adorable animals, kawaii-style characters, or sweet designs
                that evoke feelings of warmth and joy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Are cute coloring pages only for children?</h3>
              <p>
                Not at all! While children certainly enjoy cute coloring pages, many adults find them relaxing and
                satisfying to color as well. The "kawaii" style has gained popularity among colorists of all ages who
                appreciate whimsical, heartwarming designs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">What coloring supplies work best for cute coloring pages?</h3>
              <p>
                Cute coloring pages look wonderful with a variety of supplies. Colored pencils offer precision for small
                details, while markers provide vibrant colors that make kawaii designs pop. Gel pens are perfect for
                adding sparkles, highlights, and special details that enhance the cuteness factor.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">How can I print cute coloring pages at home?</h3>
              <p>
                For best results, print cute coloring pages on white cardstock or heavyweight paper (at least 80 lb).
                This prevents markers from bleeding through and provides a sturdy surface for coloring. Set your printer
                to "high quality" for the clearest lines and details.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Explore More Coloring Pages</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/unicorn-coloring-pages" className="group">
              <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-purple-100">
                  <div className="flex items-center justify-center p-4">
                    <h3 className="text-xl font-semibold text-purple-800">Unicorn Coloring Pages</h3>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/pokemon-coloring-pages" className="group">
              <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-yellow-100">
                  <div className="flex items-center justify-center p-4">
                    <h3 className="text-xl font-semibold text-yellow-800">Pokemon Coloring Pages</h3>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/hello-kitty-coloring-pages" className="group">
              <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-pink-100">
                  <div className="flex items-center justify-center p-4">
                    <h3 className="text-xl font-semibold text-pink-800">Hello Kitty Coloring Pages</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Share Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Share These Cute Coloring Pages</h2>
          <p className="mb-6">If you enjoyed our cute coloring pages, share them with friends and family!</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Share on Facebook</button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md">
              Share on Pinterest
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md">Share on Twitter</button>
          </div>
        </section>
      </div>
    </>
  )
}
