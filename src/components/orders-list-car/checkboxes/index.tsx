import React from "react";
import { Checkbox } from "antd";
import "./index.scss";

function Checkboxes({ additions }: any) {
    return (
        <>
            <Checkbox
                checked={additions.tank}
                className="checkbox">
                Полный бак
            </Checkbox>
            <Checkbox
                checked={additions.chair}
                className="checkbox">
                Детское кресло
            </Checkbox>
            <Checkbox
                checked={additions.wheel}
                className="checkbox">
                Правый руль
            </Checkbox>
        </>
    );
}

export default Checkboxes;
