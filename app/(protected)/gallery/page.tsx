"use client"

import { useState, useEffect } from "react"
import { redirect, useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageCard } from "@/components/ui/image-card"
import { Icons } from "@/components/icons"
import { toast } from "sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookBuilderModal } from "@/components/book-builder/book-builder-modal"
import { useCreditManager } from "@/lib/credit-manager"
import type { Image, GeminiImage } from "@/types"

export default function GalleryPage() {
  const router = useRouter()
  const supabase = createClient()
  const [images, setImages] = useState<Image[]>([])
  const [geminiImages, setGeminiImages] = useState<GeminiImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [geminiPage, setGeminiPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [hasMoreGemini, setHasMoreGemini] = useState(true)
  const [deletingImageIds, setDeletingImageIds] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState<string>("text-to-image")
  const [userId, setUserId] = useState<string | null>(null)
  const { balance: currentBalance } = useCreditManager(userId)

  // Selection state for coloring book builder
  const [isSelectionMode, setIsSelectionMode] = useState(false)
  const [selectedImages, setSelectedImages] = useState<any[]>([])
  const [isBookBuilderOpen, setIsBookBuilderOpen] = useState(false)

  const ITEMS_PER_PAGE = 20

  const fetchUserImages = async (pageNum = 1, append = false) => {
    console.log("Fetching user images, page:", pageNum, "append:", append)
    setIsLoading(true)
    try {
      // Check if user is authenticated
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        console.log("No user found, redirecting to sign-in")
        redirect("/sign-in")
      }
      setUserId(user.id)

      // Fetch images with pagination
      const from = (pageNum - 1) * ITEMS_PER_PAGE
      const to = from + ITEMS_PER_PAGE - 1

      console.log(`Fetching images for user ${user.id}, range: ${from}-${to}`)
      const { data, error, count } = await supabase
        .from("images")
        .select("*", { count: "exact" })
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .range(from, to)

      if (error) {
        console.error("Supabase error fetching images:", error)
        throw error
      }

      console.log(`Fetched ${data?.length || 0} images, total count: ${count}`)

      if (append) {
        setImages((prev) => {
          const newImages = [...prev, ...(data || [])]
          console.log(`Updated images array, new length: ${newImages.length}`)
          return newImages
        })
      } else {
        console.log(`Setting images array, length: ${data?.length || 0}`)
        setImages(data || [])
      }

      setHasMore(count ? from + data.length < count : false)
    } catch (err: any) {
      console.error("Error fetching user images:", err)
      setError(err.message || "Failed to load your images")
      toast.error("Error loading images", {
        description: "Failed to load your gallery images. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const fetchUserGeminiImages = async (pageNum = 1, append = false) => {
    console.log("Fetching user gemini images, page:", pageNum, "append:", append)
    setIsLoading(true)
    try {
      // Check if user is authenticated
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        console.log("No user found, redirecting to sign-in")
        redirect("/sign-in")
      }
      setUserId(user.id)

      // Fetch gemini images with pagination
      const from = (pageNum - 1) * ITEMS_PER_PAGE
      const to = from + ITEMS_PER_PAGE - 1

      console.log(`Fetching gemini images for user ${user.id}, range: ${from}-${to}`)
      const { data, error, count } = await supabase
        .from("gemini_images")
        .select("*", { count: "exact" })
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .range(from, to)

      if (error) {
        console.error("Supabase error fetching gemini images:", error)
        throw error
      }

      console.log(`Fetched ${data?.length || 0} gemini images, total count: ${count}`)

      if (append) {
        setGeminiImages((prev) => {
          const newImages = [...prev, ...(data || [])]
          console.log(`Updated gemini images array, new length: ${newImages.length}`)
          return newImages
        })
      } else {
        console.log(`Setting gemini images array, length: ${data?.length || 0}`)
        setGeminiImages(data || [])
      }

      setHasMoreGemini(count ? from + data.length < count : false)
    } catch (err: any) {
      console.error("Error fetching user gemini images:", err)
      setError(err.message || "Failed to load your images")
      toast.error("Error loading images", {
        description: "Failed to load your gallery images. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const setAuthUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUserId(user ? user.id : null)
    }
    setAuthUser()
  }, [])

  useEffect(() => {
    if (activeTab === "text-to-image") {
      fetchUserImages(page, page > 1)
    } else {
      fetchUserGeminiImages(geminiPage, geminiPage > 1)
    }
  }, [page, geminiPage, activeTab])

  const handleLoadMore = () => {
    if (!isLoading) {
      if (activeTab === "text-to-image" && hasMore) {
        setPage((prevPage) => prevPage + 1)
      } else if (activeTab === "image-to-coloring" && hasMoreGemini) {
        setGeminiPage((prevPage) => prevPage + 1)
      }
    }
  }

  const handleVisibilityToggle = async (imageId: string, isPublic: boolean) => {
    if (activeTab === "text-to-image") {
      const updatedImages = images.map((img) => (img.id === imageId ? { ...img, is_public: isPublic } : img))
      setImages(updatedImages)
    } else {
      const updatedImages = geminiImages.map((img) => (img.id === imageId ? { ...img, is_public: isPublic } : img))
      setGeminiImages(updatedImages)
    }
  }

  const handleDeleteImage = async (imageId: string) => {
    try {
      // Add to deleting set to show loading state
      setDeletingImageIds((prev) => new Set(prev).add(imageId))

      // Show a loading toast
      const loadingToastId = toast.loading("Deleting image...", {
        description: "Please wait while we delete your image",
      })

      // Call API to delete the image
      const endpoint = activeTab === "text-to-image" ? `/api/images/${imageId}` : `/api/gemini-images/${imageId}`
      const response = await fetch(endpoint, {
        method: "DELETE",
      })

      // Dismiss the loading toast
      toast.dismiss(loadingToastId)

      if (!response.ok) {
        const errorData = await response.json()
        console.error("Delete API error response:", errorData)
        throw new Error(errorData.error || "Failed to delete image")
      }

      const result = await response.json()
      console.log("Delete API success response:", result)

      // Remove the image from the state
      if (activeTab === "text-to-image") {
        setImages((prev) => prev.filter((img) => img.id !== imageId))
        setSelectedImages((prev) => prev.filter((img) => img.id !== imageId))
      } else {
        setGeminiImages((prev) => prev.filter((img) => img.id !== imageId))
        setSelectedImages((prev) => prev.filter((img) => img.id !== imageId))
      }

      // Show success message
      toast.success(result.message || "Image deleted successfully")

      // If storage deletion failed but database deletion succeeded
      if (result.databaseDeleted && !result.storageDeleted) {
        toast.warning("Note: The image file may still exist in storage, but has been removed from your gallery.", {
          duration: 5000,
        })
      }

      // Refresh the gallery to ensure we have the latest data
      setTimeout(() => {
        if (activeTab === "text-to-image") {
          fetchUserImages(1, false)
        } else {
          fetchUserGeminiImages(1, false)
        }
      }, 1000)
    } catch (error: any) {
      console.error("Error deleting image:", error)
      toast.error("Error deleting image", {
        description: error.message || "Something went wrong. Please try again.",
      })
    } finally {
      // Remove from deleting set
      setDeletingImageIds((prev) => {
        const newSet = new Set(prev)
        newSet.delete(imageId)
        return newSet
      })
    }
  }

  const handleRetry = () => {
    setPage(1)
    setGeminiPage(1)
    setError(null)
    if (activeTab === "text-to-image") {
      fetchUserImages(1, false)
    } else {
      fetchUserGeminiImages(1, false)
    }
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    // Reset error state when switching tabs
    setError(null)
    // Clear selection when switching tabs
    if (isSelectionMode) {
      setSelectedImages([])
    }
  }

  const toggleImageSelection = (image: any) => {
    console.log("Toggle image selection:", image)
    setSelectedImages((prev) => {
      const isSelected = prev.some((img) => img.id === image.id)
      let newSelection
      if (isSelected) {
        console.log("Removing image from selection:", image.id)
        newSelection = prev.filter((img) => img.id !== image.id)
      } else {
        console.log("Adding image to selection:", image.id)
        newSelection = [...prev, image]
      }
      console.log("New selection:", newSelection)
      return newSelection
    })
  }

  const handleClearSelection = () => {
    console.log("Clearing selection")
    setSelectedImages([])
    setIsSelectionMode(false)
  }

  const handleCreateBook = () => {
    if (selectedImages.length === 0) {
      toast.error("Please select at least one image")
      return
    }
    console.log("Opening book builder with selected images:", selectedImages)
    setIsBookBuilderOpen(true)
  }

  const renderContent = () => {
    if (
      isLoading &&
      ((activeTab === "text-to-image" && images.length === 0) ||
        (activeTab === "image-to-coloring" && geminiImages.length === 0))
    ) {
      return (
        <div className="flex justify-center items-center min-h-[300px]">
          <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
        </div>
      )
    }

    if (
      error &&
      ((activeTab === "text-to-image" && images.length === 0) ||
        (activeTab === "image-to-coloring" && geminiImages.length === 0))
    ) {
      return (
        <div className="text-center py-12">
          <p className="text-destructive mb-4">{error}</p>
          <Button onClick={handleRetry}>Try Again</Button>
        </div>
      )
    }

    if (
      (activeTab === "text-to-image" && images.length === 0) ||
      (activeTab === "image-to-coloring" && geminiImages.length === 0)
    ) {
      return (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <p className="mb-4 text-center text-muted-foreground">
              {activeTab === "text-to-image"
                ? "You haven't created any text-to-image coloring pages yet."
                : "You haven't created any image-to-coloring pages yet."}
            </p>
            <Button className="bg-gradient-to-r from-pastel-pink to-pastel-purple" onClick={() => router.push("/create")}>Create Your First Coloring Page</Button>
          </CardContent>
        </Card>
      )
    }

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activeTab === "text-to-image"
            ? images.map((image) => (
                <div key={image.id} className="w-full">
                  <ImageCard
                    id={image.id}
                    prompt={image.prompt}
                    imageUrl={image.image_url}
                    aspectRatio={image.aspect_ratio}
                    createdAt={image.created_at}
                    isPublic={image.is_public}
                    showVisibilityToggle={!isSelectionMode}
                    showDeleteButton={!isSelectionMode}
                    isDeleting={deletingImageIds.has(image.id)}
                    onVisibilityToggle={(isPublic) => handleVisibilityToggle(image.id, isPublic)}
                    onDelete={handleDeleteImage}
                    tableType="images"
                    selectable={isSelectionMode}
                    isSelected={selectedImages.some((img) => img.id === image.id)}
                    onSelectToggle={() =>
                      toggleImageSelection({
                        id: image.id,
                        prompt: image.prompt,
                        image_url: image.image_url,
                        source: "regular",
                      })
                    }
                  />
                </div>
              ))
            : geminiImages.map((image) => (
                <div key={image.id} className="w-full">
                  <ImageCard
                    id={image.id}
                    prompt={image.prompt || "Image to Coloring Page"}
                    imageUrl={image.coloring_page_url}
                    aspectRatio={image.aspect_ratio || "square"}
                    createdAt={image.created_at}
                    isPublic={image.is_public}
                    showVisibilityToggle={!isSelectionMode}
                    showDeleteButton={!isSelectionMode}
                    isDeleting={deletingImageIds.has(image.id)}
                    onVisibilityToggle={(isPublic) => handleVisibilityToggle(image.id, isPublic)}
                    onDelete={handleDeleteImage}
                    originalImageUrl={image.original_image_url}
                    tableType="gemini_images"
                    selectable={isSelectionMode}
                    isSelected={selectedImages.some((img) => img.id === image.id)}
                    onSelectToggle={() =>
                      toggleImageSelection({
                        id: image.id,
                        prompt: image.prompt || "Image to Coloring Page",
                        coloring_page_url: image.coloring_page_url,
                        source: "gemini",
                      })
                    }
                  />
                </div>
              ))}
        </div>

        <div className="flex justify-center mt-8">
          {isLoading &&
          ((activeTab === "text-to-image" && images.length > 0) ||
            (activeTab === "image-to-coloring" && geminiImages.length > 0)) ? (
            <div className="flex items-center justify-center py-4">
              <Icons.spinner className="h-6 w-6 animate-spin text-primary mr-2" />
              <span>Loading more...</span>
            </div>
          ) : (activeTab === "text-to-image" && hasMore) || (activeTab === "image-to-coloring" && hasMoreGemini) ? (
            <Button onClick={handleLoadMore} variant="outline" disabled={isLoading}>
              Load More
            </Button>
          ) : (activeTab === "text-to-image" && images.length > 0) ||
            (activeTab === "image-to-coloring" && geminiImages.length > 0) ? (
            <p className="text-muted-foreground py-4">You've reached the end of your gallery</p>
          ) : null}
        </div>
      </>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Gallery</h2>
          <p className="text-muted-foreground">View all your generated coloring pages.</p>
        </div>

        {/* Selection mode toggle */}
        <div className="flex gap-2">
          {isSelectionMode && selectedImages.length > 0 && (
            <Button onClick={handleCreateBook} className="text-white bg-gradient-to-r from-pastel-pink to-pastel-purple">
              <Icons.book className="mr-2 h-4 w-4" />
              Create Book ({selectedImages.length})
            </Button>
          )}
          <Button
            onClick={() => {
              console.log("Toggling selection mode, current:", isSelectionMode)
              setIsSelectionMode(!isSelectionMode)
              if (isSelectionMode) {
                setSelectedImages([])
              }
            }}
            variant={isSelectionMode ? "destructive" : "outline"}
          >
            {isSelectionMode ? (
              <>
                <Icons.close className="mr-2 h-4 w-4" />
                Cancel
              </>
            ) : (
              <>
                <Icons.book className="mr-2 h-4 w-4" />
                Create Book
              </>
            )}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="text-to-image">Text to Coloring Page</TabsTrigger>
          <TabsTrigger value="image-to-coloring">Image to Coloring Page</TabsTrigger>
        </TabsList>

        <TabsContent value="text-to-image" className="mt-0">
          {renderContent()}
        </TabsContent>

        <TabsContent value="image-to-coloring" className="mt-0">
          {renderContent()}
        </TabsContent>
      </Tabs>

      {/* Book Builder Modal */}
      <BookBuilderModal
        isOpen={isBookBuilderOpen}
        onClose={() => setIsBookBuilderOpen(false)}
        selectedImages={selectedImages}
        onClearSelection={handleClearSelection}
        userCredits={currentBalance}
      />
    </div>
  )
}
