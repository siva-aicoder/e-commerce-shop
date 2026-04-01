export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const CATEGORY_NAME_MAP = {
  Toys: 'Kids',
};

export const normalizeCategoryName = (categoryName) => {
  if (!categoryName) return '';
  return CATEGORY_NAME_MAP[categoryName] ?? categoryName;
};
