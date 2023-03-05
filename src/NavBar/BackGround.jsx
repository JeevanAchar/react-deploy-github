import React from "react";
import BookTable from "./BookTable";
import Menu from "./Menu";
import Delisious from './Delisious';

const BackGround = () => {
    return (
        <div className="MainLog">
            <Delisious/>
            <Menu/>
            <BookTable/>
        </div>
    );
}
export default BackGround;