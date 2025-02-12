import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets/assets";
import { Context } from "../../context/Context";

function Sidebar() {
  const [extend, setExtend] = useState(false);
  const { onSent, prevPrompt, setrecentPrompt,newChat } = useContext(Context);

  // for clicking show the preious data
  const loadPrompt=async(prompt)=>{
    setrecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtend((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extend ? <p>new chat</p> : null}
        </div>
        {extend ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry"  key={index}>
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,20)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
