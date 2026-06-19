const Input = ({ type = 'text', ...props }) => {
  return (
    <input className={`border border-primary bg-white p-2 rounded-md ${type === 'checkbox' || type === 'radio' ? 'w-auto' : 'w-full'}`} type={type} {...props} />
  )
}

export default Input