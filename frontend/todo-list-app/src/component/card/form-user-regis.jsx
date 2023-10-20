import Input from "../element/input"
import Button from "../element/Button"
export default function FormUserRegis(){
    return(
        <>
        <form>
            <Input type="text" placeHolder="username" />
            <Input type="text" placeHolder="password" />
            <Input type="text" placeHolder="role" />
            <Button text="kirim" />
        </form>
        </>
    )
}