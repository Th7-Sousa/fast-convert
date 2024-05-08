export default function Input({ value, onChange }) {
  return (
    <input
      className={`w-32 p-2 text-base rounded-md text-Gray-900 border-solid border-2 border-gray-400`}
      min={0}
      type="number"
      value={value}
      onChange={onChange}
    />
  );
}
