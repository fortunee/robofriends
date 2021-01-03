import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';

import reportWebVitals from '../reportWebVitals';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

import 'tachyons';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
};

reportWebVitals();
serviceWorkerRegistration.register();

export default MyApp;
