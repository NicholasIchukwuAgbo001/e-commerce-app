export const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=104');
    const data = await response.json();
    return data.products; 
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};
