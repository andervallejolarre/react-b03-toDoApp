const List = (props) => {

    let finalList = props.printList.map((item, index) => {
        return (<li className="singleItem" key={index}>
            <input type="checkbox" />
            <p>{item}</p>
            <p>Ⓧ</p>
        </li>
        )
    })

    return (
        <ul className="entireList">
            {finalList}
        </ul>
    )
}

export default List