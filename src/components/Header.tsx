import {Fruit} from '../types/fruit';
type Props = {
  fruits: Fruit[],
  show: boolean,
  numbers?: [],
}

export default function Header({numbers, fruits, show}: Props) {
  return(
    <header>
      <div>Hello</div>
      {fruits.map((item: Fruit) => (
        <div key={item.name}>{item.name}: {item.price}</div>
      ))}
    </header>
  )
}