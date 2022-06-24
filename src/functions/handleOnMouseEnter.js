export const handleOnMouseEnter = (event, className) => {
  const { target } = event;
  target.classList.add(className);
};
