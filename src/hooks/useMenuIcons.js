import { useContext } from 'react';
import useFadeIns from './useFadeIns';
import useBounces from './useBounces';
import useRaiseActiveContent from './useRaiseActiveContent';
import { ActiveContentContext } from '../content';

export default items => {
	const { activeContent } = useContext(ActiveContentContext);
	const [fades] = useFadeIns(items.length);
	const [bounces] = useBounces(items.length);
	
	const itemsWithAnimations = items.map((item, i) => {
		const activeStyles = useRaiseActiveContent(item);
		return {
			item,
			fade: fades[i],
			bounce: activeContent ? activeStyles : bounces[i] // both animations use the transform style
		}
	})

	return itemsWithAnimations;
};
