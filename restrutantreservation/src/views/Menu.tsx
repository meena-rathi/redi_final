import React, { useState } from 'react';
import { menuDataLunch, menuDataDinner } from '../config/Data';

function Menu() {
    const [activeTab,setActiveTab] = useState('lunch');
    const handleTabChange = (click: any) =>{
        setActiveTab(click);
    }
    return (
        <div id="menu"> 
            <ul className="nav nav-tabs mb-3 justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${activeTab === 'lunch' ? 'active' : ''}`} id="lunch-tab" onClick={() => handleTabChange('lunch')} type="button" role="tab" aria-controls="lunch-tab-pane" aria-selected={activeTab === 'lunch' ? 'true' : 'false'}>Lunch</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${activeTab === 'dinner' ? 'active' : ''}`} id="lunch-tab" onClick={() => handleTabChange('dinner')} type="button" role="tab" aria-controls="lunch-tab-pane" aria-selected={activeTab === 'dinner' ? 'true' : 'false'}>Dinner</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className={`tab-pane fade ${activeTab === 'lunch' ? 'show active' : ''}`} id="lunch-tab-pane" role="tabpanel" aria-labelledby="lunch-tab">
                <div className="container">
                    <div className="row">
                        {menuDataLunch.map((menuItem, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                                <div className="menu-item">
                                    <img className="menu-item-image" src={menuItem.image} alt="menu item" />
                                    <div className="description"><p>{menuItem.description}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <div className="tab-content" id="myTabContent">
            <div className={`tab-pane fade ${activeTab === 'dinner' ? 'show active' : ''}`} id="dinner-tab-pane" role="tabpanel" aria-labelledby="dinner-tab">
                <div className="container">
                    <div className="row">
                        {menuDataDinner.map((menuItem, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                                <div className="menu-item">
                                    <img className="menu-item-image" src={menuItem.image} alt="menu item" />
                                    <div className="description"><p>{menuItem.description}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div> 
    );
}

export default Menu;