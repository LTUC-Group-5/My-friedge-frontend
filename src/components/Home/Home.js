
import { useState,useRef } from "react";
import IngredientsModal from "../IngredientsModal/IngredientsModal";
import Button from 'react-bootstrap/Button';
import './home.css'
import home from'./home.jpg'



export default function Home() {
    const [show, setShow] = useState(false);
    const choiceList = useRef([]);
    const [ingredients, setIngredient] = useState([]);
    const [data, setData] = useState([]);

    const handleClose = () => {
        setShow(false);
    }

    async function handleShow() {
        setShow(true);
        getIngrediants();
    }

    async function getIngrediants() {
        let baseURL = process.env.REACT_APP_SERVER_URL;
        let ingredientURL = '/allIngredients?userID=1';
        setIngredient("loading");
        let recipeResponse = await fetch(baseURL + ingredientURL, {
            method: 'GET',
        })

        let recivedData = await recipeResponse.json();
        console.log("modal favorate", recivedData);
        setIngredient(recivedData);
    }

    async function getRandomRecipe() {


        const baseURL = `https://my-friedge.onrender.com/randomRecipes`;
        console.log("url base", baseURL);

        const response = await fetch(baseURL,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'

                },
            })
        const searchRes = await response.json();
        console.log("Random", searchRes.recipes[0]);

        function RndomRes(obj) {
            this.image = obj.image;
            this.title = obj.title;
            this.id = obj.id
        }

        let constdata = new RndomRes(searchRes.recipes[0])

        setData([constdata])
    }




    // console.log(55555555555,data);

//  <div className="home">
       //     <h1 >welcom to home </h1>
        //  <h4 >are you hungry?</h4>
       //     <Button variant="primary" type="submit" onClick={handleShow}>Find a Recipe</Button>
      //      <IngredientsModal show={show} ingredients={ingredients} handleClose={(e) => handleClose(e)} />
      //  </div>



return(
    <>
    <div className="home">

    <div className="homeimg">
        <img src={home}/>
    </div>

    <div className="content">
    <h2> Don't be confused about what you will eat today </h2>
    <h4 >Are you hungry?
    </h4>

    <Button className="button large" variant="primary" type="submit" onClick={handleShow}>find a recipe</Button>
    <IngredientsModal show={show} ingredients={ingredients} handleClose={handleClose}/></div>

        </div>
         </>

    )
}

