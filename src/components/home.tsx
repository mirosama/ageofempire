import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../config/rootReducer';


import {actions} from '../redux/unit'

export const Home = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(actions.fetchUnits());
       
      }, []);

    const units = useSelector((state:IRootState) =>  state.unit.units);

    console.log(units);
    
    return <div><h1>Hello Brother!!</h1></div>
}