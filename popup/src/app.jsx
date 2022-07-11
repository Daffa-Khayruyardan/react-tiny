import React, { useState } from 'react';

import Card from './Components/card';
import Popup from './Components/popup';

function App() {
    const [info, setInfo] = useState([
        {id: 1, title: 'html', desc: 'HTML not programming language is scripting to make web'},
        {id: 2, title: 'css', desc: 'CSS is same like HTML, is scripting to styling web design'},
        {id: 3, title: 'javascript', desc: 'Javascript is programming language to make website dynamic'},
    ]);

    const [popUp, setPopUp] = useState({
        title: '',
        desc: '',
        visible: false 
    });

    const show = (title, desc) => {
        if(popUp.visible === false) {
            setPopUp({
                title: title,
                desc: desc,
                visible: true
            });
        }else {
            setPopUp({
                title: '',
                desc: '',
                visible: false
            })
        }
    }

    let popup_screen;

    if(popUp.visible === true) {
        popup_screen = (
            <div id='popup-parent' className='position-absolute d-flex h-100 w-100 justify-content-center align-items-center'>
                <Popup title={popUp.title}
                    desc={popUp.desc}
                    close={show}
                />
            </div>
        );
    }else {
        popup_screen = '';
    }

    return(  
        <React.Fragment>
            <main id='main-component'>
                <div id="card-parent" className='position-absolute w-100 vh-100 d-flex justify-content-around align-items-center'>
                    {info.map(item => 
                        <Card key={item.id} 
                            title={item.title}
                            desc={item.desc}
                            open={show}
                        />
                    )}
                </div>
                {popup_screen}
            </main>
        </React.Fragment>
    );
}

export default App;