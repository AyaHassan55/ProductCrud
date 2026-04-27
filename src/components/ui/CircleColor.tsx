interface IProps {
color: string;      


}

const CircleColor=({color}:IProps)=> {
  return (
    <span className="block w-5 h-5 rounded-full bg-red-500 cursor-pointer " style={{backgroundColor:color}}></span>
  )
}

export default CircleColor