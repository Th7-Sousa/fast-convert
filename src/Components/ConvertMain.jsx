import Input from "./Input";
import Select from "./Select";

export default function ConvertMain() {
  return (
    <div id="convert-main" className="w-full flex flex-col items-center">

      <div className="flex items-center p-12 rounded-md gap-8 border border-solid border-Gray-400">

        <div className="flex items-center gap-2">
          <span className="text-xl">Converter:</span>
          <Input />
          <Select />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl">Em:</span>
          <Select />
        </div>

      </div>
    </div>
  )
} 