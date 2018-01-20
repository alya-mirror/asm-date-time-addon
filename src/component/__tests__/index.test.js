import React from 'react'
import {render} from 'react-dom'

import Component from '../index'

describe('Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Component/>, div);
  });
});
