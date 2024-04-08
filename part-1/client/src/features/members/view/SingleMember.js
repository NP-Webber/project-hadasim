import { useGetAllMembersQuery } from "../membersApiSlice";
import "./single-member.css"
import { useParams } from "react-router-dom";


const SingleMember = () => {
    const {memberId}  = useParams()
    const { data: membersObject, isError, error, isLoading, isSuccess } = useGetAllMembersQuery()
    console.log(`memberId ${memberId}`);

    if (isLoading) return <h1> Loading ...</h1>
    if (isError) return <h1>{JSON.stringify(error)}</h1>
    if (!isSuccess) return <h1>{JSON.stringify(error)}</h1>
    else {
        console.log("membersObject");
        console.log(membersObject);
    }
    const member = membersObject.data.find(mem => mem._id === memberId)
    console.log(member);
    if (!member) return <h1>{"Not found"}</h1>

    return (
        <div className="single-member-conteiner">
            <div className="single-member-info">
                <div className="single-member-img-container">
                    <img src={member.image ? "http://localhost:1010/images/" + member.image : "/noavatar.png"}
                        alt="" fill />
                </div>
                {`${member.name.last_name} ${member.name.first_name}`}
            </div>
        </div>
    )
}

export default SingleMember