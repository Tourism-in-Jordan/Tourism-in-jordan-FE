export default function Weather(props){
    return (
        <>
        <p>{`${props.data.temp}°`}</p>
        </>
    );
}