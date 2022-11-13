import React from 'react';
import BarChart from './components/BarChart';
import Header from './components/Header';
import ScatterChart from './components/ScatterChart';

const App = () =>
{
    return (
        <div>
        <Header />,
        <BarChart />,
        <ScatterChart />
        </div>
    );
}

export default App;