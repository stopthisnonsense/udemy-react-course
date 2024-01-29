import { calculateInvestmentResults, formatter } from "../util/investment";
import TableRow from "./TableRow";
export default function Results({investment}) {
    let table = calculateInvestmentResults(investment);
    const {initialInvestment} = investment;
    return(
        <div id='result'>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>interest (year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {table.map((tableRow, index) => {
                return <TableRow key={index} data={{...tableRow, ...initialInvestment}} />
            })}

          </tbody>
        </table>
      </div>
    )

}