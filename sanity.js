import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Initialize the Sanity client
export const client = createClient({
  projectId: "qcfrpwh7",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-07-04", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// Initialize image builder for handling image URLs
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export const urlFor = (source) => builder.image(source);

// Export the Sanity client instance
export default client;