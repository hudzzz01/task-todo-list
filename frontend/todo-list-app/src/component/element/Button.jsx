import "../../style/Style.css"
import H1 from "./Text"
export default function Button(promp){
    return(<>
        <button id="Button" type={promp.type} width={promp.width} high={promp.high} onClick={promp.click} ><H1 text={promp.text} /></button>
    </>)
}