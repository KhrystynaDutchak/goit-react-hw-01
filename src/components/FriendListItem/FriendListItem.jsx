import clsx from "clsx";
import css from './FriendListItem.module.css';


export default function FriendListItem({avatar, name, isOnline}) {
    const isOnlineClass = clsx(isOnline ? css.online : css.offline, css.status);
    return (
        <div className={css.item}>
            <img 
                src={avatar} 
                alt="Avatar" 
                className={css.image}
            />
            <p className={css.name}>{name}</p>
            <p className={isOnlineClass}>{isOnline ? 'Online' : "Offline"}</p>
        </div>
    )
}   