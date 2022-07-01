import { useState, useEffect } from 'react';
import Loading from './Loading';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';

function WeatherApp() {
	const API_URL = 'http://api.weatherapi.com/v1/current.json?aqi=no';
	const API_KEY = 'e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8';

	const [weather, setWheather] = useState(null);

	useEffect(() => {
		loadInfo();
	}, []);

	async function loadInfo(city = 'london') {
		try {
			const request = await fetch(`${API_URL}&key=${API_KEY}&q=${city}`);
			const json = await request.json();
			setTimeout(() => {
				setWheather(json);
			}, 2000);
		} catch (error) {}
	}

	function handleChangeCity(city) {
		setWheather(null);

		loadInfo(city);
	}

	return (
		<div className='max-w-xl m-auto mt-3 pt-5 flex justify-center'>
			<div className='p-8'>
				<div className='py-5'>
					<h1 className='text-slate-700 font-bold text-2xl text-center'>
						Clima App | React
					</h1>
				</div>
				<div className='w-full'>
					<WeatherForm onChangeCity={handleChangeCity} />
				</div>
				{weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
			</div>
		</div>
	);
}

export default WeatherApp;
