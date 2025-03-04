import AuthModule from "@/modules/auth";

export default function AuthPage(){
    return(
        <div className={'container mx-auto flex flex-grow justify-center items-center h-screen'}>
                <AuthModule />
        </div>

    )
}