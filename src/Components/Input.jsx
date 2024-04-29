export default function Input() {

  return (
    <input className={`w-36 px-2 py-2 rounded-md text-Gray-900 border-solid border-2 border-gray-400`}
      min={0}
      type="number"
      defaultValue={0}
    />
  )
}
