const flatlistKeyExtractor = (_: any, index: {toString: () => any}) =>
  index.toString();

const getFormattedDateTime = (date: any) => {
  const year = date?.getFullYear();
  const month = String(date?.getMonth() + 1).padStart(2, '0');
  const day = String(date?.getDate()).padStart(2, '0');
  const hour = String(date?.getHours()).padStart(2, '0');
  const minute = String(date?.getMinutes()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day} / ${hour}:${minute}`;

  return formattedDate;
};

export {flatlistKeyExtractor, getFormattedDateTime};
