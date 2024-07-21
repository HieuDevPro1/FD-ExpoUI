import sanityClient from "./sanity"; // Adjust import based on your project structure

// Function to fetch data from Sanity using a custom query and parameters
export const fetchFromSanity = (query, params) => {
  return sanityClient.fetch(query, params);
};

// Example functions to fetch specific data from Sanity
export const getFeaturedRestaurants = () => {
  return fetchFromSanity(`
    *[_type=='featured']{
      ...,restaurants[]->{
        ..., dishes[]->{
          ...
        },
        type ->{
          name
        }
      }
    }
  `);
};

export const getCategories = () => {
  return fetchFromSanity(`
    *[_type == 'category']
  `);
};

export const getFeaturedRestaurantById = (id) => {
  return fetchFromSanity(
    `
    *[_type == 'featured' && _id == $id]{
      ...,
      restaurants[]-> {
        ..., dishes[]->,
        type->{name}
      }
    }[0]
    `,
    { id }
  );
};