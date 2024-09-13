import React from 'react'
import SendInput from './SendInput';
import Messages from './Messages';

export default function ChatContainer() {
  return (
    <>
      <div className='flex flex-col'>

       <div className="flex items-center gap-2 p-[9px] w-[60vw] bg-gray-800">
        {/* Avatar Div Starting */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740"
              alt="default-image"
              />
          </div>
        </div>

        {/* Name Div Starting */}
        <div className="flex flex-1">
          <p className="text-white font-bold">Safi</p>
        </div>
      </div>

      <div className="divider px-4"></div>

    {/* Second Component */}

    <Messages/>

    {/* Third Component */}
      
      <SendInput/>
      </div>

    </>
  );
}