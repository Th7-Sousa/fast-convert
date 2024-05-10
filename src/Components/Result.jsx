export default function Result({ result, render }) {
  return (
    <>
      {
        render ?
          <div className="flex gap-1 p-3 rounded-md text-base font-semibold border-2 border-solid border-systemGreen-100">
            <p>Resultado =</p>
            <span className="text-systemGreen-100">{result}</span>
          </div>
          :
          <></>
      }
    </>
  )
}
