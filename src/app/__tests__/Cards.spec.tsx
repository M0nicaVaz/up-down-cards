import { render, screen, fireEvent } from '@testing-library/react';
import { Cards } from '@/app/Cards';
import '@testing-library/jest-dom';

describe('Cards', () => {
  it('should initally render with no cards on screen', async () => {
    render(<Cards />);
    const input = screen.getByLabelText('Number of cards:');

    expect(input).toHaveValue('');
    expect(screen.queryAllByTestId('card')).toHaveLength(0);
  });

  it('should render cards accordingly to input change', async () => {
    render(<Cards />);
    const input = screen.getByLabelText('Number of cards:');
    fireEvent.change(input, { target: { value: '10' } });

    expect(input).toHaveValue('10');
    expect(screen.queryAllByTestId('card')).toHaveLength(10);
  });

  it('should initally render all cards with the same text', async () => {
    render(<Cards />);
    const input = screen.getByLabelText('Number of cards:');
    fireEvent.change(input, { target: { value: '4' } });

    expect(screen.queryAllByText('down')).toHaveLength(4);
    expect(screen.queryByText('up')).not.toBeInTheDocument();
  });

  it('should have a single card with up text when clicked', async () => {
    render(<Cards />);
    const input = screen.getByLabelText('Number of cards:');
    fireEvent.change(input, { target: { value: '4' } });

    const cards = screen.queryAllByTestId('card');

    fireEvent.click(cards[0]);
    expect(screen.queryAllByText('down')).toHaveLength(3);
    expect(screen.queryAllByText('up')).toHaveLength(1);

    fireEvent.click(cards[3]);
    expect(screen.queryAllByText('down')).toHaveLength(3);
    expect(screen.queryAllByText('up')).toHaveLength(1);
  });
});
