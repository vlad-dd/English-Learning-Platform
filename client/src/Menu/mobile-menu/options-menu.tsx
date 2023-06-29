//@ts-nocheck
import Popup from "reactjs-popup";
import "./index.css";
import { IBurgerIcon } from "../types";
import MobileSiderMenu from ".";
import {
  BURGER_ICON_DATA_TEST_ID,
  BURGER_ICON_ID,
  BURGER_MENU_CLASSNAME,
  BURGER_MENU_OPENED_CLASSNAME,
  MENU_CLASSNAME,
  MOBILE_BURGER_MENU_ID
} from "../constants";

const BurgerIcon = ({ open, ...props }: IBurgerIcon) => {
  return (
    <div
      id={BURGER_ICON_ID}
      data-testid={BURGER_ICON_DATA_TEST_ID}
      className={open ? BURGER_MENU_OPENED_CLASSNAME : BURGER_MENU_CLASSNAME}
      {...props}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </div>
  )
}

const MobileOptionsMenu = () => (
  <Popup
    id={MOBILE_BURGER_MENU_ID}
    modal
    closeOnDocumentClick={false}
    trigger={open => <BurgerIcon open={open} />}
  >
    {close => <div className={MENU_CLASSNAME}><MobileSiderMenu onClose={close} /></div>}
  </Popup>
);

export default MobileOptionsMenu;