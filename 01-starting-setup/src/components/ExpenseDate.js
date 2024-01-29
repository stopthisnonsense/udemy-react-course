import Card from './Card';
import './ExpenseDate.css';
export default function ExpenseDate({ date }) {
	const month = date.toLocaleString('en-US', { month: 'long' });
	const day = date.toLocaleString('en-US', { day: 'numeric' });
	const year = date.toLocaleString('en-US', { year: 'numeric' });
	return (
		<Card className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__day'>{day}</div>
			<div className='expense-date__year'>{year}</div>
		</Card>
	);
}
