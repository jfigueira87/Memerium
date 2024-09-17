import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the Footer component', () => {
    render(<Footer />);
    
    // Verifica que el contacto y el correo están en la página
    expect(screen.getByText('Contacto: 445465757')).toBeInTheDocument();
    expect(screen.getByText('Correo electrónico: memento@gmail.com')).toBeInTheDocument();
    
    // Verifica que los íconos de redes sociales están presentes
    expect(screen.getByAltText('Icono compartir')).toBeInTheDocument();
    expect(screen.getByAltText('Icono YouTube')).toBeInTheDocument();
    expect(screen.getByAltText('Icono Facebook')).toBeInTheDocument();
    
    // Verifica el copyright
    expect(screen.getByText('©2024 por Memerium')).toBeInTheDocument();
  });
});
