import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from '../Form'; // Correct import path for your Form component

test('it shows validation errors on form submit', async () => {
  // Render the component
  render(<Form />);

  // Simulate user input (if needed)
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '' } });

  // Simulate form submission by finding the button with the correct label ("Reserve Table")
  const submitButton = screen.getByRole('button', { name: /reserve table/i });
  fireEvent.click(submitButton);

  // Wait for validation error messages
  await waitFor(() => {
    expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument();
  });
});
