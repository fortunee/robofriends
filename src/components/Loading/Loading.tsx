import { MemoExoticComponent, memo, FC } from 'react';

const Loading: MemoExoticComponent<FC<{}>> = memo(() => (
  <div className="vh-100 dt w-100">
    <h1 className="tc f1 dtc v-mid">Loading...</h1>
  </div>
));

export default Loading;
