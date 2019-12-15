import { useState, useMemo } from 'react';
import { useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { COLORS } from '../content';

export default (content, activeContent, setActiveContent) => {
  const { backgroundColor, glowColor } = useMemo(() => COLORS[content], [content]);
  const isActiveContent = content === activeContent;
  const [isGrabbed, setIsGrabbed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [{ vh }, setVH ] = useSpring(() => ({ vh: '0vh' }))
  const bindGlowInteraction = useGesture({
    onHover: ({ hovering }) => {
      setVH({ vh: hovering ? '2vh' : '1vh' })
      setIsHovered(hovering)
    },
    onDrag: ({ down, event, first, last }) => {
      first && event.preventDefault()
      setVH({ vh: down ? '2vh' : '1vh' })
      setIsGrabbed(down && !last)
      setActiveContent(content)
    },
  })

  const showBoxShadow = isGrabbed || isHovered || isActiveContent;
  const boxShadowColor = isActiveContent ? glowColor : backgroundColor;
  return {
    glowStyles: { 
      boxShadow: showBoxShadow
        ? vh.interpolate(vh => `0 0 ${vh} ${vh} ${boxShadowColor}`)
        : '',
      cursor: isGrabbed ? 'grabbing' : 'grab',
      zIndex: showBoxShadow ? 1 : 0
    },
    bindGlowInteraction
  }
}