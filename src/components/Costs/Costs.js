import './Costs.css';
import { useState } from 'react';

import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className='costs'>
                <CostsFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler}
                />
                <CostsDiagram costs={filteredCosts} />
                <CostList costs={filteredCosts} />
            </Card>
        </div>
    );
};

export default Costs;

//! Тут мы взяли массив данных из App.js (в самом файле мы его
//! передали в качестве props) и c помощью метода map прошлись
//! по всем элементам, обозвав их cost,и динамически отобразили,
//! избавившичь от hard-code
