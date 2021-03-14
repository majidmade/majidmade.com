import { render } from '@testing-library/react';
import StrikethroughCarousel from './StrikethroughCarousel';

test('renders the given items into the carousel', async () => {
  const first = "First"
  const second = "Second"
  const third = "Third"
  const { findByText } = render(<StrikethroughCarousel items={[ first, second, third]}/>);
  await findByText(first)
  await findByText(second)
  await findByText(third)
});
