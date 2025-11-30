// ProfileCard.jsx
import "./ProfileCard.css";
import profile from "../assets/profile.jpeg";

export default function ProfileCard() {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/dagimawi-tamrat", "_blank");
  };

  return (
    <div className="card">
      <img
        className="card-image"
        src={profile}
        alt="Profile"
      />

      <div className="card-content">
        <h2 className="name">
          Dagimawi Tamrat <span className="verified">✔</span>
        </h2>

        <p className="bio">
          An Aspiring Full Stack Developer focused on solving problems
        </p>

        <div className="stats">
          <span>👥 500</span>
        </div>

        {/* FOLLOW BUTTON → Opens LinkedIn */}
        <button className="follow-btn" onClick={openLinkedIn}>
          Follow
        </button>
      </div>
    </div>
  );
}
