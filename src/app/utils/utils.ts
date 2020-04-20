export const findEntityInArrayById = <T extends { id: string }>(
  targetId: string,
  array: T[]
): T => array.find(({ id }) => id === targetId);

export const cloneArray = <T>(array: T[]): T[] =>
  JSON.parse(JSON.stringify(array));

export const createOneDimensionalArray = <T>(value: T, len: number): T[] => {
  const temp = Array.from(Array(len));
  return Array.from(temp, (i) => {
    return value;
  });
};
