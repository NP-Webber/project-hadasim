import "./add-member.css"
import { useAddMemberMutation } from "../membersApiSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"



const AddMember = () => {
    const [addOneMember, { data, isError, isLoading, isSuccess, error }] = useAddMemberMutation()
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navigate("/members")
        }

    }, [isSuccess])

    const formSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        // console.log(`data:${data}`);
        addOneMember(data)
    }
    return (
        <div className="add-member-conteiner">
            <form className="add-member-form" onSubmit={formSubmit}>
                <input type="text" required name="firstName" placeholder="first name" />
                <input type="text" required name="lastName" placeholder="last name" />
                <input type="text" required name="id" placeholder="id" />
                <input type="text" name="city" placeholder="city" />
                <input type="text" name="street" placeholder="street" />
                <input type="number" name="numB" placeholder="num house" />
                {/* <label for="birthdate">birthdate</label> */}
                <input id="birthdate" type="date" required name="birthDate" />
                <input type="text" name="phone" placeholder="phone" />
                <input type="text" name="mobile" placeholder="cell phone" />
                <input type="file" name="image" />
                <button type="submit">send</button>

            </form>
        </div>
    )
}

export default AddMember