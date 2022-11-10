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

    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
    });

    // фильтрация по году и вывод нужного контента
    let costsContent = <p>В этом году не было расходов</p>;

    if (filteredCosts.length > 0) {
        costsContent = filteredCosts.map((cost) => (
            <CostItem
                key={cost.id}
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
            />
        ));
    }
    return (
        <div>
            <Card className='costs'>
                <CostsFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler}
                />
                {costsContent}
            </Card>
        </div>
    );
};

export default Costs;

//! Тут мы взяли массив данных из App.js (в самом файле мы его
//! передали в качестве props) и c помощью метода map прошлись
//! по всем элементам, обозвав их cost,и динамически отобразили,
//! избавившичь от hard-code
