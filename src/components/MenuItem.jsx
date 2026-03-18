

function MenuItem(props) {
    const {icon: Icon, text, ...restProps} = props
  return (
    <button className='btn border-none shadow-none justify-start gap-2 hover:opacity-20 w-full'>
        <Icon {...restProps}/>
        {/* <Avatar className='w-11 h-11 rounded-full bg-slate-200' imgSrc ={user.profileImage}/> */}
        {text}
    </button>
  )
}

export default MenuItem