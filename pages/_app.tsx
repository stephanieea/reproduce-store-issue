import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useHydrateAtoms } from 'jotai/react/utils';
import {store, Wrapper} from '../components/store'
import { dataAtom } from '../components/data-atom';

function HydrateAtoms(props: any) {
	useHydrateAtoms(props.initialValues);
	return props.children;
}


export default function MyApp({ Component, pageProps }: AppProps) {
  const initialValues = [[dataAtom, pageProps]]

  return (
    <Wrapper store={store}>
      <HydrateAtoms initialValues={initialValues}>
        <Component {...pageProps} />
      </HydrateAtoms>
    </Wrapper>
  )
}
