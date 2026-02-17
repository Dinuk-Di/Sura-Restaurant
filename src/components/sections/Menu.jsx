import React from 'react';
import './Menu.css';

const menuItems = [
    {
        id: 1,
        name: "Chef's Special Fried Rice",
        description: "Fragrant basmati rice tossed with garden-fresh vegetables, choice of succulent meats, and our secret blend of spices.",
        price: "$18.00",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80\u0026w=1025\u0026auto=format\u0026fit=crop"
    },
    {
        id: 2,
        name: "Creamy Cheese Kottu",
        description: "Finely shredded flatbread stir-fried with rich creamy cheese sauce, aromatic spices, and tender chicken or beef.",
        price: "$22.00",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80\u0026w=1170\u0026auto=format\u0026fit=crop"
    },
    {
        id: 3,
        name: "Signature Butter Parota",
        description: "Flaky, layered handmade flatbread served with our signature slow-cooked dhal curry and coconut sambol.",
        price: "$12.00",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80\u0026w=1170\u0026auto=format\u0026fit=crop"
    },
    {
        id: 4,
        name: "Authentic Egg Rotti",
        description: "Traditional Sri Lankan pancake filled with local farm eggs, onions, and green chilies, served with spicy gravy.",
        price: "$14.00",
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80\u0026w=1074\u0026auto=format\u0026fit=crop"
    }
];

const Menu = () => {
    return (
        <section id="menu" className="menu">
            <div className="menu-header">
                <h4 className="section-subtitle">Exquisite Flavors</h4>
                <h2 className="section-title">Our Signature Menu</h2>
                <div className="section-line"></div>
            </div>
            <div className="menu-grid">
                {menuItems.map(item => (
                    <div key={item.id} className="menu-card">
                        <div className="menu-img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="menu-info">
                            <div className="menu-title-row">
                                <h3>{item.name}</h3>
                                <span className="menu-price">{item.price}</span>
                            </div>
                            <p className="menu-desc">{item.description}</p>
                            <button className="menu-btn">Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="menu-footer">
                <a href="#" className="view-all">View Complete Menu</a>
            </div>
        </section>
    );
};

export default Menu;
