import React, { FC } from 'react';
import { FormData } from 'utils/types';
import './FormCard.scss';

const FormCard: FC<FormData> = (props) => {
  return (
    <div className="form-card__wrapper" data-testid="formCard">
      <h4 className="form-card__title" data-testid="formCard-name">
        {props.firstName} {props.lastName}
      </h4>
      <p className="form-card__text" data-testid="formCard-birthday">
        Birthday: {props.birthday}
      </p>
      <p className="form-card__text" data-testid="formCard-country">
        Country: {props.country}
      </p>
      <p className="form-card__text" data-testid="formCard-promo">
        Agree to subscribe to newsletters: {props.promo ? 'Yes' : 'No'}
      </p>
      <p className="form-card__text" data-testid="formCard-gender">
        Gender: {props.gender}
      </p>
    </div>
  );
};

export default FormCard;