// data.js
const data = Array.from({ length: 276 }, (_, index) => ({
    id: index + 1,
    name: 'John Doe',
    email: 'example@email.com',
    posName: 'POS : XYZ Name',
    pospCode: '124640e',
    policyType: 'Motor',
    policyNumber: '000001',
    newPolicyNumber: '111111',
    expiryDate: '05/APR/2024',
    status: 'Not Renewed',
    followUpDate: '04/APR/2024',
  }));
  
  export default data;
  