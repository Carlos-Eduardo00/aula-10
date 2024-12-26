import './ListItem.css';

function ListItem({ item }) {
    const { name, sprites } = item;
    const sprite = sprites.other["official-artwork"].front_default;

    return (
        <li className="list-item">
            <div className="list-item-image-wrapper">
                <img className="list-item-image" src={sprite} alt="Pokemon" />
            </div>
            <p>{name}</p>
        </li>
    )
}

export default ListItem;