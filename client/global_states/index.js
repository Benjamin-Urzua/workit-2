import {createGlobalState} from  'react-hooks-global-state'

const {setGlobalState, useGlobalState} = createGlobalState({
    vistaAdmin:'admin'
})

export {useGlobalState, setGlobalState}