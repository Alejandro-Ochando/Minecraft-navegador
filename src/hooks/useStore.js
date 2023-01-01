import { nanoid } from 'nanoid'
import create from 'zustand'


export const useStore = create(set => ({
    texture: 'wood',
    cubes: [{
        id: nanoid(),
        pos: [1, 1, 1],
        texture: 'wood'
    }],
    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...state.cubes, {
                id: nanoid(),
                texture: state.texture,
                pos: [x, y, z]
            }]
        }))
    },
    setTexture: () => {},
    removeCube: () => {},
    saveWorld: () => {},
    resetWorld: () => {}
}))