import Button from "../element/Button";
import H1 from "../element/Text";
import Input from "../element/input";


export default function LoginCard (){
    return(
        <><div id="login-card">
            <H1 text="Silahkan Login Untuk Menggunakan Todo-List"/>
            <Input type="text" placeHolder="username" />
            <Input type="password" placeHolder="password" />
            <Button type="submit" width="100" text="login"/>
            <Button type="submit" width="100" text="Register"/>
        </div>
        </>
    )
}