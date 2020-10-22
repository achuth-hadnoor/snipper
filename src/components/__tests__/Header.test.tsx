import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header'

test('renders learn react link', () => {
   const { asFragment } = render(<Header text="Hello!"/>); 
   expect(asFragment()).toMatchSnapshot(); // A snapshot is created with which it will compare the HTML generated 
});
