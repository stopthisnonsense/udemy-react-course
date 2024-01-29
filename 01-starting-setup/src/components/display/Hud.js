import Card from '../Card';
import DisplayItem from './DisplayItem';
export default function Hud({
	gold,
	buildings,
	farms,
	food,
	population,
	factories,
}) {
	return (
		<Card>
			<h2>City Tiles</h2>
			<DisplayItem title='Gold' infoItem={gold} />
			<DisplayItem title='Buildings' infoItem={buildings} />
			<DisplayItem title='Farms' infoItem={farms} />
			<DisplayItem title='Food' infoItem={food} />
			<DisplayItem title='Population' infoItem={population} />
			<DisplayItem title='Factories' infoItem={factories} />
		</Card>
	);
}
