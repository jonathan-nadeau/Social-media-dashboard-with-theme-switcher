export const handleOnMouseLeave = (event, className) => {
  const { target } = event;
  target.classList.remove(className);
};
