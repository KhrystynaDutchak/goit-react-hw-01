import clsx from 'clsx';
import css from './Profile.module.css';

export default function Profile({name, tag, location, image, stats: { followers, views, likes }}) {
    return (
        <div className={css.user}>
            <div className={css.info}>
                <div className={css.imageWrapp}>
                    <img
                        className={css.image}
                        src={image}
                        alt="User avatar"
                    />
                </div>
                <p className={css.name}>{name}</p>
                <p className={css.infoText}>@{tag}</p>
                <p className={css.infoText}>{location}</p>
            </div>

            <ul className={clsx("stats-list", css.stats)}>
                <li>
                    <span className={css.statTitle}>Followers</span>
                    <span className={css.statNumber}>{followers}</span>
                </li>
                <li>
                    <span className={css.statTitle}>Views</span>
                    <span className={css.statNumber}>{views}</span>
                </li>
                <li>
                    <span className={css.statTitle}>Likes</span>
                    <span className={css.statNumber}>{likes}</span>
                </li>
            </ul>
        </div>

    )
}