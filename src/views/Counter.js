import React from 'react';

function Counter({
    onIncrement,
    onDecrement,
    counter,
}) {
    return (
        <div className="card" style={{width: "18rem", margin:"auto", marginTop:"2rem"}}>
            <div className="card-body" >
                <h5 className="card-title">Clic Counter</h5>
                <p>Vous avez cliqué {counter} fois</p>
                <div className="row">
                <div className="col-sm">
                   <button className="btn btn-primary" onClick={onDecrement} disabled={counter === 0} >
                         Diminuer
                    </button>
                </div>
                 <div className="col-sm">
                     <button className="btn btn-primary" onClick={onIncrement}>
                         Ajouter
                     </button>
                 </div>
             </div>
            </div>
        </div>
    );
};

export default Counter;