import React from 'react'; 

const Notifications = (props) => {
    const {notifications} = props; 
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h4> Notifications </h4>
                    <div className='card-content'>
                        <ul className='notification'>
                           {notifications && notifications.map(item =>{
                                return (
                                  <li key={item.id}>
                                     <span className="text-danger">{item.user}:</span>
                                  <div> 
                                      <span>{item.content}</span>
                                 </div>
                                  
                                  </li>
                                );
                           })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Notifications; 