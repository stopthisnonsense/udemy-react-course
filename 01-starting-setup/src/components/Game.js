import { useEffect, useState } from 'react';
import Hud from './display/Hud';
export default function Game() {
	const [turn, setTurn] = useState(0);
	const [gold, setGold] = useState(1);
	const [buildings, setBuildings] = useState(0);
	const [factories, setFactories] = useState(1);
	const [food, setFood] = useState(0);
	const [population, setPopulation] = useState(0);
	const [farms, setFarms] = useState(0);

	useEffect(() => {
		setGold((gold) => gold + 1 + population);
		setFood((food) => food + buildings + farms * 2 - population * 10);
		if (food > 10) {
			setFood((food) => food - 10);
			setPopulation(population + 1);
		}
	}, [turn]);

	function nextTurn() {
		setTurn((turn) => turn + 1);
		return;
	}
	function buyBuilding() {
		if (gold < 10) {
			return;
		}
		setGold((gold) => gold - 10);
		setBuildings((buildings) => buildings + 1);
		nextTurn();
		return;
	}
	function buyFarm() {
		if (gold < 10 && population < 1) {
			return;
		}
		setGold((gold) => gold - 10);
		setPopulation((population) => population - 1);
		setFarms((farm) => farm + 1);
		nextTurn();
		return;
	}
	return (
		<>
			<Hud
				gold={gold}
				buildings={buildings}
				farms={farms}
				food={food}
				population={population}
				factories={factories}
			/>
			<div>
				<button onClick={buyBuilding}>Buy Building</button>
				<button onClick={nextTurn}>Next Turn</button>
				{(population > 0 || farms > 0) && (
					<button onClick={buyFarm}>Buy Farm</button>
				)}
			</div>
		</>
	);
}
