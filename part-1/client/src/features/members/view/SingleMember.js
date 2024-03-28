import "./single-member.css"

const SingleMember = () => {
    const member = {}
    return (
        <div className="single-member-conteiner">
            <div className="single-member-info">
                <div className="singlr-member-img">
                    <img src={member.image || "/noavatar.png"} alt="" fill />
                </div>
            </div>
        </div>
    )
}

export default SingleMember