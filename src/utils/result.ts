import { ResultItemType, ResultListType } from '../types/resultTypes';

export const sortAscendingResult = (array: ResultListType, key: number) => {
  if (array) {
    if (key === 1) {
      const result = [...array].sort((a, b) => b[1] - a[1]);
      return result;
    }
    const result = [...array].sort((a, b) => b[2] - a[2]);
    return result;
  }

  return array;
};

export const sortDescendingResult = (array: ResultListType, key: number) => {
  if (array) {
    if (key === 1) {
      const result = [...array].sort((a, b) => a[1] - b[1]);
      return result;
    }
    const result = [...array].sort((a, b) => a[2] - b[2]);
    return result;
  }

  return array;
};

export const setSubListToStorage = (name: string) => {
  const prevList = JSON.parse(sessionStorage.getItem('clickedResult') || `[]`);
  if (!prevList.includes(name)) {
    sessionStorage.setItem(
      `clickedResult`,
      JSON.stringify([...prevList, name]),
    );
  }
};
