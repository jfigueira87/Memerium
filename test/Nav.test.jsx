import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../src/components/Nav'; 
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );    
    
    const title = screen.getByText('Memerium');
    expect(title).not.toBeNull();     
  
    const inicioLink = screen.getByText('Inicio');
    const galeriasLink = screen.getByText('Galerias');
    const sobreNosotrosLink = screen.getByText('Sobre Nosotros');
    const contactoLink = screen.getByText('Contacto');
    
    expect(inicioLink).not.toBeNull(); 
    expect(galeriasLink).not.toBeNull();
    expect(sobreNosotrosLink).not.toBeNull();
    expect(contactoLink).not.toBeNull();
  });
});

