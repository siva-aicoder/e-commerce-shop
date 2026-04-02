export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const getBasePrice = (product) => product.basePrice ?? product.oldPrice ?? product.price;

export const getSalePrice = (product) => product.salePrice ?? product.price;

export const hasDiscount = (product) => getBasePrice(product) > getSalePrice(product);

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
