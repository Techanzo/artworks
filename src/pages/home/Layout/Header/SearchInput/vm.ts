import { ChangeEventHandler } from 'react';

import { useHomeContext } from '../../../Context';

const useSearchInput = () => {
  const { searchTerm, onChangeSearchTerm } = useHomeContext();

  const handleChangeSearchTerm: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    onChangeSearchTerm(value);
  };

  return { searchTerm, handleChangeSearchTerm };
};

export default useSearchInput;
