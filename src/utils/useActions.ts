import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export default function useActions(actions: any[]) {
  const dispatch = useDispatch();
  return useMemo(() => {
    return actions.map(a => bindActionCreators(a, dispatch));
  }, [dispatch, actions]);
}
