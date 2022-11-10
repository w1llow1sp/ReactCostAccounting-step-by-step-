import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {
    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            amount: 999.99,
        },
        {
            date: new Date(2021, 11, 25),
            description: 'MacBook',
            amount: 1524.32,
        },
        {
            date: new Date(2021, 4, 1),
            description: 'Джинсы',
            amount: 49.99,
        },
    ];

    return (
        <div>
            <NewCost />
            <Costs costs={costs} />
        </div>
    );
};

export default App;
