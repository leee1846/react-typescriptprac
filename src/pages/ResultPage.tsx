import React from 'react';
import { Redirect } from 'react-router-dom';
import ResultForm from '../components/Results/ResultForm';
import ResultList from '../components/Results/ResultList';
import useGetResults from '../swr/useGetResults';

const ResultPage = () => {
  const { data: resultList, error, loading } = useGetResults();

  if (error) return <Redirect to="/error" />;
  return (
    <div>
      <ResultForm />
      <ResultList resultList={resultList} />
    </div>
  );
};

export default ResultPage;
