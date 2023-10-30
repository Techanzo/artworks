import { InputAdornment } from '@mui/material';

import { ReactComponent as SearchIcon } from '../../../../../assets/search-icon.svg';
import { Searchbox, searchInputClasses } from './styles';
import useSearchInput from './vm';

export interface SearchInputProps {
  className?: string;
}

const SearchInput = ({ className }: SearchInputProps) => {
  const { searchTerm, handleChangeSearchTerm } = useSearchInput();

  return (
    <Searchbox
      id="search"
      color="secondary"
      placeholder="SEARCH"
      autoComplete="off"
      value={searchTerm}
      onChange={handleChangeSearchTerm}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={searchInputClasses.searchBoxAdornment}>
            <SearchIcon />
          </InputAdornment>
        ),
        classes: {
          notchedOutline: searchInputClasses.searchBoxNotchedOutline,
        },
      }}
      className={className}
    />
  );
};

export default SearchInput;
