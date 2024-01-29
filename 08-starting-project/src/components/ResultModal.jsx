import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom'
const ResultModal = forwardRef(
    function ResultModal({ targetTime, remainingTime, onReset}, ref) {
        const dialog = useRef();
        const result = remainingTime <= 0;
        const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

        const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
        useImperativeHandle(ref, () => {
            return {
                open() {
                    dialog.current.showModal()
                }
            }
        })
        return createPortal(<dialog ref={dialog} className="result-modal">
            <h2>You {result ? 'Lost' : 'Won'} {!result && <>Score: {score}</>}</h2>

            <p>The target time was <strong>{targetTime} Second{targetTime > 1 ? 's' : null}</strong></p>
            {!result && <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>}
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>, document.getElementById("modal"))
    }
)
export default ResultModal