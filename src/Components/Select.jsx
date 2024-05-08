export default function Select({ options, value, onChange }) {
  return (
    <select
      id="units"
      className="bg-white min-w-40 border-2 border-gray-400 text-Gray-900 text-base rounded-md focus:border-Gray-800 block w-full px-3 py-2.5"
      value={value}
      onChange={onChange}
    >
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
