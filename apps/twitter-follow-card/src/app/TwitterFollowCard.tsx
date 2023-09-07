import { useState } from 'react';

type TwitterFollowCardProps = {
  name: string;
  userName: string;
  isFollowing: boolean;
};

export default function TwitterFollowCard({ name, userName = 'unknow', isFollowing }: TwitterFollowCardProps) {
  
  const [initialIsFollowing, setIsFollowing] = useState(isFollowing);

  const handleIsFollowing = () => {
    setIsFollowing(!initialIsFollowing);
  };
  const buttonText = initialIsFollowing ? 'Siguiendo' : 'Seguir';

  const buttonClassName = initialIsFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleIsFollowing}>
          <span className="tw-followCard-text">{buttonText}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}