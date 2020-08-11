import {useMemo} from 'react';
import useFadeIns from './useFadeIns';
import useBounces from './useBounces';

export default items => {
	const [fades] = useFadeIns(items.length);
	const [bounces] = useBounces(items.length);
	const itemsWithAnimations = useMemo(() => items.map((item, i) => ({
		item,
		fade: fades[i],
		bounce: bounces[i]
	})), [items, bounces, fades]);
	return itemsWithAnimations;
};
