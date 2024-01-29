import Input from "./Input";

export default function UserInput({investment, setInvestment}) {

    function handleInitialInvestment(initialInvestment) {
        let newInvestment = {...investment, initialInvestment: initialInvestment}

        setInvestment(newInvestment);
    }

    function handleAnnualInvest(annualInvestment) {
        let newInvestment = {...investment, annualInvestment: annualInvestment};

        setInvestment(newInvestment);
    }

    function handleExpectedReturn(expectedReturn) {
        let newInvestment = {...investment, expectedReturn: expectedReturn};

        setInvestment(newInvestment);
    }

    function handleDuration(duration) {
        let newInvestment = {...investment, duration: duration};

        setInvestment(newInvestment);
    }
    return(
        <div id='user-input'>
            <div className="input-group">
                <Input label="Initial Investment" onNumberChange={handleInitialInvestment} />
                <Input label="Annual Investment" onNumberChange={handleAnnualInvest} />
            </div>
            <div className="input-group">
                <Input label="Expected Return" onNumberChange={handleExpectedReturn} />
                <Input label="Duration" onNumberChange={handleDuration} />
            </div>
        </div>
    )
}