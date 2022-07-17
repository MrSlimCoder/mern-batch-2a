function List(props) {
    return (<div className="todo">
        {
            props.list.map((value, index) => {
                return (<div key={index} onClick={() => props.delete(index)}>
                    {index + 1} : {value}
                    <br />
                </div>)
            })
        }
    </div>)
}
export default List;