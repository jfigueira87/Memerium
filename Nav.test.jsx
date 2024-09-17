import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter para el enrutamiento en pruebas

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    // Verifica que el título "Memerium" está en la página
    expect(screen.getByText('Memerium')).toBeInTheDocument();
    
    // Verifica que los enlaces están presentes
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Galerias')).toBeInTheDocument();
    expect(screen.getByText('Sobre Nosotros')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    
    // Verifica que los íconos están presentes en el menú móvil
    fireEvent.click(screen.getByRole('button')); // Abre el menú móvil
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Galerias')).toBeInTheDocument();
    expect(screen.getByText('Sobre Nosotros')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });
});
