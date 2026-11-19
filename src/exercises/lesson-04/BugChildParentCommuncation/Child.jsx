/*export default function Child() {
  return <button onClick={() => {}}>Increment Counter</button>;
}*/

export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}
