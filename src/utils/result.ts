import { ResultListType } from '../types/resultTypes';

export const sortAscendingResult = (array: ResultListType, type: number) => {
  if (array) {
    if (type === 1) {
      const result = [...array].sort((a, b) => b.foxtrot - a.foxtrot);
      return result;
    }
    const result = [...array].sort((a, b) => b.golf - a.golf);
    return result;
  }

  return array;
};

export const sortDescendingResult = (array: ResultListType, type: number) => {
  if (array) {
    if (type === 1) {
      const result = [...array].sort((a, b) => a.foxtrot - b.foxtrot);
      return result;
    }
    const result = [...array].sort((a, b) => a.golf - b.golf);
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
