export function getFormValues(formEvent) {
  const formData = new FormData(formEvent.target);
  const formValues = Object.fromEntries(formData.entries());

  return formValues;
}
