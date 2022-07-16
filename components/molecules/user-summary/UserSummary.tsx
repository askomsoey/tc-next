import Image from 'next/image';
import React from 'react';
import styles from './user-summary.module.scss';

import { IUser } from '../../../shared/interface/user';

interface UserSummaryProps {
  user: IUser;
}

export const UserSummary = ({ user }: UserSummaryProps) => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      {user.profileHeaderImg && (
        <Image src={user.profileHeaderImg} layout='fill' />
      )}
    </div>
    <div className={styles.profileImgContainer}>
      {user.profileImg && <Image src={user.profileImg} layout='fill' />}
    </div>
    <div className={styles.infoContainer}>
      <span className={styles.username}>@{user.username!}</span>
      {user.bio && <span className={styles.bio}>{user.bio}</span>}
    </div>
  </div>
);
