import { combineReducers } from 'redux'

const createUserReducers = (previousUserData= [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        birthday: 'Oct 2 2012',
        age: 32,
        hobby: 'foothball'
      },
      {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        birthday: 'Jun 4 2009',
        age: 42,
        hobby: 'baseball'
      }
], action) => {
    if(action.type === 'New_User') {
        return [...previousUserData, action.payLoad]
    }
    return previousUserData;
}

export default combineReducers({
    userInfo: createUserReducers
})