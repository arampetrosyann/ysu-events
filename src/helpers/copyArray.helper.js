const copyArray = (array = []) => {
  const jsonArray = JSON.stringify(array);

  const newArray = JSON.parse(jsonArray);

  return newArray;
};

export default copyArray;
