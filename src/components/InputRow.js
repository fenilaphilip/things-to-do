export default function InputRow() {
    return (
        <div className="m-2" >
            <input type="checkbox" className="m-2" />
            <input type="text" placeholder="add a task" />
            <button className="m-2">
                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/edit-128.png"
                    alt="Edit"
                    width={20}
                    height={20}
                />
            </button>
            <button className="m-2">
                <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-128.png"
                    alt="Remove"
                    width={20}
                    height={20}
                />
            </button>
        </div>
    )
}
