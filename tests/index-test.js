import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Component from 'src/'

describe('Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Component/>, div);
  });
});
