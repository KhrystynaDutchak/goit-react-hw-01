import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from './FriendList.module.css';

export default function FriendList({ friends }){
    return(
        <ul className={clsx("friends-list", css.list)}>
            {friends.map(({ avatar, name, isOnline }, key) => (
                <li key={key} className={css.listItem}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    )
}