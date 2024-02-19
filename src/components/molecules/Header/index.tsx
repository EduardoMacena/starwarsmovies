import { FC } from "react";
import HStack from "../../atoms/HStack";
import TextHeader from "../../atoms/TextHeader";
 
const Header: FC = () => {
    return ( <HStack>
        <TextHeader>Star Wars Movies</TextHeader>
    </HStack> );
}
 
export default Header;