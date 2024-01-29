import { formatter } from "../util/investment"
export default function TableRow({data}) {
    const {year, interest, valueEndOfYear, initialInvestment, annualInvestment} = data

    let calculatedInterest = (valueEndOfYear - annualInvestment * year)
    return(
        <tr>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(calculatedInterest)}</td>
            <td>{formatter.format(annualInvestment * year)}</td>
        </tr>
    )
}