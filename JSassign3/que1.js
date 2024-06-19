// Array of states in India
const statesInIndia = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];
  
  // Function to check if a string starts with a vowel
  const startsWithVowel = (str) => /^[aeiou]/i.test(str);
  
  // Filter out states starting with vowels
  const filteredStates = statesInIndia.filter(state => !startsWithVowel(state));
  
  console.log(filteredStates);
  
//   output
// ['Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala',  'Madhya Pradesh','Maharashtra', 'Manipur','Meghalaya','Mizoram','Nagaland','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','West Bengal']