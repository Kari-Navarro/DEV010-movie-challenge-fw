
import { render, screen } from '@testing-library/react';
import Paginator from './src/Components/pageLink';
import Cards from './src/Components/cards'
import React from 'react';

describe('paginator component', () => {
 it('se renderiza el paginador', ()=>{
  render(<Paginator currentPage={1} setCurrentPage={function (value: React.SetStateAction<number>): void {
    throw new Error('Function not implemented.');
  } }  /> );
  
  expect(screen.getByText('... from 500 pages')).toBeDefined()
 });

}); 


describe('movie component', () => {
  it('se renderiza la lista de peliculas', ()=>{
   render(<Cards /> );
   expect(screen.getByText('title')).toBeDefined()
  });
 
 }); 




