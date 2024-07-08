const Button = ({children,onClick,variantType='outlined'}) => {
  let buttonStyles="";
  if(variantType==='conatined'){
      buttonStyles="bg-primary-800"
   }
   else if(variantType==='outlined'){
      buttonStyles='border-2 border-parimary-600 hover:border-primary-700'
   }

  return ( 
        <button className={`px-4 py-2 flex justify-center items-center rounded-lg ${buttonStyles}`} onClick={onClick}>{children}</button>
  )
}

export default Button
