export const LEGACY_CATEGORY_NAME = 'Clothing';
export const FASHION_CATEGORY_NAME = 'Fashion';

export const normalizeCategoryName = (categoryName) => {
  if (categoryName === LEGACY_CATEGORY_NAME) {
    return FASHION_CATEGORY_NAME;
  }

  return categoryName;
};
