/**
 * Helper functions used throughout the project
 */

export const fetch_data = (url) => {
  return fetch(url)
    .then((data) => data.json())
    .catch((err) => {
      throw err;
    });
};
