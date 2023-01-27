const getData = async () => {
    const response = await fetch('https://files.rerotor.ru/rerotor/products.json');
    return await response.json();
}
export default getData;