import './Card.css';
export default function Card({ children, className }) {
	const cardClasses = className ? `card ${className}` : 'card';
	return <div className={cardClasses}>{children}</div>;
}
