const Input = ({type,placeholder,name,startIcon,value}) => {

  return (
      <div className="relative">
           {startIcon && <span className="absolute left-2 top-3">{startIcon}</span>  }
          <input className="px-8 py-2" name={name} type={type?type:'text'} placeholder={placeholder} value={value} />
      </div>
  )
}

export default Input
