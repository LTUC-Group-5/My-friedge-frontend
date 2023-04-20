
import { useState, useRef } from "react";
import IngredientsModal from "../IngredientsModal/IngredientsModal";
import Button from 'react-bootstrap/Button';
import './home.css'
import home from './home.jpg'
import List from "../List/List";



export default function Home() {
    
    const [show, setShow] = useState(false);
    let choiceList = useRef([]);
    const [ingredients, setIngredient] = useState([]);
    const [data, setData] = useState([]);

    function RandomRes(obj) {
        this.image = obj.image;
        this.title = obj.title;
        this.id = obj.id
    }

    const choiceSubmit = () => {
        setShow(false);
        if (choiceList.current.length !== 0) {
            searchByIngredient();

            choiceList.current = [];
            console.log(choiceList.current);
        }
    }

    const handleClose = (e) => {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
        getFavorateIngredients();
    }

    async function getFavorateIngredients() {
        let baseURL = process.env.REACT_APP_SERVER_URL;
        let ingredientURL = '/allIngredients?userID=1';
        setIngredient("loading");
        let recipeResponse = await fetch(baseURL + ingredientURL, {
            method: 'GET',
        })

        let recivedData = await recipeResponse.json();
        setIngredient(recivedData);
    }

    async function searchByIngredient() {
        let baseURL = process.env.REACT_APP_SERVER_URL;
        let ingredientURL = `/findByIngredients?ingredients=${JSON.stringify(choiceList)}`;
        setIngredient("loading");
        let response = await fetch(baseURL + ingredientURL, {
            method: 'GET',
        })

        let recivedData = await response.json();

        if (recivedData && !response.status) {
            recivedData = recivedData.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    image: item.image
                }
            })
            console.log("by ingredient", recivedData);
            setData(recivedData);
        }

    }

    async function getRandomRecipe() {

        const baseURL = `${process.env.REACT_APP_SERVER_URL}/randomRecipes`;

        const response = await fetch(baseURL,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'

                },
            })
        const searchRes = await response.json();
        let list = [];
        for (let i = 0; i < searchRes.recipes.length; i++) {
            list.push(new RandomRes(searchRes.recipes[i]));
        }
        setData(list);
    }


    return (
        <>
            <div className="home">

                <div className="homeimg">
                    <img src={home} />
                </div>

                <div className="content">
                    <h2> Don't be confused about what you will eat today </h2>
                    <h4 >Are you hungry?
                    </h4>

                    <Button className="button large" variant="primary" type="submit" onClick={handleShow}>find a recipe</Button>
                    <IngredientsModal show={show} ingredients={ingredients} handleClose={handleClose} choiceList={choiceList}
                        choiceSubmit={choiceSubmit} getRandom={() => { getRandomRecipe(); handleClose(); }} /></div>
            </div>
            {(data.length !== 0) ? <List data={data} type={"recipeSearch"} /> : <></>}
        </>

    )

}
