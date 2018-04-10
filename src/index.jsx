import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';
import Max from './components/Max.jsx';
import AllocatedM from './components/AllocatedM.jsx';
import Needed from './components/Needed.jsx';
import Avaible from './components/Avaible.jsx';
import Allocated from './components/Allocated.jsx';
import MaxV from './components/MaxV.jsx';

render(
	<Max/>
	,document.getElementById('resources')
);


render(
	<AllocatedM/>
	,document.getElementById('Matrix1')
);

render(
	<Needed/>
	,document.getElementById('Matrix2')
);

render(
	<Avaible/>
	,document.getElementById('vector3')
);

render(
	<Allocated/>
	,document.getElementById('vector2')
);

render(
	<MaxV/>
	,document.getElementById('vector1')
);

