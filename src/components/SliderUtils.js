
export const handleScrollLeft = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -1000, // Adjust the scroll value as needed
        behavior: 'smooth', // Enable smooth scroll transition
      });
    }
  };

export const handleScrollRight = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 1000, // Adjust the scroll value as needed
        behavior: 'smooth', // Enable smooth scroll transition
      });
    }
  };