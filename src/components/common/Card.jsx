const Card = ({children,className}) => {
  return (
    <div className={`px-4 py-2 rounded-lg flex flex-col items-center ${className}`}>
      {children}
    </div>
  )
}

export default Card
