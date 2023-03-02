export function Button({ text, value, onPressed }) {
    return <button onClick={onPressed} value={value}>{text}</button>
}