import { Atom, PrimitiveAtom, atom, useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { selectAtom } from 'jotai/vanilla/utils';

export const dataAtom = atom(null);

function get(obj: any, key: any, def: any, p?: any, undef?: any) {
	if (obj?.[key]) {
		return obj[key];
	}

	key = key && key.split ? key.split('.') : [].concat(key); // allows for undefined key

	for (p = 0; p < key.length; p += 1) {
		obj = obj ? obj[key[p]] : undef;
	}
	return obj === undef ? def : obj;
}


function useStableAtomValue(dataPath: string, fallback: string, baseAtom: any) {
	const stableAtom = useMemo(
		() =>
			selectAtom(baseAtom, (p) => {
				return get(p, dataPath, fallback);
			}),
		[dataPath]
	);
	const atomAtKeyValue = useAtomValue(stableAtom);
	return atomAtKeyValue === undefined ? fallback : atomAtKeyValue;
}


export function usePageData(key: string, fallback: string) {
	return useStableAtomValue(key, fallback, dataAtom);
}