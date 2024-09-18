import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './src/components/Nav'; 
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter para el enrutamiento en pruebas

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    // Verifica que el título "Memerium" está en la página
    const title = screen.getByText('Memerium');
    expect(title).not.toBeNull(); 
    
    // Verifica que los enlaces están presentes
    const inicioLink = screen.getByText('Inicio');
    const galeriasLink = screen.getByText('Galerias');
    const sobreNosotrosLink = screen.getByText('Sobre Nosotros');
    const contactoLink = screen.getByText('Contacto');
    
    expect(inicioLink).not.toBeNull(); 
    expect(galeriasLink).not.toBeNull();
    expect(sobreNosotrosLink).not.toBeNull();
    expect(contactoLink).not.toBeNull();

    // Verifica que los íconos están presentes en el menú móvil
    fireEvent.click(screen.getByRole('button')); // Abre el menú móvil
    expect(screen.getByText('Inicio')).not.toBeNull();
    expect(screen.getByText('Galerias')).not.toBeNull();
    expect(screen.getByText('Sobre Nosotros')).not.toBeNull();
    expect(screen.getByText('Contacto')).not.toBeNull();
  });
});

