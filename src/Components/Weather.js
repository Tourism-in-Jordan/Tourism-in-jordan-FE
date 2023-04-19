export default function Weather(props){
    return (
        <>
        <div>
        <h5 id="Temp">{`${props.data.temp}°`}</h5>
        <img title="Tempreture" id='Tempreture' src={require('./thermometer.png')} alt="image" />
        </div>
        </>
    );
}