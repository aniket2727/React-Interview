


//



import react from "react";

import React from 'react'
import Drive from "./Drive";

const Mainapp = () => {
    const drives = [
        {
          driveName: 'C:',
          folders: [
            { name: 'Program Files', files: ['ProgramFile1.txt', 'ProgramFile2.txt'] },
            { name: 'Users', files: ['User1.txt', 'User2.txt'] },
          ],
        },
        {
          driveName: 'D:',
          folders: [
            { name: 'Documents', files: ['Document1.txt', 'Document2.txt'] },
            { name: 'Images', files: ['Image1.png', 'Image2.jpg'] },
          ],
        },
      ];
  return (
    <div>
        <h1>Folder Structure</h1>
        {
            drives.map((item)=>(
                <Drive key={item.driveName} driveName={item.driveName} folders={item.folders}/>
            ))
        }
    </div>
  )
}

export default Mainapp
