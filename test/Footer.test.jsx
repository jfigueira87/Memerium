import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../src/components/Footer';

describe('Footer', () => {
  it('renders the Footer component', () => {
    render(<Footer />);     
    const contactElement = screen.getByText('Contacto: 445465757');
    expect(contactElement).not.toBeNull(); 

    const emailElement = screen.getByText('Correo electrónico: memento@gmail.com');
    expect(emailElement).not.toBeNull();     
    
    const shareIcon = screen.getByAltText('Icono compartir');
    expect(shareIcon).not.toBeNull();

    const youtubeIcon = screen.getByAltText('Icono YouTube');
    expect(youtubeIcon).not.toBeNull();

    const facebookIcon = screen.getByAltText('Icono Facebook');
    expect(facebookIcon).not.toBeNull();    
    
    const copyrightElement = screen.getByText('©2024 por Memerium');
    expect(copyrightElement).not.toBeNull();
  });
});
