import React from 'react';
import Hero from '../Hero/index';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
    return (
        <div>
        <Hero />
        <img src="./Assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
        </div>
        );
    }
    export default Board;

