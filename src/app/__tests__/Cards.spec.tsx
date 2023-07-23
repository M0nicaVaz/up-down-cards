import { render, screen, fireEvent } from '@testing-library/react';
import { Cards } from '@/app/Cards';
import '@testing-library/jest-dom';

describe('Cards', () => {
  it('should render the correct number of cards', async () => {
    render(<Cards />);
    const input = screen.getByLabelText('Number of cards:');

    expect(input).toHaveValue('');
    expect(screen.queryAllByTestId('card')).toHaveLength(0);

    fireEvent.change(input, { target: { value: '10' } });

    expect(input).toHaveValue('10');
    expect(screen.queryAllByTestId('card')).toHaveLength(10);
  });

  it('should render card texts correctly', async () => {
    render(<Cards />);
    const input = screen.getByLabelText('Number of cards:');
    fireEvent.change(input, { target: { value: '4' } });

    const cards = screen.queryAllByTestId('card');
    expect(cards.length).toBe(4);
    expect(screen.queryAllByText('down')).toHaveLength(4);
    expect(screen.queryByText('up')).not.toBeInTheDocument();

    fireEvent.click(cards[0]);
    expect(screen.queryAllByText('down')).toHaveLength(3);
    expect(screen.queryAllByText('up')).toHaveLength(1);

    fireEvent.click(cards[3]);
    expect(screen.queryAllByText('down')).toHaveLength(3);
    expect(screen.queryAllByText('up')).toHaveLength(1);
  });
});
