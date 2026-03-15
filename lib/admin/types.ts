export interface Pig {
  id: number
  name: string
  description: string
  image_url: string
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon_svg: string
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface FarmInfo {
  id: number
  farm_name: string
  location: string
  email: string
  phone: string
  hours_weekday: string
  hours_saturday: string
  hours_sunday: string
  updated_at: string
}

export interface AboutContent {
  id: number
  story_heading: string
  story_text_1: string
  story_text_2: string
  story_text_3: string
  story_image_url: string
  mission_text: string
  vision_text: string
  updated_at: string
}
