import { Link } from "react-router-dom"
import { useEffect } from "react"
import Search from "../../../components/search/Search"
import { useGetAllMembersQuery, useDeleteMemberMutation } from "../membersApiSlice"
import "./members-list.css"
import { MdOutlinePersonAddAlt } from "react-icons/md"
import { useGotSickMutation } from "../../corona/CoronaApiSlice"

const MembersList = () => {

    const [deleteOneMember, { isSuccess: isDeleted }] = useDeleteMemberMutation()
    const [got_sick, { isSuccess: issick }] = useGotSickMutation()

    const deleteFunc = member => {
        if (window.confirm("בטוח שברצונך למחוק את החבר?")) {
            deleteOneMember({ _id: member._id })
        }
    }
    const gotSickFunc = member => {
        got_sick(member._id)
    }
    const { data: membersObject, isError, isLoading, error, isSuccess } = useGetAllMembersQuery()
    if (isLoading) return <h1>Loading...</h1>

    //     useEffect(()=>{
    //     if(isSuccess){
    // console.log('success');
    //     }
    //     },[isSuccess])


    if (isError) return <h1>{JSON.stringify(error)}</h1>

    return (
        <div className='members-list'>
            <div className='member-list-top'>
                <Search placeholder={"חיפוש לפי שם"} />
                <Link to={"/members/add"} className="members-list-add-button">
                    <MdOutlinePersonAddAlt />  Add new member
                </Link>
            </div>
            <table className="members-list-table">
                <thead>
                    <tr>
                        <td>name</td>
                        <td>id</td>
                        <td>got sick</td>
                        <td>recovered</td>
                        <td>get vaccinated</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {membersObject.data?.map(member => (
                        <tr key={member._id}>
                            <td>
                                <div className="members-list-member">
                                    <img
                                        src={member.image ? "http://localhost:1010/images/" + member.image : "/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="member-image" />
                                    {`${member.name.last_name} ${member.name.first_name}`}
                                </div>
                            </td>
                            <td>
                                {member.id}
                            </td>
                            <td>{member.coronaDetails?.positive_result?.toString().slice(0, 10)}</td>
                            <td>{member.coronaDetails?.recovery?.toString().slice(0, 10)}</td>
                            <td></td>
                            <td className="members-list-buttons">
                                {/* <Link to={member._id} className="members-list-button members-list-view">Details</Link> */}
                                <Link to={`edit/${member._id}`} className="members-list-button members-list-view">Details</Link>
                                {/* <Link to={`edit/${member._id}`} className="members-list-button members-list-edit">Edit</Link> */}
                                <button onClick={() => deleteFunc(member)} className="members-list-button members-list-delete">Delete</button>
                                {/* <button onClick={() => gotSickFunc(member)} className="members-list-button members-list-got-sick">Got sick</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MembersList