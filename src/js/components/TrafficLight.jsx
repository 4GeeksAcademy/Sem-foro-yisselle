import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [showPurple, setShowPurple] = useState(false);

    const changeColor = () => {
        if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else {
            setColor("red");
        }
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="bg-dark p-3 rounded">
                <div
                    onClick={() => setColor("red")}
                    className={"light red " + (color === "red" ? "selected" : "")}>
                </div>

                <div
                    onClick={() => setColor("yellow")}
                    className={"light yellow " + (color === "yellow" ? "selected" : "")}>
                </div>

                <div onClick={() => setColor("green")}
                    className={"light green " + (color === "green" ? "selected" : "")}>
                </div>

                {showPurple && (
                    <div
                        onClick={() => setColor("purple")}
                        className={"light purple" + (color === "purple" ? "selected" : "")}>
                    </div>
                )}

            </div>

            <div className="row mt-3">
                <div className="col">
                    <button
                        className="btn btn-info w-100"
                        onClick={() => setShowPurple(true)}
                    >
                        Agregar Luz Púrpura
                    </button>
                </div>

                <div className="col">
                    <button
                        className="btn btn-primary w-100"
                        onClick={changeColor}>
                        Cambiar Color
                    </button>
                </div>
            </div>

        </div>
    );
};

export default TrafficLight;