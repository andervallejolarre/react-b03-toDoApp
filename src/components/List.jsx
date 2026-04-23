/*
1. List html elements
   1.1 ul element wrapping everything
   1.2 li elements with checkbox, text and erase icon
 2. map function to render li elements for every item in the list
 3.Status functions
   3.1 onClick
   3.2 onMouse */

const List = (props) => {

    let finalList = props.printList.map((item, index) => {
        if(item.check==false){
        return (<li className="singleItem" key={index}>
            <input onChange={done} type="checkbox" id={index} />
            <p>{item.toDo}</p>
            <p>Ⓧ</p>
        </li>
        )
        }else if(item.check==true){
        return (<li className="singleItem" key={index}>
            <input onChange={done} type="checkbox" id={index} />
            <p><s>{item.toDo}</s></p>
            <p>Ⓧ</p>
        </li>
        )
        }
    })

    return (
        <ul className="entireList">
            {finalList}
        </ul>
    )
}

export default List