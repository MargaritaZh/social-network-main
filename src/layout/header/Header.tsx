import logo from "../../assets/logo.svg"
import {Style} from "./Header.style"
import {UserElement} from "../../components/userElement/UserElement";
import {SvgIcon} from "../../components/SvgIcon";
import {dropDownMenuItems} from "../../data/data";
import {DropDownMenu} from "../../components/dropDownMenu/DropDownMenu";
import {v1} from "uuid";
import {Link} from "react-router-dom";
import {PATH} from "../../routes/PATHS.ts";


export const Header = () => {
    return (
        <Style.Header>
            <img src={logo} alt={"logotype"}/>
            <Style.Navigation>
                <Style.Menu>
                    {/*todo navlink*/}
                    <li>
                        <Link to={PATH.NEWS}><SvgIcon iconId={"newspaper"}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={PATH.DIALOGS}><SvgIcon iconId={"message"}/>
                        </Link>
                    </li>
                    <li>
                        <SvgIcon iconId={"notification"}/>
                    </li>
                </Style.Menu>
                <Style.UserMenu>
                    <UserElement id={v1()} name={"Настя Барашкова"} smallText={"@id234567890"} isOnline/>
                    <DropDownMenu menuItems={dropDownMenuItems}/>
                </Style.UserMenu>
            </Style.Navigation>
        </Style.Header>
    );
};

