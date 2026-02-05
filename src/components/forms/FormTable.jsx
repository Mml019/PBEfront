import { Table } from "react-bootstrap"
import CheckBox from "./FormCheck";

export default function FormTable({ register, errors }) {
    const RANKING_VALUES = {
        'Nunca': 0,
        'De vez en cuando': 1,
        'Menos de la mitad del tiempo': 2,
        'Más de la mitad del tiempo': 3,
        'La mayor parte del tiempo': 4,
        'Todo el tiempo': 5,
    }

    const questions = {
        "Me he sentido alegre y de buen humor": "happy_sas",
        "Me he sentido tranquilo/a y relajado/a": "calm_sas",
        "Me he sentido activo/a y enérgico/a": "active_sas",
        "Me he sentido fresco/a y renovado/a": "fresh_sas",
        "Me he sentido interesado/a y motivado/a": "interest_sas"
    }

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Durante las últimas semanas, ¿cuánto tiempo…?</th>
                    {Object.entries(RANKING_VALUES).map((e, ind) => (
                        <th key={`rank_val_${ind}`}>
                            {e[0]}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {/* every row must be registered */}
                {Object.entries(questions).map(([question, type], ind) => (
                    <tr key={`row_${ind}`}>
                        <td key={`question_${ind}`}>{question}</td>
                        {Object.entries(RANKING_VALUES).map(([rank, num], index) => (
                            <td key={`${type}_${num}`}>
                                <CheckBox
                                    inline
                                    register={register}
                                    errors={errors}
                                    id={`${type}_${num}`}
                                    key={`${type}_${num}`}
                                    //name={`${question}:${type}`}
                                    name={`${type}`}
                                    type="radio"
                                    label={num}
                                    value={num}
                                    index={num}
                                />
                                {!!errors[`${type}`] &&
                                    <div className="invalid-feedback d-block">
                                        {errors[`${type}`].message}
                                    </div>}
                            </td>
                        ))}
                    </tr>
                ))
                }
            </tbody>
        </Table>);