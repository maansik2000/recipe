import React from 'react';
import style from './recipe.module.css';

const Recipe = ({key,title,calories,image,ingredient}) =>{
    return (
        <div className={style.recipe}>
            <h1 className={style.header}>{title}</h1>
            <img src={image} className={style.image} alt=""></img>
            <h3></h3>
            <ol>
                {ingredient.map(ingre => (
                    <li>{ingre.text}</li>
                ))}
            </ol>
            <h3>Calories</h3>
            <p>{Math.floor(calories)}kcal</p>
        </div>
    );
}

export default Recipe;