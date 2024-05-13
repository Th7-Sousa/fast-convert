export default function Result({ result, uny, render }) {
  return (
    <>
      {
        render ?
          <div className="flex gap-1 p-3 rounded-md text-base font-semibold border-2 border-solid border-systemGreen-100">
            <p>Resultado =</p>
            <span className="text-green-600">{result}</span>
            <span className="text-Gray-700 font-medium">{uny}</span>
          </div>
          :
          <></>
      }
    </>
  )
}
