import React, { Fragment , useState , useRef } from 'react';
import './App.css'
import CardList from '../components/CardList/CardList'
import Filter from '../components/filter/Filter';
import Model from '../components/Model/Model';

const App = () => {
    const inputEl = useRef(null)
    const [cardToggle, setCardToggle] = useState(true);

    // const oStyle = { color: 'greenyellow', marginLeft: "30px" };
    // const myName = 'ahmad';
    // const names = ['ahmad', 'mazen', 'nouh', 'younes'];

    const [state, setState] = useState([
        {'id':1 , 'name': 'ahmad', 'age': '20', 'job':'developer' , 'nationality':'palastine', 'type':'man'},
        { 'id':2 ,'name': 'nour', 'age': '19' ,'job':'coder' , 'nationality':'palastine' ,'type':'woman'},
        { 'id':3 ,'name': 'nouh', 'age': '21','job':'programmer', 'nationality': 'palastine' ,'type':'man'}
    ]);

    // const developers = [
    //     { 'name': 'ahmad', 'age': '20', 'job':'developer' , 'nationality':'palastine'},
    //     { 'name': 'mazen', 'age': '19' ,'job':'coder' , 'nationality':'palastine'},
    //     { 'name': 'nouh', 'age': '21','job':'programmer', 'nationality': 'palastine' }
    // ];

    // const designers = [
    //     { 'name': 'aliaa', 'age': '20', 'job': 'graphic', 'nationality': 'palastine' },
    //     { 'name': 'rahma', 'age': '19', 'job': 'UI', 'nationality': 'palastine' },
    //     { 'name': 'noura', 'age': '21', 'job': 'designer', 'nationality': 'palastine' }
    // ];
 
    const delHanlder = (event, selectedID) => {
        // const deleteOpr = state.filter((el, indx) => indx !== clickedIdx);
        // setState(deleteOpr);
        setState((prevState) => {
           return prevState.filter((el) => el.id !== selectedID);
        })
    }

    // const testHandler = () => {
    //     console.log(inputEl.current.value)
    // }

    const onclick = () => {
        inputEl.current.focus();
    }

    const filterName = (name) => {
        console.log(name);
    }

    // const toggleHandler = () => {
    //     setCardToggle(!cardToggle);
    // }

    return (
        <Fragment>
            {/* <div>wrapper
                <h1 style={{ color: 'greenyellow', marginTop: "10px" }}> front end</h1>
                <h1 style={oStyle}>front end</h1>
                <h2 style={oStyle}> {myName === 'ahmad' ? 'hi ahmad' : 'hello'}</h2>
                <div>names : {names.map((el) => (<p> {el} </p>))} </div>
            </div> */}

            <Model/>
            <div className='contain'>/ 
                <h1>developers</h1>
                <button style={{ marginBottom: '20px' }}  onClick={()=> setCardToggle(!cardToggle)}>{cardToggle ? 'hide name': 'show names'} </button>
                    
                <div className={cardToggle ? 'show' : 'hide'}>
                    <Filter filteration={filterName} />
                    <CardList namesList={state} type='men' deleteFun={delHanlder} />                      {/* namesList => variable name*/}
                </div>
                
                <div style={{margin:'20px'}}>
                    <input
                        type='text'
                        placeholder='for test ref'
                        ref={inputEl}
                        // onChange={testHandler}
                        onChange={() => console.log(inputEl.current.value)}/>           { /* [ {testHandler()} => () to 'immdetly invoke' = أِشتغل على طول ] , [  {() => testHandlerO()} => to stop immediatly invoke , add () in case pass parameter  ]   */}
                    <button onClick={onclick}>test click</button>
                </div>
                

                 {/* <h1>designers</h1>
                <Card namesList={ designers } type='women'/> */}
             </div>

            



            
            {/*  */}
            {/* revision => [destructing , state , ref , filtering , polish ,  ] */}

        </Fragment>
    );
};

export default App;