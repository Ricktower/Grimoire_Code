export const useRescheduleEventDate = (date: Date) => {
  const newDate = date.setDate(date.getDate() + 1) // 1 day

  return newDate
}
