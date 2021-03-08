

export const gigasecond = (date) => {
  let gs_to_ms = Math.pow(10, 12)
  let futureDate = date.getTime() + gs_to_ms

  return new Date(futureDate)
};
