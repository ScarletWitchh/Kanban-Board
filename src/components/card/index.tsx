import React from "react";
import styles from "./index.module.scss";
import { CardProps } from "./index.interface";

const TicketCard: React.FC<CardProps> = ({
  about,
  status,
  title,
  userImage,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.ticketSummary}>
        <div className={styles.ticketHeader}>
          <h4 className={styles.title}>{title}</h4>
          <i className={styles.icon}><img src={userImage} /></i>
        </div>
        <p className={styles.about}>{about}</p>
        <div className={styles.status}>{status}</div>
      </div>
    </div>
  );
};

export default TicketCard;
