export default function ButtonPrimary({ text, onClick }) {
  return (
    <button onClick={onClick} className=" bg-systemGreen-100 text-mainWhite-100 px-8 py-3 rounded-md hover:bg-green-500">
      {text}
    </button>
  )
}