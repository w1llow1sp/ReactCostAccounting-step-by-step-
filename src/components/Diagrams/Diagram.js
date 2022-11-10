import DiagramBar from './DiagramBar';
import './Diagram.css';

const Diagram = (props) => {
    const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value); // массив значений из Value в CostsDiagram

    const maxMonthCosts = Math.max(...dataSetsValues); //находим максимальное значение с помощью спред-оператора
    return (
        <div className='diagram'>
            {props.dataSets.map((dataSet) => (
                <DiagramBar
                    key={dataSet.label}
                    value={dataSet.value}
                    maxValue={maxMonthCosts}
                    label={dataSet.label}
                />
            ))}
        </div>
    );
};

export default Diagram;
