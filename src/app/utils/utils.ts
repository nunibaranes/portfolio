export const findEntityInArrayById = <T extends { id: string }>(
  targetId: string,
  array: T[]
): T => array.find(({ id }) => id === targetId);

export const cloneArray = <T>(array: T[]): T[] =>
  JSON.parse(JSON.stringify(array));
