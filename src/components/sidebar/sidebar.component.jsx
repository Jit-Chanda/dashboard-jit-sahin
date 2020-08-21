import React from 'react';
import './sidebar.styles.css';
import SidebarRow from './sidebarRow.component';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <SidebarRow Icon={HomeSharpIcon} title="Vessel Operated"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="Rake Handled"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="Vehicle Entered"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="Bills Generated"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="PDA accounts"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="Import Containers"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="Export Containers"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="Cargo Handled"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="Customs-EDI Message"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="IPA-PCS Message"/><hr />
            <SidebarRow Icon={HomeSharpIcon} title="Internal Message"/><hr />
        </div>
    )
}

export default Sidebar;