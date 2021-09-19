import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ResultForm from '../components/Results/ResultForm';
import ResultList from '../components/Results/ResultList';
import useGetResultSubList from '../swr/useGetResultSubList';
import ResultSubTable from '../components/Results/ResultSubTable';
import useGetResults from '../swr/useGetResults';

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
  const { data: resultList, error } = useGetResults();
  const { data: resultSubList } = useGetResultSubList(clickedResultItem.name);

  if (error) return <Redirect to="/error" />;
  return (
    <div>
      <ResultForm />
      {clickedResultItem.name && resultSubList && (
        <ResultSubTable
          clickedResultItem={clickedResultItem}
          setClickedResultItem={setClickedResultItem}
          resultSubList={resultSubList}
        />
      )}
      {resultList[0] && (
        <ResultList
          resultList={resultList}
          setClickedResultItem={setClickedResultItem}
        />
      )}
    </div>
  );
};

export default ResultPage;
