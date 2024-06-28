import React from "react";

const defaultTodos = [
  { text: "Cocinar", completed: true },
  { text: "Tomar el Curso de React.js", completed: false },
  { text: "Salir en Bici", completed: false },
];

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))
  const {
    sincronizedItem,
    item,
    loading,
    error
  } = state

  //Action Creator
  const onError = (error) =>  dispatch({ type: actionTypes.error, payload:error })
  const onSuccess = (item) =>  dispatch({ type: actionTypes.success, payload:item })
  const onSave = (item) =>  dispatch({ type: actionTypes.save, payload:item })
  const onSincronize = () =>  dispatch({ type: actionTypes.sincronize })


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = [];

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem)

      } catch (error) {
        onError(error)
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
    
  };

  const sincronizeItem = () => {
    onSincronize()
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem:true,
  item:initialValue,
  loading:true,
  error:false
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]:{
    ...state,
    error:true
  },
  [actionTypes.success]:{
    ...state,
    error:false,
    loading:false,
    sincronizedItem:true,
    item:payload
  },
  [actionTypes.save]:{
    ...state,
    item:payload
  },
  [actionTypes.sincronize]:{
    ...state,
    loading:true,
    sincronizedItem:false
  }
})

const reducer = (state, action) =>{
  return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage };

