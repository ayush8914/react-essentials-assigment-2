function Button(props : {
  label : string
  onClick : () => void
  bgColor : string
  bgColorHover : string
}) {
  return (
    <div className={`text-white ${props.bgColor} rounded-sm px-4 py-2 text-nowrap cursor-pointer ${props.bgColorHover}`} onClick={props.onClick}>
      {props.label}
    </div>
  )
}

export default Button
