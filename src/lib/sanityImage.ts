import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET,
  useCdn: true,
  apiVersion: import.meta.env.VITE_API_VERSION
})

const builder = imageUrlBuilder(client)

export function urlFor(source: string) {
  return builder.image(source).url()
}
