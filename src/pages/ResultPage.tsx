import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ResultForm from '../components/Results/ResultForm';
import ResultList from '../components/Results/ResultList';
import useGetResultSubList from '../swr/useGetResultSubList';
import ResultSubTable from '../components/Results/ResultSubTable';
import useGetResults from '../swr/useGetResults';
import { ResultListType } from '../types/resultTypes';
import ResultBasket from '../components/Results/ResultBasket';

const ResultPage = () => {
  // 새로고침시 sessionStorage clear
  window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    sessionStorage.clear();
  });

  const [clickedResultItem, setClickedResultItem] = useState({
    name: '',
    foxtrot: 0,
    golf: 0,
  });
  const [searchValue, setSearchValue] = useState('');
  const [basket, setBasket] = useState<[] | ResultListType>([]);
  const { data: resultList, error } = useGetResults();
  const { data: resultSubList } = useGetResultSubList(clickedResultItem.name);

  if (error) return <Redirect to="/error" />;
  return (
    <div>
      <ResultForm setSearchValue={setSearchValue} />
      {basket[0] && <ResultBasket basketList={basket} setBasket={setBasket} />}
      {clickedResultItem.name && resultSubList && (
        <ResultSubTable
          clickedResultItem={clickedResultItem}
          setClickedResultItem={setClickedResultItem}
          resultSubList={resultSubList}
          setBasket={setBasket}
        />
      )}
      {resultList[0] && (
        <ResultList
          resultList={resultList}
          setClickedResultItem={setClickedResultItem}
          searchValue={searchValue}
          setBasket={setBasket}
        />
      )}
    </div>
  );
};

export default ResultPage;
