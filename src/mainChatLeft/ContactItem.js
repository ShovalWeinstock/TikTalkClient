import defauldImg from '../defaultImage.jpg';

function ContactItem({id, name, onclick, lastChat }) {

    // The last message of the chat with the user. If it contains an attachement, show the type of the attachement (image/video/audio).

    const handleClick = function () {
        onclick({picture: defauldImg, name: name, id: id});
    }

    //if the msg is too long show a shorten verion in the contact preview
    var msgShortnen = function(msg){
        if (message.length > 20){
            msg = msg.slice(0,19) + " ...";
        }
        return msg;
    }

    return (
        <div className="contact" onClick={handleClick}>

            {/* profile picture */}
            <div className='profilePicture'>
                <img src={defauldImg} className="cover"></img>
            </div>

            <div className="contactDetails">
                <div className="contactItemHeader">
                    {/* nickname */}
                    <h6>{name}</h6>
                    {/* Time of the last message */}
                    <p className="time">{lastChat.created}</p>
                </div>

                <div className="lastMessage">
                    {/* The last msg in the chat */}
                    <p className="lastMessege">{msgShortnen(lastChat.content)}</p>
                </div>

            </div>
        </div>
    )
}
export default ContactItem;