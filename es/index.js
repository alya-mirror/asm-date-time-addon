/* Alya Smart Mirror
 * Global process
 *
 * By Bilal Al-Saeedi
 * MIT Licensed.
 */

import React from 'react';
import { render } from 'react-dom';
import ASMDateTime from './component/index';

render(React.createElement(ASMDateTime, null), document.getElementById('root'));