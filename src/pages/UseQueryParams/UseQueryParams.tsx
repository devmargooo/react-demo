import { useQueryParams } from '../../hooks/useQueryParams';

const QueryParamsExample = () => {
  const { queryParams, setParam, resetQueryParams, getParam } =
    useQueryParams();

  const handlePageChange = (page: number) => {
    setParam('page', String(page));
  };

  const handleFilterChange = (filter: string) => {
    setParam('filter', filter, { preserve: true });
  };

  return (
    <div>
      <h2>Текущие параметры:</h2>
      <pre>{JSON.stringify(queryParams, null, 2)}</pre>

      <div>
        <button onClick={() => handlePageChange(1)}>Страница 1</button>
        <button onClick={() => handlePageChange(2)}>Страница 2</button>
        <span>Выбрано: {getParam('page')}</span>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => handleFilterChange('popular')}>
          Показать популярные
        </button>
        <button onClick={() => handleFilterChange('newest')}>
          Показать новые
        </button>
        <span>Выбрано: {getParam('filter')}</span>
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={resetQueryParams}>Cбросить</button>
      </div>
    </div>
  );
};

export default QueryParamsExample;
