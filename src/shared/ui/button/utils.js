export const getButtonStyle = (view) => {
  const defaultStyle = 'font-semibold block items-center text-center text-xs text-left h-6 mx-2 px-4 border-blue-500 border rounded';
  const primaryStyle = `${defaultStyle} text-white bg-blue-500`;
  const secondaryStyle = `${defaultStyle} text-blue-500`;
  const blankStyle = 'text-left';

  switch (view) {
    case 'primary':
      return primaryStyle;
    case 'transparent':
      return secondaryStyle;
    case 'blank':
      return blankStyle;
    default:
      return primaryStyle;
  }
};
