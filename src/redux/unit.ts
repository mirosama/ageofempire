import axios from './api';

import { IUnit } from '../model/unit.model';
import { put, takeLatest } from 'redux-saga/effects';


export const actionTypes = {
    FETCH_UNITS: "FETCH_UNITS",
    FETCH_UNITS_SUCCESS: "FETCH_UNITS_SUCCESS"
  };
  

  //actions
export const actions = {
    fetchUnits: () => ({ type: actionTypes.FETCH_UNITS }),

    fetchUnitsSuccess: (units:any) => ({
        type: actionTypes.FETCH_UNITS_SUCCESS,
        payload: { units },
      }),
    
}

const initialState = {
    units: [] as IUnit,
    loading: false,
    error: null,
  };
  
  export type UnitState = typeof initialState;

  //reducer
  export const UnitReducer = (state:UnitState = initialState, action: any):UnitState => {

    switch (action.type) {

    case actionTypes.FETCH_UNITS_SUCCESS:
        return {
            ...state,
            loading: false,
            units: action.payload.units,
        };


        default:
            return state;
        
      };
      
  };


  //redux saga 

  export function* fetchAllUnits () {
    yield takeLatest(actionTypes.FETCH_UNITS, async function* fetchUnits() {
      // const response = await callUnitService();
        let units =[] as Array<IUnit>;
        yield put(actions.fetchUnitsSuccess(units));
      });
  };



  //axios call 
  export const callUnitService =  () => {
    return  axios.get('/units').then(({data}) => {
      return data;
    }).catch(function (error) {
      console.log(error)
    });
  
  };
  