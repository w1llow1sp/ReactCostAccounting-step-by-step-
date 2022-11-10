import Card from '../UI/Card';
import CostItem from './CostItem';
import './Costs.css';
import CostsFilter from './CostsFilter';
import { useState } from 'react';

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    return (
        <div>
            <Card className='costs'>
                <CostsFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler}
                />
                {props.costs.map((cost) => (
                    <CostItem
                        date={cost.date}
                        description={cost.description}
                        amount={cost.amount}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Costs;

//! Тут мы взяли массив данных из App.js (в самом файле мы его
//! передали в качестве props) и c помощью метода map прошлись
//! по всем элементам, обозвав их cost,и динамически отобразили,
//! избавившичь от hard-code
