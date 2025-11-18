export type AspectRatio = "square" | "portrait" | "landscape" | "letter"


export interface User {
  id: string
  email: string
  credits: number
  subscription_tier: "free" | "starter" | "access"
  subscription_status: "active" | "inactive"
}

export interface Image {
  id: string
  user_id: string
  prompt: string
  image_url: string
  aspect_ratio: AspectRatio
  model: string
  created_at: string
  is_public: boolean
}

export interface GeminiImage {
  id: string
  user_id: string
  original_image_url: string
  coloring_page_url: string
  prompt: string
  aspect_ratio: AspectRatio
  created_at: string
  is_public: boolean
}

export interface CoverImage {
  id: string
  user_id: string
  book_id?: string
  image_url: string
  prompt: string
  created_at: string
  updated_at: string
}

export interface Subscription {
  id: string
  user_id: string
  plan_id: string
  status: string
  current_period_start: string
  current_period_end: string
}

export interface GenerateImageParams {
  prompt: string
  aspectRatio: AspectRatio
  numImages: number
  model: string
}