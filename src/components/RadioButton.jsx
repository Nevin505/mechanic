const RadioButton = ({placeholder,name,value}) => {
    return (
        <>
            <label htmlFor="">{value}</label>
            <input className="px-8 py-2" name={name} type="radio" placeholder={placeholder} value={value} />
        </>
    )
  }

export default RadioButton 