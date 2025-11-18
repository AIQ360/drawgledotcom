import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { WebsiteSchema } from "@/components/seo/schema"
import { ColoringBookGeneratorSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/coloring-book-schema"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Coloring Book Generator | Create Custom PDF Coloring Books for Kids",
  description:
    "Create and download custom coloring books for kids with our free coloring book generator. Make PDF coloring books for 3-7 year olds with Disney-inspired designs. Free jumbo coloring book PDF download.",
  keywords: [
    "coloring book generator",
    "coloring book for kids pdf",
    "jumbo colouring book pdf",
    "coloring book for kids free",
    "coloring book for kids online",
    "colouring book for 3 year old pdf",
    "coloring book for kids PDF free download",
    "Disney coloring book for kids",
    "colouring books for 7 year olds",
  ],
  openGraph: {
    title: "Create Custom Coloring Books for Kids | Free PDF Download",
    description:
      "Generate personalized coloring books for children of all ages. Perfect for parents, teachers, and kids who love coloring activities.",
    images: [
      {
        url: "/coloring-book-generator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Coloring Book Generator Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Custom Coloring Books for Kids | Free PDF Download",
    description: "Generate personalized coloring books for children of all ages with our free online tool.",
    images: ["/coloring-book-generator-og.jpg"],
  },
}

export default function ColoringBookGeneratorPage() {
  return (
    <div className="bg-white">
      <WebsiteSchema
        title="Coloring Book Generator | Create Custom Coloring Books for Kids"
        description="Create and download custom coloring books for kids with our free coloring book generator. Make PDF coloring books for 3-7 year olds with Disney-inspired designs."
        path="/coloring-book-generator"
        type="WebPage"
      />
      <ColoringBookGeneratorSchema />
      <FAQSchema />
      <BreadcrumbSchema path="/coloring-book-generator" />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Coloring Pages", href: "/coloring-pages" },
          { label: "Coloring Book Generator", href: "/coloring-book-generator", active: true },
        ]}
      />

      {/* What is a Coloring Book Generator - Added for Featured Snippet */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">What is a Coloring Book Generator?</h2>
          <p className="text-gray-700">
            A coloring book generator is an online tool that allows you to create custom coloring books for kids and
            adults. With our free coloring book generator, you can design personalized PDF coloring books featuring
            various themes, upload your own images, and download printable coloring pages instantly. Perfect for
            parents, teachers, and anyone looking to create unique coloring activities for children aged 3-7 years old
            or beyond.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Create Custom Coloring Books for Kids
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Generate beautiful, personalized <span className="font-medium">coloring books for kids</span> in
                seconds. Download as <span className="font-medium">PDF</span> or print directly - perfect for ages 3-7
                years old!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/create"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors"
                >
                  Create Your Coloring Book
                </Link>
                <Link
                  href="/gallery"
                  className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-6 rounded-lg text-center transition-colors"
                >
                  View Sample Books
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/placeholder.svg?key=fx9du"
                alt="Custom Disney-inspired coloring book for kids PDF generator"
                fill
                className="object-contain rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Coloring Book Generator Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              number="1"
              title="Choose Your Theme"
              description="Select from Disney-inspired designs, animals, fantasy, or upload your own images to create a truly personalized jumbo coloring book."
              color="purple"
            />
            <FeatureCard
              number="2"
              title="Customize Pages"
              description="Add as many pages as you want, arrange them in any order, and preview your coloring book before downloading."
              color="blue"
            />
            <FeatureCard
              number="3"
              title="Download & Print"
              description="Get your coloring book as a free PDF download, ready to print at home or share digitally with friends and family."
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* Age-Specific Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50" id="age-specific">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Perfect for Children of All Ages</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Our coloring book generator creates age-appropriate designs for children from toddlers to pre-teens.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AgeCard
              age="3 Year Olds"
              description="Simple, bold outlines with larger spaces perfect for toddlers just learning to color."
            />
            <AgeCard
              age="5 Year Olds"
              description="Balanced designs with moderate detail, ideal for kindergarten-aged children."
            />
            <AgeCard
              age="7 Year Olds"
              description="More detailed illustrations that challenge growing artistic skills and concentration."
            />
            <AgeCard
              age="All Ages"
              description="Mixed complexity levels in one book, perfect for siblings or classrooms with varied ages."
            />
          </div>
        </div>
      </section>

      {/* Example Coloring Books Section */}
      <section className="py-16 bg-white" id="examples">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Example Coloring Books</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Here are some sample coloring books created with our generator
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExampleBook title="Animal Adventure" age="For Ages 3-5" imageUrl="/sample-coloring-1.png" />
            <ExampleBook title="Fantasy World" age="For Ages 5-7" imageUrl="/sample-coloring-2.png" />
            <ExampleBook title="Detailed Designs" age="For Ages 7+" imageUrl="/sample-coloring-3.png" />
          </div>
        </div>
      </section>

      {/* Benefits of Coloring - Added for SEO */}
      <section className="py-16 bg-purple-50" id="benefits-of-coloring">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits of Coloring for Child Development</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Research shows that coloring activities provide numerous developmental benefits for children
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DevelopmentBenefitCard
              title="Fine Motor Skills"
              description="Coloring helps children develop the small muscles in their hands, improving handwriting and other fine motor skills essential for academic success."
              icon="Pencil"
            />
            <DevelopmentBenefitCard
              title="Focus & Concentration"
              description="Regular coloring activities help children practice focus and attention to detail, skills that transfer to classroom learning."
              icon="Eye"
            />
            <DevelopmentBenefitCard
              title="Creativity & Self-Expression"
              description="Custom coloring books encourage creative thinking and provide a safe outlet for emotional expression through color choices and artistic decisions."
              icon="Palette"
            />
            <DevelopmentBenefitCard
              title="Stress Reduction"
              description="Coloring has been shown to reduce anxiety and stress in children, providing a calming activity that promotes mindfulness."
              icon="Heart"
            />
            <DevelopmentBenefitCard
              title="Color Recognition"
              description="For younger children, coloring books help reinforce color recognition and understanding of color relationships."
              icon="Sparkles"
            />
            <DevelopmentBenefitCard
              title="Confidence Building"
              description="Completing coloring pages gives children a sense of accomplishment and builds confidence in their artistic abilities."
              icon="Trophy"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white" id="why-custom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Create a Custom Coloring Book?</h2>

              <div className="space-y-4">
                <BenefitItem
                  title="Educational Value"
                  description="Customize coloring books with educational themes to make learning fun. Perfect for teachers and homeschooling parents."
                />
                <BenefitItem
                  title="Personalized Experience"
                  description="Create books featuring children's names, favorite characters, or family photos transformed into coloring pages."
                />
                <BenefitItem
                  title="Cost-Effective"
                  description="Generate unlimited coloring books for free, saving money compared to store-bought options."
                />
                <BenefitItem
                  title="Instantly Available"
                  description="No waiting for shipping - download your PDF coloring book immediately and start coloring."
                />
              </div>
            </div>

            <div className="relative h-80 lg:h-96">
              <Image
                src="/placeholder.svg?key=rs61z"
                alt="Children enjoying custom Disney-style coloring books for kids"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Added for SEO */}
      <section className="py-16 bg-white border-t border-gray-100" id="comparison">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Custom PDF vs. Store-Bought Coloring Books</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            See how our free coloring book generator compares to traditional store-bought options
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-100">
                  <th className="p-4 text-left border border-purple-200">Feature</th>
                  <th className="p-4 text-left border border-purple-200">Custom PDF Coloring Books</th>
                  <th className="p-4 text-left border border-purple-200">Store-Bought Coloring Books</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-purple-200 font-medium">Personalization</td>
                  <td className="p-4 border border-purple-200">Fully customizable themes, characters, and content</td>
                  <td className="p-4 border border-purple-200">Limited to what's available in stores</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border border-purple-200 font-medium">Cost</td>
                  <td className="p-4 border border-purple-200">Free basic version, affordable premium options</td>
                  <td className="p-4 border border-purple-200">$5-15 per book</td>
                </tr>
                <tr>
                  <td className="p-4 border border-purple-200 font-medium">Availability</td>
                  <td className="p-4 border border-purple-200">Instant download, 24/7 access</td>
                  <td className="p-4 border border-purple-200">Requires store visit or shipping time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border border-purple-200 font-medium">Reusability</td>
                  <td className="p-4 border border-purple-200">Print as many copies as needed</td>
                  <td className="p-4 border border-purple-200">One-time use</td>
                </tr>
                <tr>
                  <td className="p-4 border border-purple-200 font-medium">Age Appropriateness</td>
                  <td className="p-4 border border-purple-200">Customizable for any age (3-7 years and beyond)</td>
                  <td className="p-4 border border-purple-200">Fixed age targeting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Popular Themes Section */}
      <section className="py-16 bg-purple-50" id="themes">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Coloring Book Themes</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Explore our most-loved themes or create something completely unique
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ThemeCard
              title="Disney-Inspired"
              imageQuery="disney style princess castle coloring page"
              link="/coloring-pages-for-kids"
            />
            <ThemeCard
              title="Animals & Nature"
              imageQuery="cute animal coloring page for children"
              link="/cute-coloring-pages"
            />
            <ThemeCard
              title="Superheroes"
              imageQuery="superhero coloring page for kids"
              link="/spiderman-coloring-pages"
            />
            <ThemeCard
              title="Fantasy & Magic"
              imageQuery="unicorn and fairy coloring page"
              link="/unicorn-coloring-pages"
            />
            <ThemeCard title="Seasonal" imageQuery="christmas themed coloring page" link="/christmas-coloring-pages" />
            <ThemeCard
              title="Educational"
              imageQuery="alphabet and numbers coloring page"
              link="/coloring-pages-for-kids"
            />
            <ThemeCard
              title="Cartoon Characters"
              imageQuery="popular cartoon character coloring page"
              link="/bluey-coloring-pages"
            />
            <ThemeCard
              title="Custom Photos"
              imageQuery="photograph converted to coloring page"
              link="/create"
            />
          </div>
        </div>
      </section>

      {/* How to Create Section - Added for SEO */}
      <section className="py-16 bg-white" id="how-to-create">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How to Create the Perfect Coloring Book</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Follow these expert tips to create engaging coloring books for children of all ages
          </p>

          <div className="max-w-3xl mx-auto space-y-8">
            <HowToStep
              number="1"
              title="Choose Age-Appropriate Designs"
              description="For 3-year-olds, select simple designs with large coloring areas. For 5-7 year olds, include more details but keep them manageable. For older children, you can add intricate patterns and more complex scenes."
            />
            <HowToStep
              number="2"
              title="Select a Cohesive Theme"
              description="Whether it's Disney characters, animals, or educational content, sticking to a theme creates a more engaging coloring experience. Consider creating themed jumbo coloring books with 20+ pages."
            />
            <HowToStep
              number="3"
              title="Add Personal Elements"
              description="Include the child's name, favorite characters, or convert family photos into coloring pages for a truly personalized experience they'll love."
            />
            <HowToStep
              number="4"
              title="Consider Paper Quality"
              description="When printing your PDF coloring book, use thicker paper (at least 80lb) to prevent markers or watercolors from bleeding through to other pages."
            />
            <HowToStep
              number="5"
              title="Create a Custom Cover"
              description="Add a personalized cover with the child's name and favorite characters to make the coloring book feel special and gift-worthy."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white border-t border-gray-100" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Parents & Teachers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I created a jumbo coloring book PDF for my 3-year-old with all her favorite animals. She was thrilled to see her name on the cover!"
              author="Sarah M., Parent"
            />
            <TestimonialCard
              quote="As a kindergarten teacher, I use this to make custom coloring books that match our weekly themes. The kids love them and it's completely free!"
              author="Michael T., Teacher"
            />
            <TestimonialCard
              quote="My 7-year-old son is obsessed with dinosaurs, so we made a whole coloring book just about them. The quality is amazing for a free online tool."
              author="Jessica K., Parent"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-purple-50" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="Is the coloring book generator really free?"
              answer="Yes! You can create and download basic coloring books completely free. We offer premium features for subscribers, but our core generator is free to use."
            />
            <FAQItem
              question="What format do I receive my coloring book in?"
              answer="Your coloring book will be delivered as a high-quality PDF file that you can download immediately. This makes it easy to print at home or at a local print shop."
            />
            <FAQItem
              question="Can I create coloring books for different age groups?"
              answer="Our generator allows you to select complexity levels appropriate for different ages, from simple designs for 3-year-olds to more intricate patterns for older children and adults."
            />
            <FAQItem
              question="How many pages can I add to my coloring book?"
              answer="With the free version, you can create coloring books with up to 10 pages. Premium subscribers can create unlimited jumbo coloring books with as many pages as they want."
            />
            <FAQItem
              question="Can I upload my own images to turn into coloring pages?"
              answer="Yes! You can upload your own photos or images, and our AI technology will convert them into line art suitable for coloring."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white" id="get-started">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Custom Coloring Book?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of parents and teachers who are creating personalized coloring experiences for kids of all
            ages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/create"
              className="bg-white text-purple-900 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-center transition-colors text-lg"
            >
              Create Free Coloring Book
            </Link>
            <Link
              href="/subscription"
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-8 rounded-lg text-center transition-colors text-lg border border-purple-600"
            >
              Upgrade for Premium Features
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-12 bg-white" id="related-resources">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Explore More Coloring Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RelatedLink
              title="Free Coloring Pages"
              description="Browse our collection of individual coloring pages you can download for free."
              href="/free-coloring-pages"
            />
            <RelatedLink
              title="Printable Coloring Pages"
              description="High-quality, printer-friendly coloring pages ready for immediate use."
              href="/printable-coloring-pages"
            />
            <RelatedLink
              title="Coloring Pages for Kids"
              description="Age-appropriate designs specifically created for children."
              href="/coloring-pages-for-kids"
            />
            <RelatedLink
              title="Disney-Style Coloring Pages"
              description="Magical coloring pages inspired by beloved Disney characters and stories."
              href="/coloring-pages-for-kids"
            />
            <RelatedLink
              title="Holiday Coloring Books"
              description="Create themed coloring books for Christmas, Halloween, and other special occasions."
              href="/christmas-coloring-pages"
            />
            <RelatedLink
              title="Educational Coloring Books"
              description="Learning-focused coloring books for preschool and elementary school children."
              href="/coloring-pages-for-kids"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

// Component for feature cards
function FeatureCard({
  number,
  title,
  description,
  color,
}: { number: string; title: string; description: string; color: string }) {
  const bgColor = color === "purple" ? "bg-purple-100" : color === "blue" ? "bg-blue-100" : "bg-pink-100"
  const textColor = color === "purple" ? "text-purple-600" : color === "blue" ? "text-blue-600" : "text-pink-600"

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div
        className={`${bgColor} ${textColor} w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4`}
      >
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

// Component for age-specific cards
function AgeCard({ age, description }: { age: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
      <h3 className="text-xl font-bold mb-3 text-purple-800">{age}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

// Component for benefit items
function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-purple-800">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

// Component for theme cards
function ThemeCard({ title, imageQuery, link }: { title: string; imageQuery: string; link: string }) {
  return (
    <Link href={link} className="block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-40">
          <Image
            src={`/abstract-geometric-shapes.png?height=200&width=300&query=${encodeURIComponent(imageQuery)}`}
            alt={`${title} coloring book theme`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-medium text-gray-900">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

// Component for testimonial cards
function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="bg-purple-50 p-6 rounded-xl">
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <p className="text-purple-800 font-medium">{author}</p>
    </div>
  )
}

// Component for FAQ items
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold mb-3 text-purple-900">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  )
}

// Component for related links
function RelatedLink({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition-colors">
      <h3 className="text-lg font-semibold mb-2 text-purple-900">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </Link>
  )
}

// Component for example coloring books
function ExampleBook({ title, age, imageUrl }: { title: string; age: string; imageUrl: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${title} coloring book example`}
          fill
          className="object-contain p-2"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{age}</p>
      </div>
    </div>
  )
}

// Component for development benefit cards
function DevelopmentBenefitCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-purple-600 text-2xl">
          {icon === "Pencil" && "✏️"}
          {icon === "Eye" && "👁️"}
          {icon === "Palette" && "🎨"}
          {icon === "Heart" && "❤️"}
          {icon === "Sparkles" && "✨"}
          {icon === "Trophy" && "🏆"}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-purple-800">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

// Component for how-to steps
function HowToStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
