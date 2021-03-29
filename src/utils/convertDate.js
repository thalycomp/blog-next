export const convertDate = (date) => {
  const newDate = new Date(date);
  const convertDate = newDate.toLocaleDateString('pt-Br', { timeZone: 'America/Sao_Paulo' })
  
  return convertDate;
}