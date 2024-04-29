import Input from "./Input";
import Select from "./Select";

export default function ConvertMain() {
  return (
    <div id="convert-main" className="w-full flex flex-col items-center">
      <div>
        <span>Converter:</span>
        <Input />
        <Select />
        <span>Em:</span>
      </div>
    </div>
  )
} 