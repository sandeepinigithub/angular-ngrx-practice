import { createAction, props } from '@ngrx/store';

export const updateCountry = createAction(
    '[Demo Component] UPDATE_COUNTRY',
    props<{ country: any }>()
);

