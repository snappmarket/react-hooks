import * as NumberHelpers from '../index';

afterEach(() => {
  jest.clearAllMocks();
});
describe('NumberHelpers', () => {
  describe('persianNumber', () => {
    it('should convert english number to persian', () => {
      const payload = '0123456789';
      const expected = '۰۱۲۳۴۵۶۷۸۹';
      expect(NumberHelpers.persianNumber(payload)).toEqual(expected);
    });
  });
  describe('englishNumber', () => {
    it('should convert arabic-extended digits to english digits', () => {
      const payload = '٠١٢٣٤٥٦٧٨٩';
      const expected = '0123456789';
      expect(NumberHelpers.englishNumber(payload)).toEqual(expected);
    });
    it('should convert arabic-indic digits to english digits', () => {
      const payload = '۰۱۲۳۴۵۶۷۸۹';
      const expected = '0123456789';
      expect(NumberHelpers.englishNumber(payload)).toEqual(expected);
    });
  });

  describe('generateKey ', () => {
    it('should generate a key using a random number and timestamp', () => {
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 1;
      global.Math = mockMath;
      const randomNumber = 10001;

      const now = 1466424490000;
      const mockDate = new Date(now);
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
      const timestamp = Math.floor(now / 1000);

      expect(NumberHelpers.generateKey()).toEqual(
        `${timestamp}${randomNumber}`,
      );
    });
  });

  describe('cellphoneValidate', () => {
    it('should pass the cellphone pattern', () => {
      const cellphone = '09121234567';
      expect(!!cellphone.match(NumberHelpers.cellphoneValidate())).toEqual(
        true,
      );
    });
    it('should not pass the cellphone pattern', () => {
      const cellphone = '0123456';
      expect(!!cellphone.match(NumberHelpers.cellphoneValidate())).toEqual(
        false,
      );
    });
  });
  describe('currencyPrice', () => {
    it('should apply currency format to a number', () => {
    
      const number = '1000000';
      const price = '۱,۰۰۰,۰۰۰ تومان';
     
      expect(NumberHelpers.currencyPrice(number)).toEqual(price);
    });
    it('it should not show unit after price when hasUnit get false value', (hasUnit=false) => {
      
      const price = '۱,۰۰۰,۰۰۰';
     
      expect(NumberHelpers.currencyPrice(price,hasUnit)).toEqual('۱,۰۰۰,۰۰۰ ');
    });
    
    
  });
  
});
