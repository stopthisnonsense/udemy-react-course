import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem({ id, date, title, amount }) {
	const expenseClasses = `expense-item expense-item--${id}`;
	return (
		<Card className={expenseClasses}>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
