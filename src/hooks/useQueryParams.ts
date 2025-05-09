import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type QueryParams = Record<string, string | string[] | undefined>;

export const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const result: QueryParams = {};

    params.forEach((value, key) => {
      if (result[key]) {
        const current = result[key];
        if (Array.isArray(current)) {
          current.push(value);
        } else {
          result[key] = [current as string, value];
        }
      } else {
        result[key] = value;
      }
    });

    return result;
  }, [location.search]);

  const setQueryParams = useCallback(
    (params: QueryParams, options?: { replace?: boolean }) => {
      if (Object.keys(params).length === 0) {
        navigate({ search: '' }, { replace: true });
        return;
      }
      const searchParams = new URLSearchParams(location.search);

      Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null) {
          searchParams.delete(key);
        } else if (Array.isArray(value)) {
          searchParams.delete(key);
          value.forEach((v) => searchParams.append(key, v));
        } else {
          searchParams.set(key, value);
        }
      });

      navigate(
        { search: searchParams.toString() },
        { replace: options?.replace ?? true }
      );
    },
    [navigate, location.search]
  );

  const getParam = useCallback(
    (key: string): string | string[] | undefined => {
      return queryParams[key];
    },
    [queryParams]
  );
  const setParam = useCallback(
    (
      key: string,
      value: string | string[] | undefined,
      options?: { replace?: boolean; preserve?: boolean }
    ) => {
      setQueryParams({ [key]: value }, options);
    },
    [setQueryParams]
  );

  const resetQueryParams = useCallback(() => {
    setQueryParams({});
  }, [setQueryParams]);

  return {
    queryParams,
    setQueryParams,
    getParam,
    setParam,
    resetQueryParams,
  };
};
