
import { fireEvent, render, screen } from '@testing-library/react';
import Paginator from './Components/pageLink';

describe('paginator component', () => {
  const setCurrentPage = jest.fn();

  it('Se renderiza el paginador', () => {
      
    render(<Paginator currentPage={1} setCurrentPage={setCurrentPage} />);
    expect(screen.getByText('... from 500 pages')).toBeDefined()
  });

  it('El paginador tiene 5 botones', () => {
    render(<Paginator currentPage={1} setCurrentPage={setCurrentPage} />);
    expect(screen.getAllByRole('button')).toHaveLength(5)
  });

  it('Se llama a setCurrentPage cuando se da click al boton de siguiente', () => {
      const currentPage = 1;

    render(<Paginator setCurrentPage={setCurrentPage} currentPage={currentPage} />);

    fireEvent.click(screen.getByTestId('next-btn'));
    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });

  it('Se llama a setCurrentPage cuando se da click al boton de anterior', ()=>{
      const currentPage = 2;
    
    render(<Paginator setCurrentPage={setCurrentPage} currentPage={currentPage} />);

    fireEvent.click(screen.getByTestId('prev-btn'));
    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });

  it('Se llama a setCurrentPage cuando se da click al boton de ultima pagina', ()=>{
    const currentPage = 500;

    render(<Paginator setCurrentPage={setCurrentPage} currentPage={currentPage} />);

    fireEvent.click(screen.getByTestId('last-btn'));
    expect(setCurrentPage).toHaveBeenCalledWith(500);
  });

  it('Se llama a setCurrentPage cuando se da click al boton de primera pagina', ()=>{
    const currentPage = 1;

    render(<Paginator setCurrentPage={setCurrentPage} currentPage={currentPage} />);

    fireEvent.click(screen.getByTestId('firts-btn'));
    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });





});











