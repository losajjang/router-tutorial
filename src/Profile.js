import React from 'react';
import { useParams } from 'react-router-dom';

// 프로필에서 사용할 데이터
const profileData = {
  pjm: {
    name: '박재민',
    description: 'Frontend Engineer',
  },
  psy: {
    name: '박상용',
    description: 'before pjm',
  },
};

const Profile = () => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  // const {username} = match.params;
  const {username} = useParams()
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
