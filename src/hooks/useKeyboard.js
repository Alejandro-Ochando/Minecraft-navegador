import { useEffect, useState } from "react"

const ACTIONS_KEYBOARD_MAP = {
    'KeyW': 'moveForward',
    'KeyS': 'moveBackward',
    'KeyA': 'moveLeft',
    'KeyD': 'moveRight',
    'Space': 'jump',
    'Digit1': 'ground',
    'Digit2': 'glass',
    'Digit3': 'trunk',
    'Digit4': 'wood'

}

export const useKeyboard = () => {
    const [ actions, setActions ] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        ground: false,
        glass: false,
        trunk: false,
        wood: false
    })

    useEffect(() => {
        const handleKeyDown = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]
            
            if (action) {
                setActions(prevActions => ({
                    ...prevActions,
                    [action]: true
                }))
            }
        }

        const handleKeyUp = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]
            
            if (action) {
                setActions(prevActions => ({
                    ...prevActions,
                    [action]: false
                }))
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
                document.removeEventListener('keydown', handleKeyDown)
                document.removeEventListener('keyup', handleKeyUp)
        }
        
    }, [])

    return actions
}