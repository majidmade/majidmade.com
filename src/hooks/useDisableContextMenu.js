import { useCallback } from 'react';

// disables right-click (desktop) and long-press (mobile)
// mostly just so you can play with the glow on a phone without accidentally trying to download the image

export default () => {
  const onContextMenu = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, []);

  return { onContextMenu }
}
