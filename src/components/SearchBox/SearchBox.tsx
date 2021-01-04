import { memo, MemoExoticComponent } from 'react';

interface SearchBoxProps {
  searchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type MemoParam = (props: SearchBoxProps) => JSX.Element;

const SearchBox: MemoExoticComponent<MemoParam> = memo(({ searchChange }) => (
  <div className="pa2">
    <input
      aria-label="Search Robos"
      type="search"
      className="pa3 ba b--green"
      placeholder="Search robo friends"
      onChange={searchChange}
    />
  </div>
));

export default SearchBox;
