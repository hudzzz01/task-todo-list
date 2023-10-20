import "../../style/Style.css"
export default function Input(promp){
    return(
        <>
            <input id="input-element" type={promp.type} placeholder={promp.placeHolder}></input>
        </>
    )

}
