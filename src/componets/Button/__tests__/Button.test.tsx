import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button tests', () => {
  it('Should render button correctly', () => {
    const buttonText = 'Click me';
    const onClickMock = jest.fn();
    const testId = 'simple-button';

    render(
      <Button onClick={onClickMock} testId={testId}>
        {buttonText}
      </Button>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    userEvent.click(screen.getByTestId(testId));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
