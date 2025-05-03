function ListsComponent() {
    return (
        <div>
            <h2>СПИСКИ ВАЖНОГО</h2>

            <h3>Упорядоченный список:</h3>
            <ol>
                <li>Выучить React
                    <ul>
                        <li>Понять компоненты</li>
                        <li>Освоить хуки</li>
                    </ul>
                </li>
                <li>Стать компуктерщиком</li>
            </ol>

            <h3>Неупорядоченный список:</h3>
            <ul>
                <li>Купить ноут помощнее
                    <ul>
                        <li>Intel Core i9</li>
                        <li>32 GB RAM</li>
                    </ul>
                </li>
                <li>Настроить Sublime Text</li>
            </ul>
        </div>
    );
}

export default ListsComponent;
