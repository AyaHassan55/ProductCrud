import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { categories } from '../../data'
import type { ICategory } from '../../interfaces'
interface IProps {
    selected:ICategory;
    setSelected:(category:ICategory)=>void
}
const Select = ({ selected, setSelected }:IProps) => {
//   const [selected, setSelected] = useState(categories[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm font-medium text-gray-700">
        Category
      </Label>

      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-pointer grid-cols-1 rounded-md bg-white py-3 pr-2 pl-3 text-left text-gray-900 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm">
          
          <span className="flex items-center gap-3 truncate">
            <img
              src={selected.imageURL}
              className="size-5 rounded-full"
            />
            <span>{selected.name}</span>
          </span>

          <ChevronUpDownIcon
            className="absolute right-2 top-2.5 size-5 text-gray-400"
          />
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg border border-gray-200">
          
          {categories.map((category) => (
            <ListboxOption
              key={category.id}
              value={category}
              className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-100"
            >
              <div className="flex items-center gap-3">
                <img
                  src={category.imageURL}
                  className="size-5 rounded-full"
                />
                <span className="truncate">{category.name}</span>
              </div>

              <span className="absolute right-2 top-2 text-indigo-600">
                <CheckIcon className="size-5" />
              </span>
            </ListboxOption>
          ))}

        </ListboxOptions>
      </div>
    </Listbox>
  )
}

export default Select