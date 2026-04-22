interface IProps {

urlImage:string;
altText:string; 
className?:string;

}

const Image=({urlImage, altText, className}:IProps)=> {
  return (
    <div>
        <img src={urlImage} alt={altText} className={className} />


    </div>
  )
}

export default Image