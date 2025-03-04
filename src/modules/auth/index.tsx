import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import SignInForm from "@/modules/auth/SignIn";
import SignUpForm from "@/modules/auth/SignUp";

export function AuthModule() {
    return (
        <Tabs defaultValue="SignIn" className="w-[600px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="SignIn">Sign In</TabsTrigger>
                <TabsTrigger value="SignUp">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="SignIn">
                <SignInForm />
            </TabsContent>
            <TabsContent value="SignUp">
                <SignUpForm />
            </TabsContent>
        </Tabs>
    )
}
export default AuthModule;