import { useState } from "react"

import { IoMdClose } from "react-icons/io";

const MultipleSelectDropdownTag = ({dropdownOptions=[]}) => {

  // to use a state to add multiple drop down values
  const[selectedDropdownValues,setSelectedDropdownValues]=useState([])

  // To Add DropDown Values
  const dropdownValues=(e)=>{
    setSelectedDropdownValues(prev=>{
      const newDropdownValues=[...prev];
      console.log(e.target.value)
      if(!(newDropdownValues.includes(e.target.value))){
        console.log(newDropdownValues)
        newDropdownValues.push(e.target.value)
      }
     return newDropdownValues;

    })
  }

// to remove drop down values while on clicking the selectable paragraph
  const removeSelectedDropValues=(selectedDropdownValue)=>{
    console.log(selectedDropdownValue)
    setSelectedDropdownValues(prevValues=>{
      const updatedValues=[...prevValues];
      return updatedValues.filter(prevValue=>{
       return prevValue!=selectedDropdownValue
      })
     })
  }

  return (
    <div>
      <div className="flex gap-2">{selectedDropdownValues.map(selectedDropdownValue=>{
         return <div className="flex justify-center items-center gap-1 border-2 border-gray-700 px-2 py-1 rounded-lg " key={selectedDropdownValue} onClick={()=>removeSelectedDropValues(selectedDropdownValue)}>
          <p> {selectedDropdownValue}</p>
          <IoMdClose/>
         </div>
      })}</div>
       <select  onChange={(e)=>dropdownValues(e)}>
           {dropdownOptions.map(domain=>{
            return <option value={domain.value} key={domain.value}>{domain.specilization}</option>
           })}
        </select>
    </div>
  )
}

export default MultipleSelectDropdownTag
