const mockSchema = require('./mocks.js');
const parseSchema = require('./parseSchema.js');

describe('parseSchema', () => {
    it('should return a valid result based on the provided schema', () => {
      const result = parseSchema(mockSchema);

      const expectedParsedResult = {
        productId: expect.any(Number),
        productName: expect.any(String),
        price: expect.any(Number),
        tags: expect.arrayContaining([expect.any(Number)]),
        dimensions: expect.objectContaining({
          length: expect.any(Number),
          width: expect.any(Number),
          height: expect.any(Number),
        }),
      };
  
      expect(result).toEqual(expectedParsedResult);
    });
});