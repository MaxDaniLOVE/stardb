const setStyleForImage = (type) => {
  switch (type) {
    case 'people':
      return {
        height: '230px',
        width: '180px',
      }
    case 'planet':
      return {
        height: '230px',
        width: '230px',
      }
    case 'starship':
      return {
        height: '200px',
        width: '250px',
      }
    default:
      break;
  }
}

export default setStyleForImage;