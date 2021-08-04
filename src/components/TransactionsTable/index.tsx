import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Prestação da casa</td>
                        <td className="withdraw">- R$450</td>
                        <td>Contas</td>
                        <td>05/07/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td className="deposit">R$5.000</td>
                        <td>Freelance</td>
                        <td>15/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}