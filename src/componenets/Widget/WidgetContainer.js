import React, { useState } from "react";
import WidgetHeader from "./Header/WidgetHeader";
import FormWrapper from "./FormWrapper";

export default function WidgetContainer (props) {
    const {onFrameChange, onSpecChange} = props,
        [toggleState, setToggleState] = useState(true);

    const onContainerToggleHandler = () => {
        setToggleState(!toggleState);
    }

    const onFormChangeHandler = (formOptions) => {
        onFrameChange(formOptions.frameSrc);
        onSpecChange(formOptions.specSrc);
    }

    return (
        <div className={`gwssc-container ${toggleState ? '' : 'hide'}`}>

            <button type="button" className={`gwssc-toggle ${toggleState ? '' : 'hide'}`} onClick={onContainerToggleHandler}>
                <span className="gwssc-toggle__label">Spec-Check Options <span className="ico">⬆️</span></span>
            </button>

            <div className="gwssc-container-inner">
                <div className="gwssc-grid col-1 gap-row-40">
                    <WidgetHeader />

                    <FormWrapper onFormChange={onFormChangeHandler} />
                </div>
            </div>
        </div>
    )
}