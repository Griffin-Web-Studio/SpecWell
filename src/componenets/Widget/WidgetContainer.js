import React, { useState } from "react";
import WidgetHeader from "./Header/WidgetHeader";
import FormWrapper from "./FormWrapper";

export default function WidgetContainer(props) {
    const { onOptionUpdate, specOptions } = props;
    const [toggleState, setToggleState] = useState(true);

    const onContainerToggleHandler = () => {
        setToggleState(!toggleState);
    };

    const onFormChangeHandler = (newOptions) => {
        onOptionUpdate(newOptions);
    };

    return (
        <div className={`gwssc__container ${toggleState ? "" : "hide"}`}>
            <button type="button" className={`gwssc-toggle ${toggleState ? "" : "hide"}`} onClick={onContainerToggleHandler}>
                <span className="gwssc-toggle__label">
                    Spec-Check Options <span className="ico">⬆️</span>
                </span>
            </button>

            <div className="gwssc-container-inner">
                <div className="gwssc-grid col-1 gap-row-40">
                    <WidgetHeader />

                    <FormWrapper onFormChange={onFormChangeHandler} specOptions={specOptions} />
                </div>
            </div>
        </div>
    );
}
