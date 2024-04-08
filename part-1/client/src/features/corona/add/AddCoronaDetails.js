import "./add-corona-details.css"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useAddCoronaDetailsMutation } from "../CoronaApiSlice"

const AddCoronaDetails = () => {
    const [addDetails, { data, isError, isLoading, isSuccess, error }] = useAddCoronaDetailsMutation()
    const { memberId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navigate("/members")
        }

    }, [isSuccess])

    const formSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const coronaObject=Object.fromEntries(data.entries())
        addDetails(coronaObject)
    }
    return (
        <div className="add-member-conteiner">
            <form className="add-member-form" onSubmit={formSubmit}>
                <input name="memberId" defaultValue={memberId} type="hidden" />
                <div>
                    <label>got sick</label>
                    <input type="date" name="positive_result" />
                </div>
                <div>
                    <label>recovery</label>
                    <input type="date" name="recovery" />
                </div>
                <button type="submit">send</button>

            </form>
        </div>
    )
}

export default AddCoronaDetails