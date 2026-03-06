
function MenuItem(props : {
    menuName: String
    itemCount : Number
    onClick : () => void
    active : boolean
}) {
  return (
        <div className={`bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer hover:text-gray-900 ${props.active ? "bg-gray-300 text-gray-900" : ""}`}>
            <div onClick={props.onClick}>
                {props.menuName} ({props.itemCount.toString()})
            </div>
        </div>
    
  )
}

export default MenuItem