export default function getLandlordApiUrl() {
  const baseUrl = window.location.host;
  if (baseUrl === "localhost:3000") {
    return 'http://localhost:3001';
  }
  return 'https://omaha-landlords.herokuapp.com';
}
