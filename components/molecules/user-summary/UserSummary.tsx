import Image from 'next/image';
import React from 'react';
import { IUser } from '../../../shared/interface/user';
import styles from './user-summary.module.scss';

interface UserSummaryProps {
  user: IUser;
}

export const UserSummary = ({ user }: UserSummaryProps) => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      {/* <Image
        src={user.profileHeaderImg || 'https://via.placeholder.com/100'}
        layout='fill'
      /> */}
    </div>
  </div>
);
