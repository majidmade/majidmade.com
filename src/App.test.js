/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { ALL_CONTENT, TITLES, IMAGES, COLORS } from './content';

expect.extend({
	toMatchSnapshotAfterSprings: (expected, container, timeToWait = 2500) => new Promise((resolve) => {
		setTimeout(() => {
			expect(container).toMatchSnapshot();    // <-- this blows up
			resolve({ pass: true, message: 'great' }); // <-- so we can safely assume pass=true here
		}, timeToWait);
	})
});

test('renders the home page correctly', async () => {
	const { container } = render(<App />);
	expect(container).toMatchSnapshot();
	await expect(container).toMatchSnapshotAfterSprings(container);
});

const testPage = content => test(`renders the ${content.toString()} page correctly`, async () => {
	const { container, getByText, getByAltText, getByTestId } = render(<App />);

	const button = getByAltText(IMAGES[content].altText);
	expect(button.getAttribute('src')).toBe(IMAGES[content].imgSrc);

	fireEvent.click(button);
	await expect(container).toMatchSnapshotAfterSprings(container);

	expect(getByTestId('page-background').style.backgroundColor).toBe(COLORS[content].backgroundColor);
	expect(getByText(TITLES[content].title).tagName).toBe('H1');
	expect(getByText(TITLES[content].subtitle).tagName).toBe('H3');
});

// this feels vaguely evil

ALL_CONTENT.forEach(testPage);