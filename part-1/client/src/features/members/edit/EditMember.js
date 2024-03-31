import { useGetAllMembersQuery } from "../membersApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import './edit-member.css'

const EditMember = () => {
    const { memberId } = useParams()
    const { data: membersObject, isError, error, isLoading, isSuccess } = useGetAllMembersQuery()
    if (isLoading) return <h1> Loading ...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    console.log("membersObject");
    // console.log(membersObject);
    const member = membersObject.data.find(mem => mem._id === memberId)
    if (!member) return <h1>{"Not found"}</h1>

    return (

       
        <div className="single-member-conteiner">
            <div className="single-member-info">
                <div className="singlr-member-img">
                    <img src={member.image ? "http://localhost:1010/images/" + member.image : "/noavatar.png"}
                        alt="" fill />
                </div>
                {`${member.name.last_name} ${member.name.first_name}`}
            </div>
        </div>
    )
}


export default EditMember