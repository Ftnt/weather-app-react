import PropTypes from 'prop-types';

WeatherMainInfo.propTypes = {
	weather: PropTypes.object.isRequired,
};

function WeatherMainInfo({ weather }) {
	return (
		<div className='relative border-2 p-4 rounded-lg bg-white'>
			<div className='text-3xl font-semibold text-slate-700 text-center'>
				{weather?.location.name}
			</div>
			<div className='text-center'>{weather?.location.country}</div>
			<div className='absolute right-2 top-2 text-center text-[9px] text-cyan-600'>
				{weather?.current.last_updated}
			</div>
			<div className='flex justify-around mt-2 items-center'>
				<div>
					<img
						className='w-24'
						src={`http:${weather?.current.condition.icon}`}
						alt={weather?.current.condition.text}
					/>
				</div>
				<div className='flex flex-col items-center'>
					<div className='text-lg font-semibold'>
						{weather?.current.condition.text}
					</div>
					<div className='text-3xl font-semibold'>
						{weather?.current.temp_c} °C
					</div>
				</div>
			</div>
			<iframe
				src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4443470.975792695!2d${weather?.location.lon}!3d${weather?.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1656651984414!5m2!1ses-419!2spe`}
				width='full'
				height='300'
				style={{ border: 0 }}
				loading='lazy'
				className='rounded-xl'
			></iframe>
		</div>
	);
}

export default WeatherMainInfo;
