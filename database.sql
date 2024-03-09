CREATE TABLE shops(
    id SERIAL PRIMARY KEY,
    name VARCHAR(256)    
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    price INTEGER,
    shop_id INTEGER,
    FOREIGN KEY (shop_id) REFERENCES shops(id)
);
