//@ts-nocheck
import React from "react";
import Popup from "reactjs-popup";
import MobileSiderMenu from ".";
import "./index.css";

const BurgerIcon = ({ open, ...props }: { open: boolean, props: any }) => {
  return (
    <div id="close-icon" data-testid="mobile-menu-icon" className={open ? "burger-menu open" : "burger-menu"} {...props}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </div>
  )
}

const MobileOptionsMenu = () => (
  <Popup
    id="burger-menu"
    modal
    closeOnDocumentClick={false}
    trigger={open => <BurgerIcon open={open} />}
  >
    {close => <div className="menu"><MobileSiderMenu onClose={close} /></div>}
  </Popup>
);

export default MobileOptionsMenu;