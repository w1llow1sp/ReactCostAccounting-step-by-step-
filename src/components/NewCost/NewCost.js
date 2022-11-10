import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        };
        props.onAddCost(costData);
        console.log(costData);
    };
    // важно! Благодаря добавленным строчкам у нас уходят данные в массив
    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler} />
        </div>
    );
};

export default NewCost;
