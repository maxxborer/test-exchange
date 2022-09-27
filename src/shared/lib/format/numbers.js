export const formatPercent = (percent) => {
  if (!percent) {
    return '';
  }
  if (percent > 0) {
    return `+${percent.toFixed(2)}%`;
  }
  return `-${percent.toFixed(2)}%`;
};

export const formatPrice = (price) => {
  if (!price) {
    return '';
  }
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatCurrency = (value) => {
  if (!value) {
    return '';
  }
  return formatPrice(value.toFixed(2));
};
