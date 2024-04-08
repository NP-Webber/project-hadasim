import { useGetAllMembersQuery, useUpdateMemberMutation } from "../membersApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import './edit-member.css'
import { useEffect, useState } from "react";

const EditMember = () => {
    const { memberId } = useParams()
    const { data: membersObject, isError, error, isLoading } = useGetAllMembersQuery()
    const [updateMember, { isSuccess }] = useUpdateMemberMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            console.log("navigate");
            navigate("/members")

        }
    }, [isSuccess])
    const formSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        updateMember(data)
    }
    if (isLoading) return <h1> Loading ...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    const member = membersObject.data.find(mem => mem._id === memberId)
    if (!member) return <h1>{"Not found"}</h1>


    return (


        <div className="single-member-conteiner">
            <div className="single-member-info">
                <div className="single-member-img-container">
                    <div className="single-member-img">
                        <img src={member.image ? "http://localhost:1010/images/" + member.image : "/noavatar.png"}
                            alt="" />
                    </div>
                </div>
                {`${member.name.last_name} ${member.name.first_name}`}
            </div>
            <div className="single-member-form-container">
                <form onSubmit={formSubmit} className="single-member-form">
                    <input name="_id" defaultValue={member._id} type="hidden" />
                    <label>first name</label>
                    <input
                        defaultValue={member.name.first_name}
                        type="text"
                        name="firstName"
                        placeholder="insert first name"
                        required
                    />
                    <label>last name</label>
                    <input
                        defaultValue={member.name.last_name}
                        type="text"
                        name="lastName"
                        placeholder="insert last name"
                        required
                    />
                    <label>id</label>
                    <input
                        defaultValue={member.id}
                        type="text"
                        name="id"
                        placeholder="insert id"
                        required
                    />
                    <label>city</label>
                    <input
                        defaultValue={member.adress.city}
                        type="text"
                        name="city"
                        placeholder="insert city"
                    />
                    <label>street</label>
                    <input
                        defaultValue={member.adress.street}
                        type="text"
                        name="street"
                        placeholder="insert street"
                    />
                    <label>building number</label>
                    <input
                        defaultValue={member.adress.numB}
                        type="number"
                        name="numB"
                    />
                    <label>birthDate</label>
                    <input
                        defaultValue={member.birthDate.toString().slice(0, 10)}
                        type="date"
                        name="birthDate"
                        required
                    />
                    <label>phone</label>
                    <input
                        defaultValue={member.phone}
                        type="text"
                        name="phone"
                        placeholder="insert phone number"
                    />
                    <label>cell phone</label>
                    <input
                        defaultValue={member.mobile}
                        type="text"
                        name="mobile"
                        placeholder="insert cell phone number"
                    />
                    <input type="file" name="image" />
                    <button type="submit">update</button>

                </form>

            </div>
        </div>
    )
}


export default EditMember