export default function Container({ children }) {
  return (
    <div className="min-h-full flex justify-between">
      {children}
    </div>
  )
} 