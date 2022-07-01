import { useState } from 'react';
import PropTypes from 'prop-types';

WeatherForm.propTypes = {
	onChangeCity: PropTypes.object.isRequired,
};

function WeatherForm({ onChangeCity }) {
	const [city, setCity] = useState('');

	function onChange(e) {
		const value = e.target.value;
		if (value !== '') {
			setCity(value);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		onChangeCity(city);
	}

	return (
		<div className='w-[336px]'>
			<form onSubmit={handleSubmit}>
				<input
					className='border-2 border-slate-300 rounded px-4 py-2 mb-4 w-full'
					type='text'
					onChange={onChange}
				/>
			</form>
		</div>
	);
}

export default WeatherForm;
