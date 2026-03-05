
function InputBox(props : {
  label: string
  placeHolder : string
  value : string
  onChange : (e:any) => void
}) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label className="text-md font-sans font-semibold">{props.label}</label>
      <input type="text" placeholder={props.placeHolder} value={props.value} className="border border-gray-300 rounded-sm px-3 py-1 text-gray-600 focus:outline-gray-400" onChange={props.onChange}  />
    </div>
  )
}

export default InputBox