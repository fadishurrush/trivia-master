import React, { useEffect, useState } from "react";
import TriviaContext from "./triviaContext";
import urls from "../api/url's";

const TriviaProvider = props =>{
    const [phone,setPhone]=useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [counter, setCounter] = useState(0);

    
    return (
        <TriviaContext.Provider
        value={{
            phone,
            setPhone,
            answeredQuestions,
            setAnsweredQuestions,
            counter,
            setCounter,
        }}>
            {props.children}
        </TriviaContext.Provider>
    )
}

export default TriviaProvider;