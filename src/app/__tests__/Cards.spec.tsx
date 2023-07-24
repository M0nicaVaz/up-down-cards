import { render, screen, fireEvent } from '@testing-library/react';
import { Cards } from '@/app/Cards';
import '@testing-library/jest-dom';

describe('Cards', () => {
  it('initially renders the input with an empty string value', async () => {
    render(<Cards />);
    const input = screen.getByLabelText('Number of cards:');
    expect(input).toHaveValue('');
  });

  it('should initally render with no cards on screen', async () => {
    render(<Cards />);
    expect(screen.queryAllByTestId('card')).toHaveLength(0);
  });

  it('should render cards accordingly to input change', async () => {
    render(<Cards />);
    const CARDS_QTY = 10;
    const input = screen.getByLabelText('Number of cards:');

    fireEvent.change(input, { target: { value: String(CARDS_QTY) } });
    expect(input).toHaveValue(String(CARDS_QTY));
    expect(screen.queryAllByTestId('card')).toHaveLength(CARDS_QTY);
  });

  it('should render all cards with down text after input change', async () => {
    render(<Cards />);
    const CARDS_QTY = 5;
    const input = screen.getByLabelText('Number of cards:');

    fireEvent.change(input, { target: { value: String(CARDS_QTY) } });
    expect(screen.queryAllByText('down')).toHaveLength(CARDS_QTY);
  });

  it('should render without text up after input change', async () => {
    render(<Cards />);
    const input = screen.getByLabelText('Number of cards:');

    fireEvent.change(input, { target: { value: '2' } });
    expect(screen.queryAllByText('up')).toHaveLength(0);
  });

  it('should render text up after click', async () => {
    render(<Cards />);

    const input = screen.getByLabelText('Number of cards:');
    fireEvent.change(input, { target: { value: '1' } });

    const cards = screen.queryAllByTestId('card');
    fireEvent.click(cards[0]);

    expect(screen.queryAllByText('up')).toHaveLength(1);
  });

  it('should have a single card with text up after clicks', async () => {
    render(<Cards />);
    const input = screen.getByLabelText('Number of cards:');
    fireEvent.change(input, { target: { value: '4' } });

    const cards = screen.queryAllByTestId('card');

    fireEvent.click(cards[0]);
    fireEvent.click(cards[3]);
    expect(screen.queryAllByText('up')).toHaveLength(1);
  });

  it('should have cards with down text except one after clicks', async () => {
    render(<Cards />);
    const TOTAL_DOWN_CARDS = 10;
    const input = screen.getByLabelText('Number of cards:');

    fireEvent.change(input, { target: { value: '10' } });
    const cards = screen.queryAllByTestId('card');

    fireEvent.click(cards[0]);
    fireEvent.click(cards[1]);
    expect(screen.queryAllByText('down')).toHaveLength(TOTAL_DOWN_CARDS - 1);
  });
});
