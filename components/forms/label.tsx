const Label = ({ ...props }) => {
  return (
    <label className="text-bold block mt-4" {...props}>{props.children}</label>
  )
}

export default Label