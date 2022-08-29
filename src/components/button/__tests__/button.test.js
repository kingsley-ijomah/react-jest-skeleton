import Button from '../button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
  beforeEach(() => {
    render(<Button label="Click me now!" />);
  });

  it('should return a button', () => {
    expect(screen.getByTestId('button-toggle')).toBeTruthy();
  });

  it('should have an attribute of type', () => {
    expect(screen.getByTestId('button-toggle')).toHaveAttribute(
      'type',
      'button'
    );
  });

  it('should have a classname', () => {
    expect(screen.getByTestId('button-toggle')).toHaveClass('button-style');
  });

  it('has the correct label', () => {
    expect(screen.getByTestId('button-toggle')).toHaveTextContent(
      'Click me now!'
    );
  });

  it('has `click me` on page by default', () => {
    expect(screen.getByTestId('click-me')).toBeTruthy();
  });

  it('does not have `you clicked me` on page by default', () => {
    expect(screen.queryByTestId('you-clicked-me')).toBeFalsy();
  });

  it('has `you clicked me` when clicked', () => {
    fireEvent.click(screen.getByTestId('button-toggle'));
    expect(screen.getByTestId('you-clicked-me')).toBeTruthy();
    expect(screen.queryByTestId('click-me')).toBeFalsy();
  });

  it('takes a snapshot', () => {
    const { asFragment } = render(<Button label="Click me now!" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
