import { FC } from "react";
import "./ContactBar.scss";

export const ContactBar: FC = () => {
  return (
    <div className="ContactBar">
      <div className="ContactBar__phone">
        <span className="material-icons">phone</span>
        <span>111-222-3333</span>
      </div>
      <div className="ContactBar__fb">
        <span className="material-icons">facebook</span>
      </div>
    </div>
  );
};
