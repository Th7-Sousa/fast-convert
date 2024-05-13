export default function ButtonPrimary({ text, onClick, state }) {
  return (
    <button disabled={state} onClick={onClick} className={`
    ${state ? 'cursor-wait' : 'cursor-pointer'}
    bg-systemGreen-100 text-mainWhite-100 px-8 py-3 rounded-md hover:bg-green-500`
    } >
      {text}
    </button>
  )
}