import { render, screen, fireEvent } from '@testing-library/react';
import ReserveForm from './components/ReserveForm';

describe('ReserveForm', () => {
  test('should submit form with valid inputs', () => {
    render(<ReserveForm />);

    // Ingresa valores válidos en todos los campos del formulario
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Guests'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText('Seating Preferences'), { target: { value: 'Window seat' } });

    // Haz clic en el botón de envío
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Verifica que no se muestren errores
    expect(screen.queryByRole('alert')).toBeNull();

    // Verifica que se envíen los valores correctamente o realiza alguna acción esperada
    // Ejemplo: Verifica que se haya mostrado un mensaje de éxito
    expect(screen.getByText('Reservation submitted successfully')).toBeInTheDocument();
  });

  test('should show error messages for empty required fields', () => {
    render(<ReserveForm />);

    // Deja en blanco uno o varios campos requeridos
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Verifica que se muestren mensajes de error para los campos vacíos
    expect(screen.getByText('First Name is required')).toBeInTheDocument();
    expect(screen.getByText('Last Name is required')).toBeInTheDocument();
    expect(screen.getByText('E-mail is required')).toBeInTheDocument();
    expect(screen.getByText('Phone is required')).toBeInTheDocument();
    expect(screen.getByText('Guests is required')).toBeInTheDocument();
  });

  

});