import React, { useState } from 'react';

import Card from './Components/card';
import Popup from './Components/popup';

function App() {
    const [info, setInfo] = useState([
        {id: 1, title: 'html', desc: 'HTML not programming language is scripting to make web'},
        {id: 2, title: 'css', desc: 'CSS is same like HTML, is scripting to styling web design'},
        {id: 3, title: 'javascript', desc: 'Javascript is programming language to make website dynamic'},
    ]);

    
    

    return(  
        <React.Fragment>
            <main id='main-component'>
                <div id="card-parent" className='position-absolute w-100 vh-100 d-flex justify-content-around align-items-center'>
                    {info.map(item => 
                        <Card key={item.id} 
                            title={item.title}
                            open={show}
                            where={item.visible}
                        />
                    )}
                </div>
                
            </main>
        </React.Fragment>
    );
}

export default App;