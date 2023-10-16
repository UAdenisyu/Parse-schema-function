const mockSchema = require('./mocks.js');

const parseSchema = (schema) => {
    const randomFiller = (type) => {
        const variants = {
            integer: Math.floor(Math.random() * 100),
            number: Math.floor(Math.random() * 100),
            string: (Math.random()).toString(),
            array: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 10), Math.floor(Math.random())],
        }
        return variants[type]
    }

    return ({
        productId: randomFiller(schema.properties.productId.type),
        productName: randomFiller(schema.properties.productName.type),
        price: randomFiller(schema.properties.price.type),
        tags: randomFiller(schema.properties.tags.type),
        dimensions: {
            length: randomFiller(schema.properties.dimensions.properties.length.type),
            width: randomFiller(schema.properties.dimensions.properties.width.type),
            height: randomFiller(schema.properties.dimensions.properties.height.type),
        }
    })
}

console.log(parseSchema(mockSchema));
module.exports = parseSchema;