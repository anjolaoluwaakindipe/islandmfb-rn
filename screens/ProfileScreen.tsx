import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout"
import AppText from "../components/shared/Apptext"
import tw from "twrnc";








const ProfileScreen = () => {



    return (
        <BasicBackButtonLayout>

            <AppText style={tw`text-3xl mt-10`}>Profile</AppText>
        </BasicBackButtonLayout>
    )

}



export default ProfileScreen