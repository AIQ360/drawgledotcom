import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import PublicHeader from "@/components/layouts/public-header"
import PublicFooter from "@/components/layouts/public-footer"

export const metadata: Metadata = {
  title: "Coloring Pages | Drawgle",
  description:
    "Discover a wide variety of free printable coloring pages for kids and adults. From Disney characters to animals, find the perfect coloring page.",
}

export default function ColoringPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicHeader />

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Related categories section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Explore More Coloring Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <CategoryLink href="/coloring-pages-for-kids" title="Coloring Pages for Kids" />
            <CategoryLink href="/christmas-coloring-pages" title="Christmas Coloring Pages" />
            <CategoryLink href="/halloween-coloring-pages" title="Halloween Coloring Pages" />
            <CategoryLink href="/hello-kitty-coloring-pages" title="Hello Kitty Coloring Pages" />
            <CategoryLink href="/unicorn-coloring-pages" title="Unicorn Coloring Pages" />
            <CategoryLink href="/bluey-coloring-pages" title="Bluey Coloring Pages" />
            <CategoryLink href="/free-coloring-pages" title="Free Coloring Pages" />
            <CategoryLink href="/cute-coloring-pages" title="Cute Coloring Pages" />
            <CategoryLink href="/adult-coloring-pages" title="Adult Coloring Pages" />
            <CategoryLink href="/printable-coloring-pages" title="Printable Coloring Pages" />
            <CategoryLink href="/sonic-coloring-pages" title="Sonic Coloring Pages" />
            <CategoryLink href="/pokemon-coloring-pages" title="Pokemon Coloring Pages" />
            <CategoryLink href="/coloring-book-generator" title="Coloring Book Generator" />
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}

function CategoryLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
    >
      {title}
    </Link>
  )
}
