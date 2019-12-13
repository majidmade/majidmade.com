import React from 'react';
import { TITLES } from '../content';

export default ({ activeBauble }) => {
  const { title, subtitle } = TITLES[activeBauble]
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  )
}