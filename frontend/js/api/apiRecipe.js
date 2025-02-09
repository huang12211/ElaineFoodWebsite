//////////////////////////////////////////////////////////////////
// This file lists all the API custom endpoints for the Recipes //
//////////////////////////////////////////////////////////////////

// import { API_ENDPOINT } from "./apiGlobal.js";
// import dotenv from './../../../node_modules/dotenv'
// import {RECIPE_API_URL} from './../../../.env';
// dotenv.config()
// const API_ENDPOINT = process.env.RECIPE_API_URL;
const API_ENDPOINT = 'https://elainefoodwebsite.onrender.com/';

async function fetchKeywordsTagsAndIngredients(keywords, tags, ingredientList){
    const [keywordResponse, tagsResponse, ingrResponse] = await Promise.all([
        fetch(`${API_ENDPOINT}/recipes/searchKeyword?keyword=${keywords}`),
        fetch(`${API_ENDPOINT}/recipes/searchTag?tag=${tags}`),
        fetch(`${API_ENDPOINT}/recipes/searchIngr?ingredient=${ingredientList}`)
    ]);
    
    const keywordRecipes = await keywordResponse.json();
    const tagsRecipes = await tagsResponse.json();
    const ingrRecipes = await ingrResponse.json();

    return [keywordRecipes, tagsRecipes, ingrRecipes];
}

async function fetchTagsAndIngredients(tags, ingredientList){
    const [tagsResponse, ingrResponse] = await Promise.all([
        fetch(`${API_ENDPOINT}/recipes/searchTag?tag=${tags}`),
        fetch(`${API_ENDPOINT}/recipes/searchIngr?ingredient=${ingredientList}`)
    ]);
    
    const tagsRecipes = await tagsResponse.json();
    const ingrRecipes = await ingrResponse.json();

    return [tagsRecipes, ingrRecipes];
}

async function fetchKeywordsAndIngredients(keywords, ingredientList){
    const [keywordResponse, ingrResponse] = await Promise.all([
        fetch(`${API_ENDPOINT}/recipes/searchKeyword?keyword=${keywords}`),
        fetch(`${API_ENDPOINT}/recipes/searchIngr?ingredient=${ingredientList}`)
    ]);
    
    const keywordRecipes = await keywordResponse.json();
    const ingrRecipes = await ingrResponse.json();

    return [keywordRecipes, ingrRecipes];
}

async function fetchKeywordsAndTags(keywords, tags){
    const [keywordResponse, tagsResponse] = await Promise.all([
        fetch(`${API_ENDPOINT}/recipes/searchKeyword?keyword=${keywords}`),
        fetch(`${API_ENDPOINT}/recipes/searchTag?tag=${tags}`)
    ]);
    
    const keywordRecipes = await keywordResponse.json();
    const tagsRecipes = await tagsResponse.json();

    return [keywordRecipes, tagsRecipes];
}

function findCommonIn2Lists(shortList, longList){
    //find the shortlist items that are in common with the longlist
    let finalRecipes = [];
    for (let i = 0; i < shortList.length; i++){
        for (let j = 0; j < longList.length; j++){
            if (shortList[i].recipe == longList[j].recipe){
                finalRecipes.push(shortList[i].recipe);
                console.log("shortList.recipe", shortList[i].recipe);
            } 
        }
    }
}

function findCommonIn3Lists(shortList, medList, longList){
    let finalRecipes = [];
    for (let i = 0; i < shortList.length; i++){
        for (let j = 0; j < medList.length; j++){
            for (let k = 0; k < longList.length; k++){
                if (shortList[i].recipe == medList[j].recipe && shortList[i].recipe == longList[k].recipe){
                    finalRecipes.push(shortList[i].recipe)
                    console.log("shortList.recipe", shortList[i].recipe);
                }
            }
        }
    }
}

export const getRequestedRecipes = async (keywords, tags, ingredientList) => {
    let finalRecipes = []
    let noKeywords = null;
    if (keywords == null || keywords == ''){
        noKeywords = true;
    }
    let noTags = null;
    if (tags == null || tags == ''){
        noTags = true;
    }
    let noIngredients = null;
    if (ingredientList == null || ingredientList == ''){
        noIngredients = true;
    }


    if (noKeywords && noTags && noIngredients){
        finalRecipes = null;
    }
    else if (noKeywords && noTags){
        const ingrResponse = await fetch(`${API_ENDPOINT}/recipes/searchIngr?ingredient=${ingredientList}`);
        const ingrRecipes = await ingrResponse.json();
        for (let i = 0; i < ingrRecipes.data.length; i++){
            finalRecipes.push(ingrRecipes.data[i].recipe);
        }
    }
    else if (noKeywords && noIngredients){
        const tagsResponse = await fetch(`${API_ENDPOINT}/recipes/searchTag?tag=${tags}`);
        const tagsRecipes = await tagsResponse.json();
        for (let i = 0; i < tagsRecipes.data.length; i++){
            finalRecipes.push(tagsRecipes.data[i].recipe);
        }
    }
    else if (noTags && noIngredients){
        const keywordResponse = await fetch(`${API_ENDPOINT}/recipes/searchKeyword?keyword=${keywords}`);
        const keywordRecipes = await keywordResponse.json();
        for (let i = 0; i < keywordRecipes.data.length; i++){
            finalRecipes.push(keywordRecipes.data[i].recipe);
        }
    }
    else if (noKeywords || noTags || noIngredients){
        if (noKeywords){
            fetchTagsAndIngredients(tags, ingredientList).then(([tagsRecipes, ingrRecipes]) => {
                let longList = ingrRecipes.data;
                let shortList = tagsRecipes.data;
                if (tagsRecipes.data.length > ingrRecipes.data.length){
                    longList = tagsRecipes.data;
                    shortList = ingrRecipes.data;
                }
                //find the shortlist items that are in common with the longlist
                findCommonIn2Lists(shortList, longList);
            });
        }
        else if (noTags){
            fetchKeywordsAndIngredients(keywords, ingredientList).then(([keywordRecipes, ingrRecipes]) => {
                let longList = keywordRecipes.data;
                let shortList = ingrRecipes.data;
                if (ingrRecipes.data.length > keywordRecipes.data.length){
                    longList = ingrRecipes.data;
                    shortList = keywordRecipes.data;
                }
                //find the shortlist items that are in common with the longlist
                findCommonIn2Lists(shortList, longList);
            });
        }
        else{
            fetchKeywordsAndTags(keywords, tags).then(([keywordRecipes, tagsRecipes]) => {
                let longList = keywordRecipes.data;
                let shortList = tagsRecipes.data;
                if (tagsRecipes.data.length > keywordRecipes.data.length){
                    longList = tagsRecipes.data;
                    shortList = keywordRecipes.data;
                }
                //find the shortlist items that are in common with the longlist
                findCommonIn2Lists(shortList, longList);
            });
        }
    }
    else{
        fetchKeywordsTagsAndIngredients(keywords, tags, ingredientList).then(([keywordRecipes, tagsRecipes, ingrRecipes]) => {
            let longList = keywordRecipes.data;
            let medList = tagsRecipes.data;
            let shortList = ingrRecipes.data;

            //short the arrays by shortest to longest list of results
            if (keywordRecipes.data.length >= tagsRecipes.data.length && keywordRecipes.data.length >= ingrRecipes.data.length){
                if (tagsRecipes.data.length > ingrRecipes.data.length){
                    longList = keywordRecipes.data;
                    medList = tagsRecipes.data;
                    shortList = ingrRecipes.data;
                }
                else{
                    longList = keywordRecipes.data;
                    medList = ingrRecipes.data;
                    shortList = tagsRecipes.data;
                }
            }
            else if (tagsRecipes.data.length >= keywordRecipes.data.length && tagsRecipes.data.length >= ingrRecipes.data.length){
                if (keywordRecipes.data.length > ingrRecipes.data.length){
                    longList = tagsRecipes.data;
                    medList = keywordRecipes.data;
                    shortList = ingrRecipes.data;
                }
                else{
                    longList = tagsRecipes.data;
                    medList = ingrRecipes.data;
                    shortList = keywordRecipes.data;
                }
            }
            else {
                if(keywordRecipes.data.length > tagsRecipes.data.length){
                    longList = ingrRecipes.data;
                    medList = keywordRecipes.data;
                    shortList = tagsRecipes.data;
                }
                else{
                    longList = ingrRecipes.data;
                    medList = tagsRecipes.data;
                    shortList = keywordRecipes.data;
                }
            }
            findCommonIn3Lists(shortList, medList, longList);
        }).catch(error => {
            console.log('error in fetching Keywords, Tags and Ingredients');
        });

    }

    console.log("final Recipes", finalRecipes);
    return finalRecipes;
};

export const getRecipeInfo = async (searchResultsRecipes) => {
    console.log("searchResultsRecipes ", searchResultsRecipes); //verify inputs to the function

    //look up recipes by Recipe name 
    const lookupResponse = await fetch(`${API_ENDPOINT}/recipes/searchName?recipeName=${searchResultsRecipes}`);
    const lookedupRecipeInfo = await lookupResponse.json();
    // console.log("lookedupRecipeInfo ", lookedupRecipeInfo.data);

    return lookedupRecipeInfo.data;
};

export const getRecipeInfoIngredients = async (recipeName) => {
    console.log("recipeName", recipeName); //verify inputs to this function

    //look up ingredients list by Recipe Name
    const ingredients = await fetch(`${API_ENDPOINT}/recipes/${recipeName}`)
    const ingredientsDetails = await ingredients.json();

    // console.log("ingredientsDetails", ingredientsDetails.data);

    return ingredientsDetails.data;
}
