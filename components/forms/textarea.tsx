const Textarea = ({ ...props }) => {
  return (
    <textarea className="border border-primary rounded-md p-2 w-full" rows={5} {...props} />
  )
}

export default Textarea