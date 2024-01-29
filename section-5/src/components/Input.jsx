export default function Input({label, onNumberChange}) {
    function handleOnChange(event) {
        let value = event.target.value;
        if(event.target.type === 'number') {
            value = parseInt(value);
        }
        onNumberChange(value);
    }
    return(
        <div>
            <label>{label}</label>
            <input onChange={handleOnChange} type="number" />
        </div>
    )
}