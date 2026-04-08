export const getBasePrice = (product) => (
  product.basePrice ?? product.oldPrice ?? product.price ?? 0
);

export const getSalePrice = (product) => (
  product.salePrice ?? product.price ?? getBasePrice(product)
);

export const hasActiveSale = (product) => (
  getSalePrice(product) < getBasePrice(product)
);

export const getDiscountPercentage = (product) => {
  const basePrice = getBasePrice(product);

  if (!basePrice || !hasActiveSale(product)) {
    return 0;
  }

  return Math.round((1 - getSalePrice(product) / basePrice) * 100);
};

export const formatINR = (price) => price.toLocaleString('en-IN');
