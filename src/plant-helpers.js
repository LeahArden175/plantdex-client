export const findPlant = (plantInfo=[], plantId) =>
  plantInfo.find(plant => plant.id === plantId)