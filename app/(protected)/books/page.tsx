"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { toast } from "sonner"
import { getUserBooks, deleteBook, getBookById } from "@/lib/book-actions"
import { formatDate } from "@/lib/utils"
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog"
import { generatePDF } from "@/lib/pdf-generator"

export default function BooksPage() {
  const router = useRouter()
  const [books, setBooks] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [bookToDelete, setBookToDelete] = useState<string | null>(null)
  const [generatingPdfForBook, setGeneratingPdfForBook] = useState<string | null>(null)

  // Default options for PDF generation
  const defaultOptions = {
    addBlankPages: false,
    addPageNumbers: true,
    borderWidth: 0,
  }

  // State to hold the PDF generation options
  const [options, setOptions] = useState(defaultOptions)

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    setIsLoading(true)
    try {
      const result = await getUserBooks()

      if (result.success) {
        setBooks(result.books || [])
      } else {
        throw new Error(result.error || "Failed to fetch books")
      }
    } catch (error: any) {
      console.error("Error fetching books:", error)
      setError(error.message || "Failed to load your coloring books")
      toast.error("Error loading books", {
        description: "Failed to load your coloring books. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteBook = async (bookId: string) => {
    try {
      const result = await deleteBook(bookId)

      if (result.success) {
        setBooks((prev) => prev.filter((book) => book.id !== bookId))
        toast.success("Coloring book deleted successfully")
      } else {
        throw new Error(result.error || "Failed to delete book")
      }
    } catch (error: any) {
      console.error("Error deleting book:", error)
      toast.error("Error deleting book", {
        description: error.message || "Something went wrong. Please try again.",
      })
    } finally {
      setBookToDelete(null)
    }
  }

  // New function to handle direct download
  const handleDownload = async (bookId: string) => {
    setGeneratingPdfForBook(bookId)
    try {
      // Get the book details
      const result = await getBookById(bookId)

      if (!result.success || !result.book) {
        throw new Error(result.error || "Book not found")
      }

      const book = result.book
      console.log("Book data for PDF:", book)

      // Extract image URLs from the book images
      const imageUrls = book.images.map((img: any) => (img.source === "gemini" ? img.coloring_page_url : img.image_url))

      // Get the cover image URL directly from the book object
      const coverImageUrl = book.cover_image || null
      console.log("Cover image URL for PDF:", coverImageUrl)

      // Generate the PDF using the saved options
      const pdfBlob = await generatePDF(imageUrls, {
        title: book.title,
        subtitle: book.subtitle,
        coverImage: coverImageUrl,
        addBlankPages: options.addBlankPages || false,
        addPageNumbers: options.addPageNumbers || true,
        borderWidth: options.borderWidth || 0,
      })

      // Create a download link
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${book.title.replace(/\s+/g, "-").toLowerCase()}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast.success("Coloring book downloaded successfully!")
    } catch (error: any) {
      console.error("Error downloading book:", error)
      toast.error("Failed to download coloring book", {
        description: error.message || "Something went wrong. Please try again.",
      })
    } finally {
      setGeneratingPdfForBook(null)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive mb-4">{error}</p>
        <Button onClick={fetchBooks}>Try Again</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Coloring Books</h2>
        <p className="text-muted-foreground">View and manage your saved coloring books.</p>
      </div>

      {books.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <p className="mb-4 text-center text-muted-foreground">You haven't created any coloring books yet.</p>
            <Button onClick={() => router.push("/gallery")}>Create Your First Coloring Book</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <Card key={book.id} className="flex flex-col gap-0 py-0">
              <div className="aspect-[3/4] relative overflow-hidden">
                {book.cover && book.cover.image_url ? (
                  <img
                    src={book.cover.image_url || "/placeholder.svg"}
                    alt={`Cover for ${book.title}`}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Icons.book className="h-12 w-12 text-muted-foreground opacity-50" />
                  </div>
                )}
              </div>
              <div className="p-4 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg truncate">{book.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground"
                    onClick={() => setBookToDelete(book.id)}
                  >
                    <Icons.trash className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Created on {formatDate(book.created_at)}</p>
                <p className="text-sm">
                  {book.image_ids.length} {book.image_ids.length === 1 ? "page" : "pages"}
                </p>
              </div>
              <CardFooter className="border-t p-4">
                <Button
                  className="w-full"
                  onClick={() => handleDownload(book.id)}
                  disabled={generatingPdfForBook === book.id}
                >
                  {generatingPdfForBook === book.id ? (
                    <>
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Icons.download className="mr-2 h-4 w-4" />
                      Download
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <ConfirmationDialog
        isOpen={!!bookToDelete}
        onClose={() => setBookToDelete(null)}
        onConfirm={() => {
          if (bookToDelete) {
            handleDeleteBook(bookToDelete)
          }
        }}
        title="Delete Coloring Book"
        description="Are you sure you want to delete this coloring book? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        variant="destructive"
      />
    </div>
  )
}
