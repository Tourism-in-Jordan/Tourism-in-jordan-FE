export default function Weather(props){
    return (
        <>
        <h5 id="Temp">{`${props.data.temp}°`}</h5>
        </>
    );
}