export const formatOptions = (object) =>
  Object.values(object).map((type) => ({ label: type, value: type }));
